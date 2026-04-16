import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="glass-panel animate-fade-in hero-glass">
          <h1 className="text-gradient">BLICK PELUQUERÍA</h1>
          <p className="hero-slogan delay-1">
            "No pretendemos cambiar tu estilo, destacamos lo mejor de ti. Somos creadores de imagen."
          </p>
          <div className="hero-actions delay-2">
            <a href="https://wa.me/593995633480?text=Hola%20Bruno,%20quisiera%20agendar%20una%20valoraci%C3%B3n" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar Valoración
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
