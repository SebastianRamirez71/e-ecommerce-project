import React, { useState } from "react";
import { App, Button, Col, Drawer, Image, Menu, Row, Space } from "antd";
import { Input } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import "./NavBar.css";

const { Search } = Input;

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [size, setSize] = useState("large");
  const onClose = () => {
    setOpenSearch(false);
  };
  return (
    <div
    className="navBar"
      style={{
        height: "100%",
        display: "flex",

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
          <span style={{ fontSize: 20, marginLeft: 5 }}>INICIO</span>
        </Col>

        <Col flex="0 1 50px" style={{ display: "flex" }}>
          <SearchOutlined
            style={{ fontSize: 35, marginRight: "5px" }}
            onClick={() => {
              setOpenSearch(true);
            }}
          />
        </Col>
      </Row>

      <div className="headerMenu" style={{ maxWidth:"980px"}}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AppMenu />
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
        title={<SearchMenu />}
        placement="right"
        size={size}
        onClose={onClose}
        open={openSearch}
      ></Drawer>
    </div>
  );
}

function AppMenu({ isInLine = false }) {
  return (
    <Menu
      mode={isInLine ? "vertical" : ""}
      className="menuOpen"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row align="middle" justify={isInLine ? "center" : ""}>
        <Col xs={isInLine ? 12 : 8}>
          {isInLine ? null : (
            <Search
              placeholder="Buscar"
              style={{  borderColor: "black", width:200 }}
            />
          )}
        </Col>
        <Col xs={isInLine ? 24 : 8} style={{ textAlign: "center" }}>
          <Image
            width={350}
            preview={false}
            src={
              isInLine
                ? ""
                : "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/274/538/themes/common/logo-1912741912-1692334118-ade6bc1eae5bf162bf182280d8cfcb781692334118-480-0.png?0"
            }
          />
        </Col>
        <Col xs={isInLine ? 12 : 8} style={{ textAlign: "center" }}>
          {isInLine ? (
            <div>
              <Button style={{ marginBottom: 8 }}>Crear Cuenta</Button>
              <Button>Iniciar Sesion</Button>
            </div>
          ) : (
            <div style={{marginLeft:"30px"}}>
              <Button style={{ marginRight: 8 }}>Crear Cuenta</Button>
              <Button>Iniciar Sesion</Button>
            </div>
          )}
        </Col>
      </Row>
    </Menu>
  );
}

function SearchMenu() {
  return (
    <div style={{ display: "flex" }}>
      <Input
        placeholder="Buscar"
        style={{ height: 40, color: "black", marginLeft: "auto" }}
      />
      <SearchOutlined style={{ fontSize: 30, paddingLeft: "10px" }} />
    </div>
  );
}

export default NavBar;
