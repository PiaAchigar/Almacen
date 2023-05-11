import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from '../components/layout/Layout'
// import { Details } from '../pages/Details'
// import { Home } from '../pages/Home'
import LoginForm from '../pages/LoginForm'
import Principal from "../pages/Principal"
import Carga from "../pages/Carga"
import Retirar from "../pages/Retirar"
import Productos from "../pages/Productos"
import Actualizar from "../pages/Actualizar"
import Register from "../pages/RegisterForm"
// import { User } from '../pages/User'

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route index path="/" element={<LoginForm />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/carga" element={<Carga />} />
        <Route path="/retirar" element={<Retirar />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/actualizar" element={<Actualizar />} />
        {/* <Route exact={true} path="/" element={<Layout />}> */}
      </Routes>
    </BrowserRouter>
  )
}