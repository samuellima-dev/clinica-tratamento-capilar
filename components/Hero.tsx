import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sage-100/50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-stone-600 uppercase tracking-wide">
                Tecnologia & Humanização
              </span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-6xl font-medium text-stone-900 leading-[1.15] mb-6">
              Precisão clínica, <br/>
              <span className="text-teal-700 italic">cuidado humano.</span>
            </h1>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg">
              Redescubra sua confiança com tratamentos validados pela ciência e personalizados para sua anatomia única. Sem excessos, apenas realce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-stone-900 rounded-full hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-stone-900/20 group"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-700 bg-white border border-stone-200 rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all"
              >
                Ver Resultados Reais
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-stone-500 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2" />
                <span>Protocolos Exclusivos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2" />
                <span>Tecnologia de Ponta</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2" />
                <span>Acompanhamento Pós</span>
              </div>
            </div>
          </div>

          {/* Image/Visuals */}
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img 
                  src="https://picsum.photos/800/800?random=10" 
                  alt="Tratamento estético humanizado" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex -space-x-2">
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=1" alt="Doctor" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=2" alt="Doctor" />
                      <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/100/100?random=3" alt="Doctor" />
                    </div>
                    <span className="text-xs font-bold text-stone-900">+2k Pacientes</span>
                  </div>
                  <p className="text-xs text-stone-500">Transformando vidas com responsabilidade e excelência médica.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;