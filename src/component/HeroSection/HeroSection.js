import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">Full-Stack Developer 
            <span className="hero-divider">•</span> Undergraduate
          </p>

          <h1 className="hero-heading">
            Hi, I'm <span className="hero-highlight">Dilmika Sahan</span>.
          </h1>

          <p className="hero-subtitle">
            I design and build reliable web applications, blending clean code with thoughtful user experiences. 
            Currently exploring AI/ML, data, and cloud-native architectures.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">View projects</a>
            <a href="#contact" className="hero-btn hero-btn-secondary">Get in touch</a>
          </div>

          <div className="hero-meta">
            <span className="hero-dot" />
            <span>Based in Sri Lanka 
              <span className="hero-meta-separator">•</span> Open to internships & freelance
            </span>
          </div>

          <div className="hero-tech">
            <span className="hero-tech-label">Working with</span>
            <div className="hero-tech-pills">
              <span>React</span>
              <span>Angular</span>
              <span>Spring Boot</span>
              <span>Python</span>
              <span>SQL / NoSQL</span>
              <span>AI / ML</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-ring">
            <div className="hero-avatar-glow" />
            <img
              src={process.env.PUBLIC_URL + '/my image 01 bg removed.webp'}
              alt="Dilmika Sahan"
              className="hero-avatar"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="hero-quick-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">10+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">3+</span>
              <span className="hero-stat-label">Years coding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
