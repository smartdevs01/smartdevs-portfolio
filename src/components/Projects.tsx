import { Calculator, CalendarDays, Clock3, ReceiptText } from 'lucide-react';
import { projects, type ProjectStatus } from '@/content';

const statusMeta: Record<ProjectStatus, { label: string; classes: string; Icon: typeof Clock3 }> = {
  wip: { label: 'In Progress', classes: 'border-gold-400/40 bg-gold-400/10 text-gold-300', Icon: Clock3 },
  planned: { label: 'Planned', classes: 'border-navy-500 bg-navy-700/40 text-ink-muted', Icon: ReceiptText },
};

const projectIcons = [CalendarDays, Calculator, ReceiptText];

function StatusBadge({ status }: { status: ProjectStatus }) {
  const meta = statusMeta[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur ${meta.classes}`}>
      <meta.Icon size={11} />
      {meta.label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px">
        <div className="section-intro reveal">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Projects
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="heading-lg mt-5 text-balance">
            Building ideas into <span className="text-gold-gradient">useful software.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-pretty">
            A focused collection of Java projects in progress and planned work. Each card shows what I am
            practising now without overstating what has been completed.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = projectIcons[i] ?? Calculator;
            return (
              <article
                key={project.title}
                className="card card-hover sheen-hover reveal-scale group flex flex-col overflow-hidden"
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <div className="relative h-44 overflow-hidden border-b border-navy-600/50 bg-gradient-to-br from-navy-800/60 to-navy-900/80">
                  <div className="absolute inset-0 bg-grid-faint bg-grid opacity-40" />
                  <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold-500/10 blur-2xl transition-all duration-700 group-hover:bg-gold-500/20 group-hover:scale-110" />
                  <span className="absolute right-5 top-4 font-display text-5xl font-bold leading-none text-navy-600/40 transition-colors duration-500 group-hover:text-gold-400/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-400/30 bg-navy-900/75 text-gold-300 shadow-gold-soft backdrop-blur transition-transform duration-500 group-hover:scale-105">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="absolute left-5 top-5">
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-gold-200">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400/90">
                      {project.status === 'planned' ? 'Planned features' : 'Focus areas'}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-navy-600/40 pt-5">
                    {project.tech.map((technology) => (
                      <span key={technology} className="chip">{technology}</span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-navy-600/40 pt-5">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center justify-center rounded-lg border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400/20 hover:shadow-gold-soft"
                      >
                        View Project
                      </a>
                    ) : (
                      <span
                        role="status"
                        className="inline-flex items-center justify-center rounded-lg border border-navy-600/60 px-4 py-2 text-sm font-medium text-ink-dim"
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
