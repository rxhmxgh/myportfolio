import React from 'react';
import photo from '../photo.jpg';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <video src="/logo.mp4"  autoPlay loop muted playsInline   alt="Rahma Ghomari" />
      </div>
      <div className="home-content">
        <h1>Hi, It's <span>Ghomari Rahma</span></h1>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>My name is Rahma Ghomari, a junior web developer passionate about creating interactive and modern applications...</p>
         <div className="social-icons">
        <a href="https://www.linkedin.com/in/rahma-ghomari-080657280" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/rxhmxgh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/rahma.ghomari/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
       <a href="mailto:rahmaghomari26@gmail.com" className="btn">Hire me</a>
     </div>
    </section>
  );
}

export default Home;
