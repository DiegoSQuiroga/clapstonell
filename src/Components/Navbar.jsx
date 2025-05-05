import React, { useState } from 'react';
import logo from '../assets/images/Untitled.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#book-table">Book a table</a></li>
        <li><a href="#orderonline">Order online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );

};
export default Navbar;