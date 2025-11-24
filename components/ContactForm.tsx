import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Integration - Envia para a unidade de Parnamirim por padrão no formulário
    const phone = "5581997681974";
    const text = `Olá! Meu nome é *${formData.name}*.\n\nGostaria de recuperar meus fios.\n\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Interesse:* ${formData.interest}`;
    
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-blue-900 text-white relative scroll-mt-32">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div>
            <span className="text-blue-300 font-bold tracking-wider text-sm uppercase mb-2 block">Agendamento</span>
            <h2 className="font-serif text-4xl mb-6">Dê o primeiro passo para recuperar seus fios.</h2>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">
              Agende uma tricoscopia digital na unidade mais próxima. 
              Vamos entender a causa da sua queda e traçar o plano ideal de reprogramação capilar.
            </p>

            <div className="space-y-8">
              {/* Unidade Parnamirim */}
              <div className="flex items-start group">
                <div className="bg-blue-800 p-3 rounded-xl text-blue-300 mr-4 group-hover:bg-blue-700 transition-colors mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Unidade Parnamirim</h4>
                  <p className="text-blue-200 text-sm mt-1">R. Figueira Filho, 130 - Parnamirim , Recife - PE</p>
                  <a 
                    href="https://wa.me/5581997681974"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm mt-1 font-semibold flex items-center hover:text-white transition-colors cursor-pointer"
                  >
                    <img 
                      src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-bleu.png" 
                      alt="WhatsApp" 
                      className="w-4 h-4 mr-1.5 object-contain"
                    />
                    WhatsApp: (81) 99768-1974
                  </a>
                </div>
              </div>

              {/* Unidade São Lourenço da Mata */}
              <div className="flex items-start group">
                 <div className="bg-blue-800 p-3 rounded-xl text-blue-300 mr-4 group-hover:bg-blue-700 transition-colors mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Unidade São Lourenço da Mata</h4>
                  <p className="text-blue-200 text-sm mt-1">R. Alm. Tamandaré, 239 - Centro, São Lourenço da Mata - PE</p>
                  <a 
                    href="https://wa.me/558195970028"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm mt-1 font-semibold flex items-center hover:text-white transition-colors cursor-pointer"
                  >
                    <img 
                      src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-bleu.png" 
                      alt="WhatsApp" 
                      className="w-4 h-4 mr-1.5 object-contain"
                    />
                    WhatsApp: (81) 9597-0028
                  </a>
                </div>
              </div>

              {/* Unidade Carpina */}
               <div className="flex items-start group">
                 <div className="bg-blue-800 p-3 rounded-xl text-blue-300 mr-4 group-hover:bg-blue-700 transition-colors mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Unidade Carpina</h4>
                  <p className="text-blue-200 text-sm mt-1">R. Dom Rinaldi, 439 - São José, Carpina - PE (Galeria Três Marias)</p>
                  <a 
                    href="https://wa.me/558197681984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-sm mt-1 font-semibold flex items-center hover:text-white transition-colors cursor-pointer"
                  >
                    <img 
                      src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-bleu.png" 
                      alt="WhatsApp" 
                      className="w-4 h-4 mr-1.5 object-contain"
                    />
                    WhatsApp: (81) 9768-1984
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900 shadow-2xl shadow-blue-950/50 sticky top-24">
            <h3 className="text-2xl font-serif font-bold mb-2 text-slate-800">Solicitar Avaliação</h3>
            <p className="text-slate-500 mb-6 text-sm">Preencha para falar com um especialista.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50"
                  placeholder="Seu nome"
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">WhatsApp</label>
                    <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="(81) 9...."
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50"
                    placeholder="email@exemplo.com"
                    onChange={handleChange}
                    />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-bold text-slate-700 mb-1">O que mais te incomoda?</label>
                <select
                  name="interest"
                  id="interest"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 text-slate-600"
                  onChange={handleChange}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="entradas">Entradas proeminentes</option>
                  <option value="coroa">Falha na coroa (topo)</option>
                  <option value="ralo">Cabelo ralo/fino</option>
                  <option value="preventivo">Prevenção</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-4 rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-600/20 mt-2 flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Quero Recuperar Meus Fios</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Você será redirecionado para o WhatsApp da Clínica.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;