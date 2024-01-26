import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useMediaQuery } from "@mui/material";

function Category() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ul
      className="categories"
      style={{
        listStyleType: "none",
        textAlign: "center",
        marginBottom: "30px",
        marginTop: "30px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        padding: "0",
      }}
    >
      <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
        <li style={{ margin: "0 15px" }}>INICIO</li>
      </Link>
      {isMobile ? <Cart isMobile={isMobile} /> : ""}
      {isMobile ? "" : <li style={{ margin: "0 15px" }}>CONTACTO</li>}
      <li style={{ margin: "0 15px" }}>INFO</li>
    </ul>
  );
}

export default Category;
