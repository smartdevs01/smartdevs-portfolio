import type { ReactNode } from 'react';

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow justify-center">
        <span className="h-px w-8 bg-gold-400" />
        {eyebrow}
        <span className="h-px w-8 bg-gold-400" />
      </p>
      <h1 className="heading-lg mt-5 text-balance">{title}</h1>
      <p className="mt-5 text-ink-muted text-pretty">{description}</p>
    </div>
  );
}
