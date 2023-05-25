import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Quagga from "quagga";
//https://github.com/ericblade/quagga2
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

  const onDetected = (result) => {
    //console.log(result.target.value)
    console.log(result.codeResult.code);
    setCode(result.codeResult.code); // Captura el código de barras detectado y lo guarda en el estado 'code'
  };
  // const handleCapture =(e)=>{
  //   console.log(e)
  // }
  //Para el Código de Barra
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream", //ImageStream, VideoStream, or LiveStream
          target: scannerContainerRef.current,
          constraints: {
            width: 440,
            height: 250,
            facingMode: "environment", // Usar la cámara trasera del dispositivo
          },
        },
        area: {
          // defines rectangle of the detection/localization area
          top: "0%", // top offset
          right: "0%", // right offset
          left: "0%", // left offset
          bottom: "0%", // bottom offset
        },
        singleChannel: false, // true: only the red color-channel is read
        // decoder: {
        //   readers: ["ean_5_reader", "ean_2_reader"], // Tipo de código de barras que se va a leer (EAN) - ,"code_128_reader"(default),"code_39_reader"
        //   multiple: false,
        // },
        decoder: {
          readers: [{
              format: "ean_reader",//"ean_reader"
              config: {
                  supplements: [
                      'ean_5_reader', 'ean_2_reader',"code_128_reader"
                  ]
              }
          }]
      },
        locator: {
          patchSize: "medium", // Tamaño del parche utilizado para la detección del código de barras (puede ser "small", "medium" o "large")
          halfSample: true, // Mejora la detección en imágenes más grandes
        },
        locate: true, // false - Esto evitará la superposición visual de la detección del código de barras en la interfaz.
        src: '/test/fixtures/code_128/image-001.jpg' // or 'data:image/jpg;base64,' + data
      },
      (err) => {
        if (err) {
          console.error("Error al inicializar Quagga:", err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );

    Quagga.onDetected(onDetected);

    return () => {
      Quagga.offDetected(onDetected);
    };
    // Cleanup: Detener el escáner cuando el componente se desmonta
    // return () => {
    //   Quagga.stop();
    // };
  }, []);

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
              <Box height={500} ref={scannerContainerRef}>
                {/* Me falta decodificar ese "code" */}
                <Input type="text" name="code" value={code} id="codeBarra" />
              </Box>

              <FormLabel>Nombre Producto</FormLabel>
              <Input type="text" name="code" />
            </FormControl>
          </form>
        </Box>
      </Grid>
    </>
  );
};
export default Carga;
