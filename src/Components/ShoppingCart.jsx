import React from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cart, removeFromCart }) {
  return (
    <div className="shopping-cart">
      {cart.length > 0 ? (
        <ul className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <span className="product-name">{item.name}</span>
                <span className="product-quantity">
                  Quantity: {item.quantity}
                </span>
                <span>Cost: ${item.price.toFixed(2)}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </ul>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCart;
