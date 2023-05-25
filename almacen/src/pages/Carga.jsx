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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const Carga = () => {
  const scannerContainerRef = useRef(null);
  const [code, setCode] = useState("");

  const videoRef = useRef(null);
  const reader = useRef(new BrowserMultiFormatReader());

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
          <ArrowBackIcon boxSize={10} />
        </NavLink>

        <Heading as="h1" size="3xl" noOfLines={1} h={100}>
          Carga de Productos
        </Heading>
        <Box>
          <form>
            <FormControl>
              <FormLabel>Código</FormLabel>
              <Box height={50} ref={videoRef}>
                {/* Me falta decodificar ese "code" */}
                <Input type="text" name="code" onChange={()=> setCode()} />
              </Box>

              <FormLabel>Nombre Producto</FormLabel>
              <Input type="text" name="code" />
              <FormLabel>Cantidad</FormLabel>
              <Input type="text" name="code" />
              <FormLabel>Fecha de vencimiento</FormLabel>
              <Input type="text" name="code" />
              <FormLabel>Descripción</FormLabel>
              <Input type="text" name="code" />
              <FormLabel>Imagen</FormLabel>
              <Input type="text" name="code" />
            </FormControl>
          </form>
        </Box>
      </Grid>
    </>
  );
};
export default Carga;
