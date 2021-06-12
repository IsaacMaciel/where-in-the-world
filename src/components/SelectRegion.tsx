import { Select, useColorModeValue, Box } from "@chakra-ui/react";
import { color } from "../../styles/colorsTheme";
import { useTheme } from "../context/themeContext";

export const SelectRegion = () => {
  const { bg } = useTheme();
  return (
    <Select bgColor={bg} maxW="180px" placeholder="Filter by Region">
      <option>África</option>
      <option>América</option>
      <option>Ásia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </Select>
  );
};
