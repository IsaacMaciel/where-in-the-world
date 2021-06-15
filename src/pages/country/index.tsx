import {
  VStack,
  HStack,
  Button,
  Image,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { BsArrowLeft } from "react-icons/bs";

const countryInfo = {
  name: "Afghanistan",
  nativeName: "افغانستان",
  region: "Asia",
  population: "27.657.145",
  subRegion: "Southern Asia",
  languages: ["Pashto", "Uzbek"],
  topLevelDomain: [".af"],
  borders: ["IRN", "PAK", "TKM", "UZB", "TJK"],
  currencies: ["Real", "Libra", "Euro"],
  capital: "Kabul",
  flag: "https://restcountries.eu/data/afg.svg",
};

export default function country() {
  return (
    <VStack spacing="40px" alignItems="unset">
      <Header />
      <VStack
        maxW="1440px"
        spacing="40px"
        alignItems="unset"
        marginX="auto"
        paddingX="40px"
      >
        <Button
          leftIcon={<BsArrowLeft fontSize="20px" />}
          width="120px"
          boxShadow="base"
        >
          Back
        </Button>
        <Flex justifyContent="space-around" alignItems="center">
          <Image maxH="500px" maxWidth="500px" src={countryInfo.flag} />
          <Box>
            <Text fontWeight="bold" fontSize="24px" marginBottom="20px">
              {countryInfo.name}
            </Text>
            <Flex justifyContent="space-between" marginBottom="40px">
              <Box>
                <Text>
                  <b>Native Name</b>: {countryInfo.nativeName}
                </Text>
                <Text>
                  <b>Population</b>: {countryInfo.population}
                </Text>
                <Text>
                  <b>Region</b>: {countryInfo.region}
                </Text>
                <Text>
                  <b>Sub Region</b>: {countryInfo.subRegion}
                </Text>
                <Text>
                  <b>Capital</b>: {countryInfo.capital}
                </Text>
              </Box>
              <Box>
                <Text>
                  <b>Top Level Domain</b>:{" "}
                  {countryInfo.topLevelDomain.map((topLevel) => `${topLevel} `)}
                </Text>
                <Text>
                  <b>Currencies</b>:{" "}
                  {countryInfo.currencies.map((currency) => `${currency}, `)}
                </Text>
                <Text>
                  <b>Languages</b>:{" "}
                  {countryInfo.languages.map((language) => `${language}, `)}
                </Text>
              </Box>
            </Flex>
            <Flex alignItems="center">
              <Text marginRight="20px">Border Countries: </Text>
              <HStack spacing="10px">
                {countryInfo.borders.map((country) => (
                  <Button key={country} boxShadow="base" size="sm">
                    {country}
                  </Button>
                ))}
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
}
