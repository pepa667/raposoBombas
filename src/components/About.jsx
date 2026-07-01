export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[90svw] w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-2 items-center ">
        <div className="space-y-6 flex flex-col justify-between scroll-reveal  group relative rounded-md border-2 border-slate-500/75 aspect-square bg-linear-to-t  from-slate-900/40 to-slate-500/40 p-6 py-18 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-raposo-red/20 hover:shadow-md overflow-hidden group">
          <span className="text-sm font-bold uppercase tracking-widest text-neutral-200">
            Nossa História
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-raposo-yellow-washed sm:text-4xl">
            Tradição de mais de 40 anos no mercado diesel
          </h2>
          <p className="text-neutral-200 leading-relaxed">
            Fundada em 1985, a Raposo Bombas Sorocaba construiu sua reputação
            baseada na excelência técnica e na transparência. Ao longo das
            décadas, acompanhamos toda a evolução tecnológica dos motores a
            diesel.
          </p>
          <p className="text-neutral-200 leading-relaxed">
            Do sistema mecânico tradicional aos mais modernos módulos de injeção
            eletrônica de hoje, nossa oficina conta com profissionais
            capacitados para oferecer o diagnóstico exato, evitando gastos
            desnecessários.
          </p>
        </div>
        <div className="relative rounded-2xl bg-raposo-dark p-8 text-white shadow-xl lg:p-12 overflow-hidden scroll-reveal [--delay-step:4] group  border-2 border-slate-500/75 aspect-square bg-linear-to-t from-slate-900/40 to-slate-500/40  transition-all duration-300 hover:-translate-y-1 hover:border-raposo-red/20 hover:shadow-md">
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-raposo-yellow/5 blur-2xl "></div>
          <h3 className="text-2xl font-bold text-raposo-yellow mb-4">
            Por que nos escolher?
          </h3>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li className="flex items-start gap-3">
              <span className="text-raposo-yellow font-bold">✓</span>
              <span>Mão de obra altamente qualificada e especializada.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-raposo-yellow font-bold">✓</span>
              <span>Bancadas de teste de última geração.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-raposo-yellow font-bold">✓</span>
              <span>
                Localização estratégica e de fácil acesso em Sorocaba.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
