import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../components/Header";
import Routing from "../routes/routing";

const AppLayout = () => {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows={"150px 1fr 50px"}
      gridTemplateColumns={"1fr"}
      fontWeight="bold"
      minHeight="100vh">
      {/* header */}
      <GridItem
        area="header"
        bg="custom.200"
        background="linear-gradient(to right, #B10F2E, #570000)">
        <Header />
      </GridItem>

      {/* main */}
      <GridItem
        area="main"
        minH="100vh"
        bg="transparent"
        display="flex"
        flexDirection="column">
        <Routing />
      </GridItem>
    </Grid>
  );
};

export default AppLayout;
