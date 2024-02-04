import {
  CloseOutlined,
  DeleteOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { Badge, Divider, Drawer, Space, Tooltip } from "antd";
import React, { useContext, useId, useState } from "react";
import ButtonCustom from "../Button/ButtonCustom";
import { useCart } from "../Hooks/userCart";
import emptty from "./emptyCart.png";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../context/authentication.context";

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
  const priceQuantity = price * quantity;

  return (
    <>
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
              alignItems: "center",
              textAlign: "start",
              padding: "0 8px",
            }}
          >
            <ButtonCustom location={location} sizeSelected={sizeSelected} />
            <strong style={{ marginTop: 10, marginLeft: 4 }}>
              ${priceQuantity}
            </strong>
          </div>
        </div>
      </div>
      <Divider orientation="left" />
    </>
  );
}

function Cart({ isMobile }) {
  const cartCheckBoxId = useId();
  const [open, setOpen] = useState(false);
  const { cart, clearCart, addToCart, clearProduct, setCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const { user } = useContext(AuthenticationContext);
  console.log(user);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  let totalCost = 0;
  for (const product of cart) {
    totalCost += product.price * product.quantity;
  }

  const viewProducts = () => {
    setOpen(false);
  };

  const buyHandler = () => {
    if (user === null) {
      alert("DEBE  INICIAR SESION PARA COMPRAR");
    } else {
      setOpen(false);
    }
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
            {cart.length < 1 ? (
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
          {cart.length >= 1 ? (
            <footer
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div style={{ textAlign: "start" }}>
                <h5>Total: </h5>
                <Link to={"/home"}>
                  <p onClick={viewProducts}>VER MAS PRODUCTOS</p>
                </Link>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <h5>${totalCost}</h5>
                {user ? (
                  <Link to={"/checkout"}>
                    <p onClick={buyHandler}>COMPRAR</p>
                  </Link>
                ) : (
                  <Tooltip title="Inicia sesion para comprar">
                    <p>COMPRAR</p>
                  </Tooltip>
                )}
              </div>
            </footer>
          ) : (
            ""
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
