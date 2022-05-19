import { Flex, Heading, Grid } from "@chakra-ui/react";
import City from "../../components/City";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentContent from "../../components/ContinentContent";
import Header from "../../components/Header";

export default function Oceania() {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner image="oceania.jpg" name="Oceania" />

            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">

                <ContinentContent 
                    description="Oceania é uma região geográfica que inclui a Australásia ,Melanésia , Micronésia e Polinésia. Abrangendo os hemisférios oriental
                     e ocidental,  estima-se que a Oceania tenha uma área de 8.525.989 quilômetros quadrados (3.291.903 sq mi) e uma população de mais de 41 milhões.
                      Quando comparada com os continentes , a região da Oceania é a menor em área terrestre e a segunda menor em população. Por ser cortado pela Linha
                       do Equador mais ao norte e pelo Trópico de Capricórnio ao sul, o continente apresenta clima e vegetação predominantemente tropicais." 
                    countries="14"
                    languages="2000"
                    cities="10"
                />
                
                <>
                    <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades mais visitadas</Heading>
                    <Grid templateColumns={["1fr","1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px','45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>

                        <City image="sydney.jpg" city="Sydney" country="Australia" flag="australia.png" />

                        <City image="ilhakangaroo.jpeg" city="Ilha Kangaroo" country="Australia" flag="australia.png" />

                        <City image="milfordSound.jpg" city="Milford Sound" country="Nova Zelândia" flag="novazelandia.png" />

                        <City image="queenstown.jpg" city="Queenstown" country="Nova Zelândia" flag="novazelandia.png" />
                        
                    </Grid>
                </>
            </Flex>

        </Flex>
    )
}