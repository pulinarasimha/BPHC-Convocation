/*
  src/components/Livestream.jsx
  WHY: Provides a dedicated section for the live stream link and
       an archive of previous year recordings.
*/
import React from 'react';
import { livestreams } from '../data/content';
import './Sections.css';

const Livestream = () => (
  <section id="livestream" className="section">
    <div className="container">
      <div className="section-header reveal">
        <h2 className="section-title">Live Stream</h2>
        <div className="divider" />
        <p className="section-subtitle">Watch the ceremony live or revisit past years</p>
      </div>

      {/* Current year */}
      <div className="live__card reveal">
        <div className="live__badge">
          <span className="live__dot" />
          LIVE
        </div>
        <h3>Convocation 2026 — Live Stream</h3>
        {livestreams.current.url ? (
          <a href={livestreams.current.url} target="_blank" rel="noreferrer" className="btn-maroon">
            Watch Live ▶
          </a>
        ) : (
          <p className="live__placeholder">
            The live stream link will be available here closer to the ceremony date.
          </p>
        )}
      </div>

      {/* Previous recordings */}
      <div className="reveal" style={{ marginTop: '2.5rem' }}>
        <h3 className="subsection-title">Previous Year Recordings</h3>
        <div className="recordings__grid">
          {livestreams.previous.map((r) => (
            <a
              key={r.year}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="recording__card"
            >
              <span className="recording__year">{r.year}</span>
              <span className="recording__icon">▶</span>
              <span className="recording__label">Watch Recording</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Livestream;
