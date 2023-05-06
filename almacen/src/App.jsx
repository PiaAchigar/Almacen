import { ChakraProvider, Stack } from "@chakra-ui/react";
// import Layout from './components/layout/Layout'
import { RouterApp } from "./router/routers";
//import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Stack direction={"column"} justifyContent="center" h="100%">
        <RouterApp />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
