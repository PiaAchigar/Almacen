import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const navigate = useNavigate(); // Obtener el objeto de historial
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role: role ?? "admin" }),
      });

      const data = await response.json();
      console.log(data); // Manejar respuesta del servidor

      // Reinicia los campos del formulario si el registro fue exitoso
      if (response.ok) {
        setName("");
        setPassword("");
        setEmail("");
        setRole("");
        navigate("/login"); // Redirecciona a LoginForm.jsx
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Ingrese un email válido. Ej: pepe@gmail.com");
    } else {
      setEmailError("");
    }
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };
  const validateForm = () => {
    setIsFormValid(
      name !== "" &&
        email !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        passwordsMatch
    );
  };
  useEffect(() => {
    validateForm();
  }, [name, email, password, confirmPassword, passwordsMatch]);

  return (
    <>
      <Container
        maxW="md"
        maxH="md"
        direction={"colum"}
        justifyContent="center"
        h="auto"
        alignItems="center"
      >
        <form>
          <Box p={10}>
            <FormControl id="name" marginBottom={10} isRequired>
              <FormLabel>Usuario</FormLabel>
              <Input
                type="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" marginBottom={10} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail();
                }}
              />
              {emailError && <Text color="red">{emailError}</Text>}
            </FormControl>
            <FormControl id="password" marginBottom={10} isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="button" onClick={handleTogglePassword}>
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </FormControl>
            <FormControl id="password2" marginBottom={10} isRequired>
              <FormLabel>Vuelva a escribir su Contraseña</FormLabel>
              <Input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />

              {!passwordsMatch && (
                <Text color="red">Las contraseñas NO coinciden.</Text>
              )}
            </FormControl>
          </Box>

          <Button
            type="button"
            onClick={handleRegister}
            backgroundColor="green"
            textColor="white"
            isDisabled={!isFormValid}
            width="80%"
            m="auto"
            alignItems="center"
          >
            Registrarse
          </Button>
        </form>
      </Container>
    </>
  );
};

export default RegisterForm;
