import { useEffect, useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
//useDispatch: Permite acceder a las acciones del "store", xej: "login"
//useSelectro: Accede al estado del "store"
import { login } from "../store/states/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate(); // Obtener el objeto de historial

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFull, setIsFormFull] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isFormFull) {
      handleRegister();
    }
  };

  const handleRegister = () => {
    dispatch(login({ email, password }));
    console.log("entro");
    //navigate("/principal"); no va a acá, lo tengo que hacer por el servicio
  };

  const handleRegistrationClick = () => {
    navigate("/register");
  };
  const validateForm = () => {
    setIsFormFull(email !== "" && password !== "");
  };
  useEffect(() => {
    validateForm();
  }, [email, password]);

  useEffect(() => {
    if (user.status === "logged") {
      navigate("/principal");
    }
  }, [user.status]);
  return (
    <>
      <Container
        maxW="xl"
        maxH="md"
        direction={"colum"}
        placeItems="center"
        borderWidth="1px"
        backgroundColor="withe"
        boxShadow="0 0 10px 2px rgba(31,53,94, .75), 0 1px 1px rgba(0, 0, 0, .15)"
        borderRadius={10}
        pt={50}
        pb={600}
        px={100}
        
      >
        {user.status === "loading" && <div>Cargando...</div>}
        {user.status === "logged" && (
          <div>
            <p>Ya esta logueado</p>
          </div>
        )}
        {user.status === "unlogged" && (
          <>
            <form>
              <Grid placeItems="center" color="rgb(31,53,94)" pb={10}>
                <GridItem fontSize={60} fontWeight="bold">
                  Complexa
                </GridItem>
                <GridItem fontSize={24} fontWeight="medium">
                  División depósitos
                </GridItem>
              </Grid>
              <FormControl id="name" marginBottom={10} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  _hover={{ bg: "#ebedf0" }}
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </FormControl>
              <FormControl id="password" marginBottom={10} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  _hover={{ bg: "#ebedf0" }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </FormControl>
              {user?.error && <Text color="red">{user.error}</Text>}
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={10}
                placeItems="center"
              >
                <GridItem colSpan={2}>
                  <Button
                    w={200}
                    type="button"
                    onClick={handleRegister}
                    backgroundColor="rgb(0,128,101)"
                    textColor="white"
                    isDisabled={!isFormFull}
                  >
                    Ingresar
                  </Button>
                </GridItem>
                <GridItem colSpan={2}>
                  <Button
                    w={200}
                    type="button"
                    backgroundColor="rgb(0,128,101)"
                    textColor="white"
                    onClick={handleRegistrationClick}
                  >
                    Registrarme
                  </Button>
                </GridItem>
              </Grid>
            </form>
          </>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
