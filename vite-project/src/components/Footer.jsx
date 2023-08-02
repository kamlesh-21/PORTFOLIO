import React from 'react';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import ViteImage from "/img/vite.svg"; 

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:kamlesh.kumar21@gmail.com" className="footer__link">kamlesh.kumar21@gmail.com</a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com/Kumar_KS_IN">
            <FaTwitter />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://www.linkedin.com/in/kamlesh21/">
            <FaLinkedin />
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/kamlesh-21">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="footer-declaration">This site is made entirely with <img className="vite-logo" src={ViteImage} alt="Vite" />React JS </p>
    </footer>
  );
};

export default Footer;
