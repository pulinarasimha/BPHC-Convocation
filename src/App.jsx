/*
  src/App.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    The root component of the application.  It imports and composes
    every section in the correct vertical order, exactly like the
    original BITS convocation page.

    It also calls the useScrollReveal hook once at the top level so
    that ALL elements with className="reveal" across every section
    get observed by a single IntersectionObserver instance.

  ORDER ON PAGE:
    Navbar → Hero → About → ImportantDates → Gallery
    → Livestream → Instructions → Contact → Footer
    ScrollToTop (floating, fixed position)
*/
import React, { useEffect } from 'react';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import ImportantDates from './components/ImportantDates';
import Gallery        from './components/Gallery';
import Livestream     from './components/Livestream';
import Instructions   from './components/Instructions';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import ScrollToTop    from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';

const App = () => {
  // Activate scroll-reveal animations for all .reveal elements
  useScrollReveal();

  // Set padding-top on the first content section to account for
  // the fixed navbar height, so content is never hidden beneath it.
  useEffect(() => {
    document.documentElement.style.setProperty('--nav-h', '68px');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImportantDates />
        <Gallery />
        <Livestream />
        <Instructions />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
