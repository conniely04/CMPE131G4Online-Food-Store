// ItemDetail.js
import React, { useState } from 'react';




// this function will get the item detail as input
function ItemDetail(item) {
  const { name, price, description, weight, image} = item;
  const [quantity, setQuantity] = useState(0);

  

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-detail">
    <div className="image-container">
    <img
    loading="lazy"    
    src = {image}
  />
    </div>
      <div className="details-container">
        <h3>{name}</h3>
        <p className="price"> {price} EACH </p>
        <p className="weight">Weight ~ {weight} Lbs</p>
        <div className="quantity-container">
          <button onClick={handleDecreaseQuantity}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <p className="description"> {description}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDetail;