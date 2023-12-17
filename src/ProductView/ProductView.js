import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Category from "../Category/Category";
import NavBar from "../NavBar/NavBar";
import {
  Button,
  Carousel,
  Divider,
  Image,
  InputNumber,
  Modal,
  Tag,
} from "antd";
import Meta from "antd/es/card/Meta";
import { Radio } from "antd";
import {
  CreditCardOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./ProductView.css";
function ProductView() {
  const location = useLocation();
  console.log(location.state)
  const { imgS, stock,price, title, sizes } = location.state;

  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleInputChange = (value) => {
    if (value >= 1 && value <= stock) {
      setQuantity(value);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <NavBar />
      <Category />
      <div className="container" style={{ justifyContent: "center"}}>
        <div
          style={{
            gridTemplateColumns: "1fr 2fr",
            justifyContent: "center",
          }}
        >
          <div style={{  justifyContent: "center" }} className="card-product">
            <div  className="container-product">
              <Carousel autoplay>
                {imgS.map((img, index) => (
                  <div key={index}>
                    <Image
                      src={img}
                      alt={`img${index}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                ))}
              </Carousel>

             
            </div>
            <div
              style={{
                width: "300px",
                marginTop: "20px",
                marginLeft: "15px",
                textAlign: "start",
              }}
            >
              <Meta title={title} style={{ fontSize: 31 }} />
              <p style={{ fontSize: 31 }}>${price}</p>
              <div>
                <CreditCardOutlined />
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={showModal}
                >
                  {" "}
                  Conoce las promociones
                </a>
                <Modal
                  title="Promociones y medios de pago"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Divider />
                  <p>Promociones Bancarias</p>
                  <img
                    width={120}
                    src="https://www.dexter.com.ar/on/demandware.static/-/Sites-Dexter-Library/default/dwa300fdd1/images/payments-promotions/banco3cuotas.png"
                  />
                </Modal>
              </div>
              {stock < 1 ? <Tag>SIN STOCK</Tag> : null}
              <Divider />
              <p>Talle</p>
              <Radio.Group onChange={onChange}>
                {sizes.map((size) =>
                  stock < 1 ? (
                    <Radio.Button value={size} disabled>
                      {size}
                    </Radio.Button>
                  ) : (
                    <Radio.Button value={size}>{size}</Radio.Button>
                  )
                )}
              </Radio.Group>
              {stock > 0 ? (
                <div style={{ marginTop: "20px", textAlign: "start" }}>
                  <MinusOutlined
                    onClick={handleDecrease}
                    style={{ marginRight: "3px", width: "15px" }}
                  />
                  <InputNumber
                    value={quantity}
                    onChange={handleInputChange}
                    style={{ width: "40px", textAlign: "center" }}
                    max={stock}
                    controls={false}
                  />
                  <PlusOutlined
                    onClick={handleIncrease}
                    style={{ marginLeft: "3px", width: "15px" }}
                  />
                  <Button style={{ marginLeft: "10px" }}>Agregar</Button>
                </div>
              ) : null}
              <div
                style={{
                  padding:"10px",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                <ul style={{ textAlign: "start", margin:0 }}>
                  <h5>Descripcion</h5>
                  <li>Adecuado para: Entrenamiento</li>
                  <li>Material: Mix de materiales sintéticos</li>
                  <li>Beneficios: Amortiguación</li>
                  <li>
                    Composición: Capellada: Mesh y Sintético / Suela: Goma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
