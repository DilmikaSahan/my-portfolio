import React, { useEffect, useState, lazy, Suspense } from 'react';
import ProjectCard from './ProjectCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './Projects.css';

// Lazy load project modals to improve initial page load
const PJ_settupotha = lazy(() => import('../ProjectModals/PJ_settupotha'));
const PJ_Bustracking = lazy(() => import('../ProjectModals/PJ_Bustracking'));
const CEBApp = lazy(() => import('../ProjectModals/CEBApp'));

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

  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: "STP",
      title: "Seettu Potha - Seettu Management System",
      description: "A full-stack web application for managing traditional Seettu(rotating savings) groups.",
      image: "/seettupotha-card.png",
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
      id: "CEBA",
      title: "CEB-Application – Electricity Bill Calculation System",
      description: "A Windows Forms desktop application for calculating electricity bills based on user inputs.",
      image: "/CEBPJ/CEBApp3.png",
      techStack: ["C#", ".Net Framework", "Windows Forms"],
      githubLink: "https://github.com/DilmikaSahan/CEB-Application",
      featured: false
    },
        {
      id: 4,
      title: "CEB-Application – Electricity Bill Calculation System",
      description: "A Windows Forms desktop application for calculating electricity bills based on user inputs.",
      image: "/CEBPJ/CEBApp3.png",
      techStack: ["C#", ".Net Framework", "Windows Forms"],
      githubLink: "https://github.com/DilmikaSahan/CEB-Application",
      featured: false
    },

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
      </Suspense>
    </section>
  );
};

export default Projects;