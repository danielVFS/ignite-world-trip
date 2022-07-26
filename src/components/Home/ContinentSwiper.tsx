import { Flex, Heading, Text } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { PageWrapper } from "../PageWrapper";

export function ContinentSwiper() {
  return (
    <PageWrapper>
      <Flex w="full" mb={8} mt={12}>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation
        >
          <SwiperSlide>
            <Flex
              w="full"
              h="450"
              align="center"
              justify="center"
              direction="column"
              bgImage="url('/Continent.png')"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Heading color="gray.100">Europa</Heading>
              <Text color="gray.300" fontSize="lg">
                O Continente mais antigo
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Flex>
    </PageWrapper>
  );
}
