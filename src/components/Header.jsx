import { LogoRaposo } from './LogoRaposo'; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { ZapZap } from './ZapZap'; // Certifique-se de que o nome e caminho batem com o arquivo criado

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');

  if (window.scrollY > 100) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});

export function Header() {
  return (
    <header
      id="header"
      className="bg-raposo-dark-950 sticky top-0 z-50 float-start w-full transition-all duration-1000"
    >
      {' '}
      <div className="border-raposo-yellow/50 absolute -bottom-28 h-28 w-full border-t-2 bg-radial-[65%_70%_at_50%_-30%,var(--color-raposo-dark-950)_0%_50%,color-mix(in_srgb,var(--color-raposo-dark-950)_40%,transparent)_90%,transparent]"></div>
      <div className="mx-auto flex max-h-25 max-w-7xl items-center justify-between gap-3 px-4 py-3 transition-all duration-700 sm:px-6 md:gap-8 lg:px-8">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="group relative w-fit max-w-[60svw] px-6"
          aria-label="Início"
        >
          {/* <div className="absolute z-[-1  ] bg-linear-to-b from-amber-100/50 to-raposo-dark-200/40 size-full m-1  top-0 left-0 "></div> */}
          <LogoRaposo
            className="aspect-4/1 h-20 max-w-full transition-all duration-500 group-hover:translate-y-4 max-md:in-[.shrunk]:h-12"
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="text-raposo-dark-300 *:hover:text-raposo-yellow-washed hidden items-center gap-8 text-lg font-semibold *:text-[clamp(0.5rem,1.5vw,1rem)] *:transition-colors md:flex">
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
            className="whatsapp-btn group bg-raposo-yellow/30 text-raposo-dark-200 hover:bg-raposo-red-dark border-raposo-yellow hover:border-raposo-yellow hover:text-raposo-yellow inline-flex h-12 content-evenly items-center gap-0 border-2 px-4 py-2 text-lg font-bold shadow-md transition-all duration-1000 hover:shadow-lg max-lg:rounded-full lg:hover:gap-3.5"
            data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
          >
            <span className="size-0 overflow-hidden lg:size-auto">
              Fale&nbsp;Conosco
            </span>
            <ZapZap className="size-16 fill-green-600 transition-all duration-500 group-hover:size-16 lg:size-0" />
          </a>
        </div>
      </div>{' '}
    </header>
  );
}
