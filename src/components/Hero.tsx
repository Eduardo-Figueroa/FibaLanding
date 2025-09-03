import React from 'react';
import { ArrowRight, Zap, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforma tu negocio con{' '}
            <span className="text-blue-600">Inteligencia Artificial</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Implementamos Automatizaciones y Agentes de Inteligencia Artificial que optimizan 
            tus procesos, reducen costos operativos y trabajan por ti.
          </p>
          
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Comenzar ahora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
              <div className="text-gray-600">Reducción de tareas manuales</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Operación automatizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;