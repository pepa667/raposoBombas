import { useState, useEffect } from "preact/hooks";

const WHATSAPP_PHONE = "5511999999999"; // Coloque seu número aqui
const DEFAULT_MESSAGE = "Olá, gostaria de mais informações.";

export function ZapModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const btn =
        e.target && typeof e.target.closest === "function"
          ? e.target.closest(".whatsapp-btn")
          : null;

      if (btn) {
        e.preventDefault();

        // Pega o texto direto do atributo 'data-message' (ou 'data-cta')
        // Se estiver vazio, usa a mensagem padrão
        const customMessage =
          btn.getAttribute("data-message") || DEFAULT_MESSAGE;

        setMessage(customMessage);
        setIsOpen(true);
      }
    };

    document.body.addEventListener("click", handleGlobalClick);
    return () => document.body.removeEventListener("click", handleGlobalClick);
  }, []);

  // Controla o overflow do body e o fechar com Escape
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("overflow-hidden");
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  return (
    <div
      id="whatsapp-modal"
      className={`fixed inset-0 z-200 flex items-end justify-center p-4 transition-opacity duration-300 sm:items-center ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-raposo-dark-950/80 backdrop-blur-sm"
      ></div>

      <div
        className={`relative z-10 w-full max-w-md rounded-2xl border border-raposo-dark-800 bg-raposo-dark-900 p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg
              className="h-5 w-5 shrink-0 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.489 4.93 1.49 5.361 0 9.749-4.305 9.752-9.605.001-2.568-1.002-4.979-2.825-6.793C16.68 2.431 14.269 1.43 11.72 1.43 6.361 1.43 1.974 5.735 1.971 11.036c-.001 1.742.476 3.442 1.391 4.912l-.982 3.593 3.667-.957z" />
            </svg>
            <h2
              id="modal-title"
              className="text-sm font-bold tracking-widest text-raposo-dark-300 uppercase"
            >
              Enviar mensagem
            </h2>
          </div>
          <button
            onClick={closeModal}
            aria-label="Fechar"
            className="rounded p-1 text-raposo-dark-500 transition-colors hover:text-raposo-dark-200"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <p className="mb-1 text-xs font-semibold tracking-widest text-raposo-dark-500 uppercase">
          Prévia da mensagem
        </p>
        <div className="mb-6 rounded-xl border border-raposo-dark-700 bg-raposo-dark-950 px-4 py-3">
          <p className="text-sm leading-relaxed text-raposo-dark-300">
            {message}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={closeModal}
            className="flex-1 rounded-lg border border-raposo-dark-700 px-4 py-3 text-sm font-bold tracking-wider text-raposo-dark-400 uppercase transition-colors hover:bg-raposo-dark-800-800 hover:text-raposo-dark-200"
          >
            Cancelar
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setTimeout(closeModal, 300)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-emerald-500"
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.296 1.489 4.93 1.49 5.361 0 9.749-4.305 9.752-9.605.001-2.568-1.002-4.979-2.825-6.793C16.68 2.431 14.269 1.43 11.72 1.43 6.361 1.43 1.974 5.735 1.971 11.036c-.001 1.742.476 3.442 1.391 4.912l-.982 3.593 3.667-.957z" />
            </svg>
            Enviar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
