import React, { useState } from 'react';
import { Instagram, Facebook, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <img 
                  src="https://lh3.googleusercontent.com/d/15Q5U84Vad80yHGqWIUD5e9HgIHRZw3F4" 
                  alt="Revita Fio Logo" 
                  className="w-12 h-12 object-contain rounded-lg" 
                />
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                Revita <span className="text-blue-500">Fio</span>
                </span>
            </div>
            
            <div className="flex space-x-6">
                <a href="https://www.instagram.com/revitafio.parnamirim/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/p/Revita-Fio-61575853281635/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            </div>
        </div>
        
        <div className="w-full h-px bg-slate-800 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between text-sm">
            <p>&copy; {new Date().getFullYear()} Clínica Revita Fio. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors focus:outline-none">Privacidade</button>
                <button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors focus:outline-none">Termos de Uso</button>
            </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
             
             {/* Header */}
             <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 p-6 flex justify-between items-center z-10">
               <h3 className="font-serif text-2xl font-bold text-slate-900">Política de Privacidade</h3>
               <button 
                  onClick={() => setShowPrivacy(false)}
                  className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 hover:text-slate-900 transition-colors"
               >
                 <X size={20} />
               </button>
             </div>

             {/* Content */}
             <div className="p-8 prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed">
                <p>
                  A sua privacidade é importante para nós. É política do Revita Fio - Clínica de Reprogramação Capilar respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Revita Fio - Clínica de Reprogramação Capilar, e outros sites que possuímos e operamos.
                </p>
                <p>
                  Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
                <p>
                  Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>
                <p>
                  Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>
                <p>
                  O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </p>
                <p>
                  Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </p>
                <p>
                  O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                </p>
                
                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Publicidade e Cookies</h4>
                <p>
                  O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você. Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
                </p>
                <p>
                  Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados ​​por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
                </p>
                <p>
                  Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Compromisso do Usuário</h4>
                <p>
                  O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Revita Fio - Clínica de Reprogramação Capilar oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                  <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                  <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Revita Fio - Clínica de Reprogramação Capilar, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Mais informações</h4>
                <p>
                  Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
                <p className="text-slate-400 text-xs mt-8 pt-4 border-t border-slate-100">
                  Esta política é efetiva a partir de 25 November 2025 14:57
                </p>
             </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white text-slate-800 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl animate-in zoom-in-95 duration-200">
             
             {/* Header */}
             <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 p-6 flex justify-between items-center z-10">
               <h3 className="font-serif text-2xl font-bold text-slate-900">Termos de Uso</h3>
               <button 
                  onClick={() => setShowTerms(false)}
                  className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 hover:text-slate-900 transition-colors"
               >
                 <X size={20} />
               </button>
             </div>

             {/* Content */}
             <div className="p-8 prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed">
                <h4 className="text-lg font-bold text-slate-900 mb-3">1. Termos</h4>
                <p>
                  Ao acessar ao site Revita Fio - Clínica de Reprogramação Capilar, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Uso de Licença</h4>
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Revita Fio - Clínica de Reprogramação Capilar , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Modificar ou copiar os materiais;</li>
                  <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Revita Fio - Clínica de Reprogramação Capilar;</li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>
                <p className="mt-2">
                  Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Revita Fio - Clínica de Reprogramação Capilar a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">3. Isenção de responsabilidade</h4>
                <p>
                  Os materiais no site da Revita Fio - Clínica de Reprogramação Capilar são fornecidos 'como estão'. Revita Fio - Clínica de Reprogramação Capilar não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
                <p>
                  Além disso, o Revita Fio - Clínica de Reprogramação Capilar não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">4. Limitações</h4>
                <p>
                  Em nenhum caso o Revita Fio - Clínica de Reprogramação Capilar ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Revita Fio - Clínica de Reprogramação Capilar, mesmo que Revita Fio - Clínica de Reprogramação Capilar ou um representante autorizado da Revita Fio - Clínica de Reprogramação Capilar tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">5. Precisão dos materiais</h4>
                <p>
                  Os materiais exibidos no site da Revita Fio - Clínica de Reprogramação Capilar podem incluir erros técnicos, tipográficos ou fotográficos. Revita Fio - Clínica de Reprogramação Capilar não garante que qualquer material em seu site seja preciso, completo ou atual. Revita Fio - Clínica de Reprogramação Capilar pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Revita Fio - Clínica de Reprogramação Capilar não se compromete a atualizar os materiais.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">6. Links</h4>
                <p>
                  O Revita Fio - Clínica de Reprogramação Capilar não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Revita Fio - Clínica de Reprogramação Capilar do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Modificações</h4>
                <p>
                  O Revita Fio - Clínica de Reprogramação Capilar pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>

                <h4 className="text-lg font-bold text-slate-900 mt-6 mb-3">Lei aplicável</h4>
                <p>
                  Estes termos e condições são regidos e interpretados de acordo com as leis do Revita Fio - Clínica de Reprogramação Capilar e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
             </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;