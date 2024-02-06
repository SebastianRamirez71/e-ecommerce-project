import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../../context/authentication.context";
import { CartContext } from "../../context/CartContext";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const { cart } = useContext(CartContext);
  console.log(cart);
  if (!user || cart.length === 0) {
    return <Navigate to="/home" replace />;
  } else {
    return children;
  }
};

export default Protected;
