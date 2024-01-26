import { create } from "@mui/material/styles/createTransitions";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // ver si el producto ya esta en el carrito
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart >= 0) {
      const newCart = structuredClone(cart);

    }
    setCart((prevState) => [
      ...prevState,
      {
        ...product
      },
    ]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
