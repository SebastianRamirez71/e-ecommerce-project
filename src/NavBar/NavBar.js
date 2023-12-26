import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar, Button, Col, Drawer, Image, List, Menu, Row } from "antd";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import SearchProducts from "../SearchProducts/SearchProducts";
import { ThemeContext } from "../Services/theme/theme.context";
import ToggleTheme from "../Services/theme/ToggleTheme";
const { Search } = Input;

function NavBar({ products }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [size, setSize] = useState("large");
  const onClose = () => {
    setOpenSearch(false);
  };

  const {theme} = useContext(ThemeContext);
  console.log(theme)
  return (
    <div
      className="navBar"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row
        style={{ paddingLeft: 12, paddingTop: 12, textAlign: "left" }}
        className="menuIcon"
      >
        <Col flex="1 1 200px">
          <MenuOutlined
            style={{ fontSize: 30 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </Col>

        <Col flex="0 1 50px" style={{ display: "flex" }}>
          <SearchOutlined
            style={{ fontSize: 35 }}
            onClick={() => {
              setOpenSearch(true);
            }}
          />
        </Col>
      </Row>

      <div className="headerMenu" style={{ justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AppMenu products={products} />
        </div>
      </div>

      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closeable={false}
      >
        <AppMenu isInLine />
      </Drawer>
      <Drawer
        title={<SearchMenu products={products} />}
        placement="right"
        size={size}
        onClose={onClose}
        open={openSearch}
      ></Drawer>
    </div>
  );
}

function AppMenu({ isInLine = false, products }) {
  return (
    <Menu
      mode={isInLine ? "vertical" : ""}
      className="menuOpen"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Establecer altura mínima para ocupar la pantalla completa
      }}
    >
      <Row align="middle" justify={isInLine ? "center" : ""}>
        <Col xs={isInLine ? 12 : 8}>
          {isInLine ? null : <SearchProducts products={products} />}
        </Col>
        <Col
          xs={isInLine ? 24 : 8}
          style={{
            textAlign: "center",
            width: 400,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/home"}>
            <Image
              width={330}
              preview={false}
              src={
                isInLine
                  ? ""
                  : "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/274/538/themes/common/logo-1912741912-1692334118-ade6bc1eae5bf162bf182280d8cfcb781692334118-480-0.png?0"
              }
            />
          </Link>
        </Col>
        <Col xs={isInLine ? 12 : 8} style={{ textAlign: "center" }}>
          {isInLine ? (
            <div>
              <Button style={{ marginBottom: 8 }}>Crear Cuenta</Button>
              <Button>Iniciar Sesion</Button>
            </div>
          ) : (
            <div style={{ marginLeft: "120px", display: "flex" }}>
              <Button style={{ marginRight: 8 }}>Crear Cuenta</Button>
              <ToggleTheme />
            </div>
          )}
        </Col>
      </Row>
    </Menu>
  );
}

function SearchMenu({ products }) {
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
      style={{ display: "flex", position: "relative", alignItems: "center" }}
    >
      <Input
        placeholder="Buscar"
        onChange={handleSearch}
        style={{ height: 40, color: "black", marginLeft: "auto" }}
      />
      {showList && searchQuery && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
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
        </div>
      )}
      <SearchOutlined style={{ fontSize: 30 }} />
    </div>
  );
}

export default NavBar;
