/*
  src/components/Gallery.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    Displays a responsive photo grid of the previous convocation.
    Clicking an image opens a simple lightbox overlay.

  STATE:
    lightbox — index of the open image, or null when closed.
    ESC key  — closes lightbox.
*/
import React, { useState, useEffect } from 'react';
import { galleryImages } from '../data/content';
import './Sections.css';

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const prev = () => setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i + 1) % galleryImages.length);

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Convocation 2025 Gallery</h2>
          <div className="divider" />
          <p className="section-subtitle">Memories from last year's ceremony</p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="gallery__item reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(i)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__overlay">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">&#8249;</button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">&#8250;</button>
          <p className="lightbox__caption">{galleryImages[lightbox].alt}</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
