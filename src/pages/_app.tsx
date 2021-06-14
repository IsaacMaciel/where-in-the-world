import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { theme } from "../../styles/theme";
import { CountryProvider } from "../context/countryContext";
import { ThemeProvider } from "../context/themeContext";
import { queryClient } from "../services/queryClient";
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CountryProvider>
        <ChakraProvider theme={theme}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </ChakraProvider>
      </CountryProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
