import React from 'react';
import { Sparkles, ScanFace, HeartPulse, Syringe } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Harmonização Facial',
    description: 'Equilíbrio e simetria respeitando seus traços naturais. Utilizamos preenchedores biocompatíveis de alta durabilidade.',
    icon: ScanFace,
  },
  {
    id: '2',
    title: 'Bioestimuladores',
    description: 'Recupere a firmeza e o brilho da pele estimulando seu próprio colágeno de forma progressiva e natural.',
    icon: Sparkles,
  },
  {
    id: '3',
    title: 'Toxina Botulínica',
    description: 'Suavização de linhas de expressão com precisão estratégica para manter a expressividade do rosto.',
    icon: Syringe,
  },
  {
    id: '4',
    title: 'Dermatologia Clínica',
    description: 'Tratamento de acne, manchas e melasma com protocolos integrativos focados na saúde da pele a longo prazo.',
    icon: HeartPulse,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Nossas Especialidades</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Combinamos ciência médica e visão estética para oferecer tratamentos seguros e eficazes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-stone-100"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform group-hover:bg-teal-600 group-hover:text-white">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;