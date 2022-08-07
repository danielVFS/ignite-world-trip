import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import {
  ContinentContext,
  ContinentContextType,
} from "../../context/continentContext";

export function ContinentBanner() {
  const { continent } = useContext(ContinentContext) as ContinentContextType;

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
