import { useState } from 'react';
import logo from '../assets/images/Untitled.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { hash: '#home', label: 'Home' },
    { hash: '#about', label: 'About' },
    { hash: '#menu', label: 'Menu' },
    { hash: '#reservation', label: 'Book Table' },
    { hash: '#order', label: 'Order Online' },
    { hash: '#login', label: 'Login' }
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        href="#home"
        className="logo-link"
        onClick={() => handleLinkClick('#home')}
        aria-label="Little Lemon Home"
      >
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </a>

      <button
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className="bar" aria-hidden="true" />
        <span className="bar" aria-hidden="true" />
        <span className="bar" aria-hidden="true" />
      </button>

      <ul id="main-menu" className={`nav-links ${isOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <li key={link.hash}>
            <a
              href={link.hash}
              onClick={() => handleLinkClick(link.hash)}
              aria-current={activeLink === link.hash ? 'page' : undefined}
              className={activeLink === link.hash ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;