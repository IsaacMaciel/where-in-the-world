import { VStack, Button, Image, Flex, Text, Spinner } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useQuery } from "react-query";
import { Country, useDataCountry } from "../../context/countryContext";
import { useEffect } from "react";
import { useState } from "react";
import { SpinnerLoading } from "../../components/SpinnerLoading";
import { toast } from "react-toastify";
import { handlePrefetchCountry } from "../../utils/prefetchCountry";

type Languagues = {
  name: string;
};

type Currencies = {
  name: string;
};

type CountryMoreInfo = {
  nativeName: string;
  subregion: string;
  currencies: Currencies[];
  topLevelDomain: string[];
  languages: Languagues[];
  borders: string[];
} & Country;

type Borders = {
  name: string;
};

export default function country() {
  const [country, setCountry] = useState<CountryMoreInfo>();
  const [borders, setBorders] = useState<Borders[]>();
  const { query } = useRouter();
  const countryName = query.country as string;

  const getCountry = () => {
    return useQuery(
      ["countryInfo", countryName],
      async () => {
        if (!countryName) return;
        const { data } = await api.get(`/name/${countryName}`, {
          params: {
            fullText: true,
          },
        });
        return data;
      },
      {
        staleTime: Infinity,
      }
    );
  };

  const getBordersName = async (borders: string[]) => {
    if (borders.length === 0) {
      setBorders([{ name: "Not have" }]);
    }
    try {
      const stringBorders = getStringBorders(borders);
      const { data } = await api.get(`/alpha?codes=${stringBorders}`);
      setBorders(data);
      toast.success("SUCESSO!");
    } catch (error) {
      toast.error("Network Error");
    }
  };
  const getStringBorders = (borders: string[]) => {
    const stringBorders = borders.reduce((border, stringAcumulator, index) => {
      if (index === 0) return `${border}` + stringAcumulator;
      return `${border}` + ";" + stringAcumulator;
    }, "");
    return stringBorders;
  };

  const { isLoading, data } = getCountry();

  useEffect(() => {
    const countryFormatted = data?.map((country) => {
      return {
        ...country,
        population: country.population.toLocaleString("pt-BR"),
      };
    });

    if (countryFormatted) {
      setCountry(countryFormatted[0]);
      getBordersName(countryFormatted[0].borders);
    }
  }, [data]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  return (
    <VStack spacing="60px" alignItems="unset" paddingBottom="30px">
      <Header />
      <VStack
        maxW="1440px"
        spacing="60px"
        alignItems="unset"
        marginX="auto"
        paddingX="40px"
      >
        <Link href="/">
          <Button
            leftIcon={<BsArrowLeft fontSize="20px" />}
            width="120px"
            boxShadow="base"
          >
            Back
          </Button>
        </Link>
        <Flex alignItems="center">
          <Image
            maxH="550px"
            maxWidth="550px"
            src={country?.flag}
            marginRight="100px"
          />
          <Flex flexDir="column" flexWrap="wrap" maxWidth="550px" flex="1">
            <Text fontWeight="bold" fontSize="24px" marginBottom="20px">
              {country?.name}
            </Text>
            <Flex justifyContent="space-between" marginBottom="60px">
              <VStack spacing="5px" alignItems="unset">
                <Text>
                  <b>Native Name</b>: {country?.nativeName}
                </Text>
                <Text>
                  <b>Population</b>: {country?.population}
                </Text>
                <Text>
                  <b>Region</b>: {country?.region}
                </Text>
                <Text>
                  <b>Sub Region</b>: {country?.subregion}
                </Text>
                <Text>
                  <b>Capital</b>: {country?.capital}
                </Text>
              </VStack>
              <VStack spacing="5px" alignItems="unset">
                <Text>
                  <b>Top Level Domain</b>:{" "}
                  {country?.topLevelDomain.map((topLevel) => `${topLevel} `)}
                </Text>
                <Text>
                  <b>Currencies</b>:{" "}
                  {country?.currencies.map((currency) => `${currency.name}, `)}
                </Text>
                <Text>
                  <b>Languages</b>:{" "}
                  {country?.languages.map((language) => `${language.name}, `)}
                </Text>
              </VStack>
            </Flex>
            <Flex flexWrap="wrap">
              <Text marginRight="20px" lineHeight="32px" fontWeight="bold">
                Border Countries:
              </Text>
              {!borders ? (
                <Spinner />
              ) : (
                borders.map((country) => {
                  return country.name !== "Not have" ? (
                    <Link href={`/info/${country.name}`}>
                      <Button
                        key={country.name}
                        boxShadow="base"
                        size="sm"
                        marginRight="10px"
                        marginBottom="10px"
                        onMouseEnter={() => handlePrefetchCountry(country.name)}
                      >
                        {country.name}
                      </Button>
                    </Link>
                  ) : (
                    <Text lineHeight="32px">Not have</Text>
                  );
                })
              )}
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </VStack>
  );
}
