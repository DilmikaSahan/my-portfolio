import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bubble-bg">
        <span className="bg-bubble b1"></span>
        <span className="bg-bubble b2"></span>
        <span className="bg-bubble b3"></span>
        <span className="bg-bubble b4"></span>
        <span className="bg-bubble b5"></span>
        <span className="bg-bubble b6"></span>
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-name">Dilmika Sahan</h1>
          <h2 className="hero-title">
            <span className="animated-text">Undergraduate, Software Developer</span>
          </h2>
          <p className="hero-desc animated-desc">
            Undergraduate at University of Sri Jayewardenepura |Aspiring AI/ML & Data Science Enthusiast | Passionate about Coding & Problem-Solving
          </p>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-bubbles">
            <span className="bubble b1"></span>
            <span className="bubble b2"></span>
            <span className="bubble b3"></span>
            <span className="bubble b4"></span>
            <span className="bubble b5"></span>
            <span className="bubble b6"></span>
            <span className="bubble b7"></span>
            <span className="bubble b8"></span>
          </div>
          <img src={process.env.PUBLIC_URL + '/my image 01 bg removed.PNG'} alt="Dilmika Sahan" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
