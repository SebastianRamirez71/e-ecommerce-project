import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
function Category() {
  return (
    <ul
      className="categories"
      style={{
        listStyleType: "none",
        textAlign: "center",
        marginBottom: "30px",
        marginTop:"30px"
      }}
    >
      <Link to={"/home"} style={{color:"black"}}>
        <li color="black">INICIO</li>
      </Link>
      <li>CARRITO</li>
      <li>INFO</li>
      <li>CONTACTO</li>
      <li>INFO</li>
    </ul>
  );
}

export default Category;
