import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Vérifie si le produit est déjà dans le panier
      const exist = prevItems.find(item => item.id === product.id);
      if (exist) {
        // Incrémenter la quantité
        return prevItems.map(item =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        );
      }
      // Ajouter un nouveau produit
      return [...prevItems, { ...product, qty: 1 }];
    });
  };

  const value = { cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
