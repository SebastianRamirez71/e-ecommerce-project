import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Category from "../Category/Category";
import NavBar from "../NavBar/NavBar";
import { Carousel, Divider, Image, Modal, Spin, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { Radio } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import "./ProductView.css";
import ButtonCustom from "../Button/ButtonCustom";
import Footer from "../Footer/Footer";
function ProductView({ loading, products }) {
  const location = useLocation();
  const { imgS, stock, price, title, size } = location.state || {};
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sizeSelected, setSizeSelected] = useState();

  const onChange = (e) => {
    setSizeSelected(e.target.value);
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
    <>
      {loading ? (
        <div
          className="example"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div>
          <NavBar products={products} />
          <Category />
          <div className="container" style={{ justifyContent: "center" }}>
            <div
              style={{
                gridTemplateColumns: "1fr 2fr",
                justifyContent: "center",
              }}
            >
              <div
                style={{ justifyContent: "center" }}
                className="card-product"
              >
                <div className="container-product">
                  <Carousel autoplay>
                    {imgS.map((img, id) => (
                      <div key={id}>
                        <Image
                          src={img}
                          alt={`img${id}`}
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
                      footer={false}
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
                    {stock < 1 ? (
                      <Radio.Button value={size} disabled>
                        {size}
                      </Radio.Button>
                    ) : (
                      <Radio.Button value={size}>{size}</Radio.Button>
                    )}
                  </Radio.Group>
                  {stock > 0 ? (
                    <ButtonCustom
                      setQuantity={setQuantity}
                      quantity={quantity}
                      location={location.state}
                      sizeSelected={sizeSelected}
                    />
                  ) : null}
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <ul
                      style={{ listStyleType: "none", margin: 0, padding: 0 }}
                    >
                      <li style={{ marginBottom: "8px" }}>
                        <h5 style={{ margin: 0 }}>Descripción</h5>
                      </li>
                      <li style={{ marginBottom: "4px" }}>
                        Adecuado para: Entrenamiento
                      </li>
                      <li style={{ marginBottom: "4px" }}>
                        Material: Mix de materiales sintéticos
                      </li>
                      <li style={{ marginBottom: "4px" }}>
                        Beneficios: Amortiguación
                      </li>
                      <li>
                        Composición: Capellada: Mesh y Sintético / Suela: Goma
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
export default ProductView;
