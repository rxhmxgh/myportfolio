import React from 'react';
import './Header.css';
function Header() {
  return (
    <header>
      <a href="#" className="logo">RGH.Tech</a>
      <nav>
        <a href="#" className="active">Home</a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
