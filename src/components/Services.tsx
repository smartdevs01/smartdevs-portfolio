import { Code2, Globe, Puzzle, Sparkles } from 'lucide-react';
import { services } from '@/content';

const iconMap = { code: Code2, sparkles: Sparkles, globe: Globe, puzzle: Puzzle };

export default function Services() {
  return (
    <section className="section-pad relative bg-navy-900/30">
      <div className="container-px">
        <div className="section-intro reveal">
          <p className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold-400" />
            Services
            <span className="h-px w-8 bg-gold-400" />
          </p>
          <h2 className="heading-lg mt-5 text-balance">
            What I can <span className="text-gold-gradient">help with.</span>
          </h2>
          <p className="mt-5 text-ink-muted text-pretty">
            These are areas I'm actively developing and enjoy working in — offered honestly as a growing
            professional, not as claimed years of commercial experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="card card-hover sheen-hover reveal-scale group relative flex flex-col overflow-hidden p-7"
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                {/* Number watermark */}
                <span className="absolute right-5 top-5 font-display text-xl font-bold text-navy-600/40 transition-colors duration-500 group-hover:text-gold-400/25">
                  0{i + 1}
                </span>

                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold-400/30 bg-navy-900 transition-all duration-500 group-hover:border-gold-400/60 group-hover:shadow-gold-soft">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted text-pretty">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-gold-400/80">
                  <span className="h-px w-6 bg-gold-400/50 transition-all duration-500 group-hover:w-10" />
                  Area of interest
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
