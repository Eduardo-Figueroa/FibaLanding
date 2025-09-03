import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img ></img>
            <Bot className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">FibaSolutions</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Beneficios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacto
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;