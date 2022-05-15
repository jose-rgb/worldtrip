import { Grid, GridItem } from "@chakra-ui/react";
import  TravelTemplate  from "./TravelTemplate";

export default function TravelMode() {
    return( 
        <Grid templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}  w="100%" justifyContent="space-between" alignItems="center" mt={["10", "32"]} mx="auto" maxW="auto" gap={["1", "5"]} >

            <GridItem id="1">
                <TravelTemplate icon="cocktail" title="Vida noturna" />
            </GridItem>

            <GridItem>
                <TravelTemplate icon="surf" title="Praia" />
            </GridItem>

            <GridItem>
                <TravelTemplate icon="building" title="Moderno" />
            </GridItem>

            <GridItem>
                <TravelTemplate icon="museum" title="Clássico" />
            </GridItem>

            <GridItem colSpan={[2, 2, 2, 1]}> 
                <TravelTemplate icon="earth" title="E mais..." />
            </GridItem>

        </Grid>
    );
}