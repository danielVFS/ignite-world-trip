import { Flex, Text } from "@chakra-ui/react";
import { useContinentContext } from "../../hooks/useContinentContext";
import { PageWrapper } from "../PageWrapper";

export function ContinentInfo() {
  const { continent } = useContinentContext();

  return (
    <PageWrapper>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        align="center"
        gap={[8, 8, 16, 28]}
        mt={[8, 8, 16]}
        mb={16}
      >
        <Text fontSize="lg" color="gray.700" px={[8, 8, 8, 8, 8, 0]}>
          {continent.description}
        </Text>
        <Flex
          flexDirection={["column", "column", "row"]}
          gap={20}
          px={8}
          textAlign="center"
        >
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              {continent.continent_counters.countries}
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              {continent.continent_counters.languages}
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              línguas
            </Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              {continent.continent_counters.cities}
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              cidades +100
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
