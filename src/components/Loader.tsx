import { Center, Spinner } from "@chakra-ui/react";

export function Loader() {
  return (
    <Center bg="gray.100" h="calc(100vh)" w="full">
      <Spinner color="yellow.400" size="xl" />
    </Center>
  );
}
