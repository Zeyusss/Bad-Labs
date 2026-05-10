import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-luxury text-ivory">Bad Labs</span>
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
          <span className="hidden text-[10px] uppercase tracking-luxury text-muted-foreground sm:inline">
            Design
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-xs uppercase tracking-luxury text-muted-foreground md:flex">
          <a href="#showcase" className="transition-colors hover:text-ivory">Showcase</a>
          <a href="#moods" className="transition-colors hover:text-ivory">Moods</a>
          <a href="#about" className="transition-colors hover:text-ivory">Studio</a>
        </nav>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-ivory"
        >
          <span>Commission</span>
          <span className="inline-block h-px w-6 bg-gold transition-all duration-500 group-hover:w-10" />
        </a>
      </div>
    </header>
  );
}
