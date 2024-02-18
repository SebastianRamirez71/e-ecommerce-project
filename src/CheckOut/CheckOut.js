import React, { useContext, useEffect, useState } from "react";
import Navbar from "../NavBar/NavBar";
import { Form, Input, Card, Divider, Tooltip, Button, Result } from "antd";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import PurchaseSuccess from "./PurchaseSuccess";
import "./CheckOut.css";
import { CartContext } from "../context/CartContext";
import CardCustom from "../Cart/CardCustom";
import { SmileOutlined } from "@ant-design/icons";
import FooterCustom from "../FooterCustom/FooterCustom";

function CheckOut({ location, products }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [validate, setValidate] = useState();
  const [showPurchaseSuccess, setShowPurchaseSuccess] = useState(false);

  const { cart, clearCart } = useContext(CartContext);

  useEffect(() => {
    validateForm();
  }, [name, email, phone, address]);
  const validateForm = () => {
    if (name == "" || email == "" || phone == null || address == "") {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };
  const handleSubmit = (e) => {
    validateForm();
    e.preventDefault();
  };
  const handleValuesChange = (changedValues, allValues) => {
    validateForm();
  };
  const handlePurchase = () => {
    setShowPurchaseSuccess(true);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  let totalCost = 0;
  for (const product of cart) {
    totalCost += product.price * product.quantity;
  }

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Navbar products={products} />
        <Category />
        {cart < 1 ? (
          <CheckOutEmpty />
        ) : showPurchaseSuccess ? (
          <PurchaseSuccess clearCart={clearCart} />
        ) : (
          <div className="checkout-container" style={{ padding: 20 }}>
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
                    onChangeCapture={handleSubmit}
                    onValuesChange={handleValuesChange}
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
                        <Input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
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
                        <Input onChange={(e) => setName(e.target.value)} />
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
                        <Input onChange={(e) => setAddress(e.target.value)} />
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
                        style={{
                          width: "100%",
                        }}
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
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
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexDirection: "column",
                  }}
                >
                  {cart.map((product) => (
                    <CardCustom
                      img={product.img}
                      size={product.size}
                      price={product.price}
                      title={product.title}
                      addToCart={product.addToCart}
                      clearProduct={product.clearProduct}
                      quantity={product.quantity}
                      id={product.id}
                      location={product}
                      sizeSelected={product.sizeSelected}
                    />
                  ))}
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
                  <div style={{ textAlign: "start", alignItems: "center" }}>
                    <h5>Total: </h5>
                    <Link to={"/home"}>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          cursor: "pointer",
                          color: "#007bff",
                          textAlign: "start",
                        }}
                      >
                        VER MAS PRODUCTOS
                      </button>
                    </Link>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <h5>${totalCost}</h5>
                    {validate ? (
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          cursor: "pointer",
                          color: "#007bff",
                        }}
                        onClick={handlePurchase}
                      >
                        COMPRAR
                      </button>
                    ) : (
                      <Tooltip title="Complete sus datos" placement="left">
                        <button
                          style={{ border: "none", backgroundColor: "white" }}
                          disabled
                        >
                          COMPRAR
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </footer>
              </Card>
            </div>
          </div>
        )}
      </div>
      <FooterCustom />
    </div>
  );
}

export default CheckOut;

function CheckOutEmpty() {
  return (
    <>
      <Result
        icon={""}
        title="Su carrito está vacio"
        extra={
          <Link to={"/home"}>
            <Button type="primary">Elejir productos</Button>
          </Link>
        }
      />
    </>
  );
}
