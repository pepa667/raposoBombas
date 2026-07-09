import motorAvif from '../assets/hero/motor.avif';
import motorWebp from '../assets/hero/motor.webp';
import motorJpg from '../assets/hero/motor.jpg';

export function About() {
  return (
    // {/* ==========================================
    //           3. SOBRE NÓS (Com a Imagem do Motor 8k)
    //       ========================================== */}
    <section id="sobre" class="relative z-10 bg-zinc-950 px-4 py-24">
      <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div
          class="reveal scroll-reveal space-y-6"
          style={{ '--revealX': `500px` }}
        >
          <h3 class="text-3xl font-bold text-white md:text-4xl">
            Evoluindo junto com o seu motor.
          </h3>
          {/* O texto comercial que criamos */}
          <p class="text-lg leading-relaxed text-zinc-400">
            Referência em motores a diesel desde 1985, a Raposo Bombas une
            tradição e tecnologia em Sorocaba. Evoluímos da mecânica tradicional
            à injeção eletrônica avançada para entregar diagnósticos exatos.
          </p>
          <p class="text-lg leading-relaxed text-zinc-400">
            Nossa oficina conta com profissionais capacitados que jogam limpo.
            Oferecemos transparência total do orçamento à entrega, evitando
            gastos desnecessários para a sua frota.
          </p>
        </div>

        {/* Aqui entra a imagem que geramos via IA */}
        <div
          class="reveal scroll-reveal relative overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl"
          style={{ '--revealX': `-500px` }}
        >
          {/* Se tiver a imagem salva, coloque no src abaixo: */}
          {/* <img src={engineImg} alt="Motor a Diesel High-Tech" class="w-full h-auto object-cover" /> */}
          <div class="flex aspect-square items-center justify-center bg-zinc-900 text-zinc-600 md:aspect-4/3">
            <picture className="absolute inset-0 block opacity-50">
              {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
              <source
                srcSet={motorAvif}
                type="image/avif"
                fetchpriority="high"
              />
              <source srcSet={motorWebp} type="image/webp" />

              {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
              <img
                src={motorJpg}
                alt="Imagem de um Motor Diesel para o plano de fundo"
                className="aspect-auto h-full w-auto object-cover object-[85%]"
                loading="lazy"
              />
            </picture>
          </div>
          <div class="from-primary/10 absolute inset-0 bg-linear-to-tr to-transparent mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
}
