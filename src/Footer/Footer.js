import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Divider } from "antd";
function Footer() {
  return (
    <div>
         <Divider />
      <div>
        <ShoppingCartOutlined style={{fontSize:32}} />
        <h4>ENVIAMOS TU COMPRA</h4>
        <p>Entregas a todo el pais</p>
      </div>
      <footer style={{fontSize:12}}>
        <p>
          Hecho con React, CSS y Ant Desing por {' '}
          <a 
          href="se.com"
          target="_blank">
          Sebastian Ramirez
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
