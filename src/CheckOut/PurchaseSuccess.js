import React from "react";
import { Button, Result } from "antd";
const PurchaseSuccess = () => (
  <Result
    status="success"
    title="Gracias por tu compra!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[<Button key="buy">Buy Again</Button>]}
  />
);
export default PurchaseSuccess;
