import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Europe() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="europeBanner.png" name="Europa" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da
                        Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
                        o mar Cáspio, o Cáucaso, e o mar Negro a sudeste." 
                    countries="50"
                    languages="60"
                    cities="106"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="londres.png" city="Londres" country="Reino Unido" flag="reinoUnido.png" />

                        <City image="paris.png" city="Paris" country="França" flag="franca.png" />
                
                        <City image="roma.png" city="Roma" country="Itália" flag="italia.png" />

                        <City image="praga.png" city="Praga" country="República Tcheca" flag="republicatcheca.png" />

                        <City image="amsterda.png" city="Amsterdã" country="Holanda" flag="holanda.png" />

                    </Grid>
                </>
            </Flex>

            <Footer />

        </Flex>
    )
}