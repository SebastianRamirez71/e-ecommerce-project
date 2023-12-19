import React, { useState } from "react";
import { Avatar, Input, List } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

const SearchProducts = ({ products, id, title, img, stock, price, imgS, product, sizes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

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
        onChange={handleSearch}
        style={{
          width: 220,
        }}
      />

      {searchQuery && (
        <List
          dataSource={filteredProducts}
          renderItem={(product) => (
            <Link
          to={`/product/${id}`}
          state={{ product, imgS, title, stock, price, img, id, sizes }}>
            <List.Item key={id}>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={56} src={img} />}
                title={title}
                description={` $${price}`}
              />
            </List.Item>
            </Link>
          )}
        />
      )}
    </div>
  );
};

export default SearchProducts;
