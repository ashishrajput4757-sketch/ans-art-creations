import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches a scroll-triggered IntersectionObserver to a
 * container ref and adds the '.in' class to either:
 *   - the container itself  (mode: 'block', default)
 *   - specific child elements matching LINE_SELECTOR (mode: 'lines')
 *
 * Usage (block):
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal"> ... </div>
 *
 * Usage (lines — staggered heading cascade):
 *   const sectionRef = useReveal({ mode: 'lines' });
 *   <section ref={sectionRef}> <h2 /> <p /> </section>
 */

const LINE_SELECTOR = [
  'h1', 'h2', 'h3',
  '.eyebrow',
  '.section-title',
  '.section-desc',
  '.hero-sub',
  '.hero-ctas',
  '.hero-tags',
  '.about-body p',
  '.quote-info p',
  '.contact-rows',
].join(', ');

const SKIP_SELECTOR = [
  '.cat-card',
  '.eco-card',
  '.gallery-item',
  '.testi-card',
  '.sig-card',
  '.qv-panel',
  '.impact-item',
].join(', ');

export function useReveal({ mode = 'block', threshold = 0.12 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (mode === 'lines') {
      // Find all text elements inside this section, excluding card interiors
      const lines = Array.from(el.querySelectorAll(LINE_SELECTOR)).filter(
        (child) => !child.closest(SKIP_SELECTOR)
      );
      if (!lines.length) return;

      lines.forEach((line, i) => {
        line.classList.add('line-up');
        line.style.transitionDelay = `${Math.min(i, 8) * 0.08}s`;
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            lines.forEach((line) => line.classList.add('in'));
            observer.unobserve(el);
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }

    // Default block mode
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mode, threshold]);

  return ref;
}

export default useReveal;
