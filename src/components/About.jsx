export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto max-w-[96svw] md:max-w-[90svw] max-h-fit w-7xl px-1 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="flex flex-col justify-between scroll-reveal min-h-fit gap-10 px-4 md:px-20 group relative rounded-md [--delay-step:30%] bg-raposo-dark  bg-linear-to-t  from-raposo-red-dark to-raposo-red-dark/40 to-raposo-red-darkbg-raposo-red-dark/10 p-6 py-18 shadow-sm transition-all hover:-tranraposo-dark-y-1 hover:border-raposo-red/20 hover:shadow-md overflow-hidden group">
        <h2 className="text-3xl font-bold tracking-tight text-raposo-yellow sm:text-6xl w-[70%] fullShow">
          Tradição de mais de 40 anos no mercado diesel
        </h2>
        <p className="text-raposo-dark-200 leading-relaxed text-xl md:text-2xl">
          Fundada em 1985, a Raposo Bombas Sorocaba construiu sua reputação
          baseada na excelência técnica e na transparência. Ao longo das
          décadas, acompanhamos toda a evolução tecnológica dos motores a
          diesel.
        </p>
        <p className="text-raposo-dark-200 leading-relaxed text-xl md:text-2xl">
          Do sistema mecânico tradicional aos mais modernos módulos de injeção
          eletrônica de hoje, nossa oficina conta com profissionais capacitados
          para oferecer o diagnóstico exato, evitando gastos desnecessários.
        </p>
      </div>
    </section>
  );
}
