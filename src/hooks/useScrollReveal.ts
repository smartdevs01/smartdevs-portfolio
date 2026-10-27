import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to `.reveal` and `.reveal-scale` elements as they scroll into view.
 * Re-runs whenever `key` changes, so content on a newly routed page is observed too.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(key: string) {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const root = containerRef.current ?? document;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('.reveal, .reveal-scale'));

    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    const visibilityFallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'));
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(visibilityFallback);
    };
  }, [key]);

  return containerRef;
}
