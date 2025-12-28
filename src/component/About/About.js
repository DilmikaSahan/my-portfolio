import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title scroll-animate">About Me</h2>
            <p className="about-description scroll-animate">
              Full-stack software engineer specializing in Java Spring Boot and
              React.js/Angular for enterprise web applications and software
              solutions. Experienced in Spring Boot microservice architectures,
              Python, Agentic AI systems, OpenAI API integrations and
              machine learning. Passionate about solving real-world problems
              and building impactful, reliable software products.
            </p>
            <div className="about-highlights scroll-animate">
              <div className="highlight-item">
                <h4>Education</h4>
                <p>
                  BICT (Hons) in Software Technology, Faculty of Technology,
                  University of Sri Jayewardenepura
                </p>
              </div>
              <div className="highlight-item">
                <h4>Focus Areas</h4>
                <p>Full-stack engineering, AI/ML, Agentic AI systems</p>
              </div>
              <div className="highlight-item">
                <h4>Languages & Frameworks</h4>
                <p>Java, Spring Boot, React, Angular, Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;