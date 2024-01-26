import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { app } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const auth = getAuth(app);
function SignUp({ open, onCancel, setUser, isRegister, setOpen }) {
  const [formErrros, setFormErrors] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [user, setUserForm] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firestore = getFirestore(app);


  async function createUser(email, password) {
    try {
      const infoUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setOpen(false);
      console.log(infoUsuario.user.uid);
      const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
      setDoc(docuRef, { email: email });
      setUserForm("");
      setEmail("");
      setPassword("");
    } catch (error) {
      const errors = { email: "", password: "", user: "" };
      if (error.code === "auth/email-already-in-use") {
        errors.email = "Ese email ya está registrado";
      } else if (error.code === "auth/invalid-email") {
        errors.email = "Ese email no es válido";
      } else if (error.code === "auth/operation-not-allowed") {
        alert("Operación no permitida.");
      } else if (error.code === "auth/weak-password") {
        errors.password = "Contraseña débil";
      } else {
        errors.email = "Se produjo un error al ingresar";
      }
      setFormErrors(errors);
    }
  }


  const LogIn = (email, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {
        setOpen(false);
        setUser(usuarioFirebase);
        setUserForm("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        const errors = { email: "", password: "", user: "" };
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/wrong-password"
        ) {
          errors.email =
            "El correo electrónico o la contraseña son incorrectos";
        }

        setFormErrors(errors);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.emailField.value;
    const password = e.target.passwordField.value;
    setFormErrors({ email: "", password: "", user: "" });

    if (validateForm()) {
      if (isRegister) {
        createUser(email, password);
      }

      if (!isRegister) {
        LogIn(email, password);
      }
    }
  };

  const validateForm = () => {
    const errors = { email: "", password: "", user: "" };
    if (!email) {
      errors.email = "Ingrese un correo electrónico";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El formato del correo electrónico no es válido";
    }

    if (!password) {
      errors.password = "Ingrese una contraseña";
    }

    if (!user) {
      errors.user = "Ingrese un nombre de usuario";
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
              <label style={{ marginBottom: 0 }}>Usuario</label>
              <Input
                placeholder="Juan2002"
                id="userField"
                style={{ width: "100%" }}
                onChange={(e) => setUserForm(e.target.value)}
              />
              <div style={{ color: "red" }}>{formErrros.user}</div>
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
                type="email"
                id="emailField"
                placeholder="youremail@gmail.com"
                style={{ width: "100%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ color: "red" }}>{formErrros.email}</div>
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
                id="passwordField"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ color: "red", marginBottom: "8px" }}>
                {formErrros.password}
              </div>
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
