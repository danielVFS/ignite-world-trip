import { Flex } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="full"
      h={[200, 300, 500]}
      bgImage="url('/Banner.png')"
      bgPosition="center"
      bgSize="cover"
    />
  );
}
