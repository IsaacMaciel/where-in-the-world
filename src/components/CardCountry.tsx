import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { useLayout } from "../context/themeContext";
import Link from "next/link";

type Country = {
  name: string;
  capital: string;
  flag: string;
  region: string;
  population: string;
};

export const CardCountry = ({
  name,
  capital,
  flag,
  region,
  population,
}: Country) => {
  const { bg } = useLayout();

  return (
    <Link  href={`/info/${name}`}>
      <Box
        width="280px"
        height="auto"
        cursor="pointer"
        paddingBottom="20px"
        margin={["0 auto","unset"]}
        bgColor={bg}
        boxShadow="base"
      >
        <Image objectFit="cover" width="100%" height="173px" src={flag} />
        <Flex flexDir="column" px="20px" flex="1">
          <Box marginTop="15px">
            <Text fontSize="20px" fontWeight="bold" marginBottom="10px">
              {name}
            </Text>
          </Box>
          <Box>
            <Text>
              {" "}
              <b>Population:</b> {population}
            </Text>
            <Text>
              <b>Region:</b> {region}
            </Text>
            <Text>
              <b>Capital:</b> {capital}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};
