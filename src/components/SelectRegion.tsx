import { Select, useBreakpointValue } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useLayout } from "../context/themeContext";

interface SelectRegionProps {
  handleSelectRegion: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectRegion = ({ handleSelectRegion }: SelectRegionProps) => {
  const { bg, isMobile } = useLayout();

  return (
    <Select
      bgColor={bg}
      maxW="180px"
      marginTop={["30px", "unset"]}
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
