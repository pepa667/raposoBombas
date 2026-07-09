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
      class="bg-primary relative z-10 overflow-hidden px-4 py-24"
    >
      {/* Efeito de fundo sutil para a área de contato */}
      <div class="pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-yellow-400/50 blur-3xl"></div>

      <div class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div class="space-y-8">
          <h3 class="text-4xl font-extrabold tracking-tight text-zinc-950 md:text-5xl">
            Precisa de um diagnóstico exato?
          </h3>
          <p class="max-w-md text-lg font-medium text-zinc-900">
            Não deixe sua frota parada. Fale com nossos especialistas agora
            mesmo e agende uma avaliação sem compromisso.
          </p>

          <div class="space-y-4 text-zinc-950">
            <div class="flex items-center gap-4">
              <span class="text-2xl">📍</span>
              <p class="font-bold">
                Sorocaba, SP - [Seu Endereço Completo Aqui]
              </p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-2xl">📞</span>
              <p class="font-bold">(15) 99999-9999 / (15) 3222-2222</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-2xl">⏱️</span>
              <p class="font-bold">Seg a Sex: 08h às 18h</p>
            </div>
          </div>

          <a
            href="https://wa.me/5515999999999"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-zinc-800"
          >
            <span>Chamar no WhatsApp</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        {/* Placeholder para um Mapa ou Imagem da Oficina */}
        <div class="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl border-4 border-zinc-950/20 bg-zinc-900 text-zinc-500 shadow-2xl">
          <span class="text-sm font-bold">
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
