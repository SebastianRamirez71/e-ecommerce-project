import React, { useEffect } from "react";
import { Button, Result } from "antd";
import { Link, useNavigate } from "react-router-dom";

function PurchaseSuccess({ clearCart }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      clearCart();
      navigate("/home")
    }, 5000);
  });
  return (
    <Result
      status="success"
      title="Gracias por tu compra!"

    />
  );
}
export default PurchaseSuccess;
