import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import '../styles/cuarto.css';

const Fourth = () => {
  const { t, i18n } = useTranslation("global");
  const [activeCategory, setActiveCategory] = React.useState(0);
  
  // Obtener las categorías traducidas
  const techCategories = t('global.technologies.categories', { returnObjects: true });
  
  // Mantener los íconos en un objeto aparte ya que no cambian con el idioma
  const techIcons = {
    Python: "🐍",
    PHP: "🐘",
    JavaScript: "📜",
    TypeScript: "🟦",
    HTML: "🔼",
    CSS: "🎨",
    ReactJS: "⚛️",
    Bootstrap: "🎠",
    Tailwind: "🌬️",
    SQL: "🗃️",
    PostgreSQL: "🐘",
    NextJS: "⏭️",
    VSC: "💻",
    Postman: "📬",
    Git: "🔀",
    GitHub: "🐙"
  };

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % techCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + techCategories.length) % techCategories.length);
  };

  return (
    <div className="container-fluid tech-section" id="technologies">
      <div className="row justify-content-center h-100">
        <div className="col-12 text-center mb-2">
          <h2 className="section-title mt-md-5">{t('global.technologies.title')}</h2>
          <div className="title-divider"></div>
        </div>
        
        {/* Controles para móvil */}
        <div className="mobile-controls d-lg-none">
          <button onClick={prevCategory} className="nav-arrow">
            <FaArrowLeft />
          </button>
          <h3 className="category-title">
            {techCategories[activeCategory].name}
          </h3>
          <button onClick={nextCategory} className="nav-arrow">
            <FaArrowRight />
          </button>
        </div>
        
        {/* Versión desktop */}
        <div className="desktop-view d-none mb-md-5 ms-md-5 me-md-5 d-lg-flex">
          {techCategories.map((category, index) => (
            <div className="tech-category" key={index}>
              <h3 className="category-title">{category.name}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                  className={`tech-item ${['Mastered', 'Dominada'].includes(tech.status) ? 'mastered' : 'learning'}`}
                  key={`${index}-${techIndex}`}
                  >
                    <span className="tech-icon">{techIcons[tech.name]}</span>
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-status">{tech.status}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Versión móvil */}
        <div className="mobile-view d-lg-none">
          <div className="tech-category">
            <div className="tech-grid">
              {techCategories[activeCategory].technologies.map((tech, index) => (
                <div 
                className={`tech-item ${['Mastered', 'Dominada'].includes(tech.status) ? 'mastered' : 'learning'}`}
                key={`mobile-${index}`}
                >
                  <span className="tech-icon">{techIcons[tech.name]}</span>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-status">{tech.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicadores de categoría (mobile) */}
        <div className="category-indicators d-lg-none">
          {techCategories.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fourth;