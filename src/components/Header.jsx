import { LogoRaposo } from "./LogoRaposo"; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { ZapZap } from "./ZapZap"; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-raposo-yellow bg-raposo-dark">
      <div className="mx-auto max-h-25 flex gap-3 md:gap-8 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="relative bg-raposo-dark w-full min-w-60 max-w-90 px-6 py-4 pt-20 md:pt-10 drop-shadow-[0_10px_5px_rgba(0,0,0,0.9)]  rounded-xl border border-raposo-dark group"
        >
          <div className="absolute bg-linear-to-b from-slate-300/12 to-slfrom-slate-300/4 blur-[2px] size-[calc(100%-1rem)] m-2 inset-ring-8/4 top-0 left-0 rounded-sm -z-10"></div>
          <LogoRaposo
            className="aspect-4/1 object-cover transition-all duration-2000 group-hover:scale-102 group-hover:-translate-y-2 drop-shadow-[0_5px_2px_rgba(0,0,0,0.9)] "
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-neutral-400 *:transition-colors *:hover:text-raposo-yellow-washed">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre&nbsp;Nós</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BOTÃO DE AÇÃO */}
        <div className="flex items-center">
          <a
            href="https://wa.me/seunumerodoZap"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-4xl lg:rounded-md bg-raposo-red px-4 py-2 text-lg font-bold text-neutral-400 shadow-md transition-all hover:bg-red-950 hover:shadow-lg active:scale-95 hover:text-raposo-yellow duration-1000"
          >
            <span className="hidden lg:block">Fale&nbsp;Conosco</span>
            <ZapZap className="block size-10 lg:hidden fill-green-400" />
          </a>
        </div>
      </div>
    </header>
  );
}
