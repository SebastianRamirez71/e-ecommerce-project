import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import Products from "../ProductsJSON";
import "./Product.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import Carousel from "../Carousel/Carousel";

function Product() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const handleFilterChange = (filterType) => {
    let sortedProducts = [];

    if (filterType === "lowToHigh") {
      sortedProducts = [...Products].sort((a, b) => a.price - b.price);
    } else if (filterType === "highToLow") {
      sortedProducts = [...Products].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };
  return (
    <div className="container">
      <FilterProducts onFilterChange={handleFilterChange} />
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-6">
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
          </div>
        ))}
      </div>
      <Carousel products = {filteredProducts}/>
    </div>
  );
}

export default Product;
