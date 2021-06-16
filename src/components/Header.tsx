import {
  useColorMode,
  Flex,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "../context/themeContext";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })
  const icon = colorMode === "dark" ? <RiSunLine /> : <RiMoonLine />;
  const { bg } = useTheme();
  

  return (
    <Flex
      bgColor={bg}
      justifyContent="space-between"
      w="100%"
      padding={["20px 20px","20px 40px"]}
      marginX="auto"
      marginBottom={["20px","40px"]}
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize={["16px","24px"]}>
        Where in the world ?
      </Text>
      <Button size={isMobile ? 'sm' : 'md'}   onClick={toggleColorMode} variant="outline" leftIcon={icon}>
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Flex>
  );
};

export { Header };
