import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useMediaQuery } from "@mui/material";
import "./Category.css";
function Category() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const scrollToOffers = () => {
    const section = document.getElementById("offers");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        gap: 12,
      }}
    >
      <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
        <li style={{}}>INICIO</li>
      </Link>
      {isMobile ? <Cart isMobile={isMobile} /> : ""}
      {isMobile ? (
        <li style={{}} onClick={scrollToOffers}>
          {" "}
          OFERTAS
        </li>
      ) : (
        <li style={{ margin: "0 15px" }}>CONTACTO</li>
      )}
      {isMobile ? null : (
        <Link to={"/info"} style={{ textDecoration: "none", color: "black" }}>
          <li style={{ margin: "0 15px" }}>INFO</li>
        </Link>
      )}
    </ul>
  );
}

export default Category;
