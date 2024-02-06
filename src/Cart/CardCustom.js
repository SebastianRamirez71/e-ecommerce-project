import React from "react";
import ButtonCustom from "../Button/ButtonCustom";
import { DeleteOutlined } from "@ant-design/icons";
import { useCart } from "../Hooks/userCart";
function CardCustom({ img, size, price, title, quantity, id, location }) {
  const { cart, clearCart, addToCart, clearProduct } = useCart();
  const priceQuantity = price * quantity;

  const sizeSelected = location.size;
  return (
    <div>
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
            <DeleteOutlined
              style={{ fontSize: 18 }}
              onClick={() => clearProduct(location)}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
              padding: "0 8px",
              justifyContent: "space-between",
            }}
          >
            <ButtonCustom location={location} sizeSelected={sizeSelected} />
            <strong style={{ marginTop: 10, marginLeft: 4 }}>
              ${priceQuantity}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCustom;
