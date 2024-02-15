import {
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Category from "../Category/Category";
import "./ContactPage.css";
import Footer from "../Footer/Footer"
function ContactPage() {
  return (
    <>
      <NavBar />
      <Category />
      <h3>CONTACTO</h3>
      <div
        className="container-cards-contact"
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          textAlign: "center",

          marginTop: 30,
          width: "100%",
        }}
      >
        <Card
          style={{
            backgroundColor: "#F5F5F5",
            width: 300,
            height: 250,
          }}
        >
          <PhoneOutlined style={{ fontSize: 40 }} />
          <h4 style={{ marginTop: 12 }}>Llamanos</h4>
          <p>
            TEL: 0800-325-9410 Contactate de lunes a viernes de 8:30 a 17:00hs
          </p>
        </Card>
        <Card
          style={{
            backgroundColor: "#F5F5F5",
            width: 300,
            height: 250,
          }}
        >
          <WhatsAppOutlined style={{ fontSize: 40 }} />
          <h4 style={{ marginTop: 12 }}>Escribinos</h4>
          <p>ventas@tienda-ficticia.ar</p>
        </Card>
        <Card
          style={{
            backgroundColor: "#F5F5F5",
            width: 300,
            height: 250,
          }}
        >
          <MailOutlined style={{ fontSize: 40 }} />
          <h4 style={{ marginTop: 12 }}>Llamanos</h4>
          <p>Contactate de lunes a viernes de 8:30 a 17:00hs</p>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
