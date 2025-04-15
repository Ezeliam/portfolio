import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import Profile from "../assets/perfil.jpeg";
import '../styles/segundo.css';

const Second = () => {
  const { t, i18n } = useTranslation("global");

  // Formateo del texto directamente en el JSX
  const formatText = (text = '') => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<span class="highlight">$1</span>')  // Bold text
      .replace(/\*(.*?)\*/g, '<span class="highlight-soft">$1</span>')  // Italic text
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link-clean highlight-soft">$1</a>');  // Links
  };

  return(
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 p-4" id="about">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="about bg-opacity-75 p-4 p-md-5 rounded-4 shadow">
            <div className="row align-items-center">
              {/* Photo column */}
              <div className="col-md-4 text-center mb-4 mb-md-0">
                <img 
                  src={Profile} 
                  alt={t("global.about.title")} 
                  className="img-fluid rounded-circle profile-pic shadow"
                  style={{width: '200px', height: '200px', objectFit: 'cover'}}
                />
              </div>
              
              {/* Text column */}
              <div className="col-md-8">
                <h2 className="text-white fw-bold mb-4">{t("global.about.title")}</h2>
                
                <div className="text-white fs-5">
                  <p className="mb-3" dangerouslySetInnerHTML={{ __html: formatText(t("global.about.description1")) }} />
                  <p className="mb-3" dangerouslySetInnerHTML={{ __html: formatText(t("global.about.description2")) }} />
                  <p className="mb-3" dangerouslySetInnerHTML={{ __html: formatText(t("global.about.description3")) }} />
                  <p className="mb-0" dangerouslySetInnerHTML={{ __html: formatText(t("global.about.description4")) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second;
