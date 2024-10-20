// components/Cart.tsx
import React, { useEffect, useState } from 'react';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<number[]>([]);

  const fetchCart = async () => {
    const res = await fetch('/api/cart');
    const data = await res.json();
    setCart(data.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>Product ID: {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
