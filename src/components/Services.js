import React from 'react';
import './Services.css'; // à créer ensuite pour le style

function Services() {
  return (
    <section id="services" className="services-section">
  <h2>My Services</h2>
  <div className="services-container">

    <div className="service-card">
      <h3>Front-End Development</h3>
      <p>Building modern, interactive, and responsive interfaces using HTML, CSS, JavaScript, and React.</p>
    </div>

    <div className="service-card">
      <h3>Web Integration</h3>
      <p>Converting designs (Figma, Adobe XD) into fully functional websites while respecting accessibility standards.</p>
    </div>

    <div className="service-card">
      <h3>Responsive Design</h3>
      <p>Mobile-first layout adaptation to ensure a smooth user experience on all devices.</p>
    </div>

  </div>
</section>

  );
}

export default Services;
