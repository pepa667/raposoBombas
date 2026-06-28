import motorAvif from "../assets/motor.avif";
import motorWebp from "../assets/motor.webp";
import motorJpg from "../assets/motor.jpg";

export function Hero() {
  return (
    <section className="relative bg-raposo-dark px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-12 overflow-y-visible h-[75svh]">
      <picture className="absolute inset-0  opacity-50 h-[140svh] ">
        <source srcSet={motorAvif} type="image/avif" />
        <source srcSet={motorWebp} type="image/webp" />
        <img
          src={motorJpg}
          alt="Motor Diesel"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </picture>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-raposo-dark via-raposo-dark/95 to-transparent "></div> */}
      <div className="absolute inset-0 bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%  h-[140svh] "></div>
      <div className="absolute inset-0 bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%  h-[140svh] "></div>
      {/* <div className="absolute -right-10 -top-10 h-96 w-96 rounded-full bg-raposo-red/10 blur-3xl "></div> */}

      <div className="relative mx-auto w-[80svw] max-w-6xl *:w-[70%] h-full  ">
        <div
          className="roll-down absolute top-0 right-0 max-w-fit scale-125 
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
        <div className="relative h-full flex flex-col flex-wrap justify-around">
          <h1 className="scroll-reveal text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Especialistas em{" "}
            <span className="text-raposo-yellow">Injeção&nbsp;Diesel</span>
          </h1>
          <p className="max-w-xl text-base text-neutral-300 sm:text-lg">
            Manutenção de alta precisão para bicos, bombas injetoras e sistemas
            de injeção eletrônica em motores a diesel. Traga força e economia de
            volta ao seu veículo.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/seunumerodoZap"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-raposo-yellow px-6 py-3 text-sm font-extrabold text-raposo-red-dark shadow-md transition-all hover:bg-yellow-400 hover:shadow-xl active:scale-95"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="rounded-md border border-neutral-500 bg-raposo-red-dark px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-raposo-yellow-washed/10 hover:border-raposo-yellow hover:text-raposo-yellow"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
