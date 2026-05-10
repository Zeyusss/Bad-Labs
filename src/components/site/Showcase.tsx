import { useState } from "react";
import { motion } from "framer-motion";
import { projects, moods, type Mood } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Showcase() {
  const [active, setActive] = useState<Mood | "All">("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.mood === active);

  return (
    <section id="showcase" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-luxury text-gold">
              The Collection — {projects.length} Experiences
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-ivory md:text-7xl">
              A library of <em className="italic text-gradient-gold">love stories</em>,
              <br /> directed in pixels.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Each invitation is a private cinematic world — built once, lived forever.
            Step inside any title to enter the experience.
          </p>
        </motion.div>

        {/* Filter */}
        <div id="moods" className="mb-14 flex flex-wrap gap-2 border-y border-border/50 py-5">
          {(["All", ...moods] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActive(m)}
              className={`px-4 py-2 text-[10px] uppercase tracking-luxury transition-all duration-500 ${
                active === m
                  ? "bg-gold text-onyx"
                  : "text-muted-foreground hover:text-ivory"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-sm text-muted-foreground">
            No experiences in this mood — yet.
          </p>
        )}
      </div>
    </section>
  );
}
