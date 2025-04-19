import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';
import Particle from '../components/Particle';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const LazySection = ({ children, id, className}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id}>
      {isVisible ? children : <div style={{ minHeight: '100vh' }} />}
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Particle/>
      <Header></Header>
      <div className='contenedor-secciones' id='scroll-container'>
        <LazySection id='home'>
          <First/>
        </LazySection>
        
        <LazySection className='segundo' id='about'>
          <Second/>
        </LazySection>
        
        <LazySection className='tercero' id='projects'>
          <Third/>
        </LazySection>
        
        <LazySection className='cuarto' id='technologies'>
          <Fourth/>
        </LazySection>
        
        <Footer></Footer>
        <CookieBanner />
      </div>
    </>
  );
};

export default Index;