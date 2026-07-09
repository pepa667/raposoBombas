function TestimonialCard({ name, role, text }) {
  return (
    <div className="hover:border-primary/50 reveal [.entrance]:motion-translate-y-in-100 flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-8 transition-colors">
      <div>
        {/* Estrelinhas de avaliação (5 estrelas padrão) */}
        <div className="text-primary mb-4 flex text-sm">★★★★★</div>
        <p className="mb-6 text-zinc-300 italic">"{text}"</p>
      </div>
      <div>
        <h4 className="font-bold text-white">{name}</h4>
        <span className="text-primary text-xs font-bold tracking-wider uppercase">
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
    <section className="relative z-10 bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            O que dizem nossos clientes
          </h3>
          <p className="text-zinc-400">
            Transparência que gera confiança há mais de 30 anos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
