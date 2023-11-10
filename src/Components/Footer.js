import React from 'react';
import { Link } from 'react-router-dom';
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
            <img src="/images/instagram.png" alt="Instagram" className="social-icon" />
            <img src="/images/twitter.png" alt="Facebook" className="social-icon" />
            <img src="/images/facebook.png" alt="Twitter" className="social-icon" />
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <p>Copyright © 2023 Online Food Store. All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;
