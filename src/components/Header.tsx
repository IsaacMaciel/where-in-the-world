import { Flex, Text, Button } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useLayout } from "../context/themeContext";

export const Header = () => {
  const { bg, isMobile, colorMode, toggleColorMode } = useLayout();
  const icon = colorMode === "dark" ? <RiSunLine /> : <RiMoonLine />;

  return (
    <Flex
      bgColor={bg}
      justifyContent="space-between"
      w="100%"
      padding={["20px 20px", "20px 40px"]}
      marginX="auto"
      marginBottom={["20px", "40px"]}
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize={["16px", "24px"]}>
        Where in the world ?
      </Text>
      <Button
        size={isMobile ? "sm" : "md"}
        onClick={toggleColorMode}
        variant="outline"
        leftIcon={icon}
      >
        {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Flex>
  );
};

