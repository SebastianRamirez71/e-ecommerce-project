import React from "react";
import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
  
function CarouselP({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings} >
          {products.map((product) => (
            <Card 
              className="bg-white h-[450px] text-black rounded-xl"
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
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselP;
