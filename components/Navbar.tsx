import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Especialidades', href: '#services' },
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white">
              <Leaf size={18} />
            </div>
            <span className="font-serif text-2xl font-semibold text-stone-800 tracking-tight">
              Aurea
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-stone-600 hover:text-teal-600 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/10"
            >
              Agendar Avaliação
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-teal-600 hover:bg-stone-50 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-teal-700 transition-colors"
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