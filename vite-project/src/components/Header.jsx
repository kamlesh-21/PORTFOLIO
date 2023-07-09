import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="img/devjane.png" alt="" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation" onClick={handleMenuToggle}>
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={handleMenuToggle}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link" onClick={handleMenuToggle}>
              My Services
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link" onClick={handleMenuToggle}>
              About me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/work" className="nav__link" onClick={handleMenuToggle}>
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
