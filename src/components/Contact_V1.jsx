/*
  src/components/Contact.jsx
  ─────────────────────────────────────────────────────────────────
  WHY THIS FILE:
    Provides a contact form + address/email information.

  FORM BEHAVIOUR:
    • Controlled inputs — React state is the single source of truth.
    • Client-side validation before submit.
    • On submit: shows a success toast (no backend needed in SPA mode).
      → In a full-stack app, replace the setTimeout with a real
        fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })

  STATE:
    form    — object holding all input values
    errors  — validation messages keyed by field name
    toast   — { type, msg } | null  for the status notification
    loading — bool while submitting
*/
import React, { useState } from 'react';
import { siteConfig } from '../data/content';
import './Sections.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

const validate = (form) => {
  const errs = {};
  if (!form.name.trim())         errs.name    = 'Name is required';
  if (!form.email.trim())        errs.email   = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email';
  if (!form.subject.trim())      errs.subject = 'Subject is required';
  if (!form.message.trim())      errs.message = 'Message is required';
  return errs;
};

const Contact = () => {
  const [form,    setForm]    = useState(initialForm);
  const [errors,  setErrors]  = useState({});
  const [toast,   setToast]   = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error as user types
    if (errors[name]) setErrors((e) => { const n = {...e}; delete n[name]; return n; });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    // ── Simulate API call (replace with real fetch in PERN mode) ──
    setTimeout(() => {
      setLoading(false);
      setForm(initialForm);
      setToast({ type: 'success', msg: 'Your message has been sent. We will get back to you soon.' });
      setTimeout(() => setToast(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Contact Us</h2>
          <div className="divider" />
          <p className="section-subtitle">Reach out to the Student Welfare Division for all convocation-related queries</p>
        </div>

        <div className="contact__grid">
          {/* ── Info panel ─────────────────────────────────────── */}
          <div className="contact__info reveal">
            <h3 className="contact__info-title">Hyderabad Campus</h3>

            <div className="contact__detail">
              <span className="contact__detail-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>Student Welfare Division, BITS Pilani,<br />
                   Hyderabad Campus, Jawahar Nagar,<br />
                   Kapra (M), Medchal District,<br />
                   Hyderabad – 500078, Telangana, India</p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">🌐</span>
              <div>
                <strong>Website</strong>
                <p>
                  <a href={siteConfig.website} target="_blank" rel="noreferrer">
                    www.bits-pilani.ac.in/hyderabad
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* ── Form ───────────────────────────────────────────── */}
          <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
            {toast && (
              <div className={`toast toast--${toast.type}`}>{toast.msg}</div>
            )}

            {[
              { name: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Your full name' },
              { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { name: 'subject', label: 'Subject',       type: 'text',  placeholder: 'What is your query about?' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name} className="form-group">
                <label htmlFor={name} className="form-label">{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`form-input ${errors[name] ? 'form-input--error' : ''}`}
                />
                {errors[name] && <span className="form-error">{errors[name]}</span>}
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your query in detail…"
                className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-maroon btn-submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
