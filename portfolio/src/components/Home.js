import React from 'react';
import photo from '../photo.jpg';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-img">
        <img src={photo} alt="Rahma Ghomari" />
      </div>
      <div className="home-content">
        <h1>Hi, It's <span>Ghomari Rahma</span></h1>
        <h3 className="typing-text">I'm a <span></span></h3>
        <p>My name is Rahma Ghomari, a junior web developer passionate about creating interactive and modern applications...</p>
        <div class="social-icons">
                <a href="https://www.linkedin.com/in/rahma-ghomari-080657280"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/rxhmxgh"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/rahma.ghomari/"><i class="fa-brands fa-instagram"></i></a>
            </div>
        <a href="#" className="btn">Hire me</a>
      </div>
    </section>
  );
}

export default Home;
