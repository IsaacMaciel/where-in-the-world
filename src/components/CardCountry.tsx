import { Box, Image, Flex, Text, Avatar, useColorModeValue } from "@chakra-ui/react";
import { color } from "../../styles/colorsTheme";

export const CardCountry = () => {
  const bg = useColorModeValue("#ffffff", color.dark.darkBlue);

  return (
    <Box width="280px" height="330px" bgColor={bg} boxShadow="base">
      <Image
        objectFit="cover"
        width="100%"
        height="173px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vMiSwZ9r9LWETwHOUQWIVAidUpT4ZKL29w&usqp=CAU"
      />
      <Flex  flexDir="column" px="20px" flex="1">
        <Box marginTop="15px">
          <Text fontSize="20px" fontWeight="bold" marginBottom="10px">
            Brazil
          </Text>
        </Box>
        <Box>
            <Text> <b>Population:</b> 206.135.893</Text>
            <Text><b>Region:</b> Americas</Text>
            <Text><b>Capital:</b> Brasília</Text>
        </Box>
      </Flex>
    </Box>
  );
};
