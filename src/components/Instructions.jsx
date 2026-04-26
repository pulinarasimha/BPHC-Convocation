/*
  src/components/Instructions.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    Shows ceremony instructions (dress code, travel) in an accordion
    so the page doesn't become a wall of text.  Clicking a category
    toggles its detail panel open/closed.

  STATE:
    openId — the id of the currently open accordion item (or null).
*/
import React, { useState } from 'react';
import { instructions } from '../data/content';
import './Sections.css';

const Instructions = () => {
  const [openId, setOpenId] = useState(instructions[0].id);

  const toggle = (id) => setOpenId((curr) => (curr === id ? null : id));

  return (
    <section id="instructions" className="section bg-white">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Instructions to Candidates</h2>
          <div className="divider" />
          <p className="section-subtitle">Please read all guidelines carefully before attending the ceremony</p>
        </div>

        <div className="accordion reveal">
          {instructions.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
                <button
                  className="accordion__trigger"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion__icon">{item.icon}</span>
                  <span className="accordion__category">{item.category}</span>
                  <span className="accordion__chevron">{isOpen ? '▲' : '▼'}</span>
                </button>

                <div className="accordion__body">
                  <ul className="instruction-list">
                    {item.items.map((point, i) => (
                      <li key={i} className="instruction-list__item">
                        <span className="instruction-list__bullet" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {item.note && (
                    <p className="instruction__note">
                      <strong>Note:</strong> {item.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Instructions;
