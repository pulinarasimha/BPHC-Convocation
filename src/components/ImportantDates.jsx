/*
  src/components/ImportantDates.jsx
  WHY: Highlights key ceremony dates with icon cards so they're
       impossible to miss.  Data comes from content.js.
*/
import React from 'react';
import { importantDates } from '../data/content';
import './Sections.css';

const ImportantDates = () => (
  <section id="dates" className="section">
    <div className="container">
      <div className="section-header reveal">
        <h2 className="section-title">Important Dates</h2>
        <div className="divider" />
        <p className="section-subtitle">Mark your calendar</p>
      </div>

      <div className="dates__grid">
        {importantDates.map((d, i) => (
          <div
            key={d.id}
            className="date-card reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="date-card__icon">{d.icon}</span>
            <h3 className="date-card__label">{d.label}</h3>
            <p className="date-card__date">{d.date}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImportantDates;
