import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {FormControl, FormLabel, Input, Container, Button, Text} from '@chakra-ui/react';

const LoginForm = () => {
  const navigate = useNavigate(); // Obtener el objeto de historial
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isFormFull, setIsFormFull] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role: "admin" }),
      });

      const data = await response.json();
      console.log(data); // Manejar respuesta del servidor

      // Reinicia los campos del formulario si el registro fue exitoso
      if (response.ok) {
        setName("");
        setPassword("");
        setEmail("");
        setRole("");
        navigate("/principal"); // Redirecciona a Principal.jsx
      }
      if(data.error){
        setErrorMsg(true);
      }
    } catch (error) {
      setErrorMsg(true);
      console.error("Error al registrar el usuario:", error);
    }
  };
  const handleRegistrationClick = () => {
    navigate("/register");
  };
  const validateForm = () => {
    setIsFormFull(email !== "" && password !== "");
  };
  useEffect(() => {
    validateForm();
  }, [email, password,errorMsg]);
  return (
    <>
      <Container maxW="md" maxH="md" direction={"colum"} placeItems="center">
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
          {errorMsg && <Text color="red">Corrobora tus datos</Text>}
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
      </Container>
    </>
  );
};

export default LoginForm;
