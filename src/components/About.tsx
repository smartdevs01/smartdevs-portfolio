import { Compass, Hammer, ShieldCheck } from 'lucide-react';
import { about, profile } from '@/content';

const icons = [Compass, Hammer, ShieldCheck];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Left: heading + monogram card */}
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">
              <span className="h-px w-8 bg-gold-400" />
              About Me
            </p>
            <h2 className="heading-lg mt-5 text-balance">
              A developing developer, <span className="text-gold-gradient">honestly.</span>
            </h2>

            <div className="mt-10 max-w-sm">
              <div className="card-lux relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-dot-faint bg-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
                <div className="relative">
                  <div className="flex items-center gap-5">
                    <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl border border-gold-400/40 bg-navy-900 font-display text-3xl font-bold text-gold-gradient">
                      {profile.logoInitials}
                      <span className="absolute -inset-px rounded-2xl border border-gold-400/20" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-ink">{profile.name}</p>
                      <p className="mt-1 text-sm text-ink-muted">{profile.role}</p>
                    </div>
                  </div>
                  <div className="divider-gold my-6" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400">Currently</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Practicing Java, OOP &amp; algorithms — and building real projects to apply what I learn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: prose + highlights */}
          <div className="reveal" style={{ ['--reveal-delay' as string]: '120ms' }}>
            <div className="space-y-6 text-lg leading-[1.75] text-ink-muted text-pretty">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="relative pl-6">
                  <span className="absolute left-0 top-3.5 h-px w-3 bg-gold-400/60" />
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {about.highlights.map((h, i) => {
                const Icon = icons[i] ?? Compass;
                return (
                  <div key={h.title} className="card card-hover group p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-gold-400/25 bg-navy-900 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-gold-soft">
                      <Icon size={20} className="text-gold-400" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{h.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
