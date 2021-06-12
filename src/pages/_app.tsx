import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "../context/themeContext";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
