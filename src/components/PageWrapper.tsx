import { Flex } from "@chakra-ui/react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Flex maxWidth={1440} margin="auto">
      {children}
    </Flex>
  );
}
