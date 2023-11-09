import React, { useState } from "react";
import "./Checkout.css";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    street: "",
    city: "",
    country: "",
    zip: "",
    creditCardNumber: "",
    creditCardName: "",
    month: "",
    year: "",
    ccv: "",
    saveDetails: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement order submission logic here
    console.log("Order details:", formData);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? event.target.checked : value,
    });
  };

  return (
    <div className="checkout-page">
      <div className="basic-information">
        <h2>Basic Information</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            className="checkout-input"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            className="checkout-input"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="emailAddress"
            className="checkout-input"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            className="checkout-input"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </form>
      </div>
      <div className="billing-address">
        <h2>Billing Address</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="street"
            className="checkout-input"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="city"
            className="checkout-input"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="country"
            className="checkout-input"
            placeholder="Country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="zip"
            className="checkout-input"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleInputChange}
            required
          />
        </form>
      </div>
      <div className="payment-information">
        <h2>Payment Information</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="creditCardNumber"
            className="checkout-input"
            placeholder="Credit Card Number"
            value={formData.creditCardNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="creditCardName"
            className="checkout-input"
            placeholder="Credit Card Name"
            value={formData.creditCardName}
            onChange={handleInputChange}
            required
          />
          <div className="expiration">
            <input
              type="text"
              name="month"
              className="checkout-input"
              placeholder="MM"
              value={formData.month}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="year"
              className="checkout-input"
              placeholder="YY"
              value={formData.year}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="ccv"
              className="checkout-input"
              placeholder="CCV"
              value={formData.ccv}
              onChange={handleInputChange}
              required
            />
          </div>
          <label>
            <input
              type="checkbox"
              name="saveDetails"
              checked={formData.saveDetails}
              onChange={handleInputChange}
            />
            Save payment details for future purchases
          </label>
        </form>
      </div>
      <div className="place-order">
        <button
          className="checkout-button"
          type="submit"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
