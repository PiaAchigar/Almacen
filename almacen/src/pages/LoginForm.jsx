import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";

const LoginForm = () => {
  const navigate = useNavigate(); // Obtener el objeto de historial
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/user/register", {
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
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
  const handleRegistrationClick = () => {
    navigate("/register");
  };
  
  return (
    <>
      <Container maxW="md" maxH="md" direction={"colum"} placeItems="center">
        <form>
          <FormControl id="name" marginBottom={10} isRequired>
            <FormLabel>Usuario</FormLabel>
            <Input
              type="name"
              placeholder="Ingresa tu nombre"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" marginBottom={10} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Ingresa tu email"
              autoComplete="off"
              value={email}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" marginBottom={10} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            type="button"
            onClick={handleRegister}
            backgroundColor="green"
            textColor="white"
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
