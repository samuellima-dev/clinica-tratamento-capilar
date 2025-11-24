import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Tratamentos', href: '#services' },
  { label: 'Resultados', href: '#gallery' },
  { label: 'Depoimentos', href: '#testimonials' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <span className="font-serif font-bold text-lg">R</span>
            </div>
            <span className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
              Revita <span className="text-blue-700">Fio</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block w-full text-center bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-800 transition-colors"
              >
                Agendar Avaliação
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;