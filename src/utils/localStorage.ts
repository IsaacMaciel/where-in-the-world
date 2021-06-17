import { Country } from "../context/countryContext";

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

interface ILocalStorageApp {
  getCountryByLocalStorage: (countryName: string) => CountryMoreInfo;
  getLocalStorageKey: () => string;
  storeData: (localStorageKey: string, data: any) => void;
  isLocalStorage: () => boolean;
}

class LocalStorageApp implements ILocalStorageApp {
  private localStorageKey: string;
  constructor() {
    this.localStorageKey = "@WhereInTheWorld:allCountries";
  }

  getCountryByLocalStorage = (countryName: string): CountryMoreInfo => {
    if (!countryName) return;
    const allCountriesString = localStorage.getItem(this.localStorageKey);
    const allCountries = JSON.parse(allCountriesString);
    const countrySelected = allCountries.find(
      (country) => country.name.toLowerCase() === countryName.toLowerCase()
    );

    return countrySelected;
  };

  getLocalStorageKey = (): string => {
    return this.localStorageKey;
  };

  isLocalStorage = () => {
    return !!localStorage.getItem(this.localStorageKey);
  };

  storeData = (localStorageKey: string, data: any) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };
}

const storage = new LocalStorageApp();

export { storage };
