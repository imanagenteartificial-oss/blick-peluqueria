import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default App;
