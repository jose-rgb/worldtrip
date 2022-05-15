import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelMode from "../components/TravelMode";

export default function Home() {
  return (
    <Flex direction="column">
        <Header />
        <Banner />
        <TravelMode />
    </Flex>
  )
}
