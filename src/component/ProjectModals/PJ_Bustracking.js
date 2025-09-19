import React from 'react';
import './PJ_Bustracking.css';

const PJ_Bustracking = ({ isOpen, onClose }) => {
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
          <h2 className="modal-title">IoT-Based Bus Tracking System – Real-Time Public Transport Monitoring</h2>
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
              src="/BusTrackPJ/bustracking.png" 
              alt="Bustracking Main Interface"
              className="main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400/333/fff?text=Bustracking+Main+Interface';
              }}
            />
            <div className="gallery-thumbnails">
              <img 
                src="/BusTrackPJ/bus_tracking_ps.jpg" 
                alt="Dashboard"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Dashboard';
                }}
              />
              <img 
                src="" 
                alt="Notes Feature"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150x100/555/fff?text=Notes';
                }}
              />
              <img 
                src="/SeettuPJ/Udashboard.pn" 
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
                In Sri Lanka, public transport users currently have no reliable system to track the real-time location of buses, whether in the public or private sector. With approximately 30,000 buses
                operating nationwide, the lack of visibility leads to long waiting times, missed connections, and significant inconvenience for commuters. Most available tracking solutions globally are
                GPS-based, but equipping every bus with a dedicated GPS module is financially unfeasible, especially considering the scale and budget constraints. As a result, there is a critical need for
                a cost-effective, scalable, and inclusive solution for real-time bus tracking accessible to everyday passengers.<br/><br/>

                To address this gap, we developed an IoT-Based Bus Tracking System that leverages RFID technology and IoT microcontrollers to provide location updates for buses in real time.
                Instead of installing expensive GPS modules on every bus, our solution attaches low-cost RFID tags to each bus and deploys long-range RFID readers at key points along 
                major roads, primarily at main town bus stops and strategic intervals. When a bus passes a reader, the system captures its RFID tag, identifies the bus, and updates its 
                location on a centralized database. Passengers can then access real-time bus locations by searching either the route or the bus's vehicle registration number, 
                enabling smarter travel decisions and reducing uncertainty.<br></br>

                This approach delivers a budget-friendly alternative to GPS, with slightly reduced but still practical accuracy, empowering both public and private bus operators 
                to join a unified digital tracking network. By harnessing IoT and RFID, the system modernizes Sri Lanka’s public transport infrastructure without prohibitive costs, 
                providing meaningful value to passengers and operators alike.

              </p>
            </div>

            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                <li><strong>RFID-Based Bus Identification:</strong> Each bus is equipped with a unique RFID tag, linked to its registration number and assigned route in the central database.</li>
                <li><strong>Strategic RFID Reader Deployment:</strong>  Long-range RFID readers are installed at primary bus stops and key locations, capturing bus pass-by events automatically.</li>
                <li><strong>Real-Time Location Updates:</strong>When a bus passes a reader, the ESP32/ESP8266 IoT device reads the tag and transmits the bus ID and location to the central server.</li>
                <li><strong>Passenger Search Interface:</strong> Web application allows users to search for buses by route or vehicle registration number, displaying the latest known location and time.</li>
                <li><strong>RESTful API Integration:</strong> The backend exposes REST APIs for location updates and retrieval, supporting future app or third-party integrations.</li>
                <li><strong>Multi-Device IoT Network:</strong> Supports multiple RFID readers across the network, enabling scalable coverage of bus routes and stops.</li>
                <li><strong>Bus Route and Stop Mapping:</strong> Each reader is mapped to a physical location (e.g., town name), and each bus is mapped to its routes for accurate tracking.</li>
                <li><strong>Low-Cost Deployment:</strong> By eliminating the need for GPS modules on every bus, the system dramatically reduces hardware costs and maintenance.</li>
              </ul>
            </div>

            <div className="tech-implementation">
              <h3>Technical Implementation</h3>
              <div className="tech-grid">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB Atlas</li>
                    <li>RESTful API Design</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h4>IoT Hardware & Devices</h4>
                  <ul>
                    <li>ESP32/ESP8266 Microcontrollers:</li>
                    <li>RFID Readers (Long Range)</li>
                    <li>RFID Tags</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-challenges">
              <h3>Challenges & Solutions</h3>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>Equipping every bus with a GPS module would require 30,000+ units, making it prohibitively expensive for both public and private operators.</p><br></br>
                <h4>Solution:</h4>
                <p>The system leverages RFID technology, which is significantly more affordable. Instead of GPS modules on each bus, only RFID tags are attached to buses, 
                    and a manageable number of RFID readers are strategically placed at high-traffic locations. This provides location updates wherever a reader is installed,
                    delivering a practical level of accuracy at a fraction of the cost.</p>
              </div>
              <div className="challenge-item">
                <h4>Challenge:</h4>
                <p>RFID readers only update location when a bus passes a reader, so continuous tracking is not possible (unlike GPS).</p><br></br>
                <h4>Solution:</h4>
                <p> Readers are placed at key points (main towns, major stops, and intervals) to provide sufficiently frequent location updates. While the system does not offer turn-by-turn
                    tracking, it reliably indicates the latest known position, which is highly useful for passengers’ planning.</p>
              </div>
            </div>

            <div className="project-workflow">
              <h3>System Workflow Example</h3>
              <div className="workflow-steps">
                <div className="workflow-step">
                  <h4>Bus Registration:</h4>
                  <p>Each bus is registered in the system with its RFID tag, vehicle registration number, and assigned route.</p>
                </div>
                <div className="workflow-step">
                  <h4>Reader Activation:</h4>
                  <p>When a bus passes an RFID reader (e.g., at Kandy Main Bus Stand), the reader detects the tag and sends the tag ID and location to the server via the ESP32.</p>
                </div>
                <div className="workflow-step">
                  <h4>Database Update:</h4>
                  <p>The backend records the event, updating the bus's latest known location and timestamp.</p>
                </div>
                <div className="workflow-step">
                  <h4>Passenger Query:</h4>
                  <p>A passenger queries the web app using a route or vehicle registration number.</p>
                  <ul>
                    <li>If searching by route, all buses on that route are listed with their last known location and update time.</li>
                    <li>If searching by vehicle registration number, the specific bus's last known position and time are shown.</li>
                  </ul>
                </div>
                <div className="workflow-step">
                  <h4>Result Display:</h4>
                  <p>The passenger receives real-time information, allowing for better travel planning and reduced waiting.</p>
                </div>
              </div>
            </div>

            <div className="project-links">
              <a 
                href="https://github.com/DilmikaSahan/BusTrackingSystem" 
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

export default PJ_Bustracking;