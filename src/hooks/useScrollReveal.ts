import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they scroll into view. Uses IntersectionObserver and respects
 * reduced-motion automatically via CSS.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
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
  }, []);

  return containerRef;
}

/** Tracks the currently visible section id for nav highlighting. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
