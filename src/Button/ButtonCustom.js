import { Button } from "antd";
import React from "react";
import { useCart } from "../Hooks/userCart";
import toast, { Toaster } from "react-hot-toast";

function ButtonCustom({ location, sizeSelected }) {
  const { addToCart } = useCart();

  const notify = () =>
    toast("Se agrego un producto", {
      icon: "🛒",
      position: "top-right",
    });

  const handleAddToCart = () => {
    addToCart(location);
    notify();
  };

  return (
    <div style={{ textAlign: "start", marginTop: 10 }}>
      {sizeSelected ? (
        <Button onClick={handleAddToCart}>Agregar</Button>
      ) : (
        <Button disabled onClick={handleAddToCart}>
          Agregar
        </Button>
      )}
      
    </div>
  );
}

export default ButtonCustom;
