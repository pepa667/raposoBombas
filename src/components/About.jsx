export function About() {
  return (
    <section
      id="sobre"
      className="bg-raposo-red via-raposo-dark-40 to-raposo-dark-600 border-raposo-dark-950 relative border-b bg-linear-to-t from-black from-0% via-6% bg-blend-multiply"
    >
      <div className="border-raposo-dark-400/50 absolute top-0 h-28 w-full border-t-2 bg-radial-[65%_70%_at_50%_-30%,var(--color-raposo-dark-950)_0%_50%,color-mix(in_srgb,var(--color-raposo-dark-950)_40%,transparent)_90%,transparent]"></div>

      <div className="mx-auto max-h-fit w-7xl max-w-[90svw] px-1 py-16 drop-shadow-[0_10px_10px_#000f] sm:px-6 lg:px-8 lg:py-24">
        <div className="scroll-reveal border-raposo-yellow bg-raposo-red to-raposo-dark-600 relative mx-auto mb-28 flex min-h-fit flex-col justify-between gap-10 border-y-20 bg-linear-to-t from-black/80 px-4 py-16 bg-blend-multiply drop-shadow-[0_10px_10px_#000f] sm:px-6 lg:px-8 lg:py-24">
          <h2 className="text-raposo-yellow fullShow w-[70%] text-3xl font-bold tracking-tight sm:text-6xl">
            Tradição de mais de 40 anos no mercado diesel
          </h2>

          <ul className="text-raposo-dark-200 *:border-raposo-yellow *: *:from-raposo-red/40 relative mx-12 flex flex-col gap-8 text-xl leading-relaxed *:border-l-2 *:bg-linear-30 *:to-transparent *:px-4 md:text-2xl">
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
