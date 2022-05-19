import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SouthAmerica() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="southAmericaBanner.jpg" name="América do sul" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="A América do Sul é um continente que compreende
                     a porção meridional da América. Também é considerada um subcontinente do continente americano" 
                    countries="12"
                    languages="456"
                    cities="163"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="riodejaneiro.jpg" city="Rio de Janeiro" country="Brasil" flag="brasil.png" />

                        <City image="maragogi.jpg" city="Maragogi" country="Brasil" flag="brasil.png" />
                        
                        <City image="fernandonoronha.jpg" city="Fernando de Noronha" country="Brasil" flag="brasil.png" />
                
                        <City image="machupicchu.jpg" city="Machu Picchu" country="Peru" flag="peru.png" />

                        <City image="bariloche.png" city="Bariloche" country="Argentina" flag="argentina.png" />

                        <City image="santiago.jpg" city="Santiago" country="Chile" flag="chile.jpeg" />

                    </Grid>
                </>
            </Flex>

            <Footer />

        </Flex>
    )
}