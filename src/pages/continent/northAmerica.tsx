import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function NorthAmerica() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="northAmericaBanner.jpg" name="América do norte" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas
                     formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América,
                      separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte
                      e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia).
                    Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe)." 
                    countries="3"
                    languages="3"
                    cities="20"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="cancun.jpeg" city="Cancún" country="Mexico" flag="mexico.png" />

                        <City image="miami.jpeg" city="Miami" country="Estados Unidos" flag="usa.png" />
                        
                        <City image="vegas.jpeg" city="Las Vegas" country="Estados Unidos" flag="usa.png" />
                
                        <City image="newyork.jpeg" city="New York" country="Estados Unidos" flag="usa.png" />

                        <City image="toronto.jpeg" city="Toronto" country="Canadá" flag="canada.png" />

                        <City image="vancouver.jpeg" city="Vancouver" country="Canadá" flag="canada.png" />

                    </Grid>
                </>
            </Flex>

            <Footer />

        </Flex>
    )
}