// src/pages/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(null);

  const addToCart = (item) => {
    setCartItem(item);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
