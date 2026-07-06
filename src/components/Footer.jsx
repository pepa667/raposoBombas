import { LogoRaposo } from './LogoRaposo';

export function Footer() {
  return (
    // {/* ==========================================
    //           7. FOOTER SIMPLES E LIMPO
    //       ========================================== */}
    <footer class="relative z-10 border-t border-zinc-900 bg-zinc-950 px-4 pt-16 pb-8">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div class="text-center md:text-left">
          <h4 class="mb-2 text-xl font-black tracking-tighter text-white">
            <LogoRaposo className="fill-fuchsia-600" />
          </h4>
          <p class="text-sm text-zinc-400">
            Especialistas em Motores a Diesel desde 1985.
          </p>
        </div>

        <div class="flex gap-4 text-zinc-400">
          <p class="text-sm">
            &copy; {new Date().getFullYear()} Raposo Bombas. Todos os direitos
            reservados.
          </p>
        </div>
        <div class="flex items-center gap-2 tracking-widest uppercase">
          <span>DEVELOPED BY</span>
          <a
            href="https://pepa.dev.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative rounded border border-amber-500/10 bg-amber-500/5 px-2 py-1 font-black text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-colors duration-300 hover:border-amber-500/40 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            <span class="relative z-10">[ PEPA.DEV.br ]</span>
            <span class="absolute inset-0 -z-0 origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </footer>
  );
}
