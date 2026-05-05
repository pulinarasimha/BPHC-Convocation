/*
  src/components/About.jsx
  ─────────────────────────────────────────────────────────────────
  CHANGE FROM PREVIOUS VERSION:
    Quick Info Strip updated to remove duplication with the
    Important Dates section below it.

    REMOVED from strip : Ceremony Date, Rehearsal
      (these already appear in ImportantDates section)

    REPLACED with     : Dress Code, Guest Seats
      (unique info not shown anywhere else on the page)

  QUICK INFO STRIP NOW SHOWS:
    • Venue        — where the ceremony is held
    • Dress Code   — formal attire reminder
    • Guest Seats  — max 2 per graduate
    • Registration — current status (highlighted)
*/
import React from 'react';
import './About.css';

const quickInfo = [
  {
    icon: '🏛️',
    label: 'Venue',
    value: 'BITS Pilani, Hyderabad Campus',
    highlight: false,
  },
  {
    icon: '👔',
    label: 'Dress Code',
    value: 'Formal Attire Required',
    highlight: false,
  },
  {
    icon: '✅',
    label: 'Registration',
    value: 'Opening Soon',
    highlight: true,
  },
];
/* this is a test*/
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
