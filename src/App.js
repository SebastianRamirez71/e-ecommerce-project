import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductView from "./ProductView/ProductView";
import { useEffect, useState } from "react";
import SignUp from "./SignUp/SignUp";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const PRODUCTS =
    "";
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
      path:"/register",
      element:<SignUp loading={loading} />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
