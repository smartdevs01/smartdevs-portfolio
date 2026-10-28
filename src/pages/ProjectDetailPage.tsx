import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PendingNote from '@/components/PendingNote';
import ProjectCard from '@/components/ProjectCard';
import { PENDING, projects, type Project } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';
import NotFoundPage from '@/pages/NotFoundPage';

const featureSuffix = ` (${PENDING})`;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card reveal p-7 md:p-9">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-400">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function PendingOr({ value }: { value: string }) {
  return value === PENDING ? <PendingNote /> : <p className="text-base leading-relaxed text-ink-muted text-pretty">{value}</p>;
}

function ExternalLinkButton({ href, label, icon: Icon }: { href?: string; label: string; icon: typeof Github }) {
  if (!href) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-navy-500 bg-navy-900/60 p-4">
        <span className="flex items-center gap-2.5 text-sm text-ink-muted">
          <Icon size={17} className="text-ink-dim" />
          {label}
        </span>
        <PendingNote label="Not available yet" />
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center justify-between gap-3 rounded-xl border border-gold-400/40 bg-gold-400/10 p-4 text-sm font-semibold text-gold-200 transition-all hover:bg-gold-400/20"
    >
      <span className="flex items-center gap-2.5">
        <Icon size={17} />
        {label}
      </span>
      <ExternalLink size={16} />
    </a>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  usePageMeta(project.title, project.description);
  const others = projects.filter((p) => p.slug !== project.slug);
  const index = projects.findIndex((p) => p.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <>
      <section className="relative pt-40 md:pt-44">
        <div className="container-px">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-gold-200">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="reveal">
              <p className="eyebrow">
                <span className="h-px w-8 bg-gold-400" />
                {project.status === 'wip' ? 'In Progress' : 'Planned'}
              </p>
              <h1 className="heading-lg mt-5 text-balance">{project.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted text-pretty">{project.description}</p>
            </div>
            <figure className="reveal overflow-hidden rounded-2xl border border-navy-600/60 bg-navy-900 shadow-navy-deep" style={{ ['--reveal-delay' as string]: '120ms' }}>
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={940}
                height={650}
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-navy-600/50 px-5 py-3 font-mono text-[11px] text-ink-dim">
                Illustrative image. Screenshots of the project can be added here.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section-pad pt-16">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Section title="Overview">
            <p className="text-base leading-relaxed text-ink-muted text-pretty">{project.description}</p>
          </Section>
          <Section title="Problem & Solution">
            <p className="text-sm font-semibold text-ink">The problem</p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted text-pretty">{project.problem}</p>
            <p className="mt-6 text-sm font-semibold text-ink">The solution</p>
            <p className="mt-2 text-base leading-relaxed text-ink-muted text-pretty">{project.solution}</p>
          </Section>
          <Section title="Key Features">
            <ul className="space-y-3">
              {project.features.map((feature) => {
                const pending = feature.endsWith(featureSuffix);
                const text = pending ? feature.slice(0, -featureSuffix.length) : feature;
                return (
                  <li key={feature} className="flex flex-wrap items-center gap-3 text-base text-ink-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {text}
                    {pending && <PendingNote label="Details to be confirmed" />}
                  </li>
                );
              })}
            </ul>
          </Section>
          <Section title="Technologies Used">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span key={technology} className="chip px-3.5 py-1.5 text-xs">
                  {technology}
                </span>
              ))}
            </div>
          </Section>
          <Section title="Challenges & Lessons Learned">
            <p className="text-sm font-semibold text-ink">Development challenges</p>
            <div className="mt-2">
              <PendingOr value={project.challenges} />
            </div>
            <p className="mt-6 text-sm font-semibold text-ink">Lessons learned</p>
            <div className="mt-2">
              <PendingOr value={project.lessons} />
            </div>
          </Section>
          <Section title="Links">
            <div className="space-y-3">
              <ExternalLinkButton href={project.demoUrl} label="Live Demo" icon={ExternalLink} />
              <ExternalLinkButton href={project.repoUrl} label="GitHub Repository" icon={Github} />
            </div>
          </Section>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-px">
          <div className="divider-gold mb-16" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="heading-md text-ink">More projects</h2>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-100">
              All projects
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-4">
            {previous ? (
              <Link to={`/projects/${previous.slug}`} className="btn-ghost">
                <ArrowLeft size={16} />
                {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/projects/${next.slug}`} className="btn-ghost">
                {next.title}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <NotFoundPage />;
  return <ProjectDetails key={project.slug} project={project} />;
}
