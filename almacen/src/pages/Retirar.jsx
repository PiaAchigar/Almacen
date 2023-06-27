import { NavLink } from "react-router-dom";
import { Heading, Grid } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
const Retirar = () => {
  return (
    <>
      <Grid templateColumns="1fr 3fr" gap={2} placeItems="center" margin="auto">
        <NavLink to="/productos">
          <ArrowBackIcon boxSize={10} />
        </NavLink>

        <Heading as="h1" size="3xl" noOfLines={1} h={100}>
          Retirar Productos
        </Heading>
      </Grid>
    </>
  );
};
export default Retirar;