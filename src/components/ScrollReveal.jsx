import { useEffect } from "preact/hooks";

export function ScrollReveal() {
  useEffect(() => {
    // 1. Cria o observer configurado para disparar quando o elemento entra na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se o elemento estiver visível na tela (intersectando)
          if (entry.isIntersecting) {
            entry.target.classList.add(".active");

            // Opcional: Se você quer animar apenas UMA vez, deixa de observar o elemento:
            // observer.unobserve(entry.target);
          } else {
            // Se quiser que a animação suma quando o usuário subir a página de novo:
            entry.target.classList.remove(".active");
          }
        });
      },
      {
        // Dispara quando 10% do elemento estiver visível na tela
        threshold: 0.1,
        // Define uma margem para começar a carregar um pouco antes ou depois de entrar no viewport
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // 2. Busca todos os elementos que têm a classe .reveal atualmente no DOM
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // 3. Limpeza quando o componente for desmontado
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); // Roda apenas uma vez no client-side

  return null; // Esse componente não renderiza HTML, apenas gerencia o script
}
