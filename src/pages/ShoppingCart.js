import React, { useState } from "react";
import "../Components/ShoppingCart.css";
function ShoppingCartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Carrot",
      price: 3.99,
      quantity: 2,
      weight: "1.5 lbs",
      image: "/images/carrot.png",
    },
    {
      id: 2,
      name: "Broccoli",
      price: 12.99,
      quantity: 1,
      weight: "0.5 lbs",
      image: "/images/broccoli.png",
    },
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleIncrement = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 0) {
        item.quantity -= 1;
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="shopping-cart-page">
      <div className="top-half">
        <div className="top-left">
          <button className="white-button">Continue Shopping</button>
        </div>
        <div className="top-center">
          <h2>Items ({totalItems})</h2>
        </div>
        <div className="top-right">
          <button className="black-button">Checkout</button>
        </div>
        <hr className="divider" />
      </div>
      <div className="bottom-half">
        <div className="left-side">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="right-side">
          <div className="summary-box">
            <h1>Summary</h1>
            <p>
              Total Cost: $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <p>Tax: $0.88</p>
            <p>Total Weight: 2.0 lbs</p>
            <p>
              Total Cost (including Tax): $
              {(
                cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ) + 0.88
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCartPage;
