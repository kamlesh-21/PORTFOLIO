import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="img/devjane.png" alt="" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/services" className="nav__link">My Services</Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">About me</Link>
          </li>
          <li className="nav__item">
            <Link to="/work" className="nav__link">My Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};