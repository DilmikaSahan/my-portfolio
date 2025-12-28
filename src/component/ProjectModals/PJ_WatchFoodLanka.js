import React from 'react';
import './PJ_WatchFoodLanka.css';

const PJ_WatchFoodLanka = ({ isOpen, onClose }) => {
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
          <h2 className="modal-title">WatchFood Lanka – Food Safety Complaint Management System (Microservices)</h2>
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
              src="/orderbird/ordbrd1.png"
              alt="WatchFood Lanka UI"
              className="main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400/020617/ffffff?text=WatchFood+Lanka+Dashboard';
              }}
            />
          </div>

          <div className="project-details">
            <div className="project-overview">
              <h3>Project Overview</h3>
              <p>
                WatchFood Lanka is a microservices-based platform that allows citizens to report food safety complaints
                directly to government authorities. The system supports complaint submission with evidence, secure case
                handling, and AI-powered prioritization so high-risk complaints reach officials faster.
              </p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Complaint Management:</strong> Users submit complaints with descriptions, categories and image evidence.</li>
                <li><strong>Microservices Architecture:</strong> Dedicated services for User Management, Complaint Handling and AI-based prioritization.</li>
                <li><strong>Secure Access:</strong> Keycloak-based authentication and authorization across services.</li>
                <li><strong>AI-Powered Prioritization:</strong> Python and NLP models classify complaints by priority to help authorities respond faster.</li>
                <li><strong>File Storage:</strong> Azure Blob Storage for storing complaint images and attachments.</li>
                <li><strong>Scalable Messaging:</strong> Apache Kafka is used for reliable, asynchronous communication between services.</li>
              </ul>
            </div>

            <div className="tech-implementation">
              <h3>Technical Implementation</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>Angular</li>
                    <li>Component-based UI for complaint creation and tracking</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Backend & Infrastructure</h4>
                  <ul>
                    <li>Spring Boot microservices</li>
                    <li>Apache Kafka</li>
                    <li>Keycloak for auth</li>
                    <li>PostgreSQL</li>
                    <li>Eureka Server for service discovery</li>
                    <li>Docker for containerization</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>AI / ML Service</h4>
                  <ul>
                    <li>Python</li>
                    <li>FastAPI</li>
                    <li>PyTorch-based NLP models for complaint classification</li>
                    <li>Deployed as a separate microservice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/DilmikaSahan/foodwatch-lanka-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Backend Repository
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Frontend Repository
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                ML / AI Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PJ_WatchFoodLanka;
