import React from 'react';
import { TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Incrementa tu Productividad",
      description: "Automatiza hasta el 80% de tareas repetitivas y libera tiempo para actividades estratégicas que generen mayor valor.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Reduce Errores Humanos",
      description: "Nuestros sistemas de IA eliminan prácticamente los errores manuales, garantizando mayor precisión en tus operaciones.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Tus procesos automatizados funcionan sin descanso, proporcionando servicio continuo a tus clientes y optimizando recursos.",
      color: "purple"
    },
    {
      icon: DollarSign,
      title: "ROI Comprobado",
      description: "Nuestros clientes alcanzan mejoras visibles desde el inicio, convirtiendo cada inversión en valor sostenible para su negocio.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestras soluciones de IA?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            No solo implementamos tecnología, creamos ecosistemas inteligentes que se adaptan 
            y evolucionan con tu negocio, garantizando resultados sostenibles a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${getColorClasses(benefit.color)} flex-shrink-0`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;