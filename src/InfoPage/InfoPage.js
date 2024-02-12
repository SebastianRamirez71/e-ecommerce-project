import { Tabs } from "antd";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Category from "../Category/Category";
import {
  CommentOutlined,
  CreditCardOutlined,
  StockOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

function InfoPage({products}) {
  const childrenPayment = (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      <h3>Formas de pago</h3>
      <p>
        <strong>¿Cómo puedo pagar?</strong>
        <br />
        Podés pagar con los siguientes métodos de pago:
        <br />
        -Tarjetas de crédito emitidas por bancos: En 3 cuotas sin interés sin
        mínimo de compra y hasta 6 cuotas sin interés si tu compra supera los
        $100.000. (Válido solo para VISA, MASTERCARD Y AMEX) 💳
        <br />
        <br />
        <strong>¿Aceptan transferencias bancarias?</strong>
        <br />
        Si, La acreditación es de 1 a 3 días hábiles desde el momento en que se
        realizó el pago El pedido comenzará a gestionarse una vez acreditado el
        pago.
      </p>
    </div>
  );

  const childrenStock = (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      <h3>Consulta de stock</h3>
      <p>
        <strong>¿Hay algun limite de compra?</strong>
        <br />
        No. El único límite de compra que tenemos es el stock de nuestro e-Shop.
        Si deseas hacer una compra mayorista comunicate con nosotros al
        43823-2332 de Lunes a Viernes de 8:30 a 17hs
        <br />
        <br />
        <strong>¿Hacen ventas mayoristas?</strong>
        <br />
        Si deseás hacer una compra mayorista comunicate con nosotros:
        ventas@kill.com.ar
      </p>
    </div>
  );

  const childrenQuestion = (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      <h3>Consultas generales</h3>

      <p>
        <strong>¿Como se realizan los envios?</strong>
        <br />
        Trabajamos con: Andreani principalmente para despachar en todo Argentina
        pero podemos charlar el envio y medio que prefieras, una vez que nos
        contactamos finalizada tu compra coordinamos todo!
        <br />
        <br />
        <strong>¿Como cuido mis prendas?</strong>
        <br />
        Es fundamental que laves las prendas de nuestro showroom a mano y con
        agua fria para garantizar la vida util de la misma, si la prenda tiene
        estampas no planchar las mismas, si las telas son delicadas evitar el
        contacto directo con la plancha.
        <br />
        <br />
        <strong>¿Aceptan devoluciones?</strong>
        <br />
        Lamentablemente, en este momento no aceptamos devoluciones de productos.
        Nos esforzamos por ofrecer descripciones detalladas y precisas de
        nuestros productos para ayudarte a tomar una decisión informada antes de
        realizar tu compra.
      </p>
    </div>
  );

  return (
    <>
      <NavBar products={products} />
      <Category />
      <div>
        <h2 style={{ textAlign: "center" }}>INFORMACION</h2>
      </div>
      <div style={{ width: "100%", padding: "0 15px" }}>
        <Tabs defaultActiveKey="1" size="small" tabPosition="top" centered>
          <Tabs.TabPane icon={<StockOutlined />} tab="Stock" key="1">
            {childrenStock}
          </Tabs.TabPane>
          <Tabs.TabPane icon={<CreditCardOutlined />} tab="Pago" key="2">
            {childrenPayment}
          </Tabs.TabPane>
          <Tabs.TabPane icon={<CommentOutlined />} tab="Dudas" key="3">
            {childrenQuestion}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default InfoPage;
