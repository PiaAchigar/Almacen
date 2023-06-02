import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BrowserMultiFormatReader } from "@zxing/library";
import {
  Heading,
  Grid,
  Box,
  FormControl,
  Input,
  FormLabel,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { login } from "../store/states/user";

const Carga = () => {
  const scannerContainerRef = useRef(null);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isFormFull, setIsFormFull] = useState(false);
  const videoRef = useRef(null);
  const reader = useRef(new BrowserMultiFormatReader());
  const validateForm = () => {
    setIsFormFull(code !== "" && name !== "");
  };
  useEffect(() => {
    validateForm();
  }, [code, name]);

  const handleRegister = () => {
    //dispatch(login({ email, password }));
    console.log("entro");
    //navigate("/principal");
  };

  const prepareVideoElement = (videoElement) => {
    if (!videoElement) {
      return;
    }

    // Verificar si el objeto videoElement tiene la propiedad setAttribute antes de usarla
    if (typeof videoElement.setAttribute === "function") {
      videoElement.setAttribute("autoplay", true);
      videoElement.setAttribute("muted", true);
      videoElement.setAttribute("playsinline", true);
    }
  };
  useEffect(() => {
    console.log(code);
    console.log(videoRef.current.value);
    if (!videoRef.current) {
      return;
    }
    prepareVideoElement(videoRef.current);
    if (!videoRef.current) return;
    reader.current.decodeFromConstraints(
      {
        audio: false,
        video: {
          facingMode: "environment",
        },
      },
      videoRef.current,
      (result, error) => {
        if (result) console.log(result);
        if (error) console.log(error);
      }
    );
    return () => {
      reader.current.reset();
    };
  }, [videoRef]);

  return (
    <>
      <Grid templateColumns="1fr 3fr" gap={2} placeItems="center" margin="auto">
        <NavLink to="/principal">
          <ArrowBackIcon boxSize={10} color="rgb(31,53,94)" _hover={{color: 'rgb(8, 199, 158)',transform: 'scale(1.2)'}}/>
        </NavLink>

        <Heading as="h1" size="3xl" noOfLines={1} h={100} color="rgb(31,53,94)" >
          Carga de Productos
        </Heading>
        <GridItem colSpan={2}>
          <form style={{ width: "400px" }}>
            <FormControl>
              <FormLabel>Código</FormLabel>
              <Box height={50} ref={videoRef}>
                <Input
                  type="text"
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                />
              </Box>

              <FormLabel>Nombre Producto</FormLabel>
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <FormLabel>Cantidad</FormLabel>
              <Input type="text" />
              <FormLabel>Fecha de vencimiento</FormLabel>
              <Input type="text" name="code" />
              <FormLabel>Descripción</FormLabel>
              <Input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <FormLabel>Imagen</FormLabel>
              <Input type="text" name="code" />
            </FormControl>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                w={200}
                m={10}
                type="button"
                onClick={handleRegister}
                backgroundColor="rgb(0,128,101)"
                textColor="white"
                isDisabled={!isFormFull}
              >
                Cargar
              </Button>
            </div>
          </form>
        </GridItem>
      </Grid>
    </>
  );
};
export default Carga;
