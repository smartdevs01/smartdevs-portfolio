import { ArrowUp, Github, Mail } from 'lucide-react';
import { navLinks, profile } from '@/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-navy-600/50 bg-navy-950">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="group flex items-center gap-3">
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gold-400/40 bg-navy-800 transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-gold-soft">
                <img
                  src="/Futuristic_Gold_SmartDevs_Emblem.png"
                  alt="Smartdevs logo"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-lg font-bold text-ink">{profile.name}</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted text-pretty">
              {profile.tagline} Software developer passionate about problem-solving, clean code, and
              continuous learning.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-navy-600 bg-navy-800/60 text-ink-muted transition-all hover:border-gold-400/60 hover:text-gold-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="View Smartdevs on GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-navy-600 bg-navy-800/60 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-400">Navigation</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-400">Connect</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${profile.email}`} className="link-underline text-sm text-ink-muted hover:text-ink">
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-sm text-ink-muted hover:text-ink"
                >
                  GitHub repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-ink-muted">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs text-ink-dim">
              Built with React, TypeScript &amp; Tailwind CSS
            </p>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-600 bg-navy-800/60 px-4 py-2 text-xs font-medium text-ink-muted transition-all hover:border-gold-400/50 hover:text-gold-100"
            >
              Back to top
              <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
