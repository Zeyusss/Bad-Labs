import { motion } from "framer-motion";
import heroImg from "@/assets/hero-cinematic.jpg";
import { Particles } from "./Particles";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="film-grain vignette relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-spotlight" />
      <Particles count={22} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease }}
          className="mb-8 text-[10px] uppercase tracking-luxury text-gold"
        >
          Bad Labs — Est. cinematic invitations
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.4, ease }}
          className="font-display text-5xl leading-[1.05] text-ivory sm:text-7xl md:text-[6.5rem]"
        >
          Where weddings <br />
          <span className="italic shimmer-text">become cinema.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease }}
          className="mx-auto mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          A private collection of interactive wedding invitation experiences —
          handcrafted, scored and lit like short films for the people you love most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          <a
            href="#showcase"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-gold/60 bg-transparent px-10 py-4 text-xs uppercase tracking-luxury text-ivory transition-colors hover:text-onyx"
          >
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-700 ease-out group-hover:translate-x-0" />
            <span className="relative">Enter the Gallery</span>
            <span className="relative">→</span>
          </a>
          <a
            href="#about"
            className="text-xs uppercase tracking-luxury text-muted-foreground transition-colors hover:text-gold"
          >
            About the studio
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-luxury text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-3">
          <span>Scroll</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
