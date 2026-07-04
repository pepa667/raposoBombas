import { LogoRaposo } from "./LogoRaposo"; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { ZapZap } from "./ZapZap"; // Certifique-se de que o nome e caminho batem com o arquivo criado

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 100) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});

export function Header() {
  return (
    <header
      id="header"
      className="sticky float-start top-0 w-full bg-raposo-dark-950 transition-all duration-1000 z-50 "
    >
      {" "}
      <div className="w-full h-28 absolute -bottom-28 bg-radial-[65%_70%_at_50%_-30%,var(--color-raposo-dark-950)_0%_50%,color-mix(in_srgb,var(--color-raposo-dark-950)_40%,transparent)_90%,transparent] border-t-2 border-raposo-yellow/50"></div>
      <div className="mx-auto max-h-25 flex  gap-3 md:gap-8 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 transition-all duration-700">
        {/* CONTAINER DA LOGO */}
        <a
          href="#"
          className="relative w-fit max-w-[60svw] px-6    group"
          aria-label="Início"
        >
          {/* <div className="absolute z-[-1  ] bg-linear-to-b from-amber-100/50 to-raposo-dark-200/40 size-full m-1  top-0 left-0 "></div> */}
          <LogoRaposo
            className="aspect-4/1  transition-all h-20  max-md:in-[.shrunk]:h-12 max-w-full duration-500 group-hover:translate-y-4"
            lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-raposo-dark-300 *:transition-colors *:hover:text-raposo-yellow-washed *:text-[clamp(0.5rem,1.5vw,1rem)]">
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
            className="whatsapp-btn h-12 max-lg:rounded-full group inline-flex items-center gap-0 lg:hover:gap-3.5  content-evenly bg-raposo-yellow/30 px-4 py-2 text-lg font-bold text-raposo-dark-200 shadow-md transition-all hover:bg-raposo-red-dark hover:shadow-lg border-2 border-raposo-yellow hover:border-raposo-yellow hover:text-raposo-yellow duration-1000"
            data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
          >
            <span className=" size-0 lg:size-auto overflow-hidden">
              Fale&nbsp;Conosco
            </span>
            <ZapZap className=" size-16 lg:size-0 fill-green-600 group-hover:size-16  transition-all duration-500" />
          </a>
        </div>
      </div>{" "}
    </header>
  );
}
