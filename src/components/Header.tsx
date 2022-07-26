import { Center, Image } from "@chakra-ui/react";
import { PageWrapper } from "./PageWrapper";

export function Header() {
  return (
    <PageWrapper>
      <Center h="100" w="full">
        <Image src="/Logo.svg" alt="World trip app logo" />
      </Center>
    </PageWrapper>
  );
}
