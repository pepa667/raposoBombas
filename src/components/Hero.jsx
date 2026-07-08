import motorMobileWebm from '../assets/hero/motor_mobile.webm'; // Seu vídeo
import motorMobileMp4 from '../assets/hero/motor_mobile.mp4'; // Seu vídeo
import motorHdWebm from '../assets/hero/motor_otimizado.webm'; // Seu vídeo
import motorHdMp4 from '../assets/hero/motor_otimizado.mp4'; // Seu vídeo

import { LogoRaposo } from './LogoRaposo'; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Hero() {
  return (
    // {/* ==========================================
    //           2. HERO SECTION (O Parallax Perfeito)
    //       ========================================== */}

    <section
      id="home"
      className="relative z-0 mt-20 flex h-[calc(100svh-5rem)] items-center overflow-hidden border-b-2 border-zinc-800 px-4 py-12"
      style={{ 'clip-path': 'inset(0 0 0 0)' }}
    >
      {/* Vídeo Fixo no Fundo */}
      <div className="pointer-events-none fixed top-0 left-0 -z-10 h-svh w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-fit absolute inset-0 top-1/2 left-1/2 h-auto max-h-[90%] w-7xl max-w-[140svw] -translate-x-1/2 -translate-y-1/2"
        >
          {/* 1. Celulares (Telas menores que 768px) carregam o mobile */}
          <source
            src={motorMobileWebm}
            type="video/webm"
            media="(max-width: 768px)"
          />
          <source
            src={motorMobileMp4}
            type="video/mp4"
            media="(max-width: 768px)"
          />

          {/* 2. Telas maiores (Tablets e Desktop) carregam o HD */}
          <source src={motorHdWebm} type="video/webm" />
          <source src={motorHdMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-zinc-950/70"></div>
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/40"></div>
      </div>

      {/* Conteúdo Hero */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center 2xl:gap-12">
        <LogoRaposo
          className="relative aspect-4/1 h-28 max-w-[80svw]"
          lightText={false} // Mantém o vinho padrão e o amarelo originais. Mude para true se o fundo pedir texto claro.
        />

        <span className="text-sm font-bold tracking-widest text-amber-500 uppercase">
          Especialistas em Diesel desde 1985
        </span>
        <h2 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-7xl">
          Diagnóstico Exato.
          <br />
          <span className="bg-linear-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
            Zero Achismo.
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-zinc-300 drop-shadow-md md:text-xl">
          Da mecânica tradicional à injeção eletrônica avançada. Poupamos o seu
          dinheiro resolvendo o problema real do seu motor.
        </p>
      </div>
    </section>
  );
}
