import { render, RenderResult } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../styles/theme";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ChakraProvider theme={theme}>{children}</ChakraProvider>);
