import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Dropdown,
  Image,
  List,
  Menu,
  Row,
} from "antd";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import SearchProducts from "../SearchProducts/SearchProducts";
import SignUp from "../SignUp/SignUp";
import { app } from "../firebase";
import { UserOutlined } from "@ant-design/icons";
import "../SearchProducts/SearchProducts.css";
import Cart from "../Cart/Cart";
import { AuthenticationContext } from "../context/authentication.context";
function NavBar({ products }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [size] = useState("large");
  const onClose = () => {
    setOpenSearch(false);
  };

  return (
    <div className="navBar">
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

      <div className="headerMenu">
        <div className="menuButtons">
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
  const [open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState();
  const [hovered, setHovered] = useState(false);
  const { signOut, user } = useContext(AuthenticationContext);

  const onCreate = () => {
    setOpen(false);
  };

  const items = [
    user
      ? {
          label: (
            <div key="0">
              <button
                className="hover-effect"
                onClick={signOut}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Cerrar Sesión
              </button>
            </div>
          ),
          key: "0",
        }
      : {
          label: (
            <div
              key="0"
              onClick={() => {
                setOpen(true);
                setIsRegister(true);
              }}
            >
              <button
                className="hover-effect"
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Crear Sesión
              </button>
            </div>
          ),
          key: "0",
        },
    user
      ? null
      : {
          label: (
            <div
              key="1"
              onClick={() => {
                setOpen(true);
                setIsRegister(false);
              }}
            >
              <button
                className="hover-effect"
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                Iniciar Sesión
              </button>
            </div>
          ),
          key: "1",
        },
  ];
  return (
    <Menu
      mode={isInLine ? "vertical" : ""}
      className="menuOpen"
      style={{
        display: "flex",
        alignItems: "center",
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
            width: 900,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/home"}>
            <Image
              width={200}
              preview={false}
              src={
                isInLine
                  ? ""
                  : "https://acdn.mitiendanube.com/stores/001/137/436/themes/common/logo-940256125-1627572206-1c2970bac272936e49c05e2f165fdeb61627572207-480-0.webp"
              }
            />
          </Link>
        </Col>
        <Col xs={isInLine ? 12 : 8} style={{ textAlign: "center" }}>
          {isInLine ? (
            <div>
              {user ? (
                <div>
                  <p>Bienvenido</p>
                  <Button onClick={signOut}>Cerrar Sesion</Button>
                </div>
              ) : (
                <>
                  <Button
                    style={{ marginBottom: 8 }}
                    onClick={() => {
                      setOpen(true);
                      setIsRegister(true);
                    }}
                  >
                    Crear Cuenta
                  </Button>

                  <Button
                    onClick={() => {
                      setOpen(true);
                      setIsRegister(false);
                    }}
                  >
                    Iniciar Sesion
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                gap: "15px",
                alignItems: "center", // Alinea los elementos verticalmente
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Dropdown
                placement="bottom"
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <UserOutlined
                      onMouseOver={() => setHovered(true)}
                      onMouseOut={() => setHovered(false)}
                      style={{
                        fontSize: 28,
                      }}
                    />
                  </a>
                </Dropdown>
              </div>
              <div>
                <Cart />
              </div>
            </div>
          )}
        </Col>
      </Row>

      <SignUp
        setIsRegister={setIsRegister}
        isRegister={isRegister}
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
        setOpen={setOpen}
      />
    </Menu>
  );
}

// Search product in MOBILE
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
