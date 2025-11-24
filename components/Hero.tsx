import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">
                Referência em Tricologia
              </span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Reprogramação Capilar: <br/>
              <span className="text-blue-700 italic">O fim da calvície.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
              Recupere a densidade dos fios e sua autoestima com nosso protocolo exclusivo. Tecnologia avançada para fortalecer, nutrir e estimular o crescimento real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg shadow-blue-900/20 group"
              >
                Agendar Avaliação
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, 'gallery')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Ver Casos Reais
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                <span>Sem Cirurgia</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                <span>Resultados Naturais</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2" />
                <span>Protocolo Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Visual Before/After Composition */}
          <div className="relative order-1 lg:order-2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-[400px]">
                    <img 
                      src="https://s2-g1.glbimg.com/YJuOsdXHh1qUiEGfHe9XZ1jFW0g=/0x0:1222x716/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/L/A/e6b5jRSFOx0rX7zeAg1A/calvicie2.jpg" 
                      alt="Antes e Depois Reprogramação Capilar" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    
                    {/* Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider border border-white/20">
                        Antes
                    </div>
                     <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md text-white px-3 py-1 text-xs font-bold rounded uppercase tracking-wider shadow-lg border border-white/20">
                        Depois
                    </div>
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                   <div className="flex items-center justify-between">
                      <div className="text-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-300">Resultado Real</p>
                        <p className="font-serif text-lg">Preenchimento de Coroa</p>
                      </div>
                       <div className="flex items-center text-green-400 bg-green-900/40 backdrop-blur px-3 py-1.5 rounded-full border border-green-500/30">
                        <ShieldCheck size={16} className="mr-1.5" />
                        <span className="text-xs font-bold">Validado</span>
                     </div>
                   </div>
                </div>
             </div>
             
             {/* Decorative blob behind */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;