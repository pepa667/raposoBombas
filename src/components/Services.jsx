import bicosWebp from "../assets/services/bicos.webp";
import bombasWebp from "../assets/services/bombas.webp";
import injecaoWebp from "../assets/services/injecao.webp";
import bicosPng from "../assets/services/bicos.png";
import bombasPng from "../assets/services/bombas.png";
import injecaoPng from "../assets/services/injecao.png";



const SERVICOS = [
  {
    title: "Bombas Injetoras",
    description:
      "Testes, regulagem eletrônica e recondicionamento completo de bombas injetoras convencionais e de alta pressão.",
    ilustraWebp: bombasWebp,
    ilustraPng: bombasPng,
  },
  {
    title: "Bicos Injetores",
    description:
      "Análise de vazão, limpeza por ultrassom, calibração precisa e troca de componentes para pulverização perfeita.",
    ilustraWebp: bicosWebp,
    ilustraPng: bicosPng,
  },
  {
    title: "Injeção Eletrônica Diesel",
    description:
      "Diagnóstico via scanner computadorizado de sistemas Common Rail e correção de falhas eletrônicas complexas.",
    ilustraWebp: injecaoWebp,
    ilustraPng: injecaoPng,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className=" w-[90svw] max-w-6xl px-4 py-16 mb-10 mx-auto sm:px-6 lg:px-8 lg:py-24 bg-raposo-dark bg-linear-to-t from-black/70 to-transparent relative rounded-4xl border-slate-500/50 border-2"
    >
      <div className="text-center space-y-16 mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-200/80 sm:text-6xl">
          Nossos Serviços Especializados
        </h2>
        <div className="relative mx-auto h-1 w-64 bg-raposo-yellow rounded-full before:content-[''] before:max-w-[80svw] before:w-4xl before:h-px before:bg-raposo-yellow before:absolute  before:-translate-x-1/2 before:-translate-y-1/2 before:top-[50%]   "></div>
        <p className="mx-auto max-w-2xl text-neutral-400 text-2xl">
          Equipamentos de diagnóstico avançado para garantir a máxima
          performance e regulagem do seu motor diesel.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.map((servico, index) => (
          <div
            key={index}
            className="scroll-reveal group relative rounded-xl border-2 border-slate-500/75 aspect-square bg-linear-to-t  from-slate-900/40 to-slate-500/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-raposo-red/20 hover:shadow-md overflow-hidden group"
          >
            <div className="aspect-square relative group-hover:blur-md">
              <picture>
                {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
                <source srcSet={servico.ilustraWebp} type="image/webp" />
                {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
                <img
                  src={servico.ilustraPng}
                  alt={servico.title}
                  class="size-full object-cover"
                  loading="lazy"
                />
              </picture>
              <h2 className="absolute float-left bottom-0 w-full text-center text-xl font-bold text-slate-300/90 bg-raposo-dark/80 mb-2 py-2">
                {servico.title}
              </h2>
            </div>
            <div className="absolute flex flex-col flex-wrap text-center justify-evenly top-0 left-0 size-full aspect-square bg-raposo-dark/99 opacity-0 group-hover:opacity-90 p-6">
              <h3 className="text-2xl font-bold text-raposo-yellow mb-2">
                {servico.title}
              </h3>
              <p className="text-xl text-slate-200 leading-relaxed">
                {servico.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
