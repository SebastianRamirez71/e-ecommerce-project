import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, InputNumber } from "antd";
import React from "react";
import { useCart } from "../Hooks/userCart";

function ButtonCustom({ location }) {

  const { addToCart } = useCart();

  return (
    <div style={{ marginTop: "20px", textAlign: "start" }}>
      <Button

        onClick={() => addToCart(location)}
      >
        Agregar
      </Button>
    </div>
  );
}

export default ButtonCustom;
