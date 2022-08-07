import { Flex } from "@chakra-ui/react";

interface ContinentBannerProps {
  image: string;
}

export function ContinentBanner({ image }: ContinentBannerProps) {
  return (
    <Flex
      w="full"
      h={[200, 300, 500]}
      bgImage={`url(${image})`}
      bgPosition="left"
      bgSize="cover"
    />
  );
}
