import { NavLink } from "react-router-dom";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import LogoutButton from "../components/LogoutButton";
const Principal = () => {
  return (
    <>
      <Grid
      width={700}
        maxH="md"
        templateColumns="repeat(2, 1fr)"
        gap={20}
        placeItems="center"
        pt={100}
        pb={350}
        pl={10}
        pr={10}
        boxShadow="0 0 10px 2px rgba(31,53,94, .75), 0 1px 1px rgba(0, 0, 0, .10)"
        borderRadius={10}
      >
        <NavLink to="/carga">
          <Button
            type="buttom"
            backgroundColor="rgb(0,128,101)"
            textColor="white"
            width={190}
          >
            Cargar Productos
          </Button>
        </NavLink>
        <NavLink to="/retirar">
          <Button
            type="buttom"
            backgroundColor="rgb(0,128,101)"
            textColor="white"
            width={190}
          >
            Retirar Productos
          </Button>
        </NavLink>
        <NavLink to="/productos">
          <Button
            type="buttom"
            backgroundColor="rgb(0,128,101)"
            textColor="white"
            width={190}
          >
            Productos
          </Button>
        </NavLink>

        <NavLink to="/actualizar">
          <Button
            type="buttom"
            backgroundColor="rgb(0,128,101)"
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
