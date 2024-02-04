import React from "react";
import Navbar from "../NavBar/NavBar";
import { Button, Form, Input, Card, Select, Divider } from "antd";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import "./CheckOut.css";
const { Option } = Select;

function CheckOut() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="54">+54</Option>
      </Select>
    </Form.Item>
  );

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div>
      <Navbar />
      <Category />
      <div
        className="checkout-container"
        style={{ padding: 20 }}
      >
        <div className="checkout-card">
          <Card
            title="Identificación"
            bordered={true}
            style={{
              width: "100%",
            }}
            className="card"
          >
            <div>
              <Form
                {...layout}
                labelCol={{
                  flex: "110px",
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese su email",
                      },
                    ]}
                  >
                    <Input type="email" />
                  </Form.Item>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese su nombre",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Apellido"
                    name="Apellido"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese su apellido",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>
                <Form.Item
                  name="phone"
                  label="Telefono/Movil"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese su numero de telefono/movil",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "100%",
                    }}
                    type="number"
                  />
                </Form.Item>

                <Form.Item label=" ">
                  <Button type="primary" htmlType="submit">
                    Continuar
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>

        <div style={{ width: "100%", maxWidth: "600px" }}>
          <Card
            title="Resumen de la compra"
            bordered={true}
            style={{
              width: "100%",
            }}
            className="card"
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <img
                src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/274/538/products/img_3488-d2735fc0efee10980d16976581879935-640-0.webp"
                width={100}
                alt="Product"
              />
              <div>
                <p>Campera duck T.M</p>
                <p>1 unidad</p>
                <p>$ 98323</p>
              </div>
            </div>
            <Divider />
            <footer
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <div style={{ textAlign: "start" }}>
                <h5>Total: </h5>
                <Link to={"/home"}>
                  <p>VER MAS PRODUCTOS</p>
                </Link>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <h5>$22323</h5>
                <Link to={"/checkout"}>
                  <p>COMPRAR</p>
                </Link>
              </div>
            </footer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
