import React, { useState } from 'react';
import { Send, Mail, Award, Users, Wrench, HeadphonesIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    descripcion: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

  try {
    // Envía los datos al webhook de n8n
    const response = await fetch('https://fiba-solutions-n8n.0kswtx.easypanel.host/webhook/f33a3f51-02b3-4026-83de-20ade39eb797', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // formData es tu estado con los campos del formulario
    });

    if (response.ok) {
      alert('¡Gracias por tu interés! Te contactaremos pronto.');
      window.location.reload(); // Recarga la página para limpiar el formulario
    } else {
      alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
      window.location.reload(); // Recarga la página para limpiar el formulario
    }
  } catch (error) {
    console.error('Error al enviar formulario:', error);
    alert('Error al enviar el formulario.');
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Haz Crecer tu Negocio Ahora Mismo
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Descubre cómo nuestras soluciones inteligentes optimizan tu operativa 
                y te permiten enfocarte en lo que realmente impulsa tu empresa.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">
                Líderes en Automatizaciones IA en Habla Hispana
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Expertos en Automatización</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Integraciones a Medida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HeadphonesIcon className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Soporte y Acompañamiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-300" />
                  <span className="text-blue-100">Equipo Especializado</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-800/50 p-6 rounded-xl border border-blue-700">
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="w-5 h-5 text-blue-300" />
                <span className="text-blue-100 font-semibold">Contacto directo:</span>
              </div>
              <a 
                href="mailto:info@blunexai.com" 
                className="text-white text-lg hover:text-blue-200 transition-colors"
              >
                Fibasolutionsia@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              SOLICITA NUESTROS SERVICIOS
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de empresa o proyecto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo electrónico de contacto"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Déjanos tu teléfono para una respuesta más rápida"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Servicio (selecciona el que mejor se adapte a tu caso) *
                </label>
                <select
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Elige el servicio que mejor se adapte a tus necesidades</option>
                  <option value="consultoria">Consultoría en Inteligencia Artificial</option>
                  <option value="agentes-web">Agentes IA Atención al Cliente (Web/WhatsApp)</option>
                  <option value="agentes-voz">Agentes de Voz Telefónicos</option>
                  <option value="multicanal">Agentes IA Multicanal</option>
                  <option value="facturas">Automatización de Facturas</option>
                  <option value="rag">Agentes RAG con Bases de Conocimiento</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción de lo que necesitas *
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  placeholder="Describe con detalle lo que necesitas. Cuanto más especifiques, mejor te podremos ayudar."
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>ENVIAR SOLICITUD</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;