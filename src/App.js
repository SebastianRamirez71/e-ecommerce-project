import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductView from "./ProductView/ProductView";
import { useEffect, useState } from "react";

import { CartProvider } from "./context/CartContext";
import CheckOut from "./CheckOut/CheckOut";
import Protected from "./Button/routes/Protected";
import { AuthenticationContextProvider } from "./context/authentication.context";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const PRODUCTS =
    "https://657cb893853beeefdb99e17c.mockapi.io/api/v1/products";
  useEffect(() => {
    setLoading(true);
    fetch(PRODUCTS, {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const productsMapped = data.map((product) => ({
          ...product,
        }));
        setProducts(productsMapped);
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={products} loading={loading} />,
    },
    {
      path: "/home",
      element: <Home products={products} loading={loading} />,
    },
    {
      path: "/product/:title",
      element: <ProductView products={products} loading={loading} />,
    },
    {
      path: "/checkout",
      element: (
        <Protected>
          <CheckOut loading={loading} />
        </Protected>
      ),
    },
  ]);

  return (
    <div className="App">
      <AuthenticationContextProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthenticationContextProvider>
    </div>
  );
}

export default App;
