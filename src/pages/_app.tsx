import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { theme } from "../../styles/theme";
import { CountryProvider } from "../context/countryContext";
import { ThemeProvider } from "../context/themeContext";
import { queryClient } from "../services/queryClient";
import {ReactQueryDevtools} from "react-query/devtools"
import { Header } from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CountryProvider>
        <ChakraProvider theme={theme}>
          <ThemeProvider>
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </ChakraProvider>
      </CountryProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
