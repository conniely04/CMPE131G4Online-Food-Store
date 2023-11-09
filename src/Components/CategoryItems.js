import React, { useState, useEffect } from "react";
import "../Components/CategoryItems.css";

const CategoryItem = ({ selectedCategory, cart, setCart }) => {
  // Define data for items in each category
  const itemsData = {
    "Pantry staples": [
      { id: 1, name: "Egg", image: "egg.jpeg", price: "$0.99 per dozen" },
      { id: 2, name: "Bread", image: "bread.jpeg", price: "$2.49 per loaf" },
      {
        id: 3,
        name: "Green Beans",
        image: "beans.jpeg",
        price: "$1.99 per pound",
      },
      { id: 4, name: "Rice", image: "rice.jpeg", price: "$0.99 per pound" },
      { id: 5, name: "Pasta", image: "pasta.jpeg", price: "$1.29 per pound" },
      {
        id: 6,
        name: "Flour",
        image: "flour.jpeg",
        price: "$2.49 per 5 lb bag",
      },
      {
        id: 7,
        name: "Cane Sugar",
        image: "sugar.jpeg",
        price: "$1.99 per 4 lb bag",
      },
      {
        id: 8,
        name: "Salt",
        image: "salt.jpeg",
        price: "$0.99 per 26 oz container",
      },
      {
        id: 9,
        name: "Canned Tomatoes",
        image: "cannedtomatoes.webp",
        price: "$1.49 per can",
      },
      {
        id: 10,
        name: "Oats",
        image: "oats.webp",
        price: "$2.99 per 2 lb container",
      },
    ],
    Vegetables: [
      {
        id: 1,
        name: "Carrot",
        image: "carrots.jpeg",
        price: "$1.49 per pound",
      },
      {
        id: 2,
        name: "Spinach",
        image: "spinnach.jpeg",
        price: "$2.99 per pound",
      },
      {
        id: 3,
        name: "Cabbage",
        image: "cabbage.jpeg",
        price: "$1.99 per pound",
      },
      {
        id: 4,
        name: "Broccoli",
        image: "broccoli3.jpg",
        price: "$1.79 per pound",
      },
      {
        id: 5,
        name: "Bell Peppers",
        image: "bellpepper.jpeg",
        price: "$1.99 each",
      },
      {
        id: 6,
        name: "Zucchini",
        image: "zucchini.jpeg",
        price: "$1.49 per pound",
      },
      {
        id: 7,
        name: "Cauliflower",
        image: "cauliflower.jpeg",
        price: "$2.49 each",
      },
      { id: 8, name: "Onions", image: "onions.jpeg", price: "$0.99 per pound" },
      {
        id: 9,
        name: "Potatoes",
        image: "potatoes.jpeg",
        price: "$0.79 per pound",
      },
      {
        id: 10,
        name: "Sweet Potatoes",
        image: "sweetpotatoes.jpeg",
        price: "$1.29 per pound",
      },
    ],
    Fruits: [
      { id: 1, name: "Banana", image: "banana.jpeg", price: "$0.59 per pound" },
      { id: 2, name: "Apple", image: "apples.jpeg", price: "$1.29 per pound" },
      {
        id: 3,
        name: "Strawberry",
        image: "strawberry2.webp",
        price: "$3.99 per pound",
      },
      { id: 4, name: "Orange", image: "orange.jpeg", price: "$0.79 each" },
      { id: 5, name: "Grapes", image: "grapes.jpeg", price: "$2.49 per pound" },
      {
        id: 6,
        name: "Pineapple",
        image: "pineapple.jpeg",
        price: "$2.99 each",
      },
      {
        id: 7,
        name: "Watermelon",
        image: "watermellon.jpeg",
        price: "$0.49 per pound",
      },
      { id: 8, name: "Mango", image: "mango.jpeg", price: "$1.49 each" },
      { id: 9, name: "Kiwi", image: "kiwi.jpeg", price: "$0.59 each" },
      {
        id: 10,
        name: "Blueberries",
        image: "blueberries.jpg",
        price: "$3.99 per pint",
      },
    ],
    Proteins: [
      {
        id: 1,
        name: "Chicken Breast",
        image: "chicken-breast.png",
        price: "$4.99 per pound",
      },
      {
        id: 2,
        name: "Ground Beef",
        image: "groundbeef.png",
        price: "$3.99 per pound",
      },
      { id: 3, name: "Salmon", image: "salmon.png", price: "$7.99 per pound" },
      {
        id: 4,
        name: "Tofu",
        image: "tofu.png",
        price: "$2.49 per 14 oz block",
      },
      {
        id: 5,
        name: "Pork Chops",
        image: "porkchop.png",
        price: "$5.49 per pound",
      },
      {
        id: 6,
        name: "Ground Turkey",
        image: "groundturkey.png",
        price: "$3.49 per pound",
      },
      { id: 7, name: "Shrimp", image: "shrimp.png", price: "$8.99 per pound" },
      {
        id: 8,
        name: "Beef Steak",
        image: "beefsteak.png",
        price: "$6.99 per pound",
      },
      {
        id: 9,
        name: "Tempeh",
        image: "tempeh.png",
        price: "$2.99 per 8 oz pack",
      },
      {
        id: 10,
        name: "Lamb Chops",
        image: "lambchop.png",
        price: "$9.99 per pound",
      },
    ],
    Grains: [
      {
        id: 1,
        name: "Brown Rice",
        image: "rice.jpeg",
        price: "$1.29 per pound",
      },
      { id: 2, name: "Quinoa", image: "quinoa.jpeg", price: "$3.99 per pound" },
      {
        id: 3,
        name: "Whole Wheat Pasta",
        image: "pasta.jpeg",
        price: "$1.49 per pound",
      },
      { id: 4, name: "Barley", image: "barley.jpeg", price: "$1.99 per pound" },
      // { id: 5, name: 'Bulgur', image: 'grain5.png', price: '$2.49 per pound' },
      {
        id: 6,
        name: "Oatmeal",
        image: "oats.webp",
        price: "$2.99 per 2 lb container",
      },
      {
        id: 7,
        name: "Couscous",
        image: "couscous.jpeg",
        price: "$2.99 per pound",
      },
      // { id: 8, name: 'Farro', image: 'grain8.png', price: '$3.49 per pound' },
      {
        id: 9,
        name: "Polenta",
        image: "polento.webp",
        price: "$1.79 per pound",
      },
      {
        id: 10,
        name: "Millet",
        image: "millet.jpeg",
        price: "$2.99 per pound",
      },
    ],
    Dairy: [
      { id: 1, name: "Milk", image: "milk.png", price: "$2.49 per gallon" },
      { id: 2, name: "Eggs", image: "egg.jpeg", price: "$1.99 per dozen" },
      {
        id: 3,
        name: "Cheddar Cheese",
        image: "cheddarcheese.png",
        price: "$4.99 per pound",
      },
      {
        id: 4,
        name: "Greek Yogurt",
        image: "greekyogurt.png",
        price: "$3.49 per 32 oz container",
      },
      {
        id: 5,
        name: "Butter",
        image: "butter.png",
        price: "$2.99 per 1 lb pack",
      },
      {
        id: 6,
        name: "Sour Cream",
        image: "sourcream.png",
        price: "$1.99 per 16 oz container",
      },
      {
        id: 7,
        name: "Cottage Cheese",
        image: "cottagecheese.png",
        price: "$2.99 per 24 oz container",
      },
      {
        id: 8,
        name: "Mozzarella Cheese",
        image: "mozzarellacheese.png",
        price: "$3.99 per pound",
      },
      {
        id: 9,
        name: "Cream Cheese",
        image: "creamcheese.png",
        price: "$1.99 per 8 oz pack",
      },
      {
        id: 10,
        name: "Plain Yogurt",
        image: "plainyogurt.png",
        price: "$2.49 per 32 oz container",
      },
    ],
    Beverages: [
      {
        id: 1,
        name: "Bottled Water",
        image: "beverage1.png",
        price: "$0.99 per 16.9 oz bottle",
      },
      {
        id: 2,
        name: "Soda",
        image: "beverage2.png",
        price: "$1.49 per 2-liter bottle",
      },
      {
        id: 3,
        name: "Orange Juice",
        image: "beverage3.png",
        price: "$2.99 per 64 oz carton",
      },
      {
        id: 4,
        name: "Apple Juice",
        image: "beverage4.png",
        price: "$2.49 per 64 oz carton",
      },
      {
        id: 5,
        name: "Coffee",
        image: "beverage5.png",
        price: "$7.99 per 12 oz bag",
      },
      {
        id: 6,
        name: "Tea Bags",
        image: "beverage6.png",
        price: "$2.99 per 20-count box",
      },
      {
        id: 7,
        name: "Sports Drink",
        image: "beverage7.png",
        price: "$1.29 per 32 oz bottle",
      },
      {
        id: 8,
        name: "Almond Milk",
        image: "beverage8.png",
        price: "$2.99 per 64 oz carton",
      },
      {
        id: 9,
        name: "Energy Drink",
        image: "beverage9.png",
        price: "$2.49 per 16 oz can",
      },
      {
        id: 10,
        name: "Iced Tea",
        image: "beverage10.png",
        price: "$1.99 per 64 oz bottle",
      },
    ],
    "Sea Food": [
      { id: 1, name: "Tuna", image: "seafood1.png", price: "$7.99 per pound" },
      { id: 2, name: "Cod", image: "seafood2.png", price: "$8.99 per pound" },
      {
        id: 3,
        name: "Shrimp",
        image: "seafood3.png",
        price: "$9.99 per pound",
      },
      {
        id: 4,
        name: "Salmon",
        image: "seafood4.png",
        price: "$10.99 per pound",
      },
      {
        id: 5,
        name: "Tilapia",
        image: "seafood5.png",
        price: "$7.99 per pound",
      },
      {
        id: 6,
        name: "Mussels",
        image: "seafood6.png",
        price: "$5.99 per pound",
      },
      { id: 7, name: "Crab", image: "seafood7.png", price: "$12.99 per pound" },
      {
        id: 8,
        name: "Lobster",
        image: "seafood8.png",
        price: "$16.99 per pound",
      },
      {
        id: 9,
        name: "Scallops",
        image: "seafood9.png",
        price: "$13.99 per pound",
      },
      {
        id: 10,
        name: "Swordfish",
        image: "seafood10.png",
        price: "$11.99 per pound",
      },
    ],
  };

  const [selectedItem, setSelectedItem] = useState(null);
  const items = itemsData[selectedCategory];

  useEffect(() => {
    // Calculate the total item count in the cart
    const itemCount = cart.reduce((total, item) => total + item.count, 0);
    // Update the shopping cart icon (you might need to adjust the icon class)
    // Assuming you have an element with the id 'shopping-cart-icon'
    const cartIconElement = document.getElementById("shopping-cart-icon");
    if (cartIconElement) {
      cartIconElement.textContent = itemCount;
    }
  }, [cart]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.count += 1;
    } else {
      updatedCart.push({ ...item, count: 1 });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      if (existingItem.count === 1) {
        const index = updatedCart.indexOf(existingItem);
        updatedCart.splice(index, 1);
      } else {
        existingItem.count -= 1;
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="category-items">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`item-box ${selectedItem === item ? "selected" : ""}`}
          onClick={() => handleItemClick(item)}
        >
          <div
            className="item-image"
            style={{ backgroundImage: `url('/foodImages/${item.image}')` }}
          ></div>
          <div className="item-line"></div>
          <p className="item-name">{item.name}</p>
          <div className="item-count">
            <button
              className="remove-from-cart-button"
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            <span className="item-count-text">
              {cart.find((cartItem) => cartItem.id === item.id)?.count || 0} lb
            </span>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>
          <p className="item-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
