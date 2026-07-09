import bicosWebp from '../assets/services/bico_photo.webp';
import bombasWebp from '../assets/services/bomba_photo.webp';
import injecaoWebp from '../assets/services/modulo_photo.webp';
import bicosPng from '../assets/services/bico_photo.png';
import bombasPng from '../assets/services/bomba_photo.png';
import injecaoPng from '../assets/services/modulo_photo.png';

function ServiceCard({
  title,
  desc,
  ilustraWebp,
  ilustraPng,
  delay,
  reveal,
  revealBlur,
}) {
  return (
    <div
      class="reveal group scroll-reveal md:hover:border-primary max-md:[&:is(:hover,.active)]:border-primary relative mt-24 flex h-48 flex-col flex-wrap justify-end rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition-all *:z-10 md:hover:-translate-y-2 md:hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] max-md:[&:is(:hover,.active)]:-translate-y-2 max-md:[&:is(:hover,.active)]:shadow-[0_0_20px_rgba(245,158,11,0.1)]"
      style={{
        '--delay-step': `${delay}%`,
        '--revealY': `${reveal}px`,
        '--revealBlur': `${revealBlur}px`,
      }}
    >
      <div class="reveal text-primary group-[:hover,.active]:border-primary absolute -top-32 right-0 z-0 m-4 size-48 rounded-lg border border-zinc-800 bg-zinc-900 transition-all">
        <picture>
          {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
          <source srcSet={ilustraWebp} type="image/webp" />
          {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
          <img
            src={ilustraPng}
            alt={title}
            class="size-full object-cover"
            loading="lazy"
          />
        </picture>
      </div>
      <div className="lg:w-3/4">
        <h4 class="mb-3 align-bottom text-xl font-bold text-white">{title}</h4>
        <p class="text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    // {/* ==========================================
    //           4. SERVIÇOS (Os Cards com aquele seu seletor :is() )
    //       ========================================== */}
    <section
      id="servicos"
      class="relative z-10 border-t border-zinc-800 bg-zinc-900 px-4 py-24"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h3 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Nossos Serviços
          </h3>
          <p class="text-zinc-400">
            Precisão e tecnologia para o coração do seu veículo.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            title="Bombas Injetoras"
            desc="Manutenção completa em sistemas mecânicos tradicionais."
            ilustraPng={bombasPng}
            ilustraWebp={bombasWebp}
            delay="0"
            reveal="0"
          />
          <ServiceCard
            title="Injeção Eletrônica"
            desc="Diagnóstico avançado de módulos e sistemas Common Rail."
            ilustraPng={injecaoPng}
            ilustraWebp={injecaoWebp}
            delay="10"
            reveal="100"
          />
          <ServiceCard
            title="Turbos e Bicos"
            desc="Calibração e reparo de bicos injetores para máxima potência."
            ilustraPng={bicosPng}
            ilustraWebp={bicosWebp}
            delay="20"
            reveal="200"
          />
        </div>
      </div>
    </section>
  );
}
