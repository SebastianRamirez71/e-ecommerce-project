import React from "react";
import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { Carousel } from 'flowbite-react';

function CarouselP({products}) {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      {/* Aquí puedes usar el array de productos (products) */}
      {products.map((product) => (
        <Carousel>
        <Card
              style={{ marginBottom: "20px" }}
              className="cardProduct"
              cover={
                <img
                  style={{ width: "100%" }}
                  src={product.img}
                  alt={product.title}
                />
              }
            >
              <Meta title={product.title} />

              <p>${product.price}</p>
              {product.stock > 0 ? <Tag>SIN STOCK</Tag> : null}
            </Card>
        </Carousel>
      ))}
    </div>
  );
}

export default CarouselP;
