import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Costa',
    role: 'Empresária',
    quote: 'O atendimento da Aurea mudou minha percepção sobre estética. Não tentaram me vender nada, apenas ouviram minhas queixas e propuseram algo sutil. O resultado ficou incrível.',
    avatar: 'https://picsum.photos/id/237/100/100', // Placeholder
  },
  {
    id: '2',
    name: 'Juliana Paiva',
    role: 'Arquiteta',
    quote: 'Ambiente impecável e profissionais extremamente capacitados. Fiz meu tratamento de pele e o acompanhamento pós-procedimento foi o diferencial.',
    avatar: 'https://picsum.photos/id/200/100/100',
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Advogada',
    quote: 'A melhor clínica que já frequentei. Senti segurança desde a avaliação até o resultado final. A naturalidade que eles prezam é real.',
    avatar: 'https://picsum.photos/id/342/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative quotes background */}
      <Quote className="absolute top-20 left-10 text-stone-100 w-64 h-64 -z-10 transform -rotate-12 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 text-center mb-16">O que nossos pacientes dizem</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-stone-50 p-8 rounded-2xl relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex space-x-1 text-teal-500 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-4 border border-stone-200">
                    {/* Using a generic fallback layout for avatar if img fails or just abstract */}
                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 text-xs">
                        {t.name.charAt(0)}
                    </div>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;