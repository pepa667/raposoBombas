import motorMp4 from '../assets/billboard/motor.mp4';

export function Billboard() {
  return (
    <section
      /* REMOVIDO o drop-shadow daqui para não matar o fixed do filho! Mantive o border. */
      className="showReveal billboard-title bg-raposo-dark relative flex h-[60svh] flex-col-reverse overflow-hidden"
      style={{ clipPath: 'inset(0 0 0 0)' }}
    >
      <div className="pointer-events-none fixed top-[5svh] left-0 -z-10 h-svh w-full">
        <video
          src={motorMp4}
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
          /* Limpei as classes: isso aqui já faz o vídeo cobrir a tela perfeitamente */
          className="absolute inset-0 h-[90svh] w-full object-none opacity-90 mix-blend-multiply md:top-[10svh]"
        />

        <div className="absolute inset-0 h-svh bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%"></div>
        <div className="absolute inset-0 h-svh bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%"></div>
        <div className="bg-raposo-gray"></div>
      </div>

      <div
        id="bbTitle"
        className="bg-raposo-dark-950 text-raposo-yellow relative bottom-[5svh] mx-auto max-h-fit w-7xl max-w-[90svw] min-w-fit py-6 text-center align-baseline opacity-0 transition-all duration-1500"
      >
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-6xl">
          Precisão que move o seu negócio.
        </h2>
        <p className="text-lg leading-relaxed font-medium sm:text-2xl">
          Diagnóstico avançado e tecnologia de ponta para sistemas de injeção
          diesel desde 1985.
        </p>
      </div>
    </section>
  );
}
