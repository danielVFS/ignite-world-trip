import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps {
  text: string;
  icon: string;
}

export function TravelType({ text, icon }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex
      flexDirection={["row", "column"]}
      align="center"
      justify="center"
      gap={[0, 4, 4]}
    >
      {isMobile ? (
        <Image
          src={`/icons/${icon}.svg`}
          alt={`${icon} image`}
          w="85px"
          h="85px"
          mb="6"
        />
      ) : (
        <Text color="yellow.400" fontSize="5xl" mr="2">
          •
        </Text>
      )}

      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}
