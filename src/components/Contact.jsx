import { SocialIcon } from "react-custom-social-icons";

import fachadaWebp from "../assets/contact/fachada.webp";
import fachadaPng from "../assets/contact/fachada.png";

export function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-raposo-yellow/60 bg-raposo-red bg-linear-to-b  from-black/98 via-raposo-dark-900/93 via-3% from-0% to-raposo-dark-800 bg-blend-multiply px-4 py-16 sm:px-6 lg:px-8 "
    >
      <div className="relative mx-auto max-w-7xl flex flex-col-reverse xl:flex-row items-center justify-evenly">
        <div className="scroll-reveal  max-xl:[--reveal-y:200px] xl:[--reveal-x:-200px] [--delay-step:50%] w-[80svw] xl:w-4/12 -mt-16 xl:mt-0  h-fit z-10 ">
          <div className="xl:w-[140%]  flex flex-col gap-4 px-12 py-8 bg-raposo-red-dark  bg-linear-to-t  from-raposo-dark-900/60 to-raposo-dark-400/20 bg-blend-multiply drop-shadow-[0_4px_6px_#000b] xl:drop-shadow-[4px_0_6px_#000b]  border-2 max-xl:border-t max-xl:border-b-4 xl:border-r xl:border-l-8 border-raposo-yellow/50">
            <h2 className="text-4xl font-bold tracking-tight text-raposo-yellow">
              Fale Conosco
            </h2>
            <p className="text-raposo-yellow-washed text-lg">
              Precisa de um orçamento ou agendar uma revisão do seu sistema de
              injeção? Entre em contato agora mesmo.
            </p>
            <div className="space-y-4 font-medium text-lg text-raposo-yellow">
              <p>
                <span className="font-bold">
                  Rua Dr. Luiz Mendes de Almeida, 2264
                </span>
                <br /> Vila Espirito Santo, Sorocaba - SP
              </p>
              <p className="font-bold">
                <a href="tel:1532210847">(15) 3221-0847</a>
              </p>
            </div>
            <div className="pt-2 flex flex-row flex-wrap lg:gap-12 max-lg:justify-evenly">
              <a href="https://www.facebook.com/RaposoBombas/">
                <SocialIcon network="facebook" />
              </a>
              <a href="https://www.instagram.com/raposobombas/">
                <SocialIcon network="instagram" />
              </a>
              <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQg4NzM2ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KfsgAUIOi8WUMVUPlSPaJMRF&daddr=Rua+Dr.+Luiz+Mendes+de+Almeida,+2264+-+Vila+Espirito+Santo,+Sorocaba+-+SP,+18051-290">
                <SocialIcon network="google-maps" />
              </a>
              <a
                href="https://wa.me/seunumerodoZap"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn "
                data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
              >
                <SocialIcon network="whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative max-w-[90svw] w-[90svw] scroll-reveal max-xl:[--reveal-y:200px] xl:[--reveal-x:200px] [--delay-step:20%] transition-all xl:w-8/12 h-auto  border-2 max-xl:border-t max-xl:border-b-8 xl:border-l xl:border-r-8 border-raposo-yellow">
          <picture class="   h-auto w-full block px-2 py-4 sm:px-4  bg-raposo-yellow bg-linear-to-t from-raposo-dark-950 to-raposo-dark-500 bg-blend-multiply   drop-shadow-[0_4px_6px_#000b] xl:drop-shadow-[4px_0_6px_#000b]">
            {/* O navegador só olha o srcSet e o type aqui para decidir qual arquivo baixar */}
            <source srcSet={fachadaWebp} type="image/webp" />

            {/* É essa tag que vai receber toda a estilização física e o comportamento visual */}
            <img
              src={fachadaPng}
              alt="Imagem de um Motor Diesel para o plano de fundo"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
