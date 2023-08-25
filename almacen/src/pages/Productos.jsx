import { NavLink } from "react-router-dom";
import {
  Button,
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
  Input,
} from "@chakra-ui/react";
import ButtonComplexa from "../components/ButtonComplexa"
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
//useDispatch: Permite acceder a las acciones del "store", xej: "login"
//useSelectro: Accede al estado del "store"
import { useEffect, useState } from "react";
import { getProducts } from "../store/states/product";
//import {productSlice} from './store/states/product';

import { logout } from "../store/states/user";

const Productos = () => {
 
  const { products, page, totalItems, totalPages, loading, error } =
    useSelector((state) => state.products);
  //Array de opciónes para la cantidad de productos por página
  const productsPerPage = [5, 10, 15, 20, 50];
  const [size, setSize] = useState(5);
  const handleChange = (event) => {
    const selectedSize = parseInt(event.target.value);
    setSize(selectedSize);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ pageNumber: 1, size }));
    //console.log("dentro del useEffect");
  }, [dispatch, size]);

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
  //paginado, hacer la busqueda letra por letra...
  // const filteredProducts = products.filter((product) => {
  //   const codigoMatch =
  //     codigoFiltro === "" || product.code.includes(codigoFiltro);
  //   const categoriaMatch =
  //     categoriaFiltro === "" || product.category.includes(categoriaFiltro);
  //   const nombreMatch =
  //     nombreFiltro === "" || product.name.includes(nombreFiltro);
  //   return codigoMatch && categoriaMatch && nombreMatch;
  // });

  return (
    <>
      <Grid templateColumns="1fr 3fr" gap={2} backgroundColor="rgba(161, 162, 164, 0.50)">
        <GridItem justifySelf="center" alignSelf="center" mb={10}>
          <NavLink to="/login" onClick={() => {
          dispatch(logout())}}>
            <ArrowBackIcon
              boxSize={10}
              color="rgb(31,53,94)"
              _hover={{
                color: "rgba(8, 199, 158, 0.40)",
                transform: "scale(1.2)",
              }}
            />
          </NavLink>
        </GridItem>
        <GridItem alignSelf="center" mb={10} >
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
          <Grid templateColumns="1fr 1fr 1fr 1fr" gap={10}>
            <GridItem>
              <Box>
                <Input
                  placeholder="filtro por codigo"
                  size="md"
                  onChange={handleCategoriaChange}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Select
                  value={codigoFiltro}
                  onChange={handleCodigoChange}
                  size="md"
                >
                  <option value="" disabled isDisabled>
                    filtro por categoría
                  </option>
                  <option value="">Todo</option>
                  <option value="fruticultura-cortinas">
                    Fruticultura-Cortinas
                  </option>
                  <option value="fruticultura-fertilizante">
                    Fruticultura-Fertilizante
                  </option>
                  <option value="fruticultura-semilla">
                    Fruticultura-Semilla
                  </option>
                  <option value="fruticultura-pintura">
                    Fruticultura-Pintura
                  </option>
                  <option value="ganaderia-semilla">Ganaderia-Semilla</option>
                  <option value="ganaderia-racion">Ganaderia-Ración</option>
                  <option value="ganaderia-medicamento">
                    Ganaderia-Medicamento
                  </option>
                  <option value="ganaderia-lana">Ganaderia-Lana</option>
                  <option value="aplicaciones-filtros">
                    Aplicaciónes-Filtros
                  </option>
                  <option value="aplicaciones-boquilla">
                    Aplicaciónes-Boquilla
                  </option>
                  <option value="aplicaciones-manga">
                    Aplicaciónes-Mangas
                  </option>
                </Select>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Input
                  placeholder="filtro por nombre"
                  size="md"
                  onChange={handleNombreChange}
                />
              </Box>
            </GridItem>
            <GridItem>
              <Select value={size} onChange={handleChange}>
                {productsPerPage.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem colSpan={2}>
          {products.length > 0 ? (
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
        <GridItem colSpan={2} m={2} display="flex" justifyContent="center">
          <ButtonComplexa marg={1} color="white" size={140} backgroundColor="rgba(80, 123, 114, 0.9)" innerHTML="Anterior" onClick={() => {
              if (page > 1) {
                dispatch(getProducts({ pageNumber: page - 1, size }));
              }
            }}
            disabled={page <= 1}/>
          <ButtonComplexa marg={1} color="white" size={140} backgroundColor="rgba(80, 123, 114, 0.9)" innerHTML="Siguiente" onClick={() => {
              if (totalPages > page) {
                dispatch(getProducts({ pageNumber: page + 1, size }));
              }
            }}
            disabled={totalPages <= page}/>
        </GridItem>
        <div>{loading && <Box>cargando</Box>}</div>
        <div>{error?.length > 0 && <Box>{error}</Box>}</div>
        <GridItem colSpan={2} backgroundColor="rgba(161, 162, 164, 0.50)" h={150} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <NavLink to="/carga">
          <ButtonComplexa marg={2} color="white" size={200} backgroundColor="rgb(31,53,94)" innerHTML="Cargar Productos"/>
          </NavLink>
          <NavLink to="/actualizar">
          <ButtonComplexa marg={2} color="white" size={200} backgroundColor="rgb(31,53,94)" innerHTML="Actualizar"/>
          </NavLink>
          <NavLink to="/retirar">
          <ButtonComplexa marg={2} color="white" size={200} backgroundColor="rgb(31,53,94)" innerHTML="Retirar Prodcuctos"/>
          </NavLink>
        </GridItem>
      </Grid>
    </>
  );
};
export default Productos;
