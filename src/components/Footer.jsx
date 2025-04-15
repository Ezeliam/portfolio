import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';

const Footer = () => {
  const { t } = useTranslation('global');
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p>Liam Di Cerbo</p>
            <span>{t('global.footer.profession', { defaultValue: 'Técnico en Programación | Front-End Developer' })}</span>
          </div>
          
          <div className="footer-legal">
            <p>© {new Date().getFullYear()} {t('global.footer.rights', { defaultValue: 'Todos los derechos reservados' })}</p>
            <div className="footer-links">
              <a href="/aviso-legal">
                {t('global.footer.legalNotice', { defaultValue: 'Aviso Legal' })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;