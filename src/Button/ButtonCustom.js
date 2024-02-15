import { Button, Tooltip } from "antd";
import React from "react";
import { useCart } from "../Hooks/userCart";
import toast, { Toaster } from "react-hot-toast";
import "./ButtonCustom.css";
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
    <div style={{ textAlign: "start", marginTop: 10 }} className="button-custom">
      {sizeSelected ? (
        <button onClick={handleAddToCart}>
          <span>AGREGAR</span>
        </button>
      ) : (
        <Tooltip title="Seleccione un talle" placement="right">
          <button
            disabled
            onClick={handleAddToCart}
            style={{ cursor: "no-drop" }}
          >
            <span>AGREGAR</span>
          </button>
        </Tooltip>
      )}
    </div>
  );
}

export default ButtonCustom;
