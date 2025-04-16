import React, { useState, useEffect } from 'react';
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


const Index = () => {
  return (
    <>
      <Particle/>
      <Header></Header>
      <div className='contenedor-secciones'  id='scroll-container'>
      <section id='home'>
        <First></First>
      </section>
      <section className='segundo' id='about'>
        <Second></Second>
      </section>
      <section className='tercero' id='projects'>
        <Third></Third>
      </section>
      <section className='cuarto' id='technologies'>
        <Fourth></Fourth>
      </section>
      <Footer></Footer>
      <CookieBanner />
      </div>


    </>
  );


};

export default Index; 
