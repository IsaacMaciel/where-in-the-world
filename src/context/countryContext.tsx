import { ReactNode, useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";
import { api } from "../services/api";
import { storage } from "../utils/localStorage";

export type Country = {
  name: string;
  capital: string;
  flag: string;
  region: string;
  population: string;
};

type CountryProviderProps = {
  children: ReactNode;
};

type CountryContextData = {
  data: Country[];
  isLoading: boolean;
  error: unknown;
  filterByRegion: (region: string) => void;
  filterByName: (name: string) => void;
};

const CountryContext = createContext({} as CountryContextData);

const getCountries = () => {
  return useQuery(
    ["allCountries"],
    async () => {
      const { data } = await api.get("/all");
      return data;
    },
    {
      staleTime: Infinity,
    }
  );
};

export const CountryProvider = ({ children }: CountryProviderProps) => {
  const { data, isLoading, error } = getCountries();
  const [originalData, setOriginalData] = useState<Country[]>();
  const [filteredData, setFilteredData] = useState<Country[]>();

  useEffect(() => {
    const formattedData = data?.map((country) => {
      return {
        ...country,
        population: country.population.toLocaleString("pt-BR"),
      };
    });
    if(formattedData) {
      storage.storeData(storage.getLocalStorageKey(), formattedData);
      setOriginalData(formattedData);
      setFilteredData(formattedData);
    }
  }, [data]);

  const filterByRegion = (region: string) => {
    if (!region) {
      setFilteredData(originalData);
      return;
    }
    const countriesFiltered = originalData.filter(
      (country) => country.region === region
    );
    setFilteredData(countriesFiltered);
  };

  const filterByName = (name: string) => {
    if (filteredData) {
      const countriesFiltered = originalData.filter((country) =>
        country.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );
      setFilteredData(countriesFiltered);
    }
  };

  return (
    <CountryContext.Provider
      value={{
        data: filteredData,
        isLoading,
        error,
        filterByName,
        filterByRegion,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useDataCountry = () => {
  const ctx = useContext(CountryContext);
  return ctx;
};
