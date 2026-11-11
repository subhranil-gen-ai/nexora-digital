import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={close} className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violetx-500 shadow-glow">
            <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            NEXORA<span className="gradient-text"> DIGITAL</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong mx-4 mb-4 rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a href="#contact" onClick={close} className="btn-primary w-full">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
