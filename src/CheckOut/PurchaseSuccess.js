import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";



function PurchaseSuccess({ clearCart }) {
  return (
    <Result
      status="success"
      title="Gracias por tu compra!"
      extra={[
        <Link to={"/home"}>
          <Button onClick={clearCart}>Volver</Button>
        </Link>,
      ]}
    />
  );
}
export default PurchaseSuccess;
