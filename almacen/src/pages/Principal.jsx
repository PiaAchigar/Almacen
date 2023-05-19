import { NavLink } from "react-router-dom";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import LogoutButton from "../components/LogoutButton";
const Principal = () => {
  return (
    <>
      <Grid
        maxW="md"
        maxH="md"
        templateColumns="repeat(2, 1fr)"
        gap={6}
        placeItems="center"
        margin="auto"
      >
        <NavLink to="/carga">
          <Button
            type="buttom"
            backgroundColor="green"
            textColor="white"
            width={190}
          >
            Cargar Productos
          </Button>
        </NavLink>
        <NavLink to="/retirar">
          <Button
            type="buttom"
            backgroundColor="green"
            textColor="white"
            width={190}
          >
            Retirar Productos
          </Button>
        </NavLink>
        <NavLink to="/productos">
          <Button
            type="buttom"
            backgroundColor="green"
            textColor="white"
            width={190}
          >
            Productos
          </Button>
        </NavLink>

        <NavLink to="/actualizar">
          <Button
            type="buttom"
            backgroundColor="green"
            textColor="white"
            width={190}
          >
            Actualizar Productos
          </Button>
        </NavLink>
        <GridItem colSpan={2}>
          <LogoutButton />
        </GridItem>
      </Grid>
    </>
  );
};
export default Principal;
