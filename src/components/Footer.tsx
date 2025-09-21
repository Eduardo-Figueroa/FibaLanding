import { Bot, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">FibaSolutions</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos negocios a través de soluciones innovadoras de inteligencia 
              artificial y automatización inteligente.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <a 
                href="mailto:fibasolutionsia@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                fibasolutionsia@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Acerca de</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactar Ahora
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 FibaSolutions. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad y Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;