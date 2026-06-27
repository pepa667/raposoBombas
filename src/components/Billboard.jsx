export function Billboard() {
  return (
    <section className="relative bg-raposo-red px-4 py-16 text-center text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-4xl space-y-2 z-10">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-raposo-yellow">
          Precisão que move o seu negócio.
        </h2>
        <p className="mx-auto max-w-xl text-sm font-medium text-red-100 sm:text-base">
          Diagnóstico avançado e tecnologia de ponta para sistemas de injeção diesel desde 1985.
        </p>
      </div>
    </section>
  );
}