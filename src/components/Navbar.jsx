/*
  src/components/Navbar.jsx
  ─────────────────────────────────────────────────────────────────
  CHANGE FROM PREVIOUS VERSION:
    The text-based brand (navbar__brand-title + navbar__brand-sub)
    has been replaced with the official BITS Pilani Hyderabad Campus
    logo image (logo.png placed in /public/).

  WHY %PUBLIC_URL%/logo.png :
    Files in /public/ are served from the root of the dev server and
    the production build.  Using %PUBLIC_URL% ensures the correct
    path in both development and any subdirectory deployment.
    In JSX we reference it as process.env.PUBLIC_URL + '/logo.png'.
*/
import React, { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../data/content';
import './Navbar.css';

const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ── Shadow on scroll ───────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Active section tracking ────────────────────────────────────
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* ── Logo image ───────────────────────────────────────── */}
        <a href="#home" className="navbar__brand" onClick={closeMenu} aria-label="BITS Pilani Hyderabad Campus – Home">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="BITS Pilani Hyderabad Campus"
            className="navbar__logo"
          />
        </a>

        {/* ── Desktop links ────────────────────────────────────── */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${
                activeSection === link.href.replace('#', '')
                  ? 'navbar__link--active'
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Hamburger (mobile) ───────────────────────────────── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────────── */}
      <nav
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Logo inside mobile drawer too */}
        <div className="navbar__mobile-logo-wrap">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="BITS Pilani Hyderabad Campus"
            className="navbar__mobile-logo"
          />
        </div>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__mobile-link ${
              activeSection === link.href.replace('#', '') ? 'active' : ''
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <p className="navbar__mobile-email">{siteConfig.email}</p>
      </nav>
    </header>
  );
};

export default Navbar;
