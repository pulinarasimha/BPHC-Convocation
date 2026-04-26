/*
  src/components/Hero.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    The full-viewport hero section at the top of the page.
    Features:
    • Auto-advancing image slideshow (changes every 4 s)
    • Manual previous/next controls and dot indicators
    • Welcome headline and sub-text overlaid on darkened image
    • "Register Now" CTA button that scrolls to the contact section

  STATE:
    current  — index of the active slide
    paused   — true when user hovers (pauses auto-advance)
*/
import React, { useState, useEffect, useCallback } from 'react';
import { galleryImages, siteConfig } from '../data/content';
import './Hero.css';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  const total = galleryImages.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  // Auto-advance every 4 s unless paused
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide images ─────────────────────────────────────────── */}
      <div className="hero__slides">
        {galleryImages.map((img, i) => (
          <div
            key={img.id}
            className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${img.src})` }}
            role="img"
            aria-label={img.alt}
          />
        ))}
        {/* Dark overlay for text legibility */}
        <div className="hero__overlay" />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="container hero__content">
        <p className="hero__eyebrow">BITS Pilani · Hyderabad Campus</p>
        <h1 className="hero__title">
          Welcome to<br />
          <em>Convocation 2026</em>
        </h1>
        <p className="hero__body">
          Celebrating the graduating class of the academic year 2025–26
          across First Degree, Higher Degree, and Ph.D. Programmes.
        </p>
        <div className="hero__cta-group">
          <a href="#about" className="btn btn--primary">
            Learn More
          </a>
          <a href="#contact" className="btn btn--outline-light">
            Contact Us
          </a>
        </div>

        {/* ── Email strip ─────────────────────────────────────────── */}
        <p className="hero__email">
          <span>📧</span>&nbsp;
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </div>

      {/* ── Previous / Next arrows ───────────────────────────────── */}
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">&#8249;</button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">&#8250;</button>

      {/* ── Dot indicators ───────────────────────────────────────── */}
      <div className="hero__dots">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
