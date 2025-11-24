import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O tratamento é um implante capilar?",
    answer: "Não. A Reprogramação Capilar é um tratamento não cirúrgico. Utilizamos tecnologias e ativos que estimulam seus folículos adormecidos a voltarem a produzir fios, sem necessidade de cortes ou pós-operatório doloroso."
  },
  {
    question: "Em quanto tempo começo a ver resultados?",
    answer: "Embora varie de organismo para organismo, a maioria dos pacientes nota a diminuição da queda já no primeiro mês. O preenchimento visível e o espessamento dos fios geralmente ocorrem entre o 3º e o 4º mês de protocolo contínuo."
  },
  {
    question: "O procedimento dói?",
    answer: "O procedimento é muito bem tolerado. Utilizamos técnicas minimamente invasivas. Alguns pacientes relatam apenas um leve desconforto local, mas a maioria relaxa durante a sessão."
  },
  {
    question: "Serve para calvície genética (androgenética)?",
    answer: "Sim! A calvície genética é uma das principais indicações. O tratamento atua inibindo a ação do hormônio DHT no folículo e fortalecendo a raiz, o que desacelera o processo genético e recupera fios afinados."
  },
  {
    question: "Preciso fazer manutenção para sempre?",
    answer: "A calvície é uma condição crônica, mas o tratamento passa por fases. Após a fase de 'ataque' (recuperação), entramos na fase de manutenção, que exige visitas bem menos frequentes para manter os resultados conquistados."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Entenda melhor como funciona a recuperação dos seus fios de forma simples e direta.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-blue-200 shadow-md' : 'border-slate-100 hover:border-blue-100'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-blue-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`ml-4 p-1 rounded-full transition-colors ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;