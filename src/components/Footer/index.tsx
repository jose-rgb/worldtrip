import { Flex, Grid, Text, Link, Icon} from "@chakra-ui/react";
import { RiCodeSSlashFill } from "react-icons/ri" 
import { BiRocket } from "react-icons/bi"

export default function Footer() {


    return (
        <Flex as="footer" bg="white" w="100%" mx="auto" px="1rem" h={["60px", "100px"]} align="center" justify="center" > 

            <Grid h="100%" mx="auto" maxW="1240px" alignItems="center" templateColumns="repeat(3, 1fr)" >

                <Flex gridColumn="2" alignItems="center" direction="column" justifyContent="center" mb="2" mt="2">

                    <Flex alignItems="center" justifyContent="center">
                        <Text fontSize={["10px", "12px"]} > Desenvolvido por José Ricardo </Text>
                        <a href="https://github.com/jose-rgb">
                            <Icon as={RiCodeSSlashFill} ml="2" fontSize={[15, 20]} justifySelf="start"/>
                        </a>
                    </Flex>

                    <Flex alignItems="center" justifyContent="center">
                        <Text fontSize={["10px", "12px"]} >Design by Rocketseat </Text> 
                        <a href="https://www.rocketseat.com.br/">
                            <Icon as={BiRocket} ml="2" fontSize={[15, 20]} justifySelf="start"/>
                        </a>
                    </Flex>

                     
                </Flex>

            </Grid>

        </Flex>
    );
}