import React from 'react';
import logo from '../assets/images/Logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Book a table</a></li>
        <li><a href="#orderonline">Order online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;