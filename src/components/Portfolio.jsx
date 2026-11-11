import { ArrowUpRight, Info } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PORTFOLIO } from '@/data/content';

export default function Portfolio() {
  const { ref, visible } = useReveal();

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end`}
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">Selected work</span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Projects we're <span className="gradient-text">proud of</span>
            </h2>
          </div>
          <p className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-400 sm:max-w-xs">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
            The following are concept projects created to showcase our
            capabilities — not live client engagements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl glass shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-electric-400/40 hover:shadow-glow`}
    >
      {/* Top accent line that animates in on hover */}
      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-electric-500 to-violetx-500 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent transition-opacity duration-500 group-hover:from-navy-950/90" />
        <div className="absolute top-4 left-4 rounded-full bg-navy-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-electric-400 backdrop-blur-md">
          Concept
        </div>
        <span className="absolute top-4 right-4 grid h-9 w-9 -translate-y-2 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:bg-electric-500/30 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-electric-400">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
