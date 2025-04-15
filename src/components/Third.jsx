import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projects from "../data/projectsData";
import { useTranslation } from 'react-i18next';
import '../styles/tercero.css';

const Third = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t,i18n } = useTranslation("global");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Obtener los proyectos traducidos
  const translatedProjects = t("global.projects.projects", { returnObjects: true });


  return(
    <div className="container-fluid py-5" id="projects">
      <div className="row w-100 justify-content-center text-center mb-3">
        <h1 className="about-title col-12 mb-4">{t("global.projects.title")}</h1>
        <p className="text-white-50 col-lg-8">{t("global.projects.subtitle")}</p>
      </div>
      
      <div className="projects-slider-container">
        <button onClick={prevSlide} className="slider-arrow slider-arrow-left">
          <FaArrowLeft />
        </button>
        
        <div className="projects-slider">
          <div 
            className="slider-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {projects.map((project, index) => {
              const translatedProject = translatedProjects[index] || project;
              return (
                <div key={project.id} className="slider-slide">
                  <div className="project-card h-100">
                    <div className="project-card-inner">
                      <div className="project-image" style={{ backgroundImage: `url(${project.images.presentation})` }} />
                      <div className="project-content p-4">
                        <h3 className="project-title">{translatedProject.title}</h3>
                        <p className="project-description">{translatedProject.description}</p>
                        <div className="project-technologies mb-3">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                          ))}
                        </div>
                        <Link to={`/project/${project.id}`} className="project-link">
                          {t("global.projects.details")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <button onClick={nextSlide} className="slider-arrow slider-arrow-right">
          <FaArrowRight />
        </button>
      </div>
      
      <div className="slider-dots mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Third;