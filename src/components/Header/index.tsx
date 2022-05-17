import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri"

export default function Header() {
    const { asPath } = useRouter();
    //se for diferente da home
    const notHomePage = asPath !== "/"


    return (
        <Flex as="header" bg="white" w="100%" mx="auto" px="1rem" h={["50px", "100px"]} align="center" justify="center" > 

            <Grid h="100%" mx="auto" maxW="1240px" alignItems="center"  templateColumns="repeat(7, 1fr)" >

                { notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" gridColumn="1"/>
                        </a>
                    </Link>
                )}

                <Image src="/logo.svg" alt="Um avião sobre o nome da marca World Trip" w={["81px", "184px"]} justifySelf="center"  gridColumn="4"/>

            </Grid>

        </Flex>
    );
}