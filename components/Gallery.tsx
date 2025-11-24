import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { ChevronRight, ChevronLeft, Instagram } from 'lucide-react';

const cases: CaseStudy[] = [
  {
    id: '1',
    patientName: 'Paciente 01',
    treatment: 'Protocolo Antiqueda',
    description: 'Recuperação significativa da densidade capilar. Tratamento focado em fortalecimento e preenchimento.',
    imageBefore: 'https://i.pinimg.com/736x/ea/52/53/ea52537918c880d468a0dc662d144012.jpg',
    imageAfter: 'https://i.pinimg.com/736x/ea/52/53/ea52537918c880d468a0dc662d144012.jpg',
  },
  {
    id: '2',
    patientName: 'Paciente 02',
    treatment: 'Reprogramação Coroa',
    description: 'Preenchimento avançado da região da coroa (vertex) com aumento visível de volume e cobertura do couro cabeludo.',
    imageBefore: 'https://s2-g1.glbimg.com/YJuOsdXHh1qUiEGfHe9XZ1jFW0g=/0x0:1222x716/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/L/A/e6b5jRSFOx0rX7zeAg1A/calvicie2.jpg',
    imageAfter: 'https://s2-g1.glbimg.com/YJuOsdXHh1qUiEGfHe9XZ1jFW0g=/0x0:1222x716/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/L/A/e6b5jRSFOx0rX7zeAg1A/calvicie2.jpg',
  },
  {
    id: '3',
    patientName: 'Paciente 03',
    treatment: 'Terapia Capilar',
    description: 'Melhora da saúde do couro cabeludo e espessamento dos fios existentes através de microinfusão.',
    imageBefore: 'https://ideosaude.com.br/wp-content/uploads/2024/07/tratamento-capilar.jpg',
    imageAfter: 'https://ideosaude.com.br/wp-content/uploads/2024/07/tratamento-capilar.jpg',
  },
];

const CaseCard: React.FC<{ data: CaseStudy; isActive: boolean }> = ({ data, isActive }) => {
  // Check if imageBefore and imageAfter are the same URL (implying a single composite image)
  const isComposite = data.imageBefore === data.imageAfter;

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-500 h-full flex flex-col ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}>
      
      {isComposite ? (
        // Layout para Imagem Única (Montagem/Composta)
        <div className="h-64 border-b border-slate-100 relative group overflow-hidden bg-slate-50">
           <img
            src={data.imageBefore}
            alt="Resultado do tratamento"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center' }}
          />
           <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
             Resultado
           </div>
        </div>
      ) : (
        // Layout Dividido (Imagens Distintas para Antes e Depois)
        <div className="grid grid-cols-2 h-64 border-b border-slate-100 relative group">
          <div className="relative h-full border-r border-white/50 overflow-hidden">
             <img
              src={data.imageBefore}
              alt="Antes do tratamento"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
             <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
               ANTES
             </div>
          </div>
          <div className="relative h-full overflow-hidden">
             <img
              src={data.imageAfter}
              alt="Depois do tratamento"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute top-2 right-2 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
               DEPOIS
             </div>
          </div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg font-bold text-slate-900">{data.treatment}</h3>
        </div>
        <p className="text-xs text-blue-600 font-bold mb-3 tracking-wide uppercase">Paciente: {data.patientName}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
          {data.description}
        </p>
        <div className="w-full h-px bg-slate-100 mb-4"></div>
        <div className="text-slate-700 text-sm font-medium flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Resultado verificado
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
           <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Transformações Reais</h2>
           <p className="text-slate-600 max-w-2xl">
              Confira os resultados do protocolo Revita Fio. Imagens reais de pacientes que recuperaram a autoestima.
           </p>
        </div>

        <div className="relative max-w-md md:max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[550px] md:h-[500px] flex items-center justify-center">
             {cases.map((c, index) => {
               // Logic to position slides
               let position = 'opacity-0 translate-x-full z-0 hidden';
               if (index === currentIndex) {
                 position = 'opacity-100 translate-x-0 z-20 block';
               } 
               
               return (
                 <div key={c.id} className={`absolute w-full md:w-[450px] h-full transition-all duration-500 ease-in-out ${position}`}>
                    <CaseCard data={c} isActive={index === currentIndex} />
                 </div>
               );
             })}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 md:-ml-12 bg-white text-slate-700 p-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100 z-30"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 md:-mr-12 bg-white text-slate-700 p-3 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-colors border border-slate-100 z-30"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>

        </div>
        
        <div className="mt-12 text-center">
             <a 
              href="https://www.instagram.com/revitafio.parnamirim/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 inline-flex items-center justify-center px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
                  <Instagram size={18} className="mr-2" />
                  Ver mais casos no Instagram
              </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;