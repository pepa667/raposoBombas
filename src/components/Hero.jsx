import motorAvif from "../assets/motor.avif";
import motorWebp from "../assets/motor.webp";
import motorJpg from "../assets/motor.jpg";

export function Hero() {
  return (
    <section className="relative bg-raposo-dark px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20 overflow-y-visible h-fit">
      <picture className="absolute inset-0 z-0 opacity-50 h-svh ">
        <source srcSet={motorAvif} type="image/avif" />
        <source srcSet={motorWebp} type="image/webp" />
        <img
          src={motorJpg}
          alt="Motor Diesel"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </picture>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-raposo-dark via-raposo-dark/95 to-transparent z-10"></div> */}
      <div className="absolute inset-0 bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%  h-svh "></div>
      <div className="absolute inset-0 bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%  h-svh "></div>
      {/* <div className="absolute -right-10 -top-10 h-96 w-96 rounded-full bg-raposo-red/10 blur-3xl z-10"></div> */}

      <div className="relative mx-auto max-w-7xl z-20 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 lg:col-span-7 space-y-6">
          <div
            className="
          relative flex flex-col items-center max-w-fit px-20 py-2 -left-20 rounded-sm text-raposo-yellow font-serif tracking-widest 
          bg-[linear-gradient(to_right,#ff000000_0%,hsl(from_var(--color-red-950)_h_50%_10%)_20%,hsl(from_var(--color-red-950)_h_50%_10%)_80%,#0000ff00_100%)] 
          before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2
          before:-translate-y-1/2 before:size-20 before:rotate-45 before:border before:border-raposo-yellow before:-z-10"
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
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
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
              className="rounded-md bg-raposo-yellow px-6 py-3 text-sm font-extrabold text-raposo-dark shadow-md transition-all hover:bg-yellow-400 hover:shadow-xl active:scale-95"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="rounded-md border border-neutral-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
