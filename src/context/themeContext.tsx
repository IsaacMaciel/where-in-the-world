import { useBreakpointValue, useColorModeValue,useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { color } from "../../styles/colorsTheme";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeProviderData = {
  bg: string;
  colorText: string;
  isMobile: boolean;
  colorMode: "light" | "dark"
  toggleColorMode: () => void;
};

const ThemeContext = createContext({} as ThemeProviderData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const bg = useColorModeValue("#ffffff", color.dark.darkBlue);
  const colorText = useColorModeValue("black", "#fff");
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <ThemeContext.Provider value={{ bg, colorText, isMobile,colorMode,toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useLayout = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};
