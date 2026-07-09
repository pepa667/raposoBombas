import { useEffect, useState } from 'preact/hooks';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonial } from './components/Testimonial';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ZapModal } from './components/ZapModal';
// import engineImg from "../assets/engine-render.jpg"; // A imagem 8k que geramos

export function App() {
  // O Hook de ScrollReveal que construímos (Roda apenas em dispositivos touch/mobile)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('entrance');
            if (!globalThis.matchMedia('(pointer: coarse)').matches) return;
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.2, rootMargin: '-20% 20%' },
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      {/* Componentes de efeito global */}
      <ZapModal />
    </main>
  );
}
