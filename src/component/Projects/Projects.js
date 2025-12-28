import React, { useEffect, useState, lazy, Suspense } from 'react';
import ProjectCard from './ProjectCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Projects.css';

const PJ_settupotha = lazy(() => import('../ProjectModals/PJ_settupotha'));
const PJ_Bustracking = lazy(() => import('../ProjectModals/PJ_Bustracking'));
const CEBApp = lazy(() => import('../ProjectModals/CEBApp'));
const PJ_motormate = lazy(() => import('../ProjectModals/PJ_motormate'));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleProjectView = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: "WATCHFOOD",
      title: "WatchFood Lanka : Food Safety Complaint Management System",
      description: "A platform for reporting food-related complaints with AI-powered prioritization and microservices architecture.",
      image: "/orderbird/ordbrd1.png",
      techStack: ["Angular", "Spring Boot", "Apache Kafka", "Python", "FastAPI", "PyTorch (NLP)", "Keycloak", "PostgreSQL",
                  "Azure Blob Storage", "Eureka Server", "Docker", "Microservices Architecture"],
      githubLink: "https://github.com/DilmikaSahan/foodwatch-lanka-backend",
      featured: true
    },
    {
      id: "ORDERBRD",
      title: "OrderBridge – Inventory,Product and Order Management System",
      description: " Microservices Based Order, Product and Inventory Management System",
      image: "/orderbird/ordbrd1.png",
      techStack: ["Java Spring Boot", "Angular", "Apache Kafka", "Eureka Server", "Keycloak", "Prometheus", "Grafana"],
      githubLink: "https://github.com/DilmikaSahan/OrderBridge",
      featured: true
    },
    {
      id: "STP",
      title: "Seettu Potha - Seettu Management System",
      description: "A full-stack web application for managing traditional Seettu(rotating savings) groups.",
      image: "/seettupotha-card.webp",
      techStack: ["Angular", "Spring-Boot", "PostgreSQL", "Twilio"],
      githubLink: "https://github.com/DilmikaSahan/seettu-management-system",
      featured: true
    },
    {
      id: "IBT",
      title: "IoT-Based Bus Tracking System",
      description: "A prototype IoT system designed to track buses in real time.",
      image: "/BusTrackPJ/bustracking.png",
      techStack: ["ESP32", "Node.js", "Express.js", "MongoDB Atlas","HTML","CSS"],
      githubLink: "https://github.com/DilmikaSahan/BusTrackingSystem",
      featured: true
    },
    {
      id: "RFBS",
      title: "Restaurant Feedback Management System",
      description: "A full-stack web app for managing and analyzing restaurant feedback with real-time insights and admin dashboards.",
      image: "/orderbird/ordbrd1.png",
      techStack: [ "React", "Spring Boot", "MongoDB", "HTML", "CSS", "JavaScript", "JWT authentication", "Spring Security"],
      githubLink: "https://github.com/DilmikaSahan/hotel-feedback-system-backend",
      featured: true
    },
    {
      id: "SONICPRM",
      title: "Sonic Prime Web Application",
      description: "Developed a modern React web app for Sonic Prime (Pvt) Ltd., enhancing client engagement and brand presence, with a demo deployed on Vercel.",
      image: "/orderbird/ordbrd1.png",
      techStack: ["React.js", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/DilmikaSahan/sonic-prime-pvt-ltd",
      featured: true
    },
    {
      id: "CEBA",
      title: "CEB-Application – Electricity Bill Calculation System",
      description: "A Windows Forms desktop application for calculating electricity bills based on user inputs.",
      image: "/CEBPJ/CEBApp3.png",
      techStack: ["C#", ".Net Framework", "Windows Forms"],
      githubLink: "https://github.com/DilmikaSahan/CEB-Application",
      featured: false
    },
        {
      id: "MTAPP",
      title: "Motormate – Vehicle Service Center Management System",
      description: "A desktop application designed to streamline vehicle service bookings and management for service centers.",
      image: "/motormate/motormate1.webp",
      techStack: ["C++", ".Net Framework", "Windows Forms","Microsoft SQL Server"],
      githubLink: "https://github.com/DilmikaSahan/Motormate-App",
      featured: false
    }

  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title scroll-animate">My Projects</h2>
          <p className="projects-subtitle scroll-animate">
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="projects-grid scroll-animate">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewMore={handleProjectView}
            />
          ))}
        </div>
      </div>
      
      {/* Project Modals with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <PJ_settupotha 
          isOpen={selectedProject === "STP"} 
          onClose={closeModal} 
        />
        <PJ_Bustracking
          isOpen={selectedProject === "IBT"}
          onClose={closeModal}
        />
        <CEBApp
          isOpen={selectedProject === "CEBA"}
          onClose={closeModal}
        />
        <PJ_motormate
        isOpen={selectedProject==="MTAPP"}
        onClose={closeModal}
        />
      </Suspense>
    </section>
  );
};

export default Projects;