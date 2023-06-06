import { NavLink } from "react-router-dom";
import { Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
//useDispatch: Permite acceder a las acciones del "store", xej: "login"
//useSelectro: Accede al estado del "store"
import { useEffect } from "react";
import { getProducts } from "../store/states/product";
//import {productSlice} from './store/states/product';

const Productos = () => {
  const { products } = useSelector((state) => state.products); //viene "undefind"
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    console.log("dentro del useEffect");
   
  }, [dispatch]);
  return (
    <>
      <Grid templateColumns="1fr 3fr" gap={2} placeItems="center" margin="auto">
        <NavLink to="/principal">
          <ArrowBackIcon boxSize={10} />
        </NavLink>

        <Heading as="h1" size="3xl" noOfLines={1} h={100}>
          Productos
        </Heading>
        <GridItem>
          {/* Armar una tabla que se rellene con los productos, pero si no hay productos que salga un mje de
          "no se encontraron productos" */}
          {products.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Box>No se encontraron productos.</Box>
          )}
        </GridItem>
      </Grid>
    </>
  );
};
export default Productos;
