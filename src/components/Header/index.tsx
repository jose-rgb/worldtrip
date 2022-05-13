import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex as="header" bg="white" w="100%" mx="auto" px="1rem" h={["50px", "100px"]} align="center" justify="center" > 

            <Grid h="100%" mx="auto" maxW="1160px" alignItems="center" templateColumns="repeat(3, 1fr)" >

                <Image src="/logo.svg" alt="Um avião sobre o nome da marca World Trip" w={["81px", "184px"]} justifySelf="center"  gridColumn="2"/>

            </Grid>

        </Flex>
    );
}