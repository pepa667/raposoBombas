const SERVICOS = [
  {
    title: "Bombas Injetoras",
    description:
      "Testes, regulagem eletrônica e recondicionamento completo de bombas injetoras convencionais e de alta pressão.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
  },
  {
    title: "Bicos Injetores",
    description:
      "Análise de vazão, limpeza por ultrassom, calibração precisa e troca de componentes para pulverização perfeita.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3l3 3"
        />
      </svg>
    ),
  },
  {
    title: "Injeção Eletrônica Diesel",
    description:
      "Diagnóstico via scanner computadorizado de sistemas Common Rail e correção de falhas eletrônicas complexas.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25M19.5 5.25l-3.59 3.59a2.25 2.25 0 01-3.182 0L12.73 8.84a2.25 2.25 0 00-3.182 0L5.25 13.5m14.25-8.25A2.25 2.25 0 0017.25 3H6.75A2.25 2.25 0 004.5 5.25"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="z-100 mx-auto max-w-6xl px-4 py-16 mb-10 sm:px-6 lg:px-8 lg:py-24 bg-raposo-dark bg-linear-to-t from-black/70 to-transparent relative rounded-4xl border-slate-700 border-2"
    >
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-raposo-dark sm:text-4xl">
          Nossos Serviços Especializados
        </h2>
        <div className="mx-auto h-1 w-12 bg-raposo-red rounded-full"></div>
        <p className="mx-auto max-w-2xl text-neutral-500">
          Equipamentos de diagnóstico avançado para garantir a máxima
          performance e regulagem do seu motor diesel.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.map((servico, index) => (
          <div
            key={index}
            className="scroll-reveal group relative rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-raposo-red/20 hover:shadow-md"
          >
            <div className="mb-4 inline-block rounded-lg bg-raposo-red/5 p-3 text-raposo-red group-hover:bg-raposo-red group-hover:text-white transition-colors">
              {servico.icon}
            </div>
            <h3 className="text-xl font-bold text-raposo-dark mb-2">
              {servico.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {servico.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
