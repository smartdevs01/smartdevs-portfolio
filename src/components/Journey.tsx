import { journey } from '@/content';

export default function Journey() {
  return (
    <section className="section-pad relative">
      <div className="container-px">
        <div className="section-intro reveal">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            My Development Journey
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="heading-lg mt-5 text-balance">
            The road so far — <span className="text-gold-gradient">and ahead.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-pretty">
            An honest look at the steps I'm taking toward becoming a skilled software developer and engineer.
            This timeline grows as I do.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/70 via-navy-600 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-12">
            {journey.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={step.phase}
                  className="reveal-scale relative pl-14 md:pl-0"
                  style={{ ['--reveal-delay' as string]: `${i * 100}ms` }}
                >
                  {/* Node */}
                  <span className="absolute left-4 top-1.5 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 border-gold-400 bg-navy-950 shadow-gold-soft md:left-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  </span>

                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'}`}>
                    <div className="card card-hover group p-6">
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-400">
                        {step.phase}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-ink transition-colors group-hover:text-gold-200">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Ongoing marker */}
          <div className="reveal mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-navy-800/70 px-5 py-2.5 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-gold-400" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold-300">In progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
