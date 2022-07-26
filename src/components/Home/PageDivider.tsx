import { Flex } from "@chakra-ui/react";
import { PageWrapper } from "../PageWrapper";

export function PageDivider() {
  return (
    <PageWrapper>
      <Flex
        w="90px"
        h="1"
        borderRadius="md"
        bg="gray.700"
        mx="auto"
        mt={[4, 12]}
        mb={[4, 12]}
      />
    </PageWrapper>
  );
}
