import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="footer section">
      <div className="container">
        <h2 className="animate-fade-in">Visítanos</h2>
        <div className="footer-grid">
          <div className="footer-info glass-panel animate-fade-in delay-1">
            <h3>Contacto y Horarios</h3>
            <ul className="info-list">
              <li>📍 <strong>Dirección:</strong> Catalina Aldaz y Portugal, Edificio La Suiza, planta baja. <br/><small>(Ref: Desde el colegio Benalcázar, subes por Portugal una cuadra y a la derecha encuentras Catalina Aldaz. Al lado del negocio La Suiza)</small></li>
              <li>🚗 <strong>Parqueadero:</strong> Disponemos de parqueadero en el edificio y zona azul en la calle para mayor comodidad y seguridad.</li>
              <li>🕘 <strong>Horarios:</strong> Lunes a Sábado desde las 9:00 am hasta culminar las citas.</li>
              <li>💳 <strong>Formas de Pago:</strong> Transferencia, Tarjetas de Débito y Crédito.</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/blickpeluqueria/?locale=es_LA" target="_blank" rel="noreferrer" className="social-link">Facebook</a>
              <a href="https://www.tiktok.com/@blickpeluqueria" target="_blank" rel="noreferrer" className="social-link">TikTok</a>
            </div>
          </div>
          
          <div className="footer-map glass-panel animate-fade-in delay-2">
            <iframe 
              src="https://maps.google.com/maps?q=-0.1828425090586848,-78.47708311765827&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px', minHeight: '300px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Blick Peluquería"
            ></iframe>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blick Peluquería by David Guerrero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
