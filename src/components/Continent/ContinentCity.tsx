import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { City } from "../../core/models/City";

interface ContinentCityProps {
  city: City;
}

export function ContinentCity({ city }: ContinentCityProps) {
  return (
    <Flex flexDir="column" w="256px">
      <Image src={city.thumbnail} alt={city.name} w="256px" h="180px" />
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
        p="6"
        borderBottomRadius={4}
      >
        <Flex flexDir="column">
          <Heading fontSize="xl" fontWeight="500">
            {city.name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {city.country}
          </Text>
        </Flex>
        <Image
          src={city.flag}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
          alt={city.country}
        />
      </Flex>
    </Flex>
  );
}
