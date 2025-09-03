import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;