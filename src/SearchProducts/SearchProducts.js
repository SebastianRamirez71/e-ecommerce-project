import React, { useState } from "react";
import { Avatar, Input, List } from "antd";
import { useNavigate } from "react-router-dom";
import "./SearchProducts.css"
const { Search } = Input;

const SearchProducts = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const toDescription = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct) {
      navigate(`/product/${productId}`, {
        state: {
          id: selectedProduct.id,
          title: selectedProduct.title,
          img: selectedProduct.img,
          stock: selectedProduct.stock,
          price: selectedProduct.price,
          imgS: selectedProduct.imgS,
          sizes: selectedProduct.sizes,
        },
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "block",
        position: "absolute",
        left: 0,
        zIndex: 2000,
      }}
    >
      <Search
        placeholder="Remera blanca"
        onChange={handleSearch}
        style={{
          width: 220,
        }}
      />

      {searchQuery && (
        <List
          dataSource={filteredProducts}
          renderItem={(product) => (
            <List.Item
              style={{ cursor: "pointer" }}
              key={product.id}
              onClick={() => toDescription(product.id)}
              className="hover-effect"  // Agregamos una clase CSS para el efecto de hover
            >
              <List.Item.Meta
                avatar={<Avatar shape="square" size={56} src={product.img} />}
                title={product.title}
                description={` $${product.price}`}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default SearchProducts;
