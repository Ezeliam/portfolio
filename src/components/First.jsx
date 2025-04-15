import React from 'react';
import '../styles/primero.css';
import { FaLinkedin, FaGithub, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import Particle from '../components/Particle';

const Index = () => {
  // URLs de tus redes sociales (reemplaza con las tuyas)
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/liam-di-cerbo/",
    github: "https://github.com/Ezeliam",
    email: "mailto:liamdicerbo@gmail.com",
    cv: "/CV.pdf" // Ruta a tu archivo CV
  };

  return (
    <>
      <Particle />
      <div className="contenedor">
        <div className="text-center">
          <h1 id='nombre'>LIAM DI CERBO</h1>
          <h3 id='front'>Front-End Developer</h3>
          
          {/* Contenedor de botones */}
          <div className="social-buttons mt-4 d-flex justify-content-center gap-4">
            {/* Botón LinkedIn */}
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
            
            {/* Botón GitHub */}
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button github"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            
            {/* Botón Email */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=liamdicerbo@gmail.com&su=Contacto desde Portfolio&body=Hola Liam,"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button email"
              aria-label="Abrir Gmail para contactar a liamdicerbo@gmail.com"
            >
              <FaEnvelope className="social-icon" />
            </a>
            
            {/* Botón Descargar CV */}
            <a 
              href={socialLinks.cv} 
              download
              className="social-button cv"
              aria-label="Descargar CV"
            >
              <FaFileDownload className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;