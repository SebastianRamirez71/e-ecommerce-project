import React, { useState } from "react";
import { Avatar, Input, List } from "antd";

const { Search } = Input;

const SearchProducts = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        onSearch={handleSearch}
        style={{
          width: 220,
        }}
      />

      <List
        dataSource={filteredProducts}
        renderItem={(product) => (
          <List.Item key={product.id}>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={56} src={product.img} />}
              title={product.title}
              description={` $${product.price}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchProducts;
