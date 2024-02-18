import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../context/authentication.context";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/home" replace />;
  } else {
    return children;
  }
};

export default Protected;
