import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      style={{ height: "100%" }}
      className="cardProduct"
      cover={
        <Link to={`/product/${product.id}`} state={{ product }}>
          <img
            key={product.id}
            style={{
              width: "100%",
              transition: "0.5s ease-in-out",
              transform: hovered ? "scale(1.01)" : "scale(1)",
            }}
            src={hovered ? product.imgS[1] : product.img}
            alt={product.title}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          />
        </Link>
      }
    >
      <Meta title={product.title} />
      <p>${product.price}</p>
      {product.stock < 1 ? <Tag>SIN STOCK</Tag> : null}
    </Card>
  );
};
export default ProductCard;
