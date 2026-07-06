import bicosWebp from '../assets/services/bico_photo.webp';
import bombasWebp from '../assets/services/bomba_photo.webp';
import injecaoWebp from '../assets/services/modulo_photo.webp';
import bicosPng from '../assets/services/bico_photo.png';
import bombasPng from '../assets/services/bomba_photo.png';
import injecaoPng from '../assets/services/modulo_photo.png';

const SERVICOS = [
  {
    title: 'Bombas Injetoras',
    description:
      'Testes, regulagem eletrônica e recondicionamento completo de bombas injetoras convencionais e de alta pressão.',
    revealDelay: '0',
    ilustraWebp: bombasWebp,
    ilustraPng: bombasPng,
  },
  {
    title: 'Bicos Injetores',
    description:
      'Análise de vazão, limpeza por ultrassom, calibração precisa e troca de componentes para pulverização perfeita.',
    revealDelay: '25',
    ilustraWebp: bicosWebp,
    ilustraPng: bicosPng,
  },
  {
    title: 'Injeção Eletrônica Diesel',
    description:
      'Diagnóstico via scanner computadorizado de sistemas Common Rail e correção de falhas eletrônicas complexas.',
    revealDelay: '50',
    ilustraWebp: injecaoWebp,
    ilustraPng: injecaoPng,
  },
];

function ServiceCard({ title, desc }) {
  return (
    <div class="reveal-card /* Desktop: Hover Padrão */ /* Mobile: Ativa no Hover OU na classe .active (injetada pelo scroll) */ rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 md:hover:-translate-y-2 md:hover:border-amber-500 md:hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] max-md:[&:is(:hover,.active)]:-translate-y-2 max-md:[&:is(:hover,.active)]:border-amber-500 max-md:[&:is(:hover,.active)]:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
      <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-amber-500">
        ⚙️
      </div>
      <h4 class="mb-3 text-xl font-bold text-white">{title}</h4>
      <p class="text-zinc-400">{desc}</p>
    </div>
  );
}

export function Services() {
  return (
    // {SERVICOS.map((servico, index) => (
    //   <div
    //     key={index}
    //     style={{ '--delay-step': `${servico.revealDelay}%` }}
    //     /* AJUSTADO AQUI: Mudamos para hover:[&_.reveal]:bottom-0 */
    //     className={`group border-raposo-yellow-dark bg-raposo-red-dark relative aspect-square overflow-hidden border-2 border-t border-b-8 hover:[&_.reveal]:bottom-0`}
    //   >
    //     <div className="relative aspect-square transition-all duration-700 group-hover:blur-lg group-[&.active]:blur-md">
    //       <picture>
    //         <source srcSet={servico.ilustraWebp} type="image/webp" />
    //         <img
    //           src={servico.ilustraPng}
    //           alt={servico.title}
    //           className="size-full object-cover p-8" /* Corrigido de 'class' para 'className' que é o padrão do React */
    //           loading="lazy"
    //         />
    //       </picture>

    //       {/* Nota: Este segundo h2 também tem a classe 'reveal'. Ele também será afetado pelo bottom-0! */}
    //       <h2 className="reveal bg-raposo-yellow-dark text-raposo-yellow-light absolute bottom-0 float-left w-full py-2 text-center text-2xl">
    //         {servico.title}
    //       </h2>
    //     </div>

    //     {/* O seu primeiro .reveal agora vai subir perfeitamente ao dar hover no pai */}
    //     <div className="reveal bg-raposo-red/50 absolute -bottom-full left-0 flex aspect-square size-full flex-col flex-wrap justify-evenly p-6 text-center transition-all duration-500">
    //       <h3 className="text-raposo-yellow mb-2 text-2xl font-bold">
    //         {servico.title}
    //       </h3>
    //       <p className="text-raposo-dark-200 text-xl leading-relaxed">
    //         {servico.description}
    //       </p>
    //     </div>
    //   </div>
    // ))}

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
          />
          <ServiceCard
            title="Injeção Eletrônica"
            desc="Diagnóstico avançado de módulos e sistemas Common Rail."
          />
          <ServiceCard
            title="Turbos e Bicos"
            desc="Calibração e reparo de bicos injetores para máxima potência."
          />
        </div>
      </div>
    </section>
  );
}
