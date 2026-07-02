import { useEffect } from "preact/hooks";
import motorMp4 from "../assets/billboard/motor.mp4";

window.addEventListener("scroll", () => {
  const bbTitle = document.getElementById("bbTitle");
  if (!bbTitle) return; // Evita erros caso o elemento não exista na tela

  // Posição do elemento em relação ao topo da tela visível
  const elementoTopo = bbTitle.getBoundingClientRect().top;

  // Linha imaginária no meio exato da tela
  const meioDaTela = window.innerHeight / 1.5;

  // Se o topo do elemento passou do meio da tela (ficou menor que o meio)
  if (elementoTopo < meioDaTela) {
    bbTitle.classList.add("opacity-100");
  } else {
    bbTitle.classList.remove("opacity-100");
  }
});

export function Billboard() {
  return (
    <section
      /* REMOVIDO o drop-shadow daqui para não matar o fixed do filho! Mantive o border. */
      className="showReveal billboard-title relative flex flex-col-reverse h-[60svh] mt-24 overflow-hidden bg-slate-800 "
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="fixed top-[5svh] left-0 w-full h-svh -z-10 pointer-events-none">
        <video
          src={motorMp4}
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
          /* Limpei as classes: isso aqui já faz o vídeo cobrir a tela perfeitamente */
          className="absolute md:top-[10svh] inset-0 w-full h-[90svh] object-cover md:object-contain opacity-90 mix-blend-multiply"
        />

        <div className="absolute inset-0 bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%  h-svh"></div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%  h-svh"></div>
        <div className="absolute inset-0 bg-linear-to-t from-raposo-dark-950 to-raposo-dark-950/30  "></div>
      </div>

      <div
        id="bbTitle"
        className="relative transition-all duration-1500  max-h-fit align-baseline text-center bottom-[5svh] mx-auto min-w-fit max-w-[90svw] w-7xl py-6 bg-raposo-dark bg-linear-to-t from-black/70 to-transparent rounded-xl opacity-0"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-6xl text-raposo-yellow  mb-8">
          Precisão que move o seu negócio.
        </h2>
        <p className="text-lg font-medium text-raposo-yellow-washed sm:text-2xl leading-relaxed">
          Diagnóstico avançado e tecnologia de ponta para sistemas de injeção
          diesel desde 1985.
        </p>
      </div>
    </section>
  );
}
