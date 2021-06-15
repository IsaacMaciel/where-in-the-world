import { SimpleGrid } from "@chakra-ui/react";
import { CardCountry } from "./CardCountry";

type Country = {
  name: string;
  capital: string;
  flag: string;
  region: string;
  population: string;
};

interface CardCountryLisProps {
  data: Country[];
}

export const CardCountryList = ({ data }: CardCountryLisProps) => {
  return (
    <SimpleGrid
      w="100%"
      minChildWidth="280px"
      templateRows="4"
      spacing={["20px", "40px"]}
      paddingBottom="30px"
    >
      {data?.map((country) => (
        <CardCountry
          name={country.name}
          capital={country.capital}
          flag={country.flag}
          region={country.region}
          population={country.population}
        />
      ))}

    </SimpleGrid>
  );
};
