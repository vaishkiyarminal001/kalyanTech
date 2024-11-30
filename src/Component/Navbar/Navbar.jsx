import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Link to the CSS file
import logo from '../Assets/kalyanTech_logo_bg.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const page = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    // { title: 'Our Work', path: '/work' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="nav">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {page.map((item, index) => (
          <Link key={index} to={item.path} onClick={() => setIsOpen(false)}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};
