import {
  useColorMode,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "../context/themeContext";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "dark" ? <RiSunLine /> : <RiMoonLine />;
  const { bg } = useTheme();

  return (
    <Flex
      bgColor={bg}
      justifyContent="space-between"
      w="100%"
      padding="20px 40px"
      marginX="auto"
    >
      <Text fontWeight="bold" fontSize="24px">
        Where in the world ?
      </Text>
      <Button onClick={toggleColorMode} variant="outline" leftIcon={icon}>
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Flex>
  );
};

export { Header };
