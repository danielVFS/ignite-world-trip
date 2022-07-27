import { Center, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import { PageWrapper } from "./PageWrapper";
interface HeaderProps {
  hasGoBackButton?: boolean;
}

export function Header({ hasGoBackButton = false }: HeaderProps) {
  const router = useRouter();

  const handleNavigateGoBack = () => {
    router.back();
  };

  return (
    <PageWrapper>
      <Flex w="full" align="center">
        {hasGoBackButton && (
          <BsChevronLeft
            color="#47585B"
            size="25px"
            onClick={handleNavigateGoBack}
          />
        )}
        <Center h="100" w="full">
          <Image src="/Logo.svg" alt="World trip app logo" />
        </Center>
      </Flex>
    </PageWrapper>
  );
}
