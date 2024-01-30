import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useCart } from "../Hooks/userCart";

function ButtonCustom({ location, sizeSelected }) {
  const { addToCart } = useCart();

  return (
    <div style={{ textAlign: "start", marginTop: 10 }}>
      {sizeSelected ? (
        <Button onClick={() => addToCart(location)}>Agregar</Button>
      ) : (
        <Button disabled onClick={() => addToCart(location)}>
          Agregar
        </Button>
      )}
    </div>
  );
}

export default ButtonCustom;
