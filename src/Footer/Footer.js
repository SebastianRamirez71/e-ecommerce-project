import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Divider } from "antd";
function Footer() {
  const route = window.location.pathname;
  const pos = route === "/info" ? "fixed" : "relative";
  return (
    <div style={{}}>
      <Divider />
      <div>
        <ShoppingCartOutlined style={{ fontSize: 32 }} />
        <h4>ENVIAMOS TU COMPRA</h4>
        <p>Entregas a todo el pais</p>
      </div>
      <footer
        style={{
          fontSize: 12,
          position: pos,
          bottom: 0,
          width: "100%",
        }}
      >
        <p className="z-50 pt-4 mt-10 text-sm text-center border-t pb-28 sm:py-4 sm:text-md text-muted-foreground">
          Hecho con React.js, CSS y Firebase por{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-ramirez-64906b168/"
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            Sebastian Ramirez
          </a>
          .
        </p>

        <div className="fixed bottom-0 left-0 z-40 w-full h-24 bg-gradient-to-t from-background via-background to-transparent sm:hidden" />
      </footer>
    </div>
  );
}

export default Footer;
