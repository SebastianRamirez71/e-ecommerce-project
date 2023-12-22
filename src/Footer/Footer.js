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
    </div>
  );
}

export default Footer;
