import { BookOpen, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import { skills, type SkillCategory, type SkillStatus } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

const statusMeta: Record<SkillStatus, { label: string; classes: string; Icon: typeof BookOpen }> = {
  learning: { label: 'Learning', classes: 'chip-gold', Icon: BookOpen },
  foundational: { label: 'Foundational', classes: 'border-navy-500 text-ink-muted', Icon: ShieldCheck },
};

const categories: SkillCategory[] = ['Programming', 'Web', 'Tools'];

export default function SkillsPage() {
  usePageMeta(
    'Skills & Services',
    'Technical skills across programming, web development, and tools, plus the services Smartdevs offers.'
  );

  return (
    <>
      <section className="section-pad relative pt-40 md:pt-44">
        <div className="container-px">
          <PageHeader
            eyebrow="Skills & Services"
            title={
              <>
                What I'm <span className="text-gold-gradient">learning</span> &amp; what I can help with.
              </>
            }
            description="I am transparent about which skills I am actively developing and which strengths I am building on. Everything here reflects my current level."
          />

          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="chip chip-gold">
              <BookOpen size={12} className="mr-1.5" /> Actively learning
            </span>
            <span className="chip">
              <ShieldCheck size={12} className="mr-1.5" /> Foundational strength
            </span>
          </div>

          {categories.map((category, ci) => {
            const items = skills.filter((s) => s.category === category);
            return (
              <div key={category} className="mt-16">
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="heading-md text-ink-muted">{category}</h2>
                  <span className="hairline flex-1" />
                  <span className="font-mono text-xs text-ink-dim">{items.length}</span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((skill, i) => {
                    const meta = statusMeta[skill.status];
                    return (
                      <article
                        key={skill.name}
                        className="card card-hover reveal-scale group p-6"
                        style={{ ['--reveal-delay' as string]: `${(ci * 3 + i) * 50}ms` }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg font-semibold text-ink">{skill.name}</h3>
                          <span className={`chip ${meta.classes} shrink-0`}>
                            <meta.Icon size={12} className="mr-1.5" />
                            {meta.label}
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{skill.blurb}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Services />
    </>
  );
}
