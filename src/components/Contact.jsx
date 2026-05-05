/*
  src/components/Contact.jsx
  ─────────────────────────────────────────────────────────────────
  CHANGE FROM PREVIOUS VERSION:
    Removed the contact form entirely.
    Now displays only:
      • Address
      • Email
      • Website
      • Phone (added as enhancement)
      • Google Maps embed for visual location reference

    WHY: For an institutional convocation website, a contact form
    is unnecessary. Students just need the direct contact details.
*/
import React from 'react';
import { siteConfig } from '../data/content';
import './Contact.css';

const contactDetails = [
  {
    icon: '📍',
    label: 'Address',
    content: (
      <>
        Student Welfare Division, BITS Pilani,<br />
        Hyderabad Campus, Jawahar Nagar,<br />
        Kapra (M), Medchal District,<br />
        Hyderabad – 500078, Telangana, India
      </>
    ),
    link: null,
  },
  {
    icon: '📧',
    label: 'Email',
    content: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
  },
  {
    icon: '🌐',
    label: 'Website',
    content: 'www.bits-pilani.ac.in/hyderabad',
    link: siteConfig.website,
  },
  {
    icon: '📞',
    label: 'Phone',
    content: '+91-40-66303820',
    link: 'tel:+914066303820',
  },
];

const Contact = () => (
  <section id="contact" className="section contact-section">
    <div className="container">

      {/* ── Section Header ──────────────────────────────────────── */}
      <div className="section-header reveal">
        <h2 className="section-title">Contact Us</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Reach out to the Student Welfare Division for all convocation-related queries
        </p>
      </div>

      {/* ── Contact Layout ──────────────────────────────────────── */}
      <div className="contact__layout">

        {/* ── Left: Contact Cards ─────────────────────────────── */}
        <div className="contact__cards reveal">
          <h3 className="contact__campus-title">Hyderabad Campus</h3>

          {contactDetails.map((item, i) => (
            <div key={i} className="contact__card">
              <div className="contact__card-icon">{item.icon}</div>
              <div className="contact__card-body">
                <span className="contact__card-label">{item.label}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    className="contact__card-value contact__card-link"
                    target={item.label === 'Website' ? '_blank' : undefined}
                    rel={item.label === 'Website' ? 'noreferrer' : undefined}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="contact__card-value">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
/* this is a test*/
        {/* ── Right: Google Maps ──────────────────────────────── */}
        <div className="contact__map reveal">
          <iframe
            title="BITS Pilani Hyderabad Campus Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9837.651252901383!2d78.569141!3d17.541465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb83594a86132d%3A0xc3e06e9e76cebf3d!2sBirla%20Institute%20of%20Technology%20%26%20Science%20Pilani%2C%20Hyderabad%20Campus!5e1!3m2!1sen!2sin!4v1777812541800!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </div>
  </section>
);

export default Contact;
