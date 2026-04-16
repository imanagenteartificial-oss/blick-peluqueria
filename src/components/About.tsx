import React, { useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    // Dynamically load TikTok Embed Script
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="nosotros" className="section container">
      <div className="about-grid">
        <div className="about-content animate-fade-in">
          <h2>Blick Peluquería<br/><span className="text-gradient">by David Guerrero</span></h2>
          <p className="about-lead">20 Años de Experiencia en Creación de Imagen</p>
          <p>
            En Blick Peluquería somos especialistas en colorimetría, diseño de corte y tratamientos integrales. 
            Nuestra visión, liderada por David Guerrero, no pretende cambiar tu esencia física, sino destacar lo mejor de ti.
          </p>
          <p>
            Con técnicas capilares de alta gama logramos resultados extraordinarios en diseño de color, camuflaje de cana, 
            y terapias de relajación capilar cuidando siempre la salud de tu cabello.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="text-gradient stat-number">20+</span>
              <span className="stat-label">Años de Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="text-gradient stat-number">Alta</span>
              <span className="stat-label">Gama en Productos</span>
            </div>
          </div>
        </div>
        
        <div className="about-media glass-panel animate-fade-in delay-2">
          <h3>Conoce Nuestro Trabajo</h3>
          <p>Inspírate con nuestros últimos cambios de look en TikTok</p>
          <div className="tiktok-wrapper">
             <blockquote 
               className="tiktok-embed" 
               cite="https://www.tiktok.com/@blickpeluqueria" 
               data-unique-id="blickpeluqueria" 
               data-embed-type="creator" 
               style={{maxWidth: '100%', minWidth: '288px'}}
             >
              <section> 
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@blickpeluqueria?refer=creator_embed">@blickpeluqueria</a> 
              </section> 
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
