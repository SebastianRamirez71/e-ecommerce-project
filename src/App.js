import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ProductView from "./ProductView/ProductView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <ProductView />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
