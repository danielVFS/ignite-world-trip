import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { PageWrapper } from "../PageWrapper";

export function Banner() {
  return (
    <Flex
      w="full"
      h="335"
      bgImage="url('/Background.png')"
      bgRepeat="unset"
      bgSize="cover"
    >
      <PageWrapper>
        <Flex
          w="full"
          h="335"
          justify="space-between"
          align="center"
          p={[4, 4, 6, 6, 6, 0]}
        >
          <Flex flexDirection="column" gap="6">
            <Heading color="gray.100">
              5 Continentes, infinitas possibilidades.
            </Heading>
            <Text color="gray.300">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Image
            src="/Airplane.svg"
            alt="World trip app logo"
            mb="-24"
            display={["none", "none", "none", "block"]}
          />
        </Flex>
      </PageWrapper>
    </Flex>
  );
}
