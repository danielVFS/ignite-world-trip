import { Flex, Text } from "@chakra-ui/react";
import { useContinentContext } from "../../hooks/useContinentContext";
import { PageWrapper } from "../PageWrapper";
import { ContinentCity } from "./ContinentCity";

export function ContinentCitiesList() {
  const { continent } = useContinentContext();

  return (
    <PageWrapper>
      <Flex w="full" flexDir="column" px={[8, 8, 8, 8, 8, 0]} gap={8} mb={16}>
        <Text fontWeight="600" color="gray.700" fontSize={["lg", "2xl", "3xl"]}>
          Cidades +100
        </Text>
        <Flex
          flexWrap="wrap"
          width="full"
          align="center"
          justify="center"
          gap={24}
        >
          {continent.cities.map((city) => {
            return <ContinentCity key={city.name} city={city} />;
          })}
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
