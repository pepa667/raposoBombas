import { LogoRaposo } from './LogoRaposo'; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { ZapZap } from './ZapZap'; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Header() {
  return (
    <header className="bg-raposo-dark sticky top-0 z-50">
      <div className="mx-auto flex max-h-fit max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:gap-8 lg:px-8">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="group relative h-auto max-h-full w-fit max-w-[60svw] px-6"
          aria-label="Início"
        >
          {/* <div className="absolute z-[-1  ] bg-linear-to-b from-amber-100/50 to-raposo-dark-200/40 size-full m-1  top-0 left-0 "></div> */}
          <LogoRaposo
            className="aspect-4/1 h-12 max-w-full transition-all duration-500 group-hover:translate-y-4 lg:h-20"
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="text-raposo-yellow-light *:hover:text-raposo-yellow text-md group *:after:border-raposo-yellow *:after: relative hidden items-center gap-8 font-semibold *:transition-colors *:after:relative *:after:left-0 *:after:flex *:after:h-auto *:after:w-[0%] *:after:border-0 *:after:duration-300 *:hover:after:-mb-0.5 *:hover:after:w-full *:hover:after:border md:flex md:gap-10 lg:gap-20 lg:text-xl">
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
            className="whatsapp-btn group bg-raposo-red-dark text-raposo-yellow hover:bg-raposo-yellow-light border-raposo-yellow inline-flex h-12 content-evenly items-center gap-0 border-2 px-4 py-2 text-lg font-bold hover:text-black lg:hover:gap-3.5"
            data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
          >
            <span className="size-0 overflow-hidden lg:size-auto">
              Fale&nbsp;Conosco
            </span>
            <ZapZap className="size-16 fill-green-600 transition-all duration-500 group-hover:size-16 lg:size-0" />
          </a>
        </div>
      </div>
    </header>
  );
}
