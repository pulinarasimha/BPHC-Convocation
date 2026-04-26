/*
  src/components/Footer.jsx
  WHY: Provides quick navigation links, contact info, and copyright.
       Mirrors the structure of the original BITS convocation site.
*/
import React from 'react';
import { siteConfig, navLinks } from '../data/content';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">

      {/* Column 1 – Branding */}
      <div className="footer__col">
        <h4 className="footer__heading">
          BITS Pilani<br />
          <span>Hyderabad Campus</span>
        </h4>
        <p className="footer__text">
          The convocation portal for BITS Pilani, Hyderabad Campus — celebrating graduates since 2001.
        </p>
      </div>

      {/* Column 2 – Quick links */}
      <div className="footer__col">
        <h5 className="footer__col-title">Quick Links</h5>
        <ul className="footer__links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="footer__link">{l.label}</a>
            </li>
          ))}
          <li>
            <a href={siteConfig.universityWebsite} target="_blank" rel="noreferrer" className="footer__link">
              University Website ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 – Contact */}
      <div className="footer__col">
        <h5 className="footer__col-title">Contact</h5>
        <address className="footer__address">
          Student Welfare Division,<br />
          BITS Pilani, Hyderabad Campus,<br />
          Jawahar Nagar, Kapra (M),<br />
          Medchal District,<br />
          Hyderabad – 500078, Telangana, India
        </address>
        <a href={`mailto:${siteConfig.email}`} className="footer__email">
          {siteConfig.email}
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p>© {new Date().getFullYear()} Convocation — BITS Pilani, Hyderabad Campus. All Rights Reserved.</p>
        <p>Designed with React</p>
      </div>
    </div>
  </footer>
);

export default Footer;
