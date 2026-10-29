import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Github, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '@/content';
import { supabase } from '@/lib/supabase';

type Fields = 'name' | 'email' | 'subject' | 'message';
type Values = Record<Fields, string>;
type Errors = Partial<Record<Fields, string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const emptyValues: Values = { name: '', email: '', subject: '', message: '' };
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const e: Errors = {};
  if (!values.name.trim()) e.name = 'Please enter your name.';
  else if (values.name.trim().length > 100) e.name = 'Name must be 100 characters or fewer.';
  if (!values.email.trim()) e.email = 'Please enter your email.';
  else if (!emailRegex.test(values.email.trim()) || values.email.trim().length > 255)
    e.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) e.subject = 'Please add a subject.';
  else if (values.subject.trim().length > 150) e.subject = 'Subject must be 150 characters or fewer.';
  if (!values.message.trim()) e.message = 'Please write a message.';
  else if (values.message.trim().length < 10) e.message = 'Your message is a little short (min 10 characters).';
  else if (values.message.trim().length > 2000) e.message = 'Your message must be 2000 characters or fewer.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (honeypot.trim()) {
      setServerError('Your message could not be sent right now. Please email me directly.');
      setStatus('error');
      return;
    }
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setServerError('');
    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    });

    if (error) {
      setServerError('Your message could not be sent right now. Please try again, or email me directly.');
      setStatus('error');
      return;
    }
    setStatus('success');
    setValues(emptyValues);
  }

  function update(field: Fields, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    if (status !== 'submitting') setStatus('idle');
  }

  const hasFieldErrors = Object.keys(errors).length > 0;
  const submitting = status === 'submitting';

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr]">
      <div className="reveal space-y-4">
        <a href={`mailto:${profile.email}`} className="card card-hover group flex items-center gap-4 p-5">
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
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-navy-900 transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold-soft">
            <Github size={18} className="text-gold-400" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">GitHub</span>
            <span className="block truncate text-sm font-medium text-ink transition-colors group-hover:text-gold-100">
              View the portfolio repository
            </span>
          </span>
        </a>

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

      <form
        onSubmit={handleSubmit}
        noValidate
        className="card-lux reveal p-7 sm:p-9"
        style={{ ['--reveal-delay' as string]: '120ms' }}
      >
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" id="name" value={values.name} onChange={(v) => update('name', v)} error={errors.name} placeholder="Your name" />
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
          <div role="status" className="mt-5 flex items-start gap-2.5 rounded-xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-200">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
            <span>Thanks! Your message has been sent. I will get back to you as soon as I can.</span>
          </div>
        )}
        {status === 'error' && (serverError || hasFieldErrors) && (
          <div role="alert" className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-300">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <span>{serverError || 'Please fix the highlighted fields and try again.'}</span>
          </div>
        )}

        <button type="submit" disabled={submitting} className="btn-gold group mt-6 w-full sm:w-auto disabled:cursor-wait disabled:opacity-70">
          {submitting ? (
            <>
              Sending
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Send Message
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </>
          )}
        </button>

        <p className="mt-5 font-mono text-xs leading-relaxed text-ink-dim">
          Messages are stored securely and reviewed personally. For urgent matters, email{' '}
          <a href={`mailto:${profile.email}`} className="text-gold-300 underline decoration-gold-400/40 underline-offset-2">
            {profile.email}
          </a>
          .
        </p>
      </form>
    </div>
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
