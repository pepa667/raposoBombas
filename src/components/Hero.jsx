import motorAvif from '../assets/hero/motor.avif';
import motorWebp from '../assets/hero/motor.webp';
import motorJpg from '../assets/hero/motor.jpg';
import { ZapZap } from './ZapZap'; // Certifique-se de que o nome e caminho batem com o arquivo criado
import { Badge } from './Badge'; // Certifique-se de que o nome e caminho batem com o arquivo criado

export function Hero() {
  return (
    <section className="relative h-[50svh] min-h-fit overflow-y-visible px-4 py-6 text-white sm:px-6 md:h-[75svh] lg:px-8 lg:py-12">
      <picture className="absolute inset-0 block h-[120svh] w-full opacity-50">
        {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
        <source srcSet={motorAvif} type="image/avif" />
        <source srcSet={motorWebp} type="image/webp" />

        {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
        <img
          src={motorJpg}
          alt="Imagem de um Motor Diesel para o plano de fundo"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </picture>

      {/* <div className="absolute inset-0 bg-gradient-to-r from-raposo-dark via-raposo-dark/95 to-transparent "></div> */}
      <div className="absolute inset-0 h-[120svh] bg-linear-to-r from-red-950/50 from-40% to-transparent to-70%"></div>
      <div className="absolute inset-0 h-[120svh] bg-linear-to-r from-transparent from-65% to-amber-400/30 to-100%"></div>

      {/* <div className="absolute -right-10 -top-10 h-96 w-96  bg-raposo-red/10 blur-3xl "></div> */}

      <div
        // ref={(el) => el && setTimeout(() => el.classList.add('activeAll'), 10)}
        className="relative mx-auto flex h-[70svh] w-[90svw] max-w-6xl flex-col flex-wrap justify-around md:h-full"
      >
        <h1 className="text-5xl leading-relaxed font-extrabold md:text-6xl lg:text-7xl xl:text-8xl">
          Especialistas&nbsp;em <br />
          <span className="text-raposo-yellow">Injeção&nbsp;Diesel</span>
        </h1>
        <div className="flex flex-col flex-wrap gap-8 pt-2 *:h-14 *:w-fit *:px-8 *:text-lg *:md:h-16 *:md:text-xl lg:flex-row *:lg:h-20 *:lg:text-2xl *:xl:text-3xl">
          <a
            href="https://wa.me/seunumerodoZap"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn reveal group bg-raposo-dark text-raposo-dark-200 [:hover,.active]:bg-raposo-red-dark border-raposo-yellow [:hover,.active]:border-raposo-yellow [:hover,.active]:text-raposo-yellow inline-flex content-evenly items-center gap-4 border-2 px-4 py-2 text-lg font-bold shadow-md transition-all duration-1000 lg:gap-0 [:hover,.active]:gap-4 [:hover,.active]:shadow-lg"
            data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
          >
            <span>Solicitar Orçamento</span>
            <ZapZap className="reveal size-0 fill-green-600 transition-all duration-500 [.group:hover_&,.active]:size-16 [.group:hover_&,.active]:md:size-20 [.group:hover_&,.active]:lg:size-28 [.group:hover_&,.active]:xl:size-28" />
          </a>
          <a
            href="#servicos"
            className="reveal group bg-raposo-yellow/75 text-raposo-dark [:hover,.active]:bg-raposo-red-dark border-raposo-red-dark [:hover,.active]:border-raposo-yellow [:hover,.active]:text-raposo-yellow inline-flex content-evenly items-center gap-0 border-2 px-4 py-2 text-lg font-bold shadow-md transition-all duration-1000 lg:hover:gap-3.5 [:hover,.active]:shadow-lg"
          >
            Ver Serviços
          </a>
        </div>
        <Badge className="relative w-auto scale-100 sm:absolute sm:right-1/12 sm:bottom-1/6 md:scale-125 lg:scale-150 xl:scale-175" />
      </div>
    </section>
  );
}
