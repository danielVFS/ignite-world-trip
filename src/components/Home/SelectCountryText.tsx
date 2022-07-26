import { Center, Text } from "@chakra-ui/react";
import { PageWrapper } from "../PageWrapper";

export function SelectCountryText() {
  return (
    <PageWrapper>
      <Center w="full" flexDirection="column" gap={[2, 4]}>
        <Text fontWeight="600" color="gray.700" fontSize={["lg", "2xl", "3xl"]}>
          Vamos nessa?
        </Text>
        <Text fontWeight="600" color="gray.700" fontSize={["lg", "2xl", "3xl"]}>
          Então escolha seu continente
        </Text>
      </Center>
    </PageWrapper>
  );
}
