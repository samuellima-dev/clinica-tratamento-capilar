import React from 'react';
import { Leaf, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center text-teal-500">
                <Leaf size={18} />
                </div>
                <span className="font-serif text-2xl font-semibold text-white tracking-tight">
                Aurea
                </span>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="hover:text-teal-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-teal-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-teal-500 transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
        
        <div className="w-full h-px bg-stone-900 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} Clínica Aurea. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Responsável Técnico</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;