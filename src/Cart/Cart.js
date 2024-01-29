import {
  CloseOutlined,
  DeleteOutlined,
  MinusOutlined,
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
        <div>
          <div
            className="container-items"
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "110px", height: "110px", objectFit: "contain" }}
              alt="Campera"
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/274/538/products/img_4411-d77a4fe99d3634214816989626625499-640-0.webp"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "start",
                  padding: "0 8px", // Agregado un padding para separar del borde
                }}
              >
                <div>
                  <p style={{ fontSize: 18, margin: 0 }}>Campera Striker</p>
                  <p style={{ fontSize: 14, margin: 0 }}>Talle: L</p>
                </div>
                <DeleteOutlined style={{ fontSize: 18 }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: 0,
                  textAlign: "start",
                  padding: "0 8px",
                  marginTop: 20,
                }}
              >
                <div>
                  <button><MinusOutlined /></button>1<button><PlusOutlined /></button>
                </div>
                <strong>$18923</strong>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Cart;
