import React, { useState } from 'react';
import './Projects.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// Import images
import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG4 from '../../assets/4.png';

import IMG5 from '../../assets/5.png';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "E-commerce Web Application",
      description: "Modern e-commerce platform with React.js and Tailwind CSS",
      image: IMG5,
      details: [
        "Development of a modern e-commerce web application using React.js and Tailwind CSS",
        "Fully responsive design with professional components",
        "Client-side routing implementation with React Router",
        "Component-based architecture for clean and scalable code",
        "Tech Stack: React.js 18, Tailwind CSS, React Router, Jest"
      ]
    },
    {
      title: "Markdown Notes",
      description: "Note-taking application with React and TypeScript",
      image: IMG3,
      details: [
        "Development of a note management application with React and TypeScript",
        "Create, edit, delete, and categorize notes with tag support",
        "Advanced search, local storage, and dark/light mode support",
        "Responsive design optimized with Tailwind CSS",
        "Tech Stack: React.js, TypeScript, Vite, Tailwind CSS, localStorage"
      ]
    },
    {
      title: "Restaurant Management System",
      description: "Comprehensive restaurant management system with React and Node.js",
      image: IMG4,
      details: [
        "Development of a comprehensive restaurant management system with React and Node.js",
        "Table management, menu, orders, and online reservations",
        "Real-time order status tracking dashboard",
        "RTL support and Persian language integration",
        "Tech Stack: React.js, Tailwind CSS, Context API, Node.js (Mock API)"
      ]
    },
    {
      title: "Todo App",
      description: "Advanced task management application with React.js",
      image: IMG4,
      details: [
        "Development of an advanced task management application with React.js",
        "Task categorization, prioritization, subtasks, and time tracking",
        "Dark/light mode, search, filter, and local storage",
        "Professional animations with Framer Motion",
        "Tech Stack: React.js, Tailwind CSS, React Icons, Framer Motion"
      ]
    },
    {
      title: "Stock Market Trading Platform",
      description: "Stock market trading platform with React and TypeScript",
      image: IMG2,
      details: [
        "Development of a stock market trading platform with React and TypeScript",
        "Real-time data display with TradingView and Chart.js",
        "Portfolio management, advanced filters, and dynamic tables",
        "Jalali calendar and multilingual support",
        "Tech Stack: React.js 18, TypeScript, Material-UI, Tailwind CSS, Context API"
      ]
    },
    {
      title: "Auditing System",
      description: "Advanced auditing system with React.js",
      image: IMG1,
      details: [
        "Development of an advanced auditing system with React.js",
        "Secure authentication, user management, file and document management",
        "Advanced text editor, PDF and Excel export",
        "Chart and tabular data visualization support",
        "Tech Stack: React.js 18, Tailwind CSS, Material-UI, React Router, Uppy"
      ]
    }
  ];

  const toggleProject = (index) => {
    setExpandedProject(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="Projects">
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {projects.map((project, index) => (
          <article key={index} className="project__item">
            <div className="project__image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project__image"
              />
            </div>
            <div className="project__content">
              <button 
                className="project__header"
                onClick={() => toggleProject(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleProject(index);
                  }
                }}
                aria-expanded={expandedProject === index}
                aria-controls={`project-details-${index}`}
              >
                <h3>{project.title}</h3>
                {expandedProject === index ? (
                  <IoIosArrowUp className="project__icon" aria-hidden="true" />
                ) : (
                  <IoIosArrowDown className="project__icon" aria-hidden="true" />
                )}
              </button>
              <p className="project__description">{project.description}</p>
              
              <div 
                id={`project-details-${index}`}
                className={`project__details ${expandedProject === index ? 'show' : ''}`}
                role="region"
                aria-hidden={expandedProject !== index}
              >
                {project.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="project__detail-item">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects; 