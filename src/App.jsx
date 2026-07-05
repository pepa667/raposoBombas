import { useEffect } from 'preact/hooks';
import { Observer } from 'tailwindcss-intersect';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Billboard } from './components/Billboard';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ZapModal } from './components/ZapModal';

export function App() {
  useEffect(() => {
    // 1. Sempre limpe instâncias antigas para evitar bugs de duplicidade no Preact
    try {
      Observer.disconnect();
    } catch (e) {}

    // 2. Inicialize com valores balanceados
    // Se o topo e a base são -35%, a zona de ativação é bem fina no centro.
    // Usar threshold: 0 garante que encostou na linha, ativou.
    Observer.start({
      threshold: 0,
      rootMargin: '-35% 0px -35% 0px',
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Billboard />
      <About />
      <Contact />
      <Footer />
      {/* Componentes de efeito global */}
      <ZapModal />
    </div>
  );
}
