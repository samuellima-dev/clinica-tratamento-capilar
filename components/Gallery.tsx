import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { Eye, ChevronRight } from 'lucide-react';

const cases: CaseStudy[] = [
  {
    id: '1',
    patientName: 'Ana M.',
    treatment: 'Bioestimulador de Colágeno',
    description: 'Melhora significativa na firmeza da pele e contorno mandibular após 2 sessões.',
    imageBefore: 'https://picsum.photos/id/64/600/600', // Using generic portraits from picsum
    imageAfter: 'https://picsum.photos/id/65/600/600',
  },
  {
    id: '2',
    patientName: 'Roberto S.',
    treatment: 'Harmonização Masculina',
    description: 'Definição de mandíbula e mento, preservando a masculinidade dos traços.',
    imageBefore: 'https://picsum.photos/id/91/600/600',
    imageAfter: 'https://picsum.photos/id/92/600/600',
  },
  {
    id: '3',
    patientName: 'Carla V.',
    treatment: 'Preenchimento Labial',
    description: 'Hidratação profunda e volume sutil para um sorriso mais jovem e desenhado.',
    imageBefore: 'https://picsum.photos/id/129/600/600',
    imageAfter: 'https://picsum.photos/id/130/600/600',
  },
];

const CaseCard: React.FC<{ data: CaseStudy }> = ({ data }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100">
      <div className="relative aspect-square overflow-hidden group">
        <img
          src={showAfter ? data.imageAfter : data.imageBefore}
          alt={`Resultado de ${data.treatment}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Toggle Button Overlay */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="bg-white/90 backdrop-blur text-stone-800 px-4 py-2 rounded-full text-xs font-semibold shadow-lg hover:bg-white transition-all flex items-center space-x-2"
          >
            <Eye size={14} className="text-teal-600" />
            <span>{showAfter ? 'Ver Antes' : 'Ver Depois'}</span>
          </button>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
          {showAfter ? 'Depois' : 'Antes'}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg font-medium text-stone-900">{data.treatment}</h3>
        </div>
        <p className="text-xs text-teal-600 font-semibold mb-3 tracking-wide uppercase">Paciente: {data.patientName}</p>
        <p className="text-stone-500 text-sm leading-relaxed mb-4">
          {data.description}
        </p>
        <div className="w-full h-px bg-stone-100 mb-4"></div>
        <button className="text-stone-800 text-sm font-medium flex items-center hover:text-teal-700 transition-colors">
          Saiba mais sobre este caso <ChevronRight size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">Transformações Reais</h2>
             <p className="text-stone-600">
                Acreditamos na beleza natural aprimorada pela ciência. Explore nossos casos clínicos de sucesso.
             </p>
          </div>
          <div className="hidden md:block">
              <a href="#contact" className="text-teal-700 font-medium hover:text-teal-800 flex items-center">
                  Ver galeria completa <ChevronRight size={16} className="ml-1" />
              </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <CaseCard key={c.id} data={c} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
             <a href="#contact" className="text-teal-700 font-medium hover:text-teal-800 flex items-center justify-center">
                  Ver galeria completa <ChevronRight size={16} className="ml-1" />
              </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;