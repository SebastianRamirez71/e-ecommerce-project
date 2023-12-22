import React from "react";
import NavBar from "./NavBar/NavBar";
import Category from "./Category/Category";

import Product from "./Product/Product";
import { Spin } from "antd";
import Footer from "./Footer/Footer";


function Home({ products, loading }) {
  return (
    <>
      {loading ? (
        <div
          className="example"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <NavBar products={products} />
          <Category />
          <Product clothes={products} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
