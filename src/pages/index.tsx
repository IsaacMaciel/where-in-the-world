import { Header } from "../components/Header";
import { SearchCountry } from "../components/SearchCountry";
import { VStack, Flex, Box } from "@chakra-ui/react";
import { SelectRegion } from "../components/SelectRegion";
import { CardCountryList } from "../components/CardCountryList";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { useDataCountry } from "../context/countryContext";

export default function Home() {
  const {data,isLoading} = useDataCountry()
 
  if (isLoading)  return <SpinnerLoading />

  return (
    <VStack spacing="40px" alignItems="unset">
      <Header />
      <Box w="100%">
        <VStack
          maxW="1440px"
          spacing="40px"
          alignItems="unset"
          marginX="auto"
          paddingX="40px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <SearchCountry />
            <SelectRegion />
          </Flex>
          <CardCountryList data={data} />
        </VStack>
      </Box>
    </VStack>
  );
}
