import { useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { color } from "../../styles/colorsTheme";

type ThemeProviderProps = {
  children: ReactNode
}

type ThemeProviderData = {
  bg: string
}

const ThemeContext = createContext({} as ThemeProviderData)


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const bg = useColorModeValue("#ffffff", color.dark.darkBlue);

  return (
    <ThemeContext.Provider value={{bg}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  return ctx
}