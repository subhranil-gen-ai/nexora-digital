import { ArrowUpRight, Info, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { HIGHLIGHTS } from '@/data/content';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="highlights" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-violetx-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Studio highlights
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Concept explorations &{' '}
            <span className="gradient-text">design studies</span>
          </h2>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Info className="h-4 w-4 text-electric-400" />
            Illustrative portfolio examples — not live client work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={h.title} item={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ item, index }) {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${index * 100}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl glass shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-electric-400/40 hover:shadow-glow`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full bg-navy-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-electric-400 backdrop-blur-md">
          Concept
        </div>
        <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:bg-electric-500/30">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-electric-400">
          {item.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
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
