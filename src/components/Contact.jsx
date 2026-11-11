import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Pencil,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CONTACT_PLACEHOLDERS } from '@/data/content';

const INITIAL = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = 'Please enter your name.';
    if (!data.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!data.message.trim()) {
      next.message = 'Please tell us a little about your project.';
    } else if (data.message.trim().length < 10) {
      next.message = 'Your message should be at least 10 characters.';
    }
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Client-side only — no backend submission.
    setSubmitted(true);
    setForm(INITIAL);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-60" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-12 lg:grid-cols-2`}
        >
          {/* Left: info */}
          <div>
            <span className="section-eyebrow">Let's talk</span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Start your next{' '}
              <span className="gradient-text">digital chapter</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-slate-300">
              Tell us about your project and we'll get back to you. No pressure,
              no sales pitch — just a useful conversation about what you're
              building.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value={CONTACT_PLACEHOLDERS.email} />
              <ContactRow icon={Phone} label="Phone" value={CONTACT_PLACEHOLDERS.phone} />
              <ContactRow icon={MapPin} label="Studio" value={CONTACT_PLACEHOLDERS.location} />
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Pencil className="mt-0.5 h-4 w-4 shrink-0 text-electric-400" />
              <p className="text-xs leading-relaxed text-slate-400">
                These are editable placeholders. Replace the email, phone and
                location above with your real contact details before launching
                this site.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-strong rounded-3xl p-8 shadow-card lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">
                  Message ready!
                </h3>
                <p className="mt-3 max-w-sm text-sm text-slate-300">
                  Thanks for filling in the form. This is a demo — your enquiry
                  wasn't sent anywhere. Connect a real backend to deliver
                  messages to the Nexora team.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-ghost mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field
                  label="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="jane@company.com"
                />
                <Field
                  label="Company (optional)"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  error={errors.company}
                  placeholder="Acme Inc."
                />
                <Field
                  label="Project details"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us what you're building, your timeline and goals…"
                  textarea
                />

                <button type="submit" className="btn-primary w-full">
                  Send enquiry
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-slate-500">
                  This form validates in your browser only. No data is sent to a
                  server.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass">
        <Icon className="h-5 w-5 text-electric-400" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <p className="truncate font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = 'text', placeholder, textarea }) {
  const base =
    'w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2';
  const state = error
    ? 'border-red-400/60 focus:ring-red-400/40'
    : 'border-white/10 focus:border-electric-400/60 focus:ring-electric-400/40';

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={`${base} ${state} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${base} ${state}`}
        />
      )}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
