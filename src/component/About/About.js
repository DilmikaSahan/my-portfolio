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
                I am an undergraduate at the University of Sri Jayewardenepura, Faculty of Technology, pursuing a Bachelor of Information and Communication Technology (BICT) (Honors) 
                degree with a focus on Software Technology. I am passionate about coding, problem-solving, and the exciting fields of
                Artificial Intelligence (AI) and Machine Learning (ML).
            </p>
            <div className="about-highlights scroll-animate">
              <div className="highlight-item">
                <h4>Education</h4>
                <p>University of Sri Jayewardenepura</p>
              </div>
              <div className="highlight-item">
                <h4>Focus Areas</h4>
                <p>AI/ML, Full-Stack Development</p>
              </div>
              <div className="highlight-item">
                <h4>Languages & Frameworks</h4>
                <p>Java, Spring Boot, Angular, Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;