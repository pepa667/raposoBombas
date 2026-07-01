import bancadaWebp from "../assets/billboard/bancada.webp";
import bancadaPng from "../assets/billboard/bancada.png";


export function Billboard() {
  return (
    <section class="relative bg-linear-to-tl mt-36 from-raposo-red-dark to-raposo-red px-4 py-12 text-white sm:px-6 lg:px-8 drop-shadow-[0_15px_15px_#0008] border-b-2 border-slate-500/50 overflow-hidden">
      {/* Overlay escuro de fundo para dar contraste */}
      <div class="absolute inset-0 bg-slate-900/60 pointer-events-none"></div>

      <div class="absolute inset-0 mx-auto max-w-6xl  ">

        <picture class="absolute right-0 top-0 max-w-fit h-full opacity-70 mirro">
          {/* Usando os assets que estruturamos */}
          <source srcSet={bancadaWebp} type="image/webp" />
          <img
            src={bancadaPng}
            alt="Bomba Injetora Diesel de Alta Precisão"
            class="w-full h-full object-contain"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-[30svh]">

        {/* BLOCO DE TEXTO (Ocupa 7 colunas no desktop) */}
        <div class="text-center md:text-right md:col-span-7 space-y-4 z-10">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-6xl text-raposo-yellow font-serif mb-16">
            Precisão que move o seu negócio.
          </h2>
          <p class="max-w-xl mx-auto md:mx-0 text-lg font-medium text-red-100 sm:text-2xl leading-relaxed">
            Diagnóstico avançado e tecnologia de ponta para sistemas de injeção diesel desde 1985.
          </p>
        </div>

        {/* BLOCO DA IMAGEM / ASSET (Ocupa 5 colunas no desktop) */}

      </div>
    </section>
  );
}