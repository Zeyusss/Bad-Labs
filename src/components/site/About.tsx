import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32 md:py-44">
      <div className="absolute inset-0 bg-spotlight opacity-50" />
      <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <p className="mb-6 text-[10px] uppercase tracking-luxury text-gold">
            The Studio
          </p>
          <h2 className="font-display text-5xl leading-[1.05] text-ivory md:text-6xl">
            We don't make invitations. <br />
            <em className="italic text-gradient-gold">We compose openings.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Bad Labs is a small studio for couples who believe their
              wedding deserves more than a printed card. We build interactive,
              cinematic invitation websites — one love story at a time.
            </p>
            <p>
              Every project is hand-directed: typography, motion, sound, light.
              Nothing is templated. Nothing is rushed. The result is a private
              digital world your guests step into — and never quite forget.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/40 pt-10">
            {[
              { k: "Bespoke", v: "100%" },
              { k: "Avg. delivery", v: "21 days" },
              { k: "Worldwide", v: "Couples" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-3xl text-gold md:text-4xl">{s.v}</p>
                <p className="mt-2 text-[10px] uppercase tracking-luxury text-muted-foreground">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
