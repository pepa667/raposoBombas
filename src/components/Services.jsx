import bicosWebp from "../assets/services/bico_photo.webp";
import bombasWebp from "../assets/services/bomba_photo.webp";
import injecaoWebp from "../assets/services/modulo_photo.webp";
import bicosPng from "../assets/services/bico_photo.png";
import bombasPng from "../assets/services/bomba_photo.png";
import injecaoPng from "../assets/services/modulo_photo.png";

window.addEventListener("scroll", () => {
  const bbTitle = document.getElementById("progressBar");
  if (!bbTitle) return; // Evita erros caso o elemento não exista na tela

  // Posição do elemento em relação ao topo da tela visível
  const elementoTopo = bbTitle.getBoundingClientRect().top;

  // Linha imaginária no meio exato da tela
  const meioDaTela = window.innerHeight / 1.5;

  // Se o topo do elemento passou do meio da tela (ficou menor que o meio)
  if (elementoTopo < meioDaTela) {
    bbTitle.classList.add("before:w-[90svw]");
  } else {
    bbTitle.classList.remove("before:w-[90svw]");
  }
});

const SERVICOS = [
  {
    title: "Bombas Injetoras",
    description:
      "Testes, regulagem eletrônica e recondicionamento completo de bombas injetoras convencionais e de alta pressão.",
    revealDelay: "0",
    ilustraWebp: bombasWebp,
    ilustraPng: bombasPng,
  },
  {
    title: "Bicos Injetores",
    description:
      "Análise de vazão, limpeza por ultrassom, calibração precisa e troca de componentes para pulverização perfeita.",
    revealDelay: "25",
    ilustraWebp: bicosWebp,
    ilustraPng: bicosPng,
  },
  {
    title: "Injeção Eletrônica Diesel",
    description:
      "Diagnóstico via scanner computadorizado de sistemas Common Rail e correção de falhas eletrônicas complexas.",
    revealDelay: "50",
    ilustraWebp: injecaoWebp,
    ilustraPng: injecaoPng,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative">
      <div className="w-full h-32 absolute -bottom-28 bg-radial-[100%_50%_at_50%_130%,var(--color-raposo-dark-600)_0%_50%,transparent_95%,transparent] border-b-2 border-raposo-dark-600 "></div>
      <div className=" w-[90svw] max-w-6xl px-4 py-16 mb-28 mx-auto sm:px-6 lg:px-8 lg:py-24 bg-raposo-dark-800 bg-linear-to-t from-black/35 to-transparent relative rounded-md  drop-shadow-[0_10px_10px_#000f]">
        <div className="text-center space-y-16 mb-16 min-w-full">
          <h2 className="text-3xl font-bold tracking-tight text-raposo-dark-200/80 sm:text-6xl">
            Nossos Serviços Especializados
          </h2>
          <div
            id="progressBar"
            className="relative mx-auto before:transition-all before:duration-2000 h-1 w-[30%] bg-raposo-yellow rounded-full before:content-[''] before:w-0 before:max-w-5xl before:h-px before:bg-raposo-yellow before:absolute  before:-translate-x-1/2 before:-tranlate before:top-[50%]   "
          ></div>
          <p className="mx-auto max-w-2xl text-raposo-dark-400 text-2xl">
            Equipamentos de diagnóstico avançado para garantir a máxima
            performance e regulagem do seu motor diesel.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, index) => (
            <div
              key={index}
              style={{ "--delay-step": `${servico.revealDelay}%` }}
              className={`scroll-reveal reveal [--delay-step:var(--delay-step)] revealY show group relative rounded-md  border-raposo-dark-500/75 aspect-square bg-linear-to-t from-raposo-dark-900/40 to-raposo-dark-500/40 p-6 shadow-sm transition-all duration-300 hover:-tranraposo-dark-y-1 hover:border-raposo-red/20 hover:shadow-md [&.active]:-tranraposo-dark-y-1 [&.active]:border-raposo-red/20 [&.active]:shadow-md overflow-hidden`}
            >
              <div className="aspect-square relative group-[&.active]:blur-md">
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
                <h2 className="absolute reveal float-left bottom-0 w-full text-center text-xl font-bold text-raposo-dark-300/90 bg-raposo-dark/80 mb-2 py-2">
                  {servico.title}
                </h2>
              </div>
              <div className="absolute reveal  flex flex-col flex-wrap text-center justify-evenly top-0 left-0 size-full aspect-square bg-raposo-dark/99 opacity-0 [&:is(:hover,.active)]:opacity-90 p-6">
                <h3 className="text-2xl font-bold text-raposo-yellow mb-2">
                  {servico.title}
                </h3>
                <p className="text-xl text-raposo-dark-200 leading-relaxed">
                  {servico.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
