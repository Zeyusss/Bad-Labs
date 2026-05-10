import { motion } from "framer-motion";
import type { InvitationProject } from "@/data/projects";

export function ProjectCard({ project, index }: { project: InvitationProject; index: number }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.1 }}
      className="group relative block overflow-hidden border border-border/60 bg-card hover-lift"
    >
      {/* Poster */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          width={896}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-90" />
        <div className="film-grain absolute inset-0" />

        {/* Top meta */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[10px] uppercase tracking-luxury text-ivory/80">
          <span>{project.mood}</span>
          <span>{project.year}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          {project.couple && (
            <p className="mb-2 text-[10px] uppercase tracking-luxury text-gold">
              {project.couple}
            </p>
          )}
          <h3 className="font-display text-3xl leading-tight text-ivory">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            {project.description}
          </p>

          <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-luxury text-ivory">
            <span className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
            <span>Enter Experience</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
