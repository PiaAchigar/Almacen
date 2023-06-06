import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
// import Layout from '../components/layout/Layout'
// import { Details } from '../pages/Details'
// import { Home } from '../pages/Home'
import LoginForm from "../pages/LoginForm";
import Principal from "../pages/Principal";
import Carga from "../pages/Carga";
import Retirar from "../pages/Retirar";
import Productos from "../pages/Productos";
import Actualizar from "../pages/Actualizar";
import Register from "../pages/RegisterForm";
// import { User } from '../pages/User'
import { useSelector } from "react-redux";

export const RouterApp = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        {user.status === "unlogged" && (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route index path="/" element={<LoginForm />} />
          </>
        )}
        {user.status === "logged" && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/principal" element={<Principal />} />
            <Route path="/carga" element={<Carga />} />
            <Route path="/retirar" element={<Retirar />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/actualizar" element={<Actualizar />} />
            <Route path="*" element={<Navigate to="/principal" replace/>}/>
          </>
        )}

        {/* <Route exact={true} path="/" element={<Layout />}> */}
      </Routes>
    </BrowserRouter>
  );
};
