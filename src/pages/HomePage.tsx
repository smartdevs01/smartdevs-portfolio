import { ArrowRight, Mail, UserRound, FolderKanban } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects, skills } from '@/content';
import { usePageMeta } from '@/hooks/usePageMeta';

const featured = projects.slice(0, 2);
const skillPreview = skills.slice(0, 6);

export default function HomePage() {
  usePageMeta(
    'Software Developer & Aspiring Software Engineer',
    'Smartdevs is an aspiring software engineer building practical Java and web projects. Explore projects, skills, and how to get in touch.'
  );

  return (
    <>
      <Hero />

      <section className="section-pad relative">
        <div className="container-px">
          <div className="section-intro reveal">
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-gold-400" />
              Featured Projects
              <span className="h-px w-8 bg-gold-400" />
            </p>
            <h2 className="heading-lg mt-5 text-balance">
              Work in <span className="text-gold-gradient">progress.</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <div className="reveal mt-12 flex justify-center">
            <Link to="/projects" className="btn-ghost group">
              View all projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad relative bg-navy-900/30">
        <div className="container-px">
          <div className="section-intro reveal">
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-gold-400" />
              Skills Preview
              <span className="h-px w-8 bg-gold-400" />
            </p>
            <h2 className="heading-lg mt-5 text-balance">
              Tools I'm <span className="text-gold-gradient">building with.</span>
            </h2>
          </div>
          <ul className="reveal mt-12 flex flex-wrap justify-center gap-3">
            {skillPreview.map((skill) => (
              <li key={skill.name} className="chip px-4 py-2 text-sm">
                {skill.name}
              </li>
            ))}
          </ul>
          <div className="reveal mt-10 flex justify-center">
            <Link to="/skills" className="btn-ghost group">
              See all skills &amp; services
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="container-px">
          <div className="reveal card-lux relative overflow-hidden p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-dot-faint bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="relative">
              <h2 className="heading-lg text-balance">
                Let's <span className="text-gold-gradient">connect.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-ink-muted text-pretty">
                Learn more about my journey, explore the projects I am building, or send a message.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link to="/projects" className="btn-gold group">
                  <FolderKanban size={17} />
                  Explore Projects
                </Link>
                <Link to="/about" className="btn-ghost group">
                  <UserRound size={17} />
                  About Me
                </Link>
                <Link to="/contact" className="btn-ghost group">
                  <Mail size={17} />
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
