import { SocialIcon } from 'react-custom-social-icons';

import fachadaWebp from '../assets/contact/fachada.webp';
import fachadaPng from '../assets/contact/fachada.png';

export function Contact() {
  return (
    // {/* ==========================================
    //           6. CONTATO E LOCALIZAÇÃO (O GRANDE CTA)
    //       ========================================== */}
    <section
      id="contato"
      className="bg-primary scroll-reveal relative z-10 overflow-hidden px-4 py-24"
      style={{ '--revealBlur': '100px', '--delay-step': '-50%' }}
    >
      {/* Efeito de fundo sutil para a área de contato */}
      <div className="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-yellow-400/50 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-4xl font-extrabold tracking-tight text-zinc-950 md:text-5xl">
            Precisa de um diagnóstico exato?
          </h3>
          <p className="max-w-md text-lg font-medium text-zinc-900">
            Não deixe sua frota parada. Fale com nossos especialistas agora
            mesmo e agende uma avaliação sem compromisso.
          </p>
          <div className="space-y-4 text-zinc-950">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <p className="font-bold">
                Sorocaba, SP - [Seu Endereço Completo Aqui]
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <p className="font-bold">(15) 99999-9999 / (15) 3222-2222</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">⏱️</span>
              <p className="font-bold">Seg a Sex: 08h às 18h</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap pt-2 max-lg:justify-evenly lg:gap-12">
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
              className="whatsapp-btn"
              data-message="Olá! Vi o site de vocês e quero conversar com a equipe de vendas sobre o plano Pro."
            >
              <SocialIcon network="whatsapp" />
            </a>
          </div>{' '}
        </div>

        {/* Placeholder para um Mapa ou Imagem da Oficina */}
        <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl border-4 border-zinc-950/20 bg-zinc-900 text-zinc-500 shadow-2xl">
          <span className="text-sm font-bold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.092830420894!2d-47.50453889033527!3d-23.529163360319405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b0e420120fb%3A0x45c424da23950f55!2sRaposo%20Bombas%20Diesel!5e0!3m2!1spt-BR!2sbr!4v1783307648996!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              title="Google Maps"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </span>
        </div>
      </div>
    </section>
  );
}
