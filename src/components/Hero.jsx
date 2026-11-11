import {
  ArrowRight,
  Code2,
  Palette,
  Play,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="absolute inset-0 -z-10 bg-grid-faint bg-grid mask-fade-b opacity-60" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[120px]" />
      <div className="absolute top-20 right-10 -z-10 h-72 w-72 rounded-full bg-violetx-500/20 blur-[100px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Digital Agency
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Build Digital Experiences That{' '}
            <span className="gradient-text">Move Businesses Forward</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
            Nexora Digital blends design, engineering and strategy to craft
            websites and brands that captivate audiences and drive measurable
            growth.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#contact" className="btn-primary group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-ghost group">
              <Play className="h-4 w-4 fill-current" />
              View Our Work
            </a>
          </div>
        </div>

        {/* Right: abstract visual */}
        <div className="relative animate-scale-in order-first lg:order-last">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg">
      {/* Orbiting rings */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-8 rounded-full border border-white/5" />
        <div className="absolute inset-16 rounded-full border border-electric-500/20" />
      </div>

      {/* Glow core */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-electric-500 to-violetx-500 opacity-80 blur-2xl" />

      {/* Central card */}
      <div className="absolute inset-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56">
        <div className="glass-strong flex h-full w-full flex-col items-center justify-center rounded-3xl shadow-glow">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-electric-500 to-violetx-500 shadow-glow">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <p className="mt-4 font-display text-sm font-bold tracking-widest text-white">
            NEXORA
          </p>
          <p className="text-xs text-slate-400">DIGITAL</p>
        </div>
      </div>

      {/* Floating chips */}
      <FloatChip className="left-0 top-12 animate-float" Icon={Code2} label="Web Development" />
      <FloatChip className="right-0 top-24 animate-float-slow" Icon={Palette} label="Brand Design" />
      <FloatChip className="bottom-16 left-4 animate-float-slow" Icon={TrendingUp} label="Growth Marketing" />
      <FloatChip className="bottom-8 right-8 animate-float" Icon={Smartphone} label="Mobile UX" />

      {/* Pulse */}
      <div className="absolute inset-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric-400/40 animate-pulse-ring" />
    </div>
  );
}

function FloatChip({ className = '', Icon, label }) {
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full glass px-3 py-2 text-xs font-semibold text-white shadow-card ${className}`}
    >
      {Icon ? <Icon className="h-4 w-4 text-electric-400" /> : null}
      {label}
    </div>
  );
}
