import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardCarousel({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      style={{
        height: "100%",
        maxWidth: "450px",
        margin: "auto 0.5rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      cover={
        <img
          style={{
            height: "100%",
            transition: "0.5s ease-in-out",
            transform: hovered ? "scale(1.01)" : "scale(1)",
          }}
          src={hovered ? product.imgS[1] : product.img}
          alt={product.title}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
      }
    >
      <Link to={`/product/${product.id}`} state={{ product }}>
        <Meta title={product.title} />
      </Link>
      <p>${product.price}</p>
      {product.stock > 0 ? <Tag>SIN STOCK</Tag> : null}
    </Card>
  );
}

export default CardCarousel;
