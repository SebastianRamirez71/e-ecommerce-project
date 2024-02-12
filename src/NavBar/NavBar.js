import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Divider,
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
import { UserOutlined } from "@ant-design/icons";
import "../SearchProducts/SearchProducts.css";
import Cart from "../Cart/Cart";
import { AuthenticationContext } from "../context/authentication.context";
import { CartContext } from "../context/CartContext";
import { Toaster } from "react-hot-toast";

function NavBar({ products }) {
  const [openMobile, setOpenMobile] = useState(false);
  const [isRegisterMobile, setIsRegisterMobile] = useState();

  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [size] = useState("large");
  const { signOut, user } = useContext(AuthenticationContext);

  const onCreate = () => {
    setOpenMobile(false);
  };

  const onClose = () => {
    setOpenSearch(false);
  };

  const mobileAccounts = (
    <div
      style={{
        marginTop: "100%",
        display: "flex",
        textAlign: "center",
        justifyContent: "start",
        gap: 8,
        fontSize: 16,
      }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        >
          <path
            d="M25,13c0-6.6166992-5.3828125-12-12-12S1,6.3833008,1,13c0,3.383606,1.413208,6.4386597,3.673645,8.6222534  c0.0529175,0.0689087,0.1156006,0.1247559,0.1889648,0.171814C7.0038452,23.7769165,9.8582764,25,13,25  s5.9961548-1.2230835,8.1373901-3.2059326c0.0733643-0.0470581,0.1360474-0.1029053,0.1889648-0.171814  C23.586792,19.4386597,25,16.383606,25,13z M13,2.5c5.7900391,0,10.5,4.7104492,10.5,10.5  c0,2.4549561-0.8532715,4.7108154-2.2702637,6.5008545c-0.6505127-2.0978394-2.5076294-3.7401123-5.0281372-4.4957886  c1.3735962-0.9940796,2.2720337-2.6046143,2.2720337-4.4244995c0-3.0141602-2.4550781-5.4663086-5.4736328-5.4663086  s-5.4736328,2.4521484-5.4736328,5.4663086c0,1.8198853,0.8984375,3.4304199,2.2720337,4.4244995  c-2.5205078,0.7556763-4.3776245,2.3979492-5.0281372,4.4957886C3.3532715,17.7108154,2.5,15.4549561,2.5,13  C2.5,7.2104492,7.2099609,2.5,13,2.5z M9.0263672,10.5805664c0-2.1870117,1.7822266-3.9663086,3.9736328-3.9663086  s3.9736328,1.7792969,3.9736328,3.9663086S15.1914063,14.546875,13,14.546875S9.0263672,12.7675781,9.0263672,10.5805664z   M6.0307617,20.8319702C6.2562256,18.0820313,9.1723633,16.046875,13,16.046875s6.7437744,2.0351563,6.9692383,4.7850952  C18.1130981,22.4855347,15.6757202,23.5,13,23.5S7.8869019,22.4855347,6.0307617,20.8319702z"
            fill="#1D1D1B"
          />
        </svg>
      </div>

      {user ? (
        <div>
          <p onClick={signOut}>Cerrar Sesion</p>
        </div>
      ) : (
        <>
          <p
            onClick={() => {
              setOpenMobile(true);
              setIsRegisterMobile(true);
            }}
          >
            Crear Cuenta
          </p>
          |
          <p
            onClick={() => {
              setOpenMobile(true);
              setIsRegisterMobile(false);
            }}
          >
            Iniciar Sesion
          </p>
        </>
      )}
    </div>
  );

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
          <AppMenu
            products={products}
            onCreate={onCreate}
            setOpen={setOpenMobile}
            open={openMobile}
            isRegister={isRegisterMobile}
            setIsRegister={setIsRegisterMobile}
          />
        </div>
      </div>

      <Drawer
        width={300}
        style={{ border: "none", outline: "none", fontSize: 16 }}
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closeable={false}
        footer={mobileAccounts}
      >
        <Link to={"/info"} style={{ textDecoration: "none", color: "black" }}>
          <p>CONTACTO</p>
        </Link>
        <Divider />
        <Link to={"/info"} style={{ textDecoration: "none", color: "black" }}>
          <p>INFORMACION</p>
        </Link>
      </Drawer>
      <Drawer
        title={<SearchMenu products={products} />}
        placement="right"
        size={size}
        onClose={onClose}
        open={openSearch}
      ></Drawer>
      <Toaster />
    </div>
  );
}

function AppMenu({
  isInLine = false,
  products,
  setOpen,
  open,
  isRegister,
  setIsRegister,
}) {
  const { signOut, user } = useContext(AuthenticationContext);
  const { cart } = useContext(CartContext);

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
        height: "100%",
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
        <Col xs={isInLine ? 12 : 8} style={{ border: "none" }}>
          {isInLine ? null : (
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                gap: "15px",
                alignItems: "center",
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
                  trigger={["click"]}
                  placement="bottom"
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <UserOutlined
                      className="icon-container"
                      style={{
                        fontSize: 28,
                      }}
                    />
                  </a>
                </Dropdown>
              </div>
              <div>
                <Badge count={cart.length} className="icon-container">
                  <Cart />
                </Badge>
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
          size: selectedProduct.size,
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
