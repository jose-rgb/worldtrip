import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Header from "../../components/Header";

export default function Asia() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="asiaBanner.jpg" name="Ásia" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="a Ásia é limitada a leste pelo Oceano Pacífico , ao sul pelo Oceano Índico
                     e ao norte pelo Oceano Ártico . A fronteira da Ásia com a Europa é uma construção histórica
                     e cultural , pois não há uma separação física e geográfica clara entre elas. É um tanto arbitrário
                     e mudou desde sua primeira concepção na antiguidade clássica . " 
                    countries="50"
                    languages="2300"
                    cities="125"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="dubai.jpg" city="Dubai" country="Emirados Árabes" flag="emiradosarabes.png" />

                        <City image="maldivas.jpg" city="Ilhas Maldivas" country="República das Maldivas" flag="maldives.png" />
                        
                        <City image="bali.jpg" city="Bali" country="Indonésia" flag="indonesia.png" />
                
                        <City image="bangkok.jpg" city="Bangkok" country="Tailândia" flag="tailandia.png" />

                        <City image="phuket.jpg" city="Phuket" country="Tailândia" flag="tailandia.png" />

                        <City image="toquio.jpg" city="Tóquio" country="Japão" flag="japao.jpeg" />

                        <City image="Istambul.jpg" city="Istambul" country="Turquia" flag="turquia.png" />

                        <City image="pequim.jpg" city="Pequim" country="China" flag="china.png" />

                    </Grid>
                </>
            </Flex>

        </Flex>
    )
}