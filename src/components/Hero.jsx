import motorAvif from "../assets/hero/motor.avif";
import motorWebp from "../assets/hero/motor.webp";
import motorJpg from "../assets/hero/motor.jpg";

export function Hero() {
  return (
    <section className="relative bg-raposo-dark px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-12 overflow-y-visible min-h-fit h-svh md:h-[75svh]">
      <picture class="absolute inset-0 opacity-50 h-[120svh] w-full block">
        {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
        <source srcSet={motorAvif} type="image/avif" />
        <source srcSet={motorWebp} type="image/webp" />

        {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
        <img
          src={motorJpg}
          alt="Imagem de um Motor Diesel para o plano de fundo"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </picture>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-raposo-dark via-raposo-dark/95 to-transparent "></div> */}
      <div className="absolute inset-0 bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%  h-[120svh] "></div>
      <div className="absolute inset-0 bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%  h-[120svh] "></div>
      {/* <div className="absolute -right-10 -top-10 h-96 w-96 rounded-full bg-raposo-red/10 blur-3xl "></div> */}

      <div className="relative mx-auto w-[90svw] max-w-6xl *:w-[70%] h-auto md:h-full ">
        <div
          id="since"
          className="absolute roll-down mt-16 md:mt-0 top-0 right-0 md:right-8 max-w-fit scale-125 
          before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2
          before:-translate-y-1/2 before:size-20 before:rotate-45 before:border before:border-raposo-yellow before:   before:bg-raposo-red-dark   before:-z-10  
        "
        >
          <div
            className="
            flex flex-col items-center justify-center max-w-fit px-5 py-0 h-16 text-raposo-yellow font-serif tracking-widest
            bg-raposo-red-dark 
            before:conent-[''] before:absolute before:border-0 before:border-y-32  before:border-r-30  before:border-r-raposo-red-dark before:border-transparent before:left-0 before:-translate-x-full  before:top-0 before:h-14
            after:conent-[''] after:absolute after:border-0 after:border-y-32  after:border-l-30  after:border-l-raposo-red-dark after:border-transparent after:right-0 after:translate-x-full  after:top-0 after:h-14"
          >
            <span className="inlineine ">
              &bull;&nbsp;
              <span className="bg-red-950 -px-50 py-1 text-sm font-bold uppercase border-y border-y-raposo-yellow">
                Desde 1985
              </span>
              &nbsp;&bull;
            </span>
            <span className="text-xs">em Sorocaba</span>
          </div>
        </div>
        <div className="scroll-reveal relative h-[90svh] md:h-full flex flex-col flex-wrap justify-around">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Especialistas em{" "}
            <span className="text-raposo-yellow">Injeção&nbsp;Diesel</span>
          </h1>
          <p className="scroll-reveal max-w-xl text-base text-neutral-300 sm:text-lg">
            Manutenção de alta precisão para bicos, bombas injetoras e sistemas
            de injeção eletrônica em motores a diesel. Traga força e economia de
            volta ao seu veículo.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/seunumerodoZap"
              target="_blank"
              rel="noopener noreferrer"
              className=" whatsapp-btn reveal vendas rounded-md bg-raposo-yellow-washed border-2 border-raposo-red px-6 py-3 text-sm font-extrabold text-raposo-red-dark shadow-md transition-all [&:is(:hover,.active)]:bg-yellow-400 [&:is(:hover,.active)]:shadow-xl "
              data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="rounded-md reveal border border-neutral-500 bg-raposo-red-dark px-6 py-3 text-sm font-semibold text-white transition-all [&:is(:hover,.active)]:bg-raposo-red/60 [&:is(:hover,.active)]:border-raposo-yellow [&:is(:hover,.active)]:text-raposo-yellow"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
