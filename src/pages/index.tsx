import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Header from "../components/Header";
import Slider from "../components/Slider";
import TravelMode from "../components/TravelMode";

export default function Home() {
  return (
    <Flex direction="column">

        <Header />
        <Banner />
        <TravelMode />
        <Divider />

        <Heading textAlign="center" fontWeight="500" mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]} >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>

        <Slider />

    </Flex>
  )
}
