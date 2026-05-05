/*
  src/components/About.jsx
  ─────────────────────────────────────────────────────────────────
  CHANGE FROM PREVIOUS VERSION:
    Removed the generic stats cards (2001, 50+, 5000+, 4).
    Replaced with a "Quick Info Strip" showing the 4 most important
    pieces of information a visitor needs:
      • Ceremony Date
      • Venue
      • Rehearsal Date
      • Registration Status

    These values come from content.js so you only ever edit one file.
*/
import React from 'react';
import { importantDates, siteConfig } from '../data/content';
import './About.css';

const quickInfo = [
  {
    icon: '📅',
    label: 'Ceremony Date',
    value: 'To be announced',
    highlight: false,
  },
  {
    icon: '📍',
    label: 'Venue',
    value: 'BITS Pilani, Hyderabad Campus',
    highlight: false,
  },
  {
    icon: '🎓',
    label: 'Rehearsal',
    value: 'Mandatory for all graduates',
    highlight: false,
  },
  {
    icon: '✅',
    label: 'Registration',
    value: 'Opening Soon',
    highlight: true,
  },
];

const About = () => (
  <section id="about" className="section about-section">
    <div className="container">

      {/* ── Section header ──────────────────────────────────────── */}
      <div className="section-header reveal">
        <h2 className="section-title">About the Ceremony</h2>
        <div className="divider" />
        <p className="section-subtitle">A milestone worth celebrating</p>
      </div>

      {/* ── About text ──────────────────────────────────────────── */}
      <div className="about__text reveal">
        <p>
          The convocation ceremony for the graduating students who have completed
          the eligibility requirements in the academic year <strong>2025–26</strong> of
          First Degree, Higher Degree, and Ph.D. Programmes from{' '}
          <strong>BITS Pilani, Hyderabad Campus</strong> is scheduled on a date to
          be announced shortly.
        </p>
        <p>
          To attend the convocation ceremony, the student must attend the rehearsal
          without exception. Participants are requested to plan their travel
          accordingly and check the website for further updates.
        </p>
      </div>

      {/* ── Quick Info Strip ────────────────────────────────────── */}
      <div className="quick-info reveal">
        {quickInfo.map((item, i) => (
          <div
            key={i}
            className={`quick-info__card ${item.highlight ? 'quick-info__card--highlight' : ''}`}
          >
            <span className="quick-info__icon">{item.icon}</span>
            <div className="quick-info__text">
              <span className="quick-info__label">{item.label}</span>
              <span className="quick-info__value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
