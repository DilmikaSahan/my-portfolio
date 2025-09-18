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
              src="/settupotha-main.jpg" 
              alt="SettuPotha Main Interface"
              className="main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400/333/fff?text=SettuPotha+Main+Interface';
              }}
            />
            <div className="gallery-thumbnails">
              <img 
                src="/settupotha-dashboard.jpg" 
                alt="Dashboard"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Dashboard';
                }}
              />
              <img 
                src="/settupotha-notes.jpg" 
                alt="Notes Feature"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Notes';
                }}
              />
              <img 
                src="/settupotha-schedule.jpg" 
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
                SettuPotha is a comprehensive study management system designed to help students organize their academic life. 
                The application provides tools for note-taking, schedule management, assignment tracking, and study progress monitoring.
              </p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Smart Note-Taking:</strong> Rich text editor with markdown support and categorization</li>
                <li><strong>Schedule Management:</strong> Interactive calendar for classes, assignments, and study sessions</li>
                <li><strong>Assignment Tracker:</strong> Deadline management with priority levels and notifications</li>
                <li><strong>Study Analytics:</strong> Progress tracking and productivity insights</li>
                <li><strong>Resource Library:</strong> File management for study materials and documents</li>
                <li><strong>Collaboration Tools:</strong> Share notes and study groups with classmates</li>
                <li><strong>Mobile Responsive:</strong> Works seamlessly across all devices</li>
              </ul>
            </div>

            <div className="tech-implementation">
              <h3>Technical Implementation</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React.js with Hooks</li>
                    <li>Material-UI Components</li>
                    <li>Redux for State Management</li>
                    <li>React Router for Navigation</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js & Express.js</li>
                    <li>MongoDB with Mongoose</li>
                    <li>JWT Authentication</li>
                    <li>RESTful API Design</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Additional Tools</h4>
                  <ul>
                    <li>Socket.io for Real-time Updates</li>
                    <li>Cloudinary for Image Storage</li>
                    <li>Nodemailer for Notifications</li>
                    <li>Chart.js for Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-challenges">
              <h3>Challenges & Solutions</h3>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Implementing real-time collaboration features for study groups</p>
                <h4>Solution:</h4>
                <p>Integrated Socket.io for real-time synchronization of shared notes and implemented conflict resolution algorithms</p>
              </div>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Managing complex state across multiple components</p>
                <h4>Solution:</h4>
                <p>Implemented Redux with proper store structure and created reusable action creators and reducers</p>
              </div>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/DilmikaSahan/settupotha" 
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