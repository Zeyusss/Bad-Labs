export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/40 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-6 text-[10px] uppercase tracking-luxury text-gold">Commission a film</p>
          <h3 className="font-display text-4xl text-ivory md:text-6xl">
            Tell us your <em className="italic text-gradient-gold">love story.</em>
          </h3>
          <a
            href="https://wa.me/201128354368"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-luxury text-ivory transition-colors hover:text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            01128354368
            <span className="h-px w-10 bg-gold" />
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-[10px] uppercase tracking-luxury text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Bad Labs. All love reserved.</span>
          <div className="flex gap-6">
            <a href="#showcase" className="hover:text-gold">
              Showcase
            </a>
            <a href="#about" className="hover:text-gold">
              Studio
            </a>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
