import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

interface InfoProps {
    countries: string;
    languages: string; 
    cities: string;
}

export default function Info({countries, languages, cities}: InfoProps) {
    //para corrigir o erro de hidratação de interface no server do next
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return(
        <Flex alignItems="center" justifyContent="space-between" >

            <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>

                <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500" >{countries}</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">países</Text>

            </Flex>

            <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>

                <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500" >{languages}</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">línguas</Text>

            </Flex>

            <Flex direction="column" justify="center" align={["flex-start","flex-start", "center"]}>

                <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500" >{cities}</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.700">
                    grandes cidades 
                </Text>

            </Flex>


        </Flex>
    );
}