import { Zap, Twitter, Linkedin, Github, Instagram, Dribbble, ArrowUp } from 'lucide-react';
import { NAV_LINKS, CONTACT_PLACEHOLDERS } from '@/data/content';

// Social profile URLs are not yet configured. These render as disabled
// placeholder buttons so visitors can see the intended platforms without
// clicking dead "#" links. Add real URLs here when the profiles exist.
const SOCIALS = [
  { icon: Twitter, label: 'Twitter', href: '' },
  { icon: Linkedin, label: 'LinkedIn', href: '' },
  { icon: Instagram, label: 'Instagram', href: '' },
  { icon: Dribbble, label: 'Dribbble', href: '' },
  { icon: Github, label: 'GitHub', href: '' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violetx-500 shadow-glow">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                NEXORA<span className="gradient-text"> DIGITAL</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A premium digital agency crafting websites, brands and growth
              campaigns for forward-thinking businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SOCIALS.map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-400/50 hover:bg-electric-500/10 hover:text-electric-400"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ) : (
                  <span
                    key={s.label}
                    aria-label={`${s.label} (placeholder — link not yet configured)`}
                    title={`${s.label} — link not yet configured`}
                    className="grid h-10 w-10 cursor-default place-items-center rounded-xl border border-dashed border-white/15 bg-white/[0.02] text-slate-600"
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                )
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-electric-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="truncate">{CONTACT_PLACEHOLDERS.email}</li>
              <li>{CONTACT_PLACEHOLDERS.phone}</li>
              <li>{CONTACT_PLACEHOLDERS.location}</li>
            </ul>
            <a href="#contact" className="btn-primary mt-6">
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nexora Digital. Concept website — all
            projects and testimonials are illustrative.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-electric-400/50 hover:text-electric-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
