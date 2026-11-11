import { Compass, Layout, Terminal, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PROCESS } from '@/data/content';

const ICONS = { Compass, Layout, Terminal, Rocket };

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-violetx-500/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}
        >
          <span className="section-eyebrow">How we work</span>
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            A simple, proven <span className="gradient-text">four-step process</span>
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Clear milestones, constant communication, no surprises. Here's how
            your project moves from idea to impact.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, i) => (
              <Step key={item.step} item={item} Icon={ICONS[item.icon]} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ item, Icon, index }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${index * 120}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} relative text-center`}
    >
      <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-2xl glass-strong shadow-card">
        <Icon className="h-8 w-8 text-electric-400" />
        <span className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-electric-500 to-violetx-500 text-xs font-bold text-white shadow-glow">
          {item.step}
        </span>
      </div>
      <h3 className="mt-6 font-display text-lg font-bold text-white">
        {item.title}
      </h3>
      <p className="mt-2 px-2 text-sm leading-relaxed text-slate-400">
        {item.description}
      </p>
    </div>
  );
}
