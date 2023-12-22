import React, { useEffect, useState } from "react";
import "./Product.css";
import FilterProducts from "../FilterProducts/FilterProducts";
import Carousel from "../Carousel/Carousel";
import ProductCard from "../ProductCard/ProductCard";
import { FloatButton } from "antd";

function Product({ clothes }) {
  useEffect(() => {
    setFilteredProducts(clothes);
  }, [clothes]);

  const productsOffer = [...clothes].sort((a, b) => a.price - b.price);
  const [filteredProducts, setFilteredProducts] = useState(clothes);
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (filterType) => {
    let sortedProducts = [];
    if (filterType === "lowToHigh") {
      sortedProducts = [...clothes].sort((a, b) => a.price - b.price);
    } else if (filterType === "highToLow") {
      sortedProducts = [...clothes].sort((a, b) => b.price - a.price);
    } else if (filterType === "stock") {
      sortedProducts = clothes.filter((product) => product.stock > 0);
    } else if (filterType === "Filtrar") {
      sortedProducts = clothes;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div
      className="container"
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      <FilterProducts onFilterChange={handleFilterChange} />

      <div
        style={{
          flexDirection: "column",
        }}
      >
        <div
          className="row mr-auto"
          style={{
            display: "flex",
          }}
        >
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
