import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
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

  // Sample project data - you can replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      image: "/project1.jpg", // Add your project images to public folder
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/DilmikaSahan/ecommerce-project",
      featured: true
    },
    {
      id: 2,
      title: "AI ChatBot Application",
      description: "An intelligent chatbot using natural language processing for customer service automation.",
      image: "/project2.jpg",
      techStack: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/DilmikaSahan/ai-chatbot",
      featured: true
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts and filtering capabilities.",
      image: "/project3.jpg",
      techStack: ["Angular", "D3.js", "Spring Boot", "MySQL"],
      githubLink: "https://github.com/DilmikaSahan/data-dashboard",
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;