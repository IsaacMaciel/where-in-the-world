import { Flex, Input, Icon, useColorModeValue } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { color } from "../../styles/colorsTheme";

export const SearchCountry = () => {
  const bg = useColorModeValue("#ffffff", color.dark.darkBlue);
  return (
    <Flex
      as="label"
      maxW="400px"
      width="100%"
      alignItems="center"
      py="2"
      px="6"
      borderRadius="base"
      bgColor={bg}
      boxShadow="base"
    >
      <Icon as={FiSearch} />
      <Input placeholder="Search for a country..." variant="unstyled" ml="4" />
    </Flex>
  );
};
