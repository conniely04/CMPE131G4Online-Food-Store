import React, { useState } from "react";
import "../Components/ShoppingCart.css";
function ShoppingCartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "1 lb of Carrot",
      price: 0.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/carrot.png",
    },
    {
      id: 2,
      name: "1 lb of Broccoli",
      price: 1.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/broccoli.png",
    },
    {
      id: 3,
      name: "1 lb of Broccoli",
      price: 1.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/broccoli.png",
    },
    {
      id: 4,
      name: "1 lb of Broccoli",
      price: 1.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/broccoli.png",
    },
    {
      id: 5,
      name: "1 lb of Broccoli",
      price: 1.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/broccoli.png",
    },
    {
      id: 6,
      name: "1 lb of Broccoli",
      price: 1.99,
      quantity: 1,
      weight: 1.0,
      image: "/images/broccoli.png",
    },
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart-page">
      {/* Render the ShoppingCart component and pass the 'cart' data and 'setCart' function as props */}
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      {/* Rest of the ShoppingCartPage component content */}
    </div>
  );
}

export default ShoppingCartPage;
