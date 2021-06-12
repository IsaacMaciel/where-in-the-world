import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: 'Nunito'
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#fafafa", "#202c37")(props),
      },
    }),
  },
});
