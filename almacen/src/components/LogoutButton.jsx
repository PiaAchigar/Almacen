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
        backgroundColor="#1C750E"
        textColor="#8EFD5E"
        width={150}
        onClick={() => {
          dispatch(logout())
      console.log("salio")}}
      >
        SALIR
      </Button>
    </NavLink>
  );
};

export default LogoutButton;
