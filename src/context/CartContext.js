import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];
  const [cart, setCart] = useState(storedCart);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {

    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("ASd")
    console.log('Product:', product);
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      const newCart = [...cart, newProduct];
      setCart(newCart);
    }

    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCountProducts(totalQuantity);
  };

  const clearProduct = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      const updatedCart = [...cart];

      if (cart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        updatedCart.splice(productIndex, 1);
      }

      const totalQuantity = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCart(updatedCart);
      setCountProducts(totalQuantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCountProducts(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        clearProduct,
        countProducts,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
