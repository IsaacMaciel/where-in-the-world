import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "../context/themeContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { queryClient } from "../services/queryClient";
import { api } from "../services/api";
import { handlePrefetchCountry } from "../utils/prefetchCountry";



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
  const { bg } = useTheme();

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
        onMouseEnter={() => handlePrefetchCountry(name)}
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
