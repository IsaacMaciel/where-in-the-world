import { Flex, Spinner } from "@chakra-ui/react";

export const SpinnerLoading = () => (
  <Flex h="100vh" justifyContent="center" alignItems="center">
    <Spinner
      thickness="4px"
      speed="5s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Flex>
);
