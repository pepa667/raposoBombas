export function Badge({ className }) {
  return (
    <div className={className}>
      <div className="before:border-raposo-yellow before: before:bg-raposo-red-dark relative w-fit before:absolute before:top-1/2 before:left-1/2 before:-z-10 before:size-20 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:border before:content-['']">
        <div className="text-raposo-yellow bg-raposo-red-dark before:conent-[''] before:border-r-raposo-red-dark after:conent-[''] after:border-l-raposo-red-dark flex h-16 max-w-fit flex-col items-center justify-center px-5 py-0 font-serif tracking-widest before:absolute before:top-0 before:left-0 before:h-14 before:-translate-x-full before:border-0 before:border-y-32 before:border-r-30 before:border-transparent after:absolute after:top-0 after:right-0 after:h-14 after:translate-x-full after:border-0 after:border-y-32 after:border-l-30 after:border-transparent">
          <span className="inlineine">
            &bull;&nbsp;
            <span className="-px-50 border-y-raposo-yellow border-y bg-red-950 py-1 text-sm font-bold uppercase">
              Desde 1985
            </span>
            &nbsp;&bull;
          </span>
          <span className="text-xs">em Sorocaba</span>
        </div>
      </div>
    </div>
  );
}
