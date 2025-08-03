import React from 'react';
import './Header.css';
function Header() {
  return (
    <header>
      <a href="#" className="logo">RGH.Tech</a>
      <nav>
        <a href="#" className="active">Home</a>
        <a href="#services">Services</a>
        <a href="#Skills">Skills</a>
        <a href="#Experience">Experience</a>
        <a href="#Footer">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
