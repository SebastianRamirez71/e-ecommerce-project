import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardCarousel({ product, title, price, img, imgS, stock, id, sizes }) {
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
          src={hovered ? imgS[1] : img}
          alt={title}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
      }
    >
      <Link
        to={`/product/${title}`}
        state={{ product, imgS, title, stock, price, img, id, sizes }}
      >
        <Meta title={title} />
      </Link>
      <p>${price}</p>
      {stock > 0 ? <Tag>SIN STOCK</Tag> : null}
    </Card>
  );
}

export default CardCarousel;
