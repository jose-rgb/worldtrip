import { Grid, Text } from "@chakra-ui/react";
import Info from "./Info";

interface ContinentContentProps {
    description: string;
    countries: string;
    languages: string;
    cities: string;
}

export default function ContinentContent({description, countries,  languages, cities}: ContinentContentProps) {
    return(

        <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr" ]} gap={[5, 10, 16, 20]} my={["8", "20"]}>

            <Text fontSize={["lg", "xl", "xl", "2xl"]}  color="gray.700" textAlign="justify" >
                {description}
            </Text>

            <Info countries={countries}  languages={languages} cities={cities} />

        </Grid>
    );
}