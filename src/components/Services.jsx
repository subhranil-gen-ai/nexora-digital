import {
  Code2,
  Megaphone,
  Palette,
  PenTool,
  Search,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { SERVICES } from '@/data/content';

const ICONS = { Code2, PenTool, Palette, Search, Megaphone };

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-electric-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="section-eyebrow">What we do</span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Services that cover the{' '}
            <span className="gradient-text">whole journey</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            From strategy to launch and beyond — one partner for everything
            your brand needs to thrive online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <ServiceCard key={service.title} service={service} Icon={Icon} index={i} />
            );
          })}

          {/* CTA card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-electric-600 to-violetx-600 p-8 shadow-glow transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <p className="font-display text-2xl font-bold text-white">
              Not sure what you need?
            </p>
            <p className="mt-3 text-sm text-white/80">
              Book a free discovery call and we'll map the right approach for
              your goals.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-transform hover:scale-105"
            >
              Talk to us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, Icon, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl glass p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-electric-400/40`}
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-electric-500/0 blur-2xl transition-all duration-500 group-hover:bg-electric-500/20" />
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-violetx-500/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-7 w-7 text-electric-400" />
      </span>
      <h3 className="mt-6 font-display text-xl font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
