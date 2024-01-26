import {
  CloseOutlined,
  DeleteOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import { Divider, Drawer, Space } from "antd";
import React, { useId, useState } from "react";

function Cart({ isMobile }) {
  const cartCheckBoxId = useId();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {isMobile ? (
        <li onClick={showDrawer} style={{ cursor: "pointer" }}>
          CARRITO
        </li>
      ) : (
        <ShoppingCartOutlined style={{ fontSize: 28 }} onClick={showDrawer} />
      )}
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <Drawer
        size="78px"
        title="Carrito de compra"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          isMobile ? (
            <Space>
              <CloseOutlined onClick={onClose} />
            </Space>
          ) : (
            ""
          )
        }
      >
        <div
          className="container-items"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          <img
            style={{ width: "100%" }}
            alt="Campera"
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/274/538/products/img_4411-d77a4fe99d3634214816989626625499-640-0.webp"
          />
          <div>
            <strong>Campera Duck</strong> - $2393
          </div>
          <footer style={{ textAlign: "center", alignItems: "center" }}>
            <small>Cantidad: 1</small>
            <PlusOutlined />
            <Divider />
            <DeleteOutlined />
          </footer>
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
