import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { app } from "../firebase";
function SignUp({ open, onCancel, setUser, isRegister }) {
  console.log(isRegister);
  const crearUsuario = (email, password) => {
    console.log("vas a crear");
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        setUser(usuarioFirebase);
      });
  };

  const iniciarSesion = (email, password) => {
    console.log("iniciaste", email)
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        setUser(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegister) {
      crearUsuario(email, password);
    }

    if (!isRegister) {
      iniciarSesion(email, password);
    }
  };
  return (
    <>
      <Modal
        style={{
          maxWidth: "100%",
          justifyContent: "center",
          textAlign: "center",
          alignContent: "center",
        }}
        open={open}
        title={
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h5>{isRegister ? "Crear Cuenta" : "Iniciar Sesion"}</h5>
              <UserOutlined style={{ fontSize: 24, alignItems: "center" }} />
            </div>
          </>
        }
        footer={null}
        onCancel={onCancel}
        onOk={() => {
          //checkear
        }}
      >
        <Form
          onSubmitCapture={submitHandler}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: "100%",
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <div style={{ alignContent: "center", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                width: "100%",
                marginBottom: 8,
              }}
            >
              <label style={{ marginBottom: 0 }}>Usuario</label>
              <Input
                placeholder="Juan2002"
                id="userFi"
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                width: "100%",
                marginBottom: 8,
              }}
            >
              <label style={{ margin: 0 }}>Email:</label>
              <Input
                id="emailField"
                placeholder="youremail@gmail.com"
                style={{ width: "100%" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                width: "100%",
                marginBottom: 8,
              }}
            >
              <label style={{ margin: 0 }}>Contraseña:</label>
              <Input.Password style={{ width: "100%" }} id="passwordField" />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default SignUp;
