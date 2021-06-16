import { Flex, Spinner,Text } from "@chakra-ui/react";

interface SpinnerLoadingProps  {
  text?: string;
}

export const SpinnerLoading = ({text = ''}:SpinnerLoadingProps) => (
  <Flex h="100vh" justifyContent="center" flexDir="column" alignItems="center">
    <Spinner
      thickness="4px"
      speed="5s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      marginBottom="20px"
    />
    {!!text && <Text fontWeight="bold" fontSize={["16px","24px"]}>{text}</Text>}
  </Flex>
);
