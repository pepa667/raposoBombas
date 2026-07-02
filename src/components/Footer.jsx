export function Footer() {
  return (
    <footer className="bg-raposo-dark text-raposo-dark-400 text-xs py-8 px-4 border-t border-raposo-dark-800">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
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
      </div>
    </footer>
  );
}
