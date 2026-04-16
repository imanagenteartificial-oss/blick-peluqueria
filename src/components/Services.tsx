import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Diseño de Corte',
    description: 'Resaltamos tus facciones con visagismo y técnicas de vanguardia.',
    price: 'Desde $25',
    icon: '✂️'
  },
  {
    id: 2,
    title: 'Diseño de Color',
    description: 'Balayage, baby lights y mechas universales con colorimetría experta.',
    price: 'Desde $180',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Tratamientos Capilares',
    description: 'Tricología, spa capilar y terapias de alta gama (Ecosmetics, Alfaparf, etc).',
    price: 'Desde $45',
    icon: '💆‍♀️'
  },
  {
    id: 4,
    title: 'Cambio de Look',
    description: 'Comienza con un asesoramiento detallado en salón para destacar lo mejor de ti.',
    price: 'Valoración en Salón',
    icon: '🌟'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="section container">
      <h2 className="animate-fade-in">Nuestros Servicios Premium</h2>
      <p className="services-subtitle animate-fade-in delay-1">
        Para todo diseño de color y tratamientos, te invitamos a una asesoría personalizada en el salón para valorar tu cabello con precisión.
      </p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={service.id} className={`glass-panel service-card animate-fade-in delay-${(index % 3) + 1}`}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-price text-gradient">{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
