
import React, { useState } from "react";

import Products from "../ProductsJSON";
import "./Product.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import Carousel from "../Carousel/Carousel";
import ProductCard from "../ProductCard/ProductCard";
import { FloatButton } from 'antd';

function Product() {
  const productsOffer = [...Products].sort((a, b) => a.price - b.price);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  const handleFilterChange = (filterType) => {
    let sortedProducts = [];

    if (filterType === "lowToHigh") {
      sortedProducts = [...Products].sort((a, b) => a.price - b.price);
    } else if (filterType === "highToLow") {
      sortedProducts = [...Products].sort((a, b) => b.price - a.price);
    } else if (filterType === "stock") {
      sortedProducts = Products.filter((product) => product.stock > 0);
    } else if (filterType === "Filtrar") {
      sortedProducts = Products;
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
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Carousel products={productsOffer} />
      <FloatButton.BackTop  />
    </div>
  );
}

export default Product;
