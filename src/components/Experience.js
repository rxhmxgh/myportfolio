import React from 'react';
import './Experience.css';

function Experience() {
  return (
    
    <section  id="Experience" className="experience-section">
        <h2 className="title">My Experience</h2>
      <div className="experience-container">
        <div className="experience-text">
          
          <p className="description">
            I’m a passionate web developer with hands-on experience in both front-end and back-end development. 
            I’ve worked on academic and personal projects, including banking apps, appointment systems, and responsive websites. 
            I love turning ideas into digital solutions that are both functional and visually engaging.
          </p>
        <img src="/photo.jpg" alt="me" className="profile-photo" />
        </div>
        <div className="experience-download">
          <a href="/MonCV.pdf" download className="download-btn">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
