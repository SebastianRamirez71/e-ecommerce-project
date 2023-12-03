import { Card, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Products from "../ProductsJSON";
import "./Product.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import Carousel from "../Carousel/Carousel";

function Product() {
  const productsOffer = [...Products].sort((a, b) => a.price - b.price);
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
      <div className="row mr-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-6 col-sm-6 col-md-6 col-lg-6"
            style={{ marginBottom: "15px" }}
          >
            <Card
              style={{ height: "100%" }}
              className="cardProduct"
              cover={

                <Link to={`/product/${product.id}`} state={{ product }}>
                  <img
                    style={{ width: "100%" }}
                    src={product.img}
                    alt={product.title}
                  />
                </Link>
              }
            >
              <Meta title={product.title} />
              <p>${product.price}</p>
              {product.stock > 0 ? <Tag>SIN STOCK</Tag> : null}
            </Card>
          </div>
        ))}
      </div>
      <Carousel products={productsOffer} />
    </div>
  );
}

export default Product;
