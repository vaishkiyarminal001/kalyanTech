import React from 'react';
import './Footer.css';
import logo from "../Assets/kalyanTech_logo_bg.png";
const Footer = () => {
  return (
    <div>
      <div className="custom-footer">
        {/* Logo Section */}
        <div className="footer-logo">
          <span>Kalyan Tech</span>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>Copyright © KalyanTech | <a href="#">Terms of Service</a></p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
