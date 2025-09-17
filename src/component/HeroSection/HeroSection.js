import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Dilmika Sahan</h1>
        <h2 className="hero-title">
          <span className="animated-text">Undergraduate, Software Developer</span>
        </h2>
        <p className="hero-desc animated-desc">
          Undergraduate at University of Sri Jayewardenepura | Aspiring AI/ML & Data Science Enthusiast | Passionate about Coding & Problem-Solving
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
