import React from 'react';
import './PJ_settupotha.css';

const PJ_settupotha = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">SettuPotha - Seettu Management System</h2>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="project-gallery">
            <img 
              src="/SeettuPJ/seettupoth-card.webp" 
              alt="SettuPotha Main Interface"
              className="main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400/333/fff?text=SettuPotha+Main+Interface';
              }}
            />
            <div className="gallery-thumbnails">
              <img 
                src="/SeettuPJ/seettu01.webp" 
                alt="Dashboard"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Dashboard';
                }}
              />
              <img 
                src="/SeettuPJ//PDashboard.webp" 
                alt="Notes Feature"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Notes';
                }}
              />
              <img 
                src="/SeettuPJ/Udashboard.webp" 
                alt="Schedule Management"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Schedule';
                }}
              />
            </div>
          </div>

          <div className="project-details">
            <div className="project-overview">
              <h3>Project Overview</h3>
              <p>
                Seettu, also known as rotating savings, is a traditional community-based financial practice in Sri Lanka where a group of people contribute a fixed amount of money regularly, 
                and the collected amount is given to one member in each cycle until all members receive their share. While this method has been followed for decades due to its trust and community-driven nature, the manual process has several challenges.
                Payment tracking often results in errors, missed or delayed contributions are difficult to manage, and handling multiple groups at once becomes confusing. In addition, the lack of transparency creates disputes among members, 
                and there is currently no proper digital solution to manage these savings groups effectively.<br/><br/>
        
                To address these issues, we developed Seettu Potha, a digital platform designed to modernize Seettu management. The system automates payment tracking, reduces human error, 
                and enables providers to manage multiple groups simultaneously. Members can access real-time updates about their payments and payouts, improving transparency and trust within the group. 
                To ensure inclusivity, the platform integrates SMS notifications, allowing even users without smartphones to receive reminders and updates. With secure authentication and a scalable architecture, 
                Seettu Potha transforms the traditional manual Seettu process into a reliable, transparent, and user-friendly digital solution.
              </p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Automated Payment Tracking:</strong> Records contributions instantly and sends reminders for upcoming or missed payments.</li>
                <li><strong>Group Management:</strong> Supports multiple groups running in parallel, allowing providers to add members, define cycles, and track payouts.</li>
                <li><strong>Transparency & Trust:</strong> Members can view their contributions and payout cycles in real time, ensuring accountability.</li>
                <li><strong>SMS Notifications:</strong> Integrated with Twilio API to notify members via SMS, reaching even users with button phones.</li>
                <li><strong>Secure Authentication:</strong> JWT-based login system for safe and reliable access.</li>
                <li><strong>Scalable Architecture:</strong> Designed for future upgrades like report generation, multilingual support, and payment gateway integration.</li>
              </ul>
            </div>

            <div className="tech-implementation">
              <h3>Technical Implementation</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>Angular 17</li>
                    <li>Angular Material Components</li>
                    <li>Reactive Forms & Routing</li>
                    <li>State Management with Services</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Spring Boot 3.2</li>
                    <li>PostgreSQL Database</li>
                    <li>Spring Data JPA</li>
                    <li>JWT Authentication</li>
                    <li>Quartz Scheduler for automated reminders</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Additional Tools</h4>
                  <ul>
                    <li>Twilio API for SMS notifications</li>
                    <li>RESTful API design for smooth integration</li>
                    <li>Postman for API testing and validation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-challenges">
              <h3>Challenges & Solutions</h3>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>In rural communities, many members still use basic button phones and do not have access to smartphones.
                   This created a major challenge: how can they be integrated into a digital Seettu management system without leaving them behind?</p><br></br>
                <h4>Solution:</h4>
                <p>We integrated an SMS notification service using Twilio API. While these users cannot access all system features like dashboards or detailed reports,
                  they can still receive the most important updates, such as payment reminders, 
                  joining confirmations, and payment acknowledgments. This ensures inclusivity by bridging the gap between smartphone and non-smartphone users</p>
              </div>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Automating recurring payment reminders effectively</p><br></br>
                <h4>Solution:</h4>
                <p>Implemented Spring Quartz Scheduler to trigger scheduled notifications reliably.</p>
              </div>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/DilmikaSahan/seettu-management-system" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PJ_settupotha;