import { Flex, Text } from "@chakra-ui/react";
import { PageWrapper } from "../PageWrapper";

export function ContinentInfo() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={["column", "column", "row"]}
        gap={28}
        mt={16}
        mb={16}
      >
        <Text fontSize="lg" color="gray.700" p={[8, 8, 0]}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste. O
          continente europeu possui características bastante heterogêneas quando
          analisado todo o seu território. Para facilitar o estudo das áreas que
          o constituem, algumas classificações dividem-no em quatro regiões.
          Essas regiões foram estabelecidas segundo critérios de ordem espacial
          e econômica.
        </Text>
        <Flex
          align="center"
          flexDirection={["column", "column", "row"]}
          gap={20}
        >
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              50
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              50
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              50
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" align="center">
            <Text fontSize="4xl" fontWeight="700" color="yellow.400">
              50
            </Text>
            <Text fontWeight="600" color="gray.700" fontSize="2xl">
              países
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
