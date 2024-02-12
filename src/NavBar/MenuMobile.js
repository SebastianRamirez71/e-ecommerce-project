import { Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function MenuMobile() {
  return (
    <div
      style={{

        fontSize: 16,
      }}
    >
      {" "}
      <Divider />
      <Link>
        <p>CONTACTO</p>
      </Link>
      <Divider />
      <p>FAVORITOS</p>
    </div>
  );
}

export default MenuMobile;
