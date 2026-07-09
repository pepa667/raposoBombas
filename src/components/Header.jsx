import { Raposo } from './Raposo'; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Header() {
  return (
    // {
    //   /* ==========================================
    //           1. HEADER STICKY
    //       ========================================== */
    // }
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <h1 className="hidden text-2xl font-black tracking-tighter text-white">
          RAPOSO<span className="text-primary">BOMBAS</span>
        </h1>
        <Raposo
          className="relative h-6 max-w-[80svw]"
          lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
        />{' '}
        <nav className="hidden items-baseline gap-8 text-sm font-medium text-zinc-400 md:flex">
          <a href="#sobre" className="hover:text-primary transition-colors">
            Sobre Nós
          </a>
          <a href="#servicos" className="hover:text-primary transition-colors">
            Serviços
          </a>
          <a
            href="#contato"
            href="https://wa.me/seunumerodoZap"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn bg-primary rounded-full px-5 py-2 font-bold text-zinc-950 transition-all hover:bg-amber-400"
          >
            Agendar Avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
