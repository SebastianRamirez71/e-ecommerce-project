import React from "react";
import { useLocation } from "react-router-dom";
import Category from "../Category/Category";
import NavBar from "../NavBar/NavBar";
import { Carousel, Divider, Image, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { Radio } from "antd";

function ProductView() {
  const location = useLocation();
  const { product } = location.state;

  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <div>
      <NavBar />
      <Category />
      <div className="container" style={{ justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            gridTemplateColumns: "1fr 2fr",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "350px", height: "200px" }}>
            <Carousel autoplay>
              {product.imgS.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt={`img${index}`}
                    style={{ width: "100%" }}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div style={{ width: "300px", marginTop: "20px" }}>
            <Meta title={product.title} />
            <p>${product.price}</p>
            {product.stock < 1 ? <Tag>SIN STOCK</Tag> : null}
            <Divider />
            <Radio.Group
              onChange={onChange}
              style={{
                marginTop: 16,
              }}
            >
              {product.sizes.map((p) =>
                product.stock < 1 ? (
                  <Radio.Button value={p} disabled>
                    {p}
                  </Radio.Button>
                ) : (
                  <Radio.Button value={p}>{p}</Radio.Button>
                )
              )}
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
