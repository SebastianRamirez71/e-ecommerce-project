import React, { useState } from "react";

import Products from "../ProductsJSON";
import "./Product.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import Carousel from "../Carousel/Carousel";
import ProductCard from "../ProductCard/ProductCard";
import { FloatButton } from "antd";
import { MagicMotion } from "react-magic-motion";
function Product() {
  const productsOffer = [...Products].sort((a, b) => a.price - b.price);
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [searchText, setSearchText] = useState("");
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
      <input
        id="searchInput"
        placeholder="Harry Potter"
        type="text"
        maxLength={70}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          backgroundColor: "rgba(238, 238, 238)",
          lineHeight: 1.25,
          width: "15rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "0.5rem",
          display: "block",
          fontSize: "0.875rem",
        }}
      />
      <FilterProducts onFilterChange={handleFilterChange} />
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <div className="row mr-auto">
          {filteredProducts
            .filter(({ title }) =>
              title
                .toLowerCase()
                .trim()
                .includes(searchText.toLowerCase().trim())
            )
            .map(({ product, title, price, img, imgS, stock, id, sizes }) => (
              <div
                key={id}
                className="col-6 col-sm-6 col-md-6 col-lg-6"
                style={{ marginBottom: "15px" }}
              >
                <ProductCard
                  id={id}
                  title={title}
                  img={img}
                  imgS={imgS}
                  stock={stock}
                  price={price}
                  product={product}
                  sizes={sizes}
                />
              </div>
            ))}
        </div>
        
        
        <Carousel products={productsOffer} />
        <FloatButton.BackTop />
      </div>
    </div>
  );
}

export default Product;
