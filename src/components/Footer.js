// src/components/Footer.js
import React from 'react';
import './Footer.css'; // si tu veux un CSS séparé

const Footer = () => {
  return (
    <footer  id="Footer" className="footer">
      <div className="footer-content">
        <h2>Contact</h2>
        <p>Email : <a href="mailto:rahmaghomari26@gmail.com">rahmaghomari26@gmail.com</a></p>
        <p>Téléphone : <a href="tel:+213552013748">+213 552013748</a></p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/rahma-ghomari" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/rahma-ghomari" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
