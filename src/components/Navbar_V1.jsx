/*
  src/components/Navbar.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    The top navigation bar — sticky on scroll, collapses to a
    hamburger menu on mobile.

  KEY BEHAVIOUR:
    • Becomes opaque + shadow after user scrolls 60 px (scrolled state).
    • On mobile (≤768 px), links collapse behind a hamburger icon.
    • Clicking a link closes the mobile menu and smoothly scrolls to
      the target section (handled by href + scroll-behavior in CSS).
    • Active section highlighting via scroll-position tracking.

  STATE:
    scrolled  — boolean, adds shadow once page scrolled past hero
    menuOpen  — boolean, toggles mobile nav drawer
*/
import React, { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../data/content';
import './Navbar.css';

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
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

        {/* ── Logo / Site name ─────────────────────────────────── */}
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-title">BITS Pilani</span>
          <span className="navbar__brand-sub">Hyderabad Campus</span>
        </a>

        {/* ── Desktop links ────────────────────────────────────── */}
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href.replace('#','') ? 'navbar__link--active' : ''}`}
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
      <nav className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar__mobile-link ${activeSection === link.href.replace('#','') ? 'active' : ''}`}
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
