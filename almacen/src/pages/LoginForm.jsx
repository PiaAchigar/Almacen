import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/states/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate(); // Obtener el objeto de historial

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFull, setIsFormFull] = useState(false);

  const handleRegister = () => {dispatch(login({ email, password }))
console.log("entro")}

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
      <Container maxW="md" maxH="md" direction={"colum"} placeItems="center">
        {user.status === "loading" && <div>la ruedita.. esta cargando</div>}
        {user.status === "logged" && (
          <div>
            <p>ya esta logueado</p>
          </div>
        )}
        {user.status === "unlogged" && (
          <>
            <form>
              <FormControl id="name" marginBottom={10} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" marginBottom={10} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {user?.error && <Text color="red">{user.error}</Text>}
              <Button
                type="button"
                onClick={handleRegister}
                backgroundColor="green"
                textColor="white"
                isDisabled={!isFormFull}
              >
                Ingresar
              </Button>
            </form>
            <Button
              type="button"
              backgroundColor="green"
              textColor="white"
              onClick={handleRegistrationClick}
            >
              Registrarme
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
