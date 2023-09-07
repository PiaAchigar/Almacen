import { ChakraProvider, Stack } from "@chakra-ui/react";
// import Layout from './components/layout/Layout'
import { RouterApp } from "./router/routers";
//import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Stack display="grid" direction="column"  h="100%" placeItems="center">
        <RouterApp />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
