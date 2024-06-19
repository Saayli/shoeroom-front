import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="container">
      <h2>Mon Panier</h2>
      {cartItems.length === 0 ? <p>Le panier est vide.</p> : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.libelle} - {item.qty} x {item.prix}€
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
