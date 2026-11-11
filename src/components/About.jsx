import { Compass, Target, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { STATS } from '@/data/content';

const PILLARS = [
  {
    icon: Target,
    title: 'Strategy-first',
    text: 'Every project starts with clear objectives, audience insight and a roadmap before any pixel is drawn.',
  },
  {
    icon: Compass,
    title: 'Independent & focused',
    text: 'As an independent studio, every engagement gets direct attention — no layers, no handoffs, no bureaucracy.',
  },
  {
    icon: Sparkles,
    title: 'Detail-obsessed',
    text: 'We care about the things most people skip: motion, accessibility, performance and the feel of every interaction.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid items-center gap-14 lg:grid-cols-2`}
        >
          {/* Left: visual collage */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-electric-500/20 to-violetx-500/20 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="glass aspect-[3/4] rounded-2xl p-6 shadow-card">
                <div className="flex h-full flex-col justify-between">
                  <Target className="h-8 w-8 text-electric-400" />
                  <div>
                    <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">Strategy</p>
                    <p className="text-sm text-slate-400">Before pixels</p>
                  </div>
                </div>
              </div>
              <div className="glass aspect-[3/4] rounded-2xl p-6 shadow-card translate-y-8">
                <div className="flex h-full flex-col justify-between">
                  <Sparkles className="h-8 w-8 text-violetx-400" />
                  <div>
                    <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">Craft</p>
                    <p className="text-sm text-slate-400">In every detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <span className="section-eyebrow">About Nexora</span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              An independent studio for{' '}
              <span className="gradient-text">considered digital work</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Nexora Digital is an independent digital studio focused on
              thoughtful design and clean engineering. We work on a small
              number of projects at a time so each one gets the attention it
              deserves — from first concept to final polish.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              We believe great digital work comes from clear thinking, close
              collaboration and an honest eye for detail. No inflated promises
              or jargon — just careful, intentional craft that serves the
              people who actually use what we build.
            </p>

            <div className="mt-8 space-y-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violetx-500/20 ring-1 ring-white/10">
                    <p.icon className="h-5 w-5 text-electric-400" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{p.title}</p>
                    <p className="text-sm text-slate-400">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-4 rounded-3xl glass p-8 shadow-card lg:grid-cols-4 lg:p-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold gradient-text lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
