import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3>Front-end Development</h3>
          <p>HTML5, CSS3, JavaScript, React, Bootstrap</p>
        </div>
        <div className="skill">
          <h3>Back-end Development</h3>
          <p>PHP, MySQL, Node.js</p>
        </div>
        <div className="skill">
          <h3>Design</h3>
          <p>UI/UX Basics, Figma, Responsive Design</p>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Firebase</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
