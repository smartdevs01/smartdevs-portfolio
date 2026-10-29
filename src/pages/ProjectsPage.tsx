import { useMemo, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import { projects, type ProjectStatus } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

type Filter = 'all' | ProjectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'wip', label: 'In Progress' },
  { value: 'planned', label: 'Planned' },
];

export default function ProjectsPage() {
  usePageMeta(
    'Projects',
    'Java projects by Smartdevs, including an age calculator, a loan calculator, a multifunction calculator, and a planned expense tracker.'
  );

  const [filter, setFilter] = useState<Filter>('all');
  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.status === filter)),
    [filter]
  );

  return (
    <section className="section-pad relative pt-40 md:pt-44">
      <div className="container-px">
        <PageHeader
          eyebrow="Projects"
          title={
            <>
              Things I'm <span className="text-gold-gradient">building.</span>
            </>
          }
          description="A selection of Java applications and planned projects. Each one is a step in learning to design, build, and explain software."
        />

        <div role="group" aria-label="Filter projects by status" className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const active = filter === f.value;
            const count = f.value === 'all' ? projects.length : projects.filter((p) => p.status === f.value).length;
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.value)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'border-gold-400/60 bg-gold-gradient text-navy-950 shadow-gold-soft'
                    : 'border-navy-600 bg-navy-800/50 text-ink-muted hover:border-gold-400/40 hover:text-ink'
                }`}
              >
                {f.label}
                <span className={`font-mono text-xs ${active ? 'text-navy-900' : 'text-ink-dim'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <div key={filter} className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
