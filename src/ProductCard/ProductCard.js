import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  img,
  stock,
  price,
  imgS,
  product,
  sizes,
}) => {
  console.log(id)
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const toDescription = () => {
    navigate(`/product/${id}`, {
      state: {
        id,
        title,
        img,
        stock,
        price,
        imgS,
        product,
        sizes,
      },
    });
  };

  return (
    <Card
      style={{ height: "100%" }}
      className="cardProduct"
      onClick={toDescription}
      cover={
        <img
        
          key={id}
          style={{ cursor:"pointer",
            width: "100%",
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
      <Meta title={title} />
      <p>${price}</p>
      {stock < 1 ? <Tag>SIN STOCK</Tag> : null}
    </Card>
  );
};
export default ProductCard;
