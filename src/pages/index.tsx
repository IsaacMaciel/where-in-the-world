import { Header } from "../components/Header";
import { SearchCountry } from "../components/SearchCountry";
import { VStack, Flex, Box, useTheme } from "@chakra-ui/react";
import { SelectRegion } from "../components/SelectRegion";
import { CardCountryList } from "../components/CardCountryList";

export default function Home() {
  return (
    <VStack spacing="40px" alignItems="unset">
      <Header />
      <Box w="100%">
        <VStack maxW="1440px" spacing="40px"  alignItems="unset" marginX="auto" paddingX="40px">
          <Flex justifyContent="space-between" alignItems="center">
            <SearchCountry />
            <SelectRegion />
          </Flex>
          <CardCountryList />
        </VStack>
      </Box>
    </VStack>
  );
}
