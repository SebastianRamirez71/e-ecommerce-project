import React, { useState, useRef, useEffect } from "react";
import { Avatar, Input, List } from "antd";
import { useNavigate } from "react-router-dom";
import "./SearchProducts.css";
const { Search } = Input;

const SearchProducts = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();
  const searchContainerRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setShowList(!!e.target.value);
  };

  const handleItemClick = (productId) => {
    toDescription(productId);
    setShowList(false);
  };

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setShowList(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div
      ref={searchContainerRef}
      style={{
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
          width: 170,
        }}
      />

      {showList && searchQuery && (
        <List
          dataSource={filteredProducts}
          renderItem={(product) => (
            <List.Item
              style={{ cursor: "pointer" }}
              key={product.id}
              onClick={() => handleItemClick(product.id)}
              className="hover-effect"
            >
              <List.Item.Meta
                style={{ textAlign: "start" }}
                avatar={<Avatar shape="square" size={54} src={product.img} />}
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
