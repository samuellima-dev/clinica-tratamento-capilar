import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white">
                  <span className="font-serif font-bold text-lg">R</span>
                </div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Revita <span className="text-blue-500">Fio</span>
                </span>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
        
        <div className="w-full h-px bg-slate-800 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} Clínica Revita Fio. Todos os direitos reservados.</p>
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