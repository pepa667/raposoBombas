function TestimonialCard({ name, role, text }) {
  return (
    <div class="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors hover:border-amber-500/50">
      <div>
        {/* Estrelinhas de avaliação (5 estrelas padrão) */}
        <div class="mb-4 flex text-sm text-amber-500">★★★★★</div>
        <p class="mb-6 text-zinc-300 italic">"{text}"</p>
      </div>
      <div>
        <h5 class="font-bold text-white">{name}</h5>
        <span class="text-xs font-bold tracking-wider text-amber-500 uppercase">
          {role}
        </span>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    // <{/* ==========================================
    //       5. PROVA SOCIAL (DEPOIMENTOS)
    //   ========================================== */}
    <section class="relative z-10 bg-zinc-950 px-4 py-24">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 text-center">
          <h3 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            O que dizem nossos clientes
          </h3>
          <p class="text-zinc-400">
            Transparência que gera confiança há mais de 30 anos.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Carlos Eduardo"
            role="Frotista"
            text="Única oficina que não tentou me empurrar a troca da bomba inteira. Arrumaram o módulo e economizei uma grana. Profissionais demais."
          />
          <TestimonialCard
            name="Roberto Almeida"
            role="Caminhoneiro Autônomo"
            text="Meu caminhão estava perdendo força na subida. Passaram o scanner, acharam o B.O. na hora e no dia seguinte já estava na estrada de novo."
          />
          <TestimonialCard
            name="Auto Viação Sul"
            role="Cliente Corporativo"
            text="Parceria de anos. A Raposo Bombas cuida de toda a nossa frota a diesel. Serviço impecável e sempre entregam no prazo."
          />
        </div>
      </div>
    </section>
  );
}
