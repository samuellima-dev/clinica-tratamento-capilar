import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Obrigado! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-teal-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Contato</span>
            <h2 className="font-serif text-4xl mb-6">Comece sua transformação.</h2>
            <p className="text-stone-400 mb-12 text-lg leading-relaxed">
              Agende uma avaliação personalizada com nossa equipe médica. 
              Estamos prontos para ouvir seus objetivos e traçar o melhor plano de tratamento.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-stone-800 p-3 rounded-lg text-teal-500 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Localização</h4>
                  <p className="text-stone-400 text-sm mt-1">Av. Paulista, 1000 - Suíte 1502<br/>Bela Vista, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="bg-stone-800 p-3 rounded-lg text-teal-500 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Telefone & WhatsApp</h4>
                  <p className="text-stone-400 text-sm mt-1">(11) 99999-8888</p>
                </div>
              </div>

               <div className="flex items-start">
                 <div className="bg-stone-800 p-3 rounded-lg text-teal-500 mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Horário de Atendimento</h4>
                  <p className="text-stone-400 text-sm mt-1">Segunda a Sexta: 09h às 19h<br/>Sábado: 09h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 text-stone-900 shadow-2xl">
            <h3 className="text-2xl font-serif mb-6">Solicitar agendamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-stone-50"
                  placeholder="Seu nome"
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Telefone</label>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-stone-50"
                    placeholder="(00) 00000-0000"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-stone-50"
                    placeholder="seu@email.com"
                    onChange={handleChange}
                    />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-stone-700 mb-1">Interesse Principal</label>
                <select
                  name="interest"
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-stone-50"
                  onChange={handleChange}
                >
                  <option value="">Selecione um tratamento</option>
                  <option value="facial">Harmonização Facial</option>
                  <option value="skin">Qualidade de Pele</option>
                  <option value="body">Estética Corporal</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-semibold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 mt-4"
              >
                Enviar Solicitação
              </button>
              <p className="text-center text-xs text-stone-400 mt-4">
                Seus dados estão protegidos. Entraremos em contato em até 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;