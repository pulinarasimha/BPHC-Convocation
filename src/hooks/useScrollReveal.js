/*
  src/hooks/useScrollReveal.js
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    A custom React hook that uses the browser's IntersectionObserver
    API to add a "visible" class to elements when they scroll into
    the viewport.  Combined with the .reveal CSS class in index.css,
    this creates a smooth fade-up entrance animation without any
    animation library.

  HOW TO USE IN A COMPONENT:
    import useScrollReveal from '../hooks/useScrollReveal';
    useScrollReveal();   // call once at top of component
    // Then add className="reveal" to any element you want animated.

  CLEANUP:
    The hook disconnects the observer when the component unmounts
    to prevent memory leaks.
*/
import { useEffect } from 'react';

const useScrollReveal = (threshold = 0.15) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after first reveal — animation plays once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
};

export default useScrollReveal;
