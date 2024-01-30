import {
  CloseOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { Divider, Drawer, Space } from "antd";
import React, { useEffect, useId, useState } from "react";
import ButtonCustom from "../Button/ButtonCustom";
import { useCart } from "../Hooks/userCart";
import emptty from "./emptyCart.png";
function CarItem({
  img,
  size,
  price,
  title,
  addToCart,
  clearProduct,
  quantity,
  id,
  location,
  sizeSelected,
}) {
  return (
    <div
      className="container-items"
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
      }}
      key={id}
    >
      <img
        style={{ width: "110px", height: "110px", objectFit: "contain" }}
        alt={title}
        src={img}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "start",
            padding: "0 8px",
          }}
        >
          <div>
            <p style={{ fontSize: 18, margin: 0 }}>{title}</p>
            <p style={{ fontSize: 14, margin: 0 }}>Talle: {size}</p>

            <p style={{ fontSize: 14, margin: 0 }}>Cantidad: {quantity}</p>
          </div>
          <DeleteOutlined style={{ fontSize: 18 }} onClick={clearProduct} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            textAlign: "start",
            padding: "0 8px",
          }}
        >
          <ButtonCustom location={location} sizeSelected={sizeSelected} />
        </div>
      </div>
    </div>
  );
}

function Cart({ isMobile }) {
  const cartCheckBoxId = useId();
  const [open, setOpen] = useState(false);
  const { cart, clearCart, addToCart, clearProduct, setCart } = useCart();
  console.log(cart);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {isMobile ? (
        <li onClick={showDrawer} style={{ cursor: "pointer" }}>
          CARRITO
        </li>
      ) : (
        <ShoppingCartOutlined style={{ fontSize: 28 }} onClick={showDrawer} />
      )}
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <Drawer
        title="Carrito de compra"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          isMobile ? (
            <Space>
              <CloseOutlined onClick={onClose} />
            </Space>
          ) : (
            ""
          )
        }
      >
        <div>
          <div
            className="container-items"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {cart < 1 ? (
              <>
                <img src={emptty} />
                <p style={{ textAlign: "center" }}>Su carrito esta vacio</p>
              </>
            ) : (
              cart.map((product) => (
                <CarItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  clearProduct={() => clearProduct(product)}
                  quantity={product.quantity}
                  location={product}
                  sizeSelected={product.size}
                  {...product}
                />
              ))
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
