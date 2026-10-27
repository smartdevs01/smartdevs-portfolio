import { BookOpen, ShieldCheck } from 'lucide-react';
import { skills, type SkillStatus } from '@/content';

const statusMeta: Record<SkillStatus, { label: string; classes: string; Icon: typeof BookOpen }> = {
  learning: { label: 'Learning', classes: 'chip-gold', Icon: BookOpen },
  foundational: { label: 'Foundational', classes: 'border-navy-500 text-ink-muted', Icon: ShieldCheck },
};

function SkillCard({
  name,
  blurb,
  status,
  index,
  showBar,
}: {
  name: string;
  blurb: string;
  status: SkillStatus;
  index: number;
  showBar?: boolean;
}) {
  const meta = statusMeta[status];
  return (
    <article
      className="card card-hover reveal-scale group p-6"
      style={{ ['--reveal-delay' as string]: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-lg font-semibold text-ink">{name}</h4>
        <span className={`chip ${meta.classes} shrink-0`}>
          <meta.Icon size={12} className="mr-1.5" />
          {meta.label}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{blurb}</p>
      {showBar && (
        <div className="mt-5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-ink-dim">
            <span>Progress</span>
            <span className="text-gold-400/80">in motion</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-navy-700">
            <span className="block h-full w-1/2 rounded-full bg-gold-gradient transition-all duration-700 group-hover:w-[72%]" />
          </div>
        </div>
      )}
    </article>
  );
}

export default function Skills() {
  const learning = skills.filter((s) => s.status === 'learning');
  const foundational = skills.filter((s) => s.status === 'foundational');

  return (
    <section id="skills" className="section-pad relative bg-navy-900/30">
      <div className="absolute inset-0 bg-dot-faint bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="container-px relative">
        <div className="section-intro reveal">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Technical Skills
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="heading-lg mt-5 text-balance">
            What I'm <span className="text-gold-gradient">learning</span> &amp; what I'm building on.
          </h2>
          <p className="mt-5 text-ink-muted text-pretty">
            I'm transparent about which skills I'm actively developing versus the foundational strengths
            I'm growing them on top of. Everything here is editable as my skills evolve.
          </p>
        </div>

        {/* Legend */}
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="chip chip-gold">
            <BookOpen size={12} className="mr-1.5" /> Actively learning
          </span>
          <span className="chip">
            <ShieldCheck size={12} className="mr-1.5" /> Foundational strength
          </span>
        </div>

        {/* Learning skills */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="heading-md text-ink-muted">Actively Learning</h3>
            <span className="hairline flex-1" />
            <span className="font-mono text-xs text-ink-dim">{learning.length}</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learning.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} showBar />
            ))}
          </div>
        </div>

        {/* Foundational */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <h3 className="heading-md text-ink-muted">Foundational Strengths</h3>
            <span className="hairline flex-1" />
            <span className="font-mono text-xs text-ink-dim">{foundational.length}</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foundational.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
