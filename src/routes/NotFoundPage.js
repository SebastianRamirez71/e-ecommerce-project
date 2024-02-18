import React from "react";
import animation from "./404.svg";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <img
        src={animation}
        style={{ width: 350, height: "auto", justifyContent: "center" }}
      />
      <p>
        Parece que estás intentando acceder a una página que no existe.
      </p>
      <Link to={"/"} style={{ fontSize: 18, color: "#6C63FF" }}>
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFoundPage;
