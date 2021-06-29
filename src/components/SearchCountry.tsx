import { Flex, Input, Icon, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, ChangeEventHandler } from "react";
import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useDataCountry } from "../context/countryContext";
import { useLayout } from "../context/themeContext";

interface SearchCountryProps {
  handleSearch:(event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchCountry = ({ handleSearch}: SearchCountryProps) => {
  const { bg, colorText } = useLayout();

  return (
    <Flex
      as="label"
      maxW="400px"
      width="100%"
      alignItems="center"
      py="3"
      px="6"
      borderRadius="base"
      bgColor={bg}
      boxShadow="base"
    >
      <Icon as={FiSearch} />
      <Input
        placeholder="Search for a country..."
        _placeholder={{ color: colorText, fontSize: "14px" }}
        variant="unstyled"
        ml="4"
        onChange={handleSearch}
      />
    </Flex>
  );
};
