export function Footer() {
  return (
    <footer className="bg-raposo-dark-950 text-raposo-dark-400 text-xs py-8 px-4 border-t border-raposo-dark-800">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-wider">
            RAPOSO BOMBAS DIESEL
          </span>
          <span>© 2026. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#servicos" className="hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </div>
        <div class="flex items-center gap-2 tracking-widest uppercase ">
          <span>DEVELOPED BY</span>
          <a
            href="https://pepa.dev.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="relative group font-black text-raposo-yellow hover:text-raposo-dark-800 transition-colors duration-300 px-2 py-1 rounded bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <span class="relative z-10">[ PEPA.DEV.br ]</span>
            <span class="absolute inset-0 bg-raposo-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-sm -z-0"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
