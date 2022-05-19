import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Header from "../../components/Header";

export default function Africa() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="africaBanner.jpg" name="Africa" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados,
                     cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão
                    de pessoas (estimativa para 2005), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na
                     ultima década em uma continente cada vez mais católico." 
                    countries="54"
                    languages="2000"
                    cities="50"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="ilhadegoroe.jpg" city="Ilha de Gorée" country="Senegal" flag="senegal.png" />

                        <City image="chefchaouen.jpg" city="Chefchaouen" country="Marrocos" flag="marrocos.png" />
                        
                        <City image="ilhadosal.jpeg" city="Ilha do sal" country="Cabo verde" flag="caboverde.png" />
                
                        <City image="zanzibar.jpg" city="zanzibar" country="Tanzânia" flag="tanzania.png" />

                        <City image="addis.jpg" city="Addis Ababa" country="Ethiopia" flag="ethiopia.png" />

                        <City image="pretoria.jpg" city="Pretoria" country="África do sul" flag="africadosul.png" />

                    </Grid>
                </>
            </Flex>

        </Flex>
    )
}