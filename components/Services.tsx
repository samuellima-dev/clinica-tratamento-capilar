import React from 'react';
import { Microscope, Zap, Droplets, ShieldPlus } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Reprogramação Capilar',
    description: 'Protocolo exclusivo que desperta os folículos adormecidos, interrompe a queda e acelera o crescimento de novos fios.',
    icon: Zap,
  },
  {
    id: '2',
    title: 'MMP Capilar',
    description: 'Microinfusão de Medicamentos na Pele. Entrega direta de vitaminas e fatores de crescimento no couro cabeludo.',
    icon: Droplets,
  },
  {
    id: '3',
    title: 'Tricoscopia Digital',
    description: 'Diagnóstico preciso com câmera de alta resolução para mapear a saúde do couro cabeludo e personalizar o tratamento.',
    icon: Microscope,
  },
  {
    id: '4',
    title: 'Terapia Regenerativa',
    description: 'Uso de tecnologias avançadas para desinflamar o bulbo capilar e criar um ambiente fértil para o cabelo.',
    icon: ShieldPlus,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Especialidades Revita Fio</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Combinamos tricologia médica e tecnologia para reverter a calvície e fortalecer seus fios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white border border-slate-100">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;