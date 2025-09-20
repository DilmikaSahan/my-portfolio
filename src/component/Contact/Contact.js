import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS 
      // npm install @emailjs/browser
      
      /*
      const emailjs = require('@emailjs/browser');
      
      const result = await emailjs.send(
        'SERVICE_ID',    // Get from EmailJS dashboard
        'TEMPLATE_ID',   // Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'dilmikasahan@497.com'
        },
        'YOUR_PUBLIC_KEY'     // Get from EmailJS dashboard
      );
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
      */

      // Option 2: Mailto (Simple but opens email client)
      const mailtoLink = `mailto:dilmikacontact@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: "Mobile",
      value: "+94 77 123 4567",
      link: "tel:+94771234567",
      color: "#25d366"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email",
      value: "dilmikacontact@gmail.com",
      link: "mailto:dilmikacontact@gmail.com",
      color: "#ea4335"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Dilmika Sahan",
      link: "https://www.linkedin.com/in/dilmika-sahan-509a202b6/",
      color: "#0077b5"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "DilmikaSahan",
      link: "https://github.com/DilmikaSahan",
      color: "#333"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title scroll-animate">Get In Touch</h2>
          <p className="contact-subtitle scroll-animate">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info scroll-animate">
            <div className="contact-intro">
              <h3>Dilmika Sahan</h3>
              <p>Undergraduate Software Developer</p>
              <p>University of Sri Jayewardenepura</p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.link}
                  className="contact-card"
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{ '--card-color': contact.color }}
                >
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-details">
                    <h4>{contact.label}</h4>
                    <p>{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-section scroll-animate">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              {submitStatus === 'success' && (
                <div className="status-message success">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="status-message error">
                   Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  className="form-input"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="form-textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer scroll-animate">
          <p>Let's build something amazing together! </p>
          <div className="copyright">
            <p>&copy; 2025 Dilmika Sahan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;