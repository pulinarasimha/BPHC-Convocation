/*
  src/components/About.jsx
  Renders a short welcome paragraph and stats bar.
  WHY: Gives visitors context about the ceremony directly below the hero.
*/
import React from 'react';
import './Sections.css';

const About = () => (
  <section id="about" className="section bg-white">
    <div className="container">
      <div className="section-header reveal">
        <h2 className="section-title">About the Ceremony</h2>
        <div className="divider" />
        <p className="section-subtitle">A milestone worth celebrating</p>
      </div>

      <div className="about__grid reveal">
        <div className="about__text">
          <p>
            The convocation ceremony for the graduating students who have completed the eligibility
            requirements in the academic year <strong>2025–26</strong> of First Degree, Higher
            Degree, and Ph.D. Programmes from <strong>BITS Pilani, Hyderabad Campus</strong> is
            scheduled on a date to be announced shortly.
          </p>
          <p style={{ marginTop: '1rem' }}>
            To attend the convocation ceremony, the student must attend the rehearsal without
            exception. Participants are requested to plan their travel accordingly and check the
            website for further updates.
          </p>
        </div>

        <div className="about__stats">
          {[
            { value: '2001',  label: 'Est. Year' },
            { value: '50+',   label: 'Departments' },
            { value: '5000+', label: 'Graduates' },
            { value: '4',     label: 'Campuses' },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
