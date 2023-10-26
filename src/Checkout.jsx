import React, { useState } from 'react';
import './Checkout.css';

function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    email_address: '',
    home_address: '',
    phone_number: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div>
        <h3>Basic Information</h3>
        <form>
          <input
            type="text"
            name="email_address"
            value={shippingInfo.firstName}
            onChange={handleShippingInfoChange}
            placeholder="Email Address"
            style={{width: '30%', marginRight: '10px'}}
          />
          <input
            type="text"
            name="home_address"
            value={shippingInfo.lastName}
            onChange={handleShippingInfoChange}
            placeholder="Home Address"
            style={{width: '30%', marginRight: '10px'}}
          />
          <input
            type="text"
            name="phone_number"
            value={shippingInfo.lastName}
            onChange={handleShippingInfoChange}
            placeholder="Phone Number"
            style={{width: '30%', marginRight: '10px'}}
          />
          {/* Other shipping input fields go here */}
        </form>
      </div>

      {/* Payment Information */}
      <div>
        <h3>Payment Information</h3>
        <form>
          <input
            type="text"
            name="cardHolder"
            value={paymentInfo.cardHolder}
            onChange={handlePaymentInfoChange}
            placeholder="Card Holder"
            style={{ textAlign: 'left', marginRight: '10px', width: '30%' }}
          />
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentInfoChange}
            placeholder="Card Number (e.g. 1234-5678-9123-4567)"
            style={{ textAlign: 'left', marginRight: '27px', width: '30%' }}
          />
          <input
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handlePaymentInfoChange}
            placeholder="Expiration Date"
            style={{ textAlign: 'left', marginRight: '10px', width: '30%' }}
          />
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handlePaymentInfoChange}
            placeholder="CVC"
            style={{ textAlign: 'left', marginRight: '27px', width: '10%' }}
          />
        </form>
      </div>

      {/* Place Order Button */}
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default CheckoutPage;