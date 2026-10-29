import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import PendingNote from '@/components/PendingNote';
import { education, type EducationEntry, type EducationStatus } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

const sections: { status: EducationStatus; title: string; empty: string; Icon: typeof BookOpen }[] = [
  {
    status: 'ongoing',
    title: 'Ongoing Learning',
    empty: 'No ongoing learning has been added yet.',
    Icon: BookOpen,
  },
  {
    status: 'completed',
    title: 'Completed Qualifications',
    empty: 'No completed qualifications have been added yet.',
    Icon: GraduationCap,
  },
];

function EducationItem({ entry }: { entry: EducationEntry }) {
  return (
    <article className="card card-hover flex flex-col p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{entry.qualification}</h3>
        <span className={`chip shrink-0 ${entry.status === 'ongoing' ? 'chip-gold' : ''}`}>
          {entry.status === 'ongoing' ? 'Ongoing' : 'Completed'}
        </span>
      </div>
      <p className="mt-1 text-sm text-gold-300">{entry.institution}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted text-pretty">{entry.subject}</p>
      <p className="mt-4 font-mono text-xs text-ink-dim">
        {entry.start}
        {entry.status === 'completed' && entry.end ? ` – ${entry.end}` : ''}
      </p>
      {entry.certificateUrl && (
        <a
          href={entry.certificateUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-100"
        >
          View certificate
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  );
}

export default function EducationPage() {
  usePageMeta(
    'Education',
    'Academic history, courses, certifications, and self-directed learning in Java and software development.'
  );

  return (
    <section className="section-pad relative pt-40 md:pt-44">
      <div className="container-px">
        <PageHeader
          eyebrow="Education"
          title={
            <>
              Learning <span className="text-gold-gradient">& qualifications.</span>
            </>
          }
          description="Completed qualifications and ongoing learning are kept apart so it is always clear what has been finished and what is still in progress."
        />

        <div className="mt-20 space-y-16">
          {sections.map(({ status, title, empty, Icon }) => {
            const items = education.filter((entry) => entry.status === status);
            return (
              <div key={status} className="reveal">
                <div className="mb-6 flex items-center gap-4">
                  <Icon size={18} className="text-gold-400" />
                  <h2 className="heading-md text-ink-muted">{title}</h2>
                  <span className="hairline flex-1" />
                </div>
                {items.length > 0 ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    {items.map((entry) => (
                      <EducationItem key={`${entry.qualification}-${entry.institution}`} entry={entry} />
                    ))}
                  </div>
                ) : (
                  <div className="card flex flex-wrap items-center justify-between gap-4 border-dashed p-6">
                    <p className="text-sm text-ink-muted">{empty}</p>
                    <PendingNote />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
