import { ArrowRight, FolderGit2, Sparkles } from 'lucide-react';
import { hero, profile } from '@/content';

type Line = { text: string; indent: number; tok?: 'key' | 'str' | 'gold' | 'punct' | 'plain' };

const codeLines: Line[] = [
  { text: 'const', indent: 0, tok: 'key' },
  { text: ' developer ', indent: 0, tok: 'plain' },
  { text: '=', indent: 0, tok: 'punct' },
  { text: ' {', indent: 0, tok: 'punct' },
  { text: 'name:', indent: 1, tok: 'key' },
  { text: " 'Smartdevs'", indent: 1, tok: 'gold' },
  { text: ',', indent: 1, tok: 'punct' },
  { text: 'focus:', indent: 1, tok: 'key' },
  { text: " 'building useful software'", indent: 1, tok: 'gold' },
  { text: ',', indent: 1, tok: 'punct' },
  { text: 'stack:', indent: 1, tok: 'key' },
  { text: ' ["Java", "OOP", "Web"]', indent: 1, tok: 'str' },
  { text: ',', indent: 1, tok: 'punct' },
  { text: 'learning:', indent: 1, tok: 'key' },
  { text: ' true', indent: 1, tok: 'str' },
  { text: ',', indent: 1, tok: 'punct' },
  { text: 'goal:', indent: 1, tok: 'key' },
  { text: ' "software engineer"', indent: 1, tok: 'gold' },
  { text: ',', indent: 1, tok: 'punct' },
  { text: '};', indent: 0, tok: 'punct' },
];

const tokColor: Record<NonNullable<Line['tok']>, string> = {
  key: 'text-gold-300',
  str: 'text-ink',
  gold: 'text-gold-200',
  punct: 'text-navy-400',
  plain: 'text-ink-muted',
};

const stats = [
  { label: 'Focus', value: 'Java · OOP · Algorithms' },
  { label: 'Building', value: 'Practical applications' },
  { label: 'Status', value: 'Learning & growing' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-36 pb-24 md:pt-40">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-radial" />
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />
      <div className="glow-orb -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 animate-glow-breathe bg-gold-500/10" />
      <div className="glow-orb top-1/3 -right-40 h-96 w-96 animate-glow-breathe bg-navy-500/20 [animation-delay:2s]" />

      <div className="container-px relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <p className="eyebrow reveal">
            <span className="inline-grid h-5 w-5 place-items-center rounded-full border border-gold-400/30">
              <Sparkles size={10} className="text-gold-400" />
            </span>
            <span>{profile.name}</span>
          </p>

          <h1 className="heading-xl mt-7 text-balance reveal" style={{ ['--reveal-delay' as string]: '80ms' }}>
            Software Developer <span className="text-ink-muted">&amp;</span>{' '}
            <span className="text-gold-gradient">Aspiring Software Engineer</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty reveal" style={{ ['--reveal-delay' as string]: '160ms' }}>
            {hero.subtext}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 reveal" style={{ ['--reveal-delay' as string]: '240ms' }}>
            <a href={hero.primaryCta.href} className="btn-gold group">
              {hero.primaryCta.label}
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </div>

          {/* Honest stats */}
          <dl className="mt-14 grid max-w-lg grid-cols-1 gap-x-10 gap-y-5 border-t border-navy-600/40 pt-8 sm:grid-cols-3 reveal" style={{ ['--reveal-delay' as string]: '320ms' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400/90">{s.label}</dt>
                <dd className="mt-1.5 text-sm text-ink-muted">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: code-inspired visual */}
        <div className="reveal-scale" style={{ ['--reveal-delay' as string]: '240ms' }}>
          <div className="relative mx-auto max-w-md">
            {/* Layered glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gold-500/10 blur-3xl" />
            <div className="absolute -right-8 top-8 h-48 w-48 rounded-full bg-navy-500/20 blur-2xl" />

            {/* Editor card */}
            <div className="relative overflow-hidden rounded-2xl border border-navy-600/70 bg-navy-900/85 shadow-navy-deep backdrop-blur-xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-navy-600/50 bg-navy-800/40 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <span className="h-3 w-3 rounded-full bg-green-400/60" />
                <span className="ml-3 font-mono text-xs text-ink-muted">developer.js</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-gold-400/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                  live
                </span>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex gap-4 whitespace-pre">
                    <span className="w-5 select-none text-right text-navy-500">{String(i + 1).padStart(2, '0')}</span>
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      <span className={tokColor[line.tok ?? 'plain']}>{line.text}</span>
                    </span>
                  </div>
                ))}
                <div className="mt-1 flex gap-4">
                  <span className="w-5 select-none text-right text-navy-500">11</span>
                  <span className="h-4 w-2 animate-blink bg-gold-400" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 hidden animate-float rounded-xl border border-gold-400/30 bg-navy-800/95 px-4 py-3 shadow-gold-soft backdrop-blur md:block">
              <div className="flex items-center gap-2.5">
                <FolderGit2 size={18} className="text-gold-400" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">Currently</p>
                  <p className="text-sm font-semibold text-ink">Building & learning</p>
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div className="absolute -right-4 -top-4 hidden animate-float-slow rounded-lg border border-navy-600/60 bg-navy-900/90 px-3 py-2 shadow-card backdrop-blur md:block">
              <p className="font-mono text-[10px] uppercase tracking-wider text-gold-400/90">v1.0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted/60">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-navy-500/80 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-gold-400" />
        </span>
      </div>
    </section>
  );
}
