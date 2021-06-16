import { Select, useBreakpointValue } from "@chakra-ui/react";
import { useDataCountry } from "../context/countryContext";
import { useTheme } from "../context/themeContext";

export const SelectRegion = () => {
  const { bg } = useTheme();
  const { filterByRegion } = useDataCountry();

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  const handleSelectRegion = (event) => {
      filterByRegion(event.target.value);
  };
  return (
    <Select
      bgColor={bg}
      maxW="180px"
      marginTop={["30px","unset"]}
      height="40px"
      placeholder="Filter by Region"
      onChange={handleSelectRegion}
      size={isMobile ? "sm" : "md"}
      
      
    >
      <option value="Africa">África</option>
      <option value="Americas">América</option>
      <option value="Asia">Ásia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
};
