import { ArrowRight, Calculator, CalendarDays, Clock3, ReceiptText } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project, ProjectStatus } from '@/content';

const statusMeta: Record<ProjectStatus, { label: string; classes: string; Icon: typeof Clock3 }> = {
  wip: { label: 'In Progress', classes: 'border-gold-400/40 bg-navy-900/80 text-gold-300', Icon: Clock3 },
  planned: { label: 'Planned', classes: 'border-navy-500 bg-navy-900/80 text-ink-muted', Icon: ReceiptText },
};

const projectIcons: Record<string, typeof Calculator> = {
  'smart-age-calculator': CalendarDays,
  'smart-multifunction-calculator': Calculator,
  'smart-expense-tracker': ReceiptText,
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = statusMeta[project.status];
  const Icon = projectIcons[project.slug] ?? Calculator;
  const detailsPath = `/projects/${project.slug}`;

  return (
    <article
      className="card card-hover sheen-hover reveal-scale group relative flex flex-col overflow-hidden"
      style={{ ['--reveal-delay' as string]: `${(index % 3) * 90}ms` }}
    >
      <Link to={detailsPath} className="relative block h-48 overflow-hidden border-b border-navy-600/50" aria-label={`Open ${project.title}`}>
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={940}
          height={650}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
        <span className={`absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur ${meta.classes}`}>
          <meta.Icon size={11} />
          {meta.label}
        </span>
        <span className="absolute bottom-4 left-5 grid h-11 w-11 place-items-center rounded-xl border border-gold-400/30 bg-navy-900/85 text-gold-300 backdrop-blur">
          <Icon size={20} strokeWidth={1.6} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-gold-200">
          <Link to={detailsPath} className="after:absolute after:inset-0 focus:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted text-pretty">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span key={technology} className="chip">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-navy-600/40 pt-5">
          <Link
            to={detailsPath}
            className="inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-4 py-2 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400/20 hover:shadow-gold-soft"
          >
            View Project
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
