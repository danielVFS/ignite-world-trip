import { Grid, GridItem } from "@chakra-ui/react";
import { PageWrapper } from "../PageWrapper";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <PageWrapper>
      <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
        w="100%"
        mt={[10, 10, 10, 32]}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <TravelType text="Vida Noturna" icon="cocktail" />
        </GridItem>
        <GridItem>
          <TravelType text="Praia" icon="surf" />
        </GridItem>
        <GridItem>
          <TravelType text="Moderno" icon="building" />
        </GridItem>
        <GridItem>
          <TravelType text="Clássico" icon="museum" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <TravelType text="E mais..." icon="earth" />
        </GridItem>
      </Grid>
    </PageWrapper>
  );
}
