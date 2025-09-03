import React from 'react';
import { 
  Users, 
  MessageCircle, 
  Phone, 
  Globe, 
  FileText, 
  Database,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Consultoría en Inteligencia Artificial",
      description: "Formamos y guiamos a tu equipo para que aprenda a implementar soluciones de IA de forma autónoma, aplicándolas en su negocio o para ofrecerlas a clientes.",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Agentes IA Atención al Cliente y Ventas (Web y WhatsApp)",
      description: "Atiende a tus clientes 24/7 con agentes virtuales que responden al instante, resuelven dudas y convierten conversaciones en ventas.",
      color: "green"
    },
    {
      icon: Phone,
      title: "Agentes de Voz Telefónicos",
      description: "Implementamos sistemas de voz inteligentes que atienden llamadas, responden preguntas y realizan gestiones como si fueran un operador humano.",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Agentes IA Multicanal",
      description: "Atiende a tus clientes por distintos canales integrados: WhatsApp, Web, Telegram, Teléfono, Correo, Instagram, y/o Facebook.",
      color: "indigo"
    },
    {
      icon: FileText,
      title: "Automatización de Facturas",
      description: "Digitalizamos y automatizamos el proceso de gestión de facturas, reduciendo errores y ahorrando tiempo en tareas repetitivas.",
      color: "orange"
    },
    {
      icon: Database,
      title: "Agentes RAG con Bases de Conocimiento",
      description: "Transformamos tu documentación en una base de conocimiento inteligente, accesible al instante para clientes y empleados.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      orange: "bg-orange-100 text-orange-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios que Transforman tu Negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de inteligencia artificial y automatización, 
            diseñadas específicamente para las necesidades de tu industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`p-4 rounded-full ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;