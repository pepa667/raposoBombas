export function Contact() {
  return (
    <section
      id="contato"
      className="border-t border-raposo-dark-200 bg-raposo-dark-800-100 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-raposo-dark">
            Fale Conosco
          </h2>
          <p className="text-raposo-dark-500 text-sm">
            Precisa de um orçamento ou agendar uma revisão do seu sistema de
            injeção? Entre em contato agora mesmo.
          </p>
          <div className="space-y-4 font-medium text-sm text-raposo-dark-700">
            <p className="flex items-center gap-3">
              <span className="text-raposo-red">📍</span> Sorocaba - SP
            </p>
            <p className="flex items-center gap-3">
              <span className="text-raposo-red">💬</span> WhatsApp: (15)
              XXXXX-XXXX
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://www.facebook.com/RaposoBombas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow transition-colors hover:bg-blue-700"
            >
              <span>Siga-nos no Facebook</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 h-64 lg:h-auto min-h-[300px] rounded-xl bg-white border border-raposo-dark-200 shadow-sm overflow-hidden flex items-center justify-center p-6 text-center">
          <div className="space-y-2">
            <span className="text-3xl">🗺️</span>
            <h4 className="font-bold text-raposo-dark">Onde Estamos</h4>
            <p className="text-xs text-raposo-dark-500 max-w-xs mx-auto">
              Coloque aqui o Iframe do Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
