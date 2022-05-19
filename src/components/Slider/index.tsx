import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';


export default function Slider() {
    return (
        <Flex w="100%" maxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]} >

            <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{clickable: true}} autoplay={{delay: 4000,}} style={{width: '100%', flex: '1'}} >

                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/slide/europeSlide.png)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center" > 

                        <Link href="/continent/europe" >
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]} >O continente mais antigo.</Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/slide/southAmericaSlide.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center" > 

                        <Link href="/continent/southAmerica" >
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >América do sul</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]} >As mais belas praias.</Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/slide/northAmerica.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center" > 

                        <Link href="/continent/northAmerica" >
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >América do norte</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]} >O sonho Americano.</Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/slide/asia.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center" > 

                        <Link href="/continent/asia" >
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold" >Ásia</Heading>
                                <Text fontWeight="bold" color="gray.50" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]} >O maior e mais populoso continente.</Text>
                            </a>
                        </Link>

                    </Flex>
                </SwiperSlide>

            </Swiper>

        </Flex>
    );
}