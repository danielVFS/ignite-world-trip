import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Continent } from "../../core/models/Continent";
import { PageWrapper } from "../PageWrapper";

interface ContinentSwiperProps {
  continents: Continent[];
}

export function ContinentSwiper({ continents }: ContinentSwiperProps) {
  return (
    <PageWrapper>
      <Flex w="full" mb={8} mt={12}>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
        >
          {continents.map((continent) => {
            return (
              <SwiperSlide key={continent.short_description}>
                <Flex
                  w="full"
                  h="450"
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage={`url(${continent.image})`}
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  textAlign="center"
                >
                  <NextLink href={`/continents/${continent.slug}`} passHref>
                    <Link>
                      <Heading color="gray.100">{continent.name}</Heading>
                    </Link>
                  </NextLink>

                  <Text color="gray.300" fontSize="lg">
                    {continent.short_description}
                  </Text>
                </Flex>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </PageWrapper>
  );
}
