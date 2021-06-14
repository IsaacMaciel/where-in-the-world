import { Select } from "@chakra-ui/react";
import { useDataCountry } from "../context/countryContext";
import { useTheme } from "../context/themeContext";

export const SelectRegion = () => {
  const { bg } = useTheme();
  const { filterByRegion } = useDataCountry();

  const handleSelectRegion = (event) => {
      filterByRegion(event.target.value);
  };
  return (
    <Select
      bgColor={bg}
      maxW="180px"
      placeholder="Filter by Region"
      onChange={handleSelectRegion}
    >
      <option value="Africa">África</option>
      <option value="Americas">América</option>
      <option value="Asia">Ásia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </Select>
  );
};
