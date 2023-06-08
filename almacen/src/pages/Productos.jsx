import { NavLink } from "react-router-dom";
import {
  Heading,
  Grid,
  GridItem,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
  Input 
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
//useDispatch: Permite acceder a las acciones del "store", xej: "login"
//useSelectro: Accede al estado del "store"
import { useEffect , useState} from "react";
import { getProducts } from "../store/states/product";
//import {productSlice} from './store/states/product';

const Productos = () => {
  const { products } = useSelector((state) => state.products); //viene "undefind"
  //console.log(products.ObjectKeys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    //console.log("dentro del useEffect");
  }, [dispatch]);

  const [codigoFiltro, setCodigoFiltro] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [nombreFiltro, setNombreFiltro] = useState("");

  const handleCodigoChange = (e) => {
    setCodigoFiltro(e.target.value);
  };

  const handleCategoriaChange = (e) => {
    setCategoriaFiltro(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombreFiltro(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const codigoMatch = codigoFiltro === "" || product.code.includes(codigoFiltro);
    const categoriaMatch = categoriaFiltro === "" || product.category.includes(categoriaFiltro);
    const nombreMatch = nombreFiltro === "" || product.name.includes(nombreFiltro);
    return codigoMatch && categoriaMatch && nombreMatch;
  });

  return (
    <>
      <Grid templateColumns="1fr 3fr" gap={2}>
        <GridItem justifySelf="center" alignSelf="center" mb={10}>
          <NavLink to="/principal">
            <ArrowBackIcon
              boxSize={10}
              color="rgb(31,53,94)"
              _hover={{ color: "rgba(8, 199, 158, 0.40)", transform: "scale(1.2)" }}
              
            />
          </NavLink>
        </GridItem>
        <GridItem alignSelf="center" mb={10}>
          <Heading
            as="h1"
            size="3xl"
            h={70}
            color="rgb(31,53,94)"
            pl="200"
            alignSelf="center"
          >
            Productos
          </Heading>
        </GridItem>
        <GridItem colSpan={2} m={10}>
        <Grid templateColumns="1fr 1fr 1fr" gap={10}>
        <GridItem>
        <Box>
            <Input placeholder='filtro por codigo' size='md' onChange={handleCategoriaChange}/>
          </Box>
        </GridItem>
        <GridItem>
        <Box>
            <Select
              placeholder="filtro por categoría"
              value={codigoFiltro}
              onChange={handleCodigoChange}
              size='md'
            >
              <option value="">Todo</option>
              <option value="fruticultura">Fruticultura</option>
              <option value="ganaderia">Ganaderia</option>
              <option value="pesticida">Pesticida</option>
            </Select>
          </Box>
        </GridItem>
        <GridItem>
        <Box>
            <Input placeholder='filtro por nombre' size='md' onChange={handleNombreChange}/>
          </Box>
        </GridItem>
        </Grid>
        </GridItem>
        
       
        <GridItem colSpan={2}>
          {filteredProducts.length > 0 ? (
            <TableContainer w={1500}>
              <Table variant="striped" colorScheme="green" size="md">
                <TableCaption>Todos los Productos</TableCaption>
                <Thead> 
                  <Tr>
                    <Th textAlign="center">Código</Th>
                    <Th textAlign="center">Nombre</Th>
                    <Th textAlign="center">Categoría</Th>
                    <Th textAlign="center">Descripción</Th>
                    <Th textAlign="center">Último Ingreso</Th>
                    <Th textAlign="center">Stock</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map((product) => (
                    <Tr key={product._id}>
                      <Td textAlign="center">{product.code}</Td>
                      <Td textAlign="center">{product.name}</Td>
                      <Td textAlign="center">{product.category}</Td>
                      <Td textAlign="center">{product.description}</Td>
                      <Td textAlign="center">{product.expirationDate}</Td>
                      <Td textAlign="center">{product.stock}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Box>No se encontraron productos.</Box>
          )}
        </GridItem>
      </Grid>
    </>
  );
};
export default Productos;
