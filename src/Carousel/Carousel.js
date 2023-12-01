import React from "react";
import { Card, Divider, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <div style={{marginBottom:"30px"}}>
    <Divider />
      <h3>PRODUCTOS EN OFERTA</h3>
    
        <Carousel responsive={responsive}  >
          {products.map((product) => (
            <Card
              style={{height:"100%", maxWidth:"450px", margin:"auto 0.5rem", justifyContent:"center", alignItems:"center"}}
              
              cover={
                <img
                  style={{ height:"100%" }}
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
        </Carousel>
        </div>
    
  );
}

export default CarouselP;
