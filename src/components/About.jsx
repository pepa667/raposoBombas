export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-raposo-red bg-linear-to-t  from-black from-0% via-raposo-dark-40 via-6% to-raposo-dark-600 border-b border-raposo-dark-950 bg-blend-multiply "
    >
      <div className="w-full h-28 absolute top-0 bg-radial-[65%_70%_at_50%_-30%,var(--color-raposo-dark-950)_0%_50%,color-mix(in_srgb,var(--color-raposo-dark-950)_40%,transparent)_90%,transparent] border-t-2 border-raposo-dark-400/50"></div>

      <div className="mx-auto max-w-[90svw] max-h-fit w-7xl px-1 py-16 sm:px-6 lg:px-8 lg:py-24 drop-shadow-[0_10px_10px_#000f]">
        <div className="flex flex-col justify-between scroll-reveal min-h-fit gap-10 px-4 px-4 py-16 mb-28 mx-auto sm:px-6 lg:px-8 lg:py-24 border-y-20 border-raposo-yellow bg-raposo-red bg-linear-to-t from-black/80 to-raposo-dark-600 relative   drop-shadow-[0_10px_10px_#000f] bg-blend-multiply">
          <h2 className="text-3xl font-bold tracking-tight text-raposo-yellow sm:text-6xl w-[70%] fullShow">
            Tradição de mais de 40 anos no mercado diesel
          </h2>

          <ul className="relative text-raposo-dark-200 leading-relaxed text-xl md:text-2xl flex flex-col gap-8 mx-12 *:border-l-2 *:border-raposo-yellow *: *:px-4 *:bg-linear-30 *:from-raposo-red/40 *:to-transparent">
            <li
              className="scroll-reveal [--reveal-x:-200px]"
              style="--delay-step:20%;"
            >
              <b className="text-raposo-yellow-washed">Tradição</b>: Excelência
              técnica e transparência desde 1985.
            </li>
            <li
              className="scroll-reveal [--reveal-x:-200px]"
              style="--delay-step:40%"
            >
              <b className="text-raposo-yellow-washed">Evolução</b>:
              Especialistas em todas as gerações do diesel, das bombas mecânicas
              aos módulos eletrônicos.
            </li>
            <li
              className="scroll-reveal [--reveal-x:-200px]"
              style="--delay-step:60%"
            >
              <b className="text-raposo-yellow-washed">Diagnóstico Exato</b>:
              Profissionais capacitados focados em resolver o problema sem gerar
              custos desnecessários.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
