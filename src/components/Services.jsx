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

export function Services() {
  return (
    <section id="servicos" className="[@media_div:has(&)]:bg-black relative">
      {/* <div className="border-raposo-yellow bg-raposo-red-dark before:border-raposo-red relative container mx-auto mb-28 w-[90svw] max-w-6xl border-y-20 py-16 before:absolute before:-inset-10 before:-bottom-20 before:-z-10 before:border before:bg-black sm:px-6 lg:px-8 lg:py-24"> */}
      <div className="border-raposo-yellow bg-raposo-dark berelative mx-auto mb-28 w-[90svw] max-w-6xl border-y-20 py-16 before:absolute sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-16 min-w-full space-y-16 text-center">
          <h2 className="text-raposo-yellow text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
            Nossos Serviços Especializados
          </h2>
          <div
            id="progressBar"
            className="bg-raposo-yellow before:bg-raposo-yellow before:-tranlate relative mx-auto h-1 w-[30%] before:absolute before:top-[50%] before:h-px before:w-0 before:max-w-5xl before:-translate-x-1/2 before:transition-all before:duration-2000 before:content-['']"
          ></div>
          <p className="text-raposo-yellow-washed mx-auto max-w-2xl text-2xl">
            Equipamentos de diagnóstico avançado para garantir a máxima
            performance e regulagem do seu motor diesel.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((servico, index) => (
            <div
              key={index}
              style={{ '--delay-step': `${servico.revealDelay}%` }}
              /* AJUSTADO AQUI: Mudamos para hover:[&_.reveal]:bottom-0 */
              className={`group border-raposo-yellow-dark bg-raposo-red-dark relative aspect-square overflow-hidden border-2 border-t border-b-8 hover:[&_.reveal]:bottom-0`}
            >
              <div className="relative aspect-square transition-all duration-700 group-hover:blur-lg group-[&.active]:blur-md">
                <picture>
                  <source srcSet={servico.ilustraWebp} type="image/webp" />
                  <img
                    src={servico.ilustraPng}
                    alt={servico.title}
                    className="size-full object-cover p-8" /* Corrigido de 'class' para 'className' que é o padrão do React */
                    loading="lazy"
                  />
                </picture>

                {/* Nota: Este segundo h2 também tem a classe 'reveal'. Ele também será afetado pelo bottom-0! */}
                <h2 className="reveal bg-raposo-yellow-dark text-raposo-yellow-light absolute bottom-0 float-left w-full py-2 text-center text-2xl">
                  {servico.title}
                </h2>
              </div>

              {/* O seu primeiro .reveal agora vai subir perfeitamente ao dar hover no pai */}
              <div className="reveal bg-raposo-red/50 absolute -bottom-full left-0 flex aspect-square size-full flex-col flex-wrap justify-evenly p-6 text-center transition-all duration-500">
                <h3 className="text-raposo-yellow mb-2 text-2xl font-bold">
                  {servico.title}
                </h3>
                <p className="text-raposo-dark-200 text-xl leading-relaxed">
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
