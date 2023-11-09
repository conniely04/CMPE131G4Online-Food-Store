import React from "react";

const Contact = () => {
  const cart = [
    {
      id: 1,
      name: "Apples",
      price: 2.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Bananas",
      price: 1.99,
      quantity: 3,
    },
    {
      id: 3,
      name: "Oranges",
      price: 3.49,
      quantity: 1,
    },
  ];

  function handleInputChange(event) {
    const updatedCart = cart.map((item) => {
      if (item.id === event.target.id) {
        item.quantity = parseInt(event.target.value);
      }
      return item;
    });
    console.log("Updated cart:", updatedCart);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const orderDetails = {
      items: cart,
      shippingAddress: {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        addressLine1: event.target.addressLine1.value,
        addressLine2: event.target.addressLine2.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zip: event.target.zip.value,
      },
      paymentMethod: event.target.paymentMethod.value,
    };

    console.log("Order details:", orderDetails);

    // Clear the cart
    // cart = [];
  }

  return (
    <div className="contact-container">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Cabin"
          rel="stylesheet"
        ></link>
      </head>
      <h1 id="title">Contact Us</h1>
      <p>Email: onlinefoodstore@gmail.com</p>

      <p>Phone: 408-498-2294</p>

      <p>Instagram: Online_Food_Store</p>

      <p>Website Developed By: Alan, Connie, Hiba, Tanya, Phuc, Rohan</p>

      <div className="checkout-page">
        <div className="top-half">
          <div className="top-left">
            <a href="/ShoppingCart">
              <button className="continue">Continue Shopping</button>
            </a>
          </div>
          <div className="top-center">
            <h2>Checkout</h2>
          </div>
          <div className="top-right">
            <button
              className="submit-order"
              type="submit"
              onClick={handleSubmit}
            >
              Submit Order
            </button>
          </div>
        </div>
        <hr className="divider" />
        <div className="bottom-half">
          <div className="bottom-left">
            <h2>Order Summary</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="order-items">
                {cart.map((item) => (
                  <div key={item.id} className="order-item">
                    <div className="item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">
                        Price: ${item.price.toFixed(2)} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="item-actions">
                      <input
                        type="number"
                        id={item.id}
                        value={item.quantity}
                        min="1"
                        onChange={handleInputChange}
                      />
                      <button
                        onClick={() => {
                          const updatedCart = cart.filter(
                            (cartItem) => cartItem.id !== item.id
                          );
                          console.log("Updated cart:", updatedCart);
                          // Update the cart with updatedCart
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bottom-right">
            <h2>Billing Information</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
              <br />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
              <br />
              <label htmlFor="addressLine1">Address Line 1:</label>
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                required
              />
              <br />
              <label htmlFor="addressLine2">Address Line 2:</label>
              <input type="text" id="addressLine2" name="addressLine2" />
              <br />
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" required />
              <br />
              <label htmlFor="state">State:</label>
              <select id="state" name="state" required>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* Add more states here */}
              </select>
              <br />
              <label htmlFor="zip">ZIP Code:</label>
              <input type="text" id="zip" name="zip" required />
              <br />
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select id="paymentMethod" name="paymentMethod" required>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                {/* Add more payment methods here */}
              </select>
              <br />
              <button className="submit-order" type="submit">
                Submit Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
