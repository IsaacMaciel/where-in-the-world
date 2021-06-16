import { SearchCountry } from "../components/SearchCountry";
import { VStack, Flex, Box, theme } from "@chakra-ui/react";
import { SelectRegion } from "../components/SelectRegion";
import { CardCountryList } from "../components/CardCountryList";
import { SpinnerLoading } from "../components/SpinnerLoading";
import { useDataCountry } from "../context/countryContext";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading, filterByName } = useDataCountry();
  if (isLoading) return <SpinnerLoading text="Loading data..." />;

  useEffect(() => {
    filterByName("");
  }, []);

  return (
    <VStack spacing="40px" alignItems="unset">
      <Box w="100%">
        <VStack
          maxW="1440px"
          spacing="40px"
          alignItems="unset"
          marginX="auto"
          paddingX={["20px", "40px"]}
        >
          <Flex
            justifyContent={"space-between"}
            flexDir={["column", "row"]}
            alignItems={["flex-start", "center"]}
          >
            <SearchCountry />
            <SelectRegion />
          </Flex>
          <CardCountryList data={data} />
        </VStack>
      </Box>
    </VStack>
  );
}
