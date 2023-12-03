import React from "react";
import { useLocation } from "react-router-dom";
import Category from "../Category/Category";
import NavBar from "../NavBar/NavBar";
import { Carousel, Divider, Image } from "antd";

function ProductView() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <NavBar />
      <Category />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <Carousel autoplay>
            <div>
              <Image.PreviewGroup
                items={product.imgS}
              >
                <Image width={400} height={500} src={product.img} />
              </Image.PreviewGroup>
            </div>
          </Carousel>
          <div>
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
