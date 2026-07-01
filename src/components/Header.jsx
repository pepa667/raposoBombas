import { LogoRaposo } from "./LogoRaposo"; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { ZapZap } from "./ZapZap"; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Header() {
  return (
    <header className="sticky top-0  border-0 border-b-2 border-slate-500/50 bg-raposo-dark transition-none z-10">
      <div className="mx-auto max-h-25 flex gap-3 md:gap-8 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 *:transition-all *:duration-700">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="relative bg-raposo-dark w-full min-w-60 max-w-90 px-6 py-4 pt-14 md:pt-10 rounded-md border-2 border-slate-500/50 drop-shadow-[0_10px_10px_#000f] hover:translate-y-4 group"
        >
          {/* <div className="absolute z-[-1  ] bg-linear-to-b from-amber-100/50 to-slate-200/40 size-full m-1  top-0 left-0 "></div> */}
          <LogoRaposo
            className="aspect-4/1  transition-all duration-2000 group-hover:translate-y-4"
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-neutral-300 *:transition-colors *:hover:text-raposo-yellow-washed *:text-[clamp(0.5rem,1.5vw,1rem)]">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre&nbsp;Nós</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* BOTÃO DE AÇÃO */}
        <div className="">
          <a
            href="https://wa.me/seunumerodoZap"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-0 lg:hover:gap-3.5 rounded-4xl content-evenly lg:rounded-md bg-raposo-red px-4 py-2 text-lg font-bold text-neutral-200 shadow-md transition-all hover:bg-red-950 hover:shadow-lg hover:border-2 hover:border-raposo-red/50 border-raposo-yellow hover:text-raposo-yellow duration-1000"
          >
            <span className="size-0 lg:size-auto overflow-hidden">Fale&nbsp;Conosco
            </span>
            <ZapZap className="size-10 lg:size-0 fill-raposo-yellow group-hover:size-10 transition-all duration-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
