import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Github, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '@/content';

type Errors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;
type Status = 'idle' | 'success' | 'error';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email.';
    else if (!emailRegex.test(values.email)) e.email = 'Please enter a valid email address.';
    if (!values.subject.trim()) e.subject = 'Please add a subject.';
    if (!values.message.trim()) e.message = 'Please write a message.';
    else if (values.message.trim().length < 10) e.message = 'Your message is a little short (min 10 characters).';
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setValues({ name: '', email: '', subject: '', message: '' });
  }

  function update(field: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  }

  return (
    <section id="contact" className="section-pad relative bg-navy-900/30">
      <div className="absolute inset-0 bg-dot-faint bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-px relative">
        <div className="section-intro reveal">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Contact
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="heading-lg mt-5 text-balance">
            Let's <span className="text-gold-gradient">build something.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-pretty">
            Have a question, an idea, or just want to connect? Send a message below, or email me directly at{' '}
            <a href={`mailto:${profile.email}`} className="text-gold-200 underline decoration-gold-400/40 underline-offset-2 hover:decoration-gold-400">
              {profile.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          {/* Contact info */}
          <div className="reveal space-y-4">
            {/* Email — primary channel */}
            <a
              href={`mailto:${profile.email}`}
              className="card card-hover group flex items-center gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-navy-900 transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold-soft">
                <Mail size={18} className="text-gold-400" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">Email</span>
                <span className="block truncate text-sm font-medium text-ink transition-colors group-hover:text-gold-100">
                  {profile.email}
                </span>
              </span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="card card-hover group flex items-center gap-4 p-5"
              aria-label="View Smartdevs on GitHub"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-navy-900 transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold-soft">
                <Github size={18} className="text-gold-400" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">GitHub</span>
                <span className="text-sm font-medium text-ink transition-colors group-hover:text-gold-100">View repository</span>
              </span>
            </a>

            {/* Availability */}
            <div className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-navy-600 bg-navy-900">
                <MapPin size={18} className="text-ink-muted" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">Availability</span>
                <span className="text-sm font-medium text-ink">Open to learning &amp; collaboration</span>
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-lux reveal p-7 sm:p-9"
            style={{ ['--reveal-delay' as string]: '120ms' }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                id="name"
                value={values.name}
                onChange={(v) => update('name', v)}
                error={errors.name}
                placeholder="Your name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={values.email}
                onChange={(v) => update('email', v)}
                error={errors.email}
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-5">
              <Field
                label="Subject"
                id="subject"
                value={values.subject}
                onChange={(v) => update('subject', v)}
                error={errors.subject}
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Tell me a bit about your idea or question..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className={`input-field resize-none ${errors.message ? 'border-red-400/60' : ''}`}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle size={14} /> {errors.message}
                </p>
              )}
            </div>

            {status === 'success' && (
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <span>
                  Thanks! Your message has been validated successfully. Note: no email service is
                  connected yet, so this message wasn't actually sent. Please email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline decoration-green-400/40 underline-offset-2">
                    {profile.email}
                  </a>{' '}
                  to reach me for now.
                </span>
              </div>
            )}
            {status === 'error' && Object.keys(errors).length > 0 && (
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-300">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>Please fix the highlighted fields and try again.</span>
              </div>
            )}

            <button type="submit" className="btn-gold group mt-6 w-full sm:w-auto">
              Send Message
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            <p className="mt-5 font-mono text-xs leading-relaxed text-ink-dim">
              Note: this form validates input in your browser. To deliver real emails, connect an email
              service (e.g. Formspree, Resend, or a Supabase Edge Function). Until then, the fastest way
              to reach me is the email link above.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`input-field ${error ? 'border-red-400/60' : ''}`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-400">
          <AlertCircle size={14} /> {error}
        </p>
      )}
    </div>
  );
}
