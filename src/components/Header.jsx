import { LogoRaposo } from "./LogoRaposo"; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-raposo-yellow bg-raposo-dark">
      <div className="mx-auto max-h-25 flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="flex bg-raposo-dark items-center gap-3 mt-12 rounded-b-2xl group"
        >
          <LogoRaposo
            class="h-25 aspect-4/1 w-fit object-cover transition-transform duration-300 group-hover:scale-105"
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-neutral-400 *:transition-colors *:hover:text-raposo-yellow-washed">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BOTÃO DE AÇÃO */}
        <div className="flex items-center">
          <a
            href="https://wa.me/seunumerodoZap"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-raposo-red px-4 py-2 text-lg font-bold text-neutral-400 shadow-md transition-all hover:bg-red-950 hover:shadow-lg active:scale-95 hover:text-raposo-yellow-washed"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
