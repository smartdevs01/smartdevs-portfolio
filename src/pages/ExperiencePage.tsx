import { ExternalLink } from 'lucide-react';
import Journey from '@/components/Journey';
import PageHeader from '@/components/PageHeader';
import PendingNote from '@/components/PendingNote';
import { experience, experienceCategories, type ExperienceEntry } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="card card-hover p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{entry.title}</h3>
        <span className="font-mono text-xs text-ink-dim">
          {entry.start} – {entry.end ?? 'Present'}
        </span>
      </div>
      <p className="mt-1 text-sm text-gold-300">{entry.organization}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted text-pretty">{entry.description}</p>
      {entry.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {entry.technologies.map((technology) => (
            <span key={technology} className="chip">
              {technology}
            </span>
          ))}
        </div>
      )}
      {entry.link && (
        <a
          href={entry.link}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-100"
        >
          View link
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  );
}

export default function ExperiencePage() {
  usePageMeta(
    'Experience',
    'Employment, internships, freelance work, and independent projects by Smartdevs, plus the developer journey so far.'
  );

  return (
    <>
      <section className="section-pad relative pt-40 md:pt-44">
        <div className="container-px">
          <PageHeader
            eyebrow="Experience"
            title={
              <>
                Work, projects & <span className="text-gold-gradient">growth.</span>
              </>
            }
            description="Professional work is listed separately from independent projects and learning. Only verified or explicitly configured entries appear here."
          />

          <div className="mt-20 space-y-16">
            {experienceCategories.map((category) => {
              const items = experience.filter((entry) => entry.category === category.value);
              return (
                <div key={category.value} className="reveal">
                  <div className="mb-6 flex items-center gap-4">
                    <h2 className="heading-md text-ink-muted">{category.label}</h2>
                    <span className="hairline flex-1" />
                  </div>
                  {items.length > 0 ? (
                    <div className="grid gap-5 md:grid-cols-2">
                      {items.map((entry) => (
                        <ExperienceItem key={`${entry.title}-${entry.start}`} entry={entry} />
                      ))}
                    </div>
                  ) : (
                    <div className="card flex flex-wrap items-center justify-between gap-4 border-dashed p-6">
                      <p className="text-sm text-ink-muted">{category.empty}</p>
                      <PendingNote />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Journey />
    </>
  );
}
