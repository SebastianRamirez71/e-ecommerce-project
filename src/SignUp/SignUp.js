import React, { useContext } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { AuthenticationContext } from "../context/authentication.context";
import { is } from "@react-spring/shared";

function SignUp({ open, onCancel, isRegister, setOpen }) {
  const {
    LogIn,
    createUser,
    Toaster,
    formErrors,
    setFormErrors,
    email,
    password,
    setEmail,
    setPassword,
  } = useContext(AuthenticationContext);

  const signUpHandler = async () => {
    try {
      await createUser(email, password, setOpen);
    } catch (error) {}
  };

  const signInHandler = async () => {
    try {
      await LogIn(email, password, setOpen);
    } catch (error) {}
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isRegister) {
        signUpHandler(email, password);
      }

      if (!isRegister) {
        signInHandler(email, password);
      }
    }
  };

  const validateForm = () => {
    const errors = { email: "", password: "" };
    if (!email) {
      errors.email = "Ingrese un correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El formato del correo electrónico no es válido";
    }

    if (!password) {
      errors.password = "Ingrese una contraseña";
    }

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
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
              <label style={{ margin: 0 }}>Email:</label>
              <Input
                type="email"
                id={isRegister ? "emailFieldRegister" : "emailFieldLogin"}
                placeholder={isRegister ? "youremail@gmail.com" : ""}
                style={{ width: "100%" }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div style={{ color: "red" }}>{formErrors.email}</div>
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
              <Input.Password
                style={{ width: "100%" }}
                id={isRegister ? "passwordFieldRegister" : "passwordFieldLogin"}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div style={{ color: "red", marginBottom: "8px" }}>
                {formErrors.password}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
        <Toaster />
      </Modal>
    </>
  );
}

export default SignUp;
