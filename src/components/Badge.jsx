export function Badge() {
  return (
    <div
      id="since"
      className="absolute roll-down md:mt-0 md:top-24 right-0 md:right-8 max-w-fit scale-125 
              before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2
              before:-translate-y-1/2 before:size-20 before:rotate-45 before:border before:border-raposo-yellow before:   before:bg-raposo-red-dark   before:-z-10 
    
            "
    >
      <div
        className="
                            flex flex-col items-center justify-center max-w-fit px-5 py-0 h-16 text-raposo-yellow font-serif tracking-widest
                bg-raposo-red-dark 
                before:conent-[''] before:absolute before:border-0 before:border-y-32  before:border-r-30  before:border-r-raposo-red-dark before:border-transparent before:left-0 before:-translate-x-full  before:top-0 before:h-14
                after:conent-[''] after:absolute after:border-0 after:border-y-32  after:border-l-30  after:border-l-raposo-red-dark after:border-transparent after:right-0 after:translate-x-full  after:top-0 after:h-14"
      >
        <span className="inlineine ">
          &bull;&nbsp;
          <span className="bg-red-950 -px-50 py-1 text-sm font-bold uppercase border-y border-y-raposo-yellow">
            Desde 1985
          </span>
          &nbsp;&bull;
        </span>
        <span className="text-xs">em Sorocaba</span>
      </div>
    </div>
  );
}
