import { Flex, Image, useBreakpointValue, Text } from "@chakra-ui/react";

//template q recebe o icon e title
interface TravelTemplateProps {
    icon: string;
    title: string;
}

export default function TravelTemplate({icon, title}: TravelTemplateProps) {
    //por padrao e false, no mobile(sm) e true
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    })

    return(
        <Flex direction={["row", "column"]} align="center" justify="center" >

            <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" display={["none", "block", "block"]} /> <Text color="yellow.400" fontSize="4xl" mr="2" display={["block", "none", "none"]}>•</Text>

            <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]} > {title} </Text>

        </Flex>
    )
}
