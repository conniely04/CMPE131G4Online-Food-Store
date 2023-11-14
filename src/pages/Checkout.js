import React from 'react';
import '../Components/Checkout.css'; // Make sure this CSS file is updated with the styles provided

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-page1">
        <h2>Checkout</h2>
        <div className="customer-info">
          <h3>Customer Information</h3>
          <div className="input-container">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
          </div>
        </div>
        <div className="payment-info">
          <h3>Payment Information</h3>
          <div className="card-images">
            {/* Placeholder images for card types */}
            <img src="./images/visa.png" alt="Visa" />
            <img src="./images/mastercard.png" alt="MasterCard" />
            <img src="./images/american-express.png" alt="American Express" />
          </div>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Cardholder Name" />
          <input type="month" placeholder="Expiry Date" />
          {/* Wrap the CVV input in its own div */}
          <div className="input-container">
            <input type="number" placeholder="CVV" />
          </div>
        </div>
        <div className="billing-address">
          <h3>Billing Address</h3>
          <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="City" />
          {/* Wrap State/Province and Postal/Zip Code in their own divs */}
          <div className="input-container">
            <input type="text" placeholder="State/Province" />
            <input type="text" placeholder="Postal/Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
        <div className="current-cart">
          <h3>Current Cart</h3>
          {/* Display current cart items here */}
          <p>Item 1 - $10</p>
          <p>Item 2 - $20</p>
          <p>Total: $30</p>
        </div>
        <button type="submit" className="checkout-button-page">Complete Checkout and Pay</button>
      </div>
    </div>
    );
  }
}

export default Checkout;
