import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Mendes',
    role: 'Engenheiro, 42 anos',
    quote: 'Eu já tinha aceitado a calvície, mas a Revita Fio me mostrou que ainda havia esperança. O tratamento fortaleceu fios que eu nem via mais. Minha esposa adorou o resultado.',
    avatar: 'R',
  },
  {
    id: '2',
    name: 'Felipe Santos',
    role: 'Representante Comercial, 35 anos',
    quote: 'Comecei a perder cabelo muito cedo e isso afetava minha confiança nas vendas. Fiz a Reprogramação Capilar e em 3 meses a falha na coroa sumiu. Recomendo demais.',
    avatar: 'F',
  },
  {
    id: '3',
    name: 'André Gomes',
    role: 'Advogado, 50 anos',
    quote: 'O que mais gostei foi a honestidade. Me explicaram exatamente o que era possível para meu grau de queda. O resultado foi super natural, ninguém diz que fiz tratamento.',
    avatar: 'A',
  },
  {
    id: '4',
    name: 'Carlos Oliveira',
    role: 'Empresário, 48 anos',
    quote: 'Tentei loções e remédios caseiros sem sucesso. Só com o protocolo da clínica consegui parar a queda e ver volume novamente. O atendimento é impecável.',
    avatar: 'C',
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      {/* Decorative quotes background */}
      <Quote className="absolute top-20 left-10 text-blue-50 w-64 h-64 -z-10 transform -rotate-12 opacity-60" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 text-center mb-16">Histórias de Recuperação</h2>
        
        <div className="relative">
          {/* Main Card */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl relative shadow-lg border border-slate-100 min-h-[300px] flex flex-col justify-center transition-all duration-500">
            <div className="flex justify-center mb-6 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} fill="currentColor" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-slate-700 italic text-center mb-8 relative z-10 leading-relaxed">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="flex flex-col items-center border-t border-slate-200 pt-6 mt-auto">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-3 shadow-md">
                  {testimonials[activeIndex].avatar}
              </div>
              <h4 className="font-bold text-slate-900 text-lg">{testimonials[activeIndex].name}</h4>
              <span className="text-sm text-slate-500 uppercase tracking-wide">{testimonials[activeIndex].role}</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white text-slate-700 p-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100 z-20"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white text-slate-700 p-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100 z-20"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;