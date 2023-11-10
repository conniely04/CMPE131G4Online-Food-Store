import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../Components/Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <div className="sections">
        <div className="section">
          <p className="title">HOURS</p>
          <p className="text">We are Open 24 hours</p>
        </div>
        <div className="section">
        <Link to="/about">
            <p className="title">ABOUT US</p>
          </Link>
          <p className="text">Learn more about our Story!</p>
        </div>
        <div className="section">
        <Link to="/contact">
            <p className="title">LET'S GET SOCIAL !</p>
          </Link>
          <div className="social-icons">
            <p className="social-link">Instagram</p>
            <p className="social-link">Facebook</p>
            <p className="social-link">Twitter</p>
          </div>
        
          {/* <div className="footer">
             <p>Copyright © 2023 Online Food Store. All rights reserved.</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
