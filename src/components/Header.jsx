import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navItems = [
    { name: t("global.header.home"), target: "home", offset: -70 },
    { name: t("global.header.about"), target: "about", offset: -70 },
    { name: t("global.header.projects"), target: "projects", offset: -70 },
    { name: t("global.header.technologies"), target: "technologies", offset: -70 }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  const renderLink = (item) => (
    <Link
      to={item.target}
      smooth={true}
      duration={500}
      offset={item.offset}
      containerId={isHomePage ? "scroll-container" : undefined}
      className={isHomePage ? "nav-link" : "nav-link external-link"}
      activeClass="active"
      spy={isHomePage}
      isDynamic={true}
      onClick={() => {
        setMobileMenuOpen(false);
        if (!isHomePage) {
          window.location.href = `/#${item.target}`;
        }
      }}
    >
      {item.name}
    </Link>
  );

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid h-100">
        <div className="header-content">
          <div className="logo">
            {/*<span className="logo-text">LD</span>*/}
          </div>
                  
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.target}>
                  {renderLink(item)}
                </li>
              ))}
              <div className="language-selector">
                <select 
                  value={i18n.language} 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="language-select"
                >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </ul>
          </nav>
          
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("header.menu_button")}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={`mobile-${item.target}`}>
                  {renderLink(item)}
                </li>
              ))}
              <div className="language-selector">
                <select 
                  value={i18n.language} 
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="language-select"
                >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                </select>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;