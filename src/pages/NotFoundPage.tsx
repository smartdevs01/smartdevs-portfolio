import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('Page not found', 'The page you are looking for could not be found.');

  return (
    <section className="section-pad relative flex min-h-[70vh] items-center pt-40 md:pt-44">
      <div className="container-px reveal text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-gold-400">Error 404</p>
        <h1 className="heading-lg mt-5 text-balance">
          This page <span className="text-gold-gradient">could not be found.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-muted text-pretty">
          The link may be broken or the page may have moved. Head back to the homepage to continue.
        </p>
        <div className="mt-10 flex justify-center">
          <Link to="/" className="btn-gold">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
