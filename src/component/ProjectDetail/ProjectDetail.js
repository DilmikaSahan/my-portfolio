import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ projectId }) => {
  // Sample detailed project data - replace with your actual project details
  const projectDetails = {
    1: {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce application built with modern web technologies. This platform includes user authentication, product management, shopping cart functionality, and secure payment integration.",
      fullDescription: `This e-commerce platform was developed as a comprehensive solution for online retail businesses. 
      The application features a modern, responsive design that works seamlessly across all devices. 
      
      Key features include:
      • User registration and authentication system
      • Product catalog with search and filtering
      • Shopping cart and checkout process
      • Secure payment integration with Stripe
      • Admin dashboard for product and order management
      • Real-time inventory tracking
      • Email notifications for orders
      
      The backend is built with Node.js and Express, providing a robust API for the React frontend. 
      MongoDB is used for data storage, ensuring scalability and performance.`,
      images: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
      githubLink: "https://github.com/DilmikaSahan/ecommerce-project",
      liveDemo: "https://your-ecommerce-demo.com",
      challenges: "Implementing secure payment processing and managing real-time inventory updates across multiple user sessions.",
      learnings: "Gained expertise in full-stack development, API security, and payment gateway integration."
    },
    2: {
      title: "AI ChatBot Application",
      description: "An intelligent chatbot using natural language processing for customer service automation.",
      fullDescription: `An AI-powered chatbot designed to handle customer service inquiries automatically. 
      Built using Python and TensorFlow for the machine learning components, with a Flask backend and React frontend.
      
      Features:
      • Natural language understanding
      • Intent classification and entity recognition
      • Multi-turn conversation handling
      • Integration with knowledge base
      • Analytics dashboard for conversation insights
      • Support for multiple languages
      
      The chatbot uses a custom-trained model for intent classification and incorporates sentiment analysis 
      to provide appropriate responses based on customer emotions.`,
      images: ["/project2-1.jpg", "/project2-2.jpg"],
      techStack: ["Python", "TensorFlow", "Flask", "React", "NLP", "MongoDB"],
      githubLink: "https://github.com/DilmikaSahan/ai-chatbot",
      liveDemo: "https://your-chatbot-demo.com",
      challenges: "Training the NLP model to understand context and maintaining conversation flow across multiple turns.",
      learnings: "Deep understanding of NLP, machine learning model deployment, and conversational AI design."
    },
    3: {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts and filtering capabilities.",
      fullDescription: `A comprehensive data visualization dashboard built for business intelligence and analytics. 
      The application provides interactive charts, real-time data updates, and advanced filtering capabilities.
      
      Key features:
      • Real-time data visualization with D3.js
      • Interactive charts and graphs
      • Advanced filtering and search capabilities
      • Export functionality for reports
      • User role-based access control
      • Responsive design for mobile devices
      
      The backend uses Spring Boot to provide RESTful APIs, while the Angular frontend offers a smooth, 
      interactive user experience with real-time updates.`,
      images: ["/project3-1.jpg", "/project3-2.jpg"],
      techStack: ["Angular", "D3.js", "Spring Boot", "MySQL", "Chart.js", "WebSocket"],
      githubLink: "https://github.com/DilmikaSahan/data-dashboard",
      liveDemo: "https://your-dashboard-demo.com",
      challenges: "Handling large datasets efficiently and creating smooth real-time visualizations without performance issues.",
      learnings: "Advanced data visualization techniques, real-time data handling, and performance optimization."
    }
  };

  const project = projectDetails[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <div className="project-detail-header">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back to Projects
          </button>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.description}</p>
        </div>

        <div className="project-detail-content">
          <div className="project-images">
            {project.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-detail-image"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x400/333/fff?text=Project+Image+${index + 1}`;
                }}
              />
            ))}
          </div>

          <div className="project-info">
            <div className="project-description-full">
              <h3>About This Project</h3>
              <div className="description-text">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="project-tech-stack">
              <h3>Technologies Used</h3>
              <div className="tech-stack-detail">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-challenges">
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
            </div>

            <div className="project-learnings">
              <h3>Key Learnings</h3>
              <p>{project.learnings}</p>
            </div>

            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;