import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingChat />
    </main>
  );
};

export default App;