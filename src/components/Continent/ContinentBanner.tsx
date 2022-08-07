import { Flex } from "@chakra-ui/react";
import { useContinentContext } from "../../hooks/useContinentContext";

export function ContinentBanner() {
  const { continent } = useContinentContext();

  return (
    <Flex
      w="full"
      h={[200, 300, 500]}
      bgImage={`url(${continent.banner})`}
      bgPosition="left"
      bgSize="cover"
    />
  );
}
