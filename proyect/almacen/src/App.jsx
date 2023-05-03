// import * as React from 'react'
// import {LoginForm} from './components/login/loginForm';


// export function App(){
//   return (
//    <>
//    <LoginForm/>
//    </>
//   )
// }
// export default App

import { ChakraProvider, Stack} from '@chakra-ui/react'
// import Layout from './components/layout/Layout'
import { RouterApp } from './router/routers'
//import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Stack direction={'column'} justifyContent="center" h="100%">
      <RouterApp />
      </Stack>
    </ChakraProvider>
  )
}

export default App