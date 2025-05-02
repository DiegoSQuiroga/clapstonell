import React from 'react';
import footer from '../assets/images/restaurant chef B.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={footer} alt="Little Lemon" />
      </div>
      <div className="footer-column">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
      <div className="footer-column">
        <h4>Social Media Links</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
};

export default Footer;