import React from 'react';
import './Footer.css';
import logo from "../Assets/kalyanTech_logo_bg.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';  // Import the navigate function

const Footer = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to handle "Explore" button click
  const handleExploreClick = () => {
    navigate('/contact');  // Redirects to the Contact Us page
  };

  return (
    <footer className="footer">
       {/* New Join Our Team Section */}
       <div className="join-our-team">
        <h1>Join Our Team</h1>
        <p>Realize Your Potential</p>
       

          <div className="exploreBtn">
          <div
            className="exploreTxt"
            onClick={(handleExploreClick)}
          >
            <span>&#x2794;</span>
            Explore More
          </div>
        </div>
        
      </div>

      <hr />

      <div className="footer-container">


        {/* Footer Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="footer-logo-img" />
        </div>

        {/* Footer Links */}
        <div className="footer-section">
          <h4>Platform</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

     

      {/* Footer Social Media */}
      <div className="footer-social">
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
