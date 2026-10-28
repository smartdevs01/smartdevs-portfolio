import About from '@/components/About';
import Journey from '@/components/Journey';
import PageHeader from '@/components/PageHeader';
import PendingNote from '@/components/PendingNote';
import { about } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    'About',
    'Learn about Smartdevs, an aspiring software engineer focused on Java, object-oriented design, algorithms, and web development.'
  );

  return (
    <>
      <About />

      <section className="section-pad relative bg-navy-900/30">
        <div className="container-px">
          <PageHeader
            eyebrow="Interests & Goals"
            title={
              <>
                What drives <span className="text-gold-gradient">my work.</span>
              </>
            }
            description="The areas I enjoy most and the direction I am working toward."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="card reveal p-8">
              <h3 className="text-lg font-semibold text-ink">Interests</h3>
              <ul className="mt-5 space-y-3">
                {about.interests.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card reveal p-8" style={{ ['--reveal-delay' as string]: '120ms' }}>
              <h3 className="text-lg font-semibold text-ink">Goals</h3>
              <ul className="mt-5 space-y-3">
                {about.goals.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card reveal p-8 md:col-span-2" style={{ ['--reveal-delay' as string]: '200ms' }}>
              <h3 className="text-lg font-semibold text-ink">Relevant Experience</h3>
              <p className="mt-4 flex flex-wrap items-center gap-3 text-sm leading-relaxed text-ink-muted">
                Professional and academic experience has not been added yet.
                <PendingNote />
              </p>
            </div>
          </div>
        </div>
      </section>

      <Journey />
    </>
  );
}
