import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const firestore = getFirestore(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });



  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((usuarioFirebase) => {
      setLoading(false);
      if (usuarioFirebase) {
        setUser(usuarioFirebase);
      }
    });

    return () => unsubscribe();
  }, []);

  async function createUser(email, password, setOpen) {
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
    } catch (error) {
      console.log(error);
    }
  }

  const LogIn = (email, password, setOpen) => {
    const errors = { email: "", password: "" };
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((usuarioFirebase) => {

        setUser(usuarioFirebase);
        setEmail("");
        setOpen(false);
      })
      .catch((error) => {
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

  const signOut = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        createUser,
        LogIn,
        signOut,
        formErrors,
        setFormErrors,
        setEmail,
        password,
        setPassword,
        email,
      }}
    >
      {!loading && children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};
