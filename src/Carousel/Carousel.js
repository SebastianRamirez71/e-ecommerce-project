import React from "react";
import { Divider } from "antd";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../ProductCard/CardCarouse";

function CarouselP({ products }) {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <Divider />
      <h3>PRODUCTOS EN OFERTA</h3>

      <Carousel responsive={responsive}>
        {products.map(
          ({ id, title, img, stock, price, imgS, product, sizes }) => (
            <CardCarousel
            key={id}
              id={id}
              title={title}
              img={img}
              imgS={imgS}
              stock={stock}
              price={price}
              product={product}
              sizes={sizes}
            />
          )
        )}
      </Carousel>
    </div>
  );
}

export default CarouselP;
