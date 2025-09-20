import React from 'react';
import './PJ_motormate.css';

const PJ_motormate = ({ isOpen, onClose }) => {
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
              src="motormate/motormate1.png" 
              alt="Motormate Main Interface"
              className="main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400/333/fff?text=Motormate+Main+Interface';
              }}
            />
            <div className="gallery-thumbnails">
              <img 
                src="motormate/motormate2.png" 
                alt="Dashboard"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Dashboard';
                }}
              />
              <img 
                src="motormate/motormate3.png" 
                alt="Notes Feature"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Notes';
                }}
              />
              <img 
                src="motormate/motormate4.png" 
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
                Motormate is a desktop-based Vehicle Service Center Management System designed for the Motormate service center to digitalize and streamline their booking and 
                service management operations. Traditionally, service bookings and record-keeping were handled manually, leading to inefficiencies such as double bookings, lost records, 
                and delays in updating service status. Customers also faced challenges in tracking their bookings and understanding available service packages.<br/><br/>
                
                To address these issues, we developed Motormate, a desktop application that automates vehicle service bookings, manages service history, and provides 
                transparency for both customers and administrators. The system enables customers to book services, view available packages, and track their booking status,
                while administrators can confirm, cancel, or complete bookings and maintain service records effectively. By leveraging database-driven automation, Motormate 
                reduces human error, improves service efficiency, and enhances the overall customer experience.
              </p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                <li><strong>Service Booking:</strong> Customers can select service packages, pick a date and time slot, and confirm their booking.</li>
                <li><strong>Booking Management:</strong> Admin can confirm, cancel, or mark services as completed, ensuring smooth operations.</li>
                <li><strong>Service History:</strong> All completed or canceled bookings are recorded for future reference and accountability.</li>
                <li><strong>Package Management:</strong> Service packages (name, description, price) are displayed, and details are auto-filled when selected.</li>
                <li><strong>User Management:</strong> Separate dashboards for customers and admin, with login-based role access.</li>
                <li><strong>Time Slot Availability:</strong> Prevents double-booking by dynamically checking available slots.</li>
              </ul>
            </div>

            <div className="tech-implementation">
              <h3>Technical Implementation</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>C++/CLI with .NET Framework</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Microsoft SQL Server (SSMS)</li>
                    <li>SQL queries and stored procedures for CRUD operations</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Additional Tools</h4>
                  <ul>
                    <li>Visual Studio IDE for development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-challenges">
              <h3>Challenges & Solutions</h3>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Managing double bookings when multiple users tried to book the same time slot.</p><br></br>
                <h4>Solution:</h4>
                <p>Implemented database validation to only show available time slots dynamically based on confirmed and pending bookings</p>
              </div>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Tracking canceled bookings without losing historical data</p><br></br>
                <h4>Solution:</h4>
                <p>Introduced a ServiceHistory table where canceled and completed bookings are archived, ensuring full traceability.</p>
              </div>
                <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Maintaining a user-friendly interface for both admin and customers.</p><br></br>
                <h4>Solution:</h4>
                <p>Used Windows Forms with intuitive layouts and disabled unnecessary fields to prevent user input errors.</p>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/DilmikaSahan/Motormate-App" 
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
    </div>
  );
};

export default PJ_motormate;