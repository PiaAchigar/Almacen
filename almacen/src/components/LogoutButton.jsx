import { NavLink } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../store/states/user";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <NavLink to="/">
      <Button
        type="buttom"
        backgroundColor="rgb(0,128,101)"
        textColor="white"
        width={150}
        onClick={() => {
          dispatch(logout())}}
      >
        SALIR
      </Button>
    </NavLink>
  );
};

export default LogoutButton;
