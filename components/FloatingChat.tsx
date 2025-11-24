import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Format message for WhatsApp
    // Uses the user's provided phone in the message body, but sends TO the clinic's number.
    const message = `Olá! Meu nome é ${name} e meu telefone é ${phone}. Gostaria de saber mais sobre a Reprogramação Capilar.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5581997681543?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div>
              <p className="font-bold text-sm">Revita Fio - Atendimento</p>
              <p className="text-xs text-blue-100 opacity-90">Online agora</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="p-5 bg-slate-50">
            <p className="text-sm text-slate-600 mb-4 bg-white p-3 rounded-lg rounded-tl-none shadow-sm inline-block border border-slate-100">
              Olá! 👋 <br/>Preencha para falar com um especialista no WhatsApp.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp (DDD + Número)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle size={16} />
                Iniciar Conversa
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700 text-white' : 'bg-white text-slate-900 hover:bg-slate-50'} p-4 rounded-full shadow-lg shadow-slate-900/20 transition-all duration-300 hover:scale-105 flex items-center justify-center border border-slate-100`}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <img 
            src="https://icones.pro/wp-content/uploads/2021/02/icone-du-logo-whatsapp-bleu.png" 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain"
          />
        )}
      </button>
    </div>
  );
};

export default FloatingChat;