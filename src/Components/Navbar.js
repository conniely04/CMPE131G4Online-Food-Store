import React from 'react';
import './Navbar.css';

const Navbar = () => {
  // Function to handle search when the user presses Enter
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Redirect or trigger a search action here
      console.log('Performing search for:', e.target.value);
    }
  };

  return (
    <div>
      {/* Top bar */}
      <div className="top-bar">
        <div className="store-name">Online Food Store</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products"
            onKeyDown={handleSearch}
          />
        </div>
        <div className="sign-in-shopping-cart">
          <button className="sign-in-button">Sign In</button>
          <img src="/cart.png" alt="Shopping Cart" className="shopping-cart-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
