/**
 * Footer.js - Static footer for Airbnb Frontend Clone
 * Rubric: Home Page: Footer (/10 marks)
 * Features: 4 columns of links, copyright text, social links, language/currency selector
 */

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer Links - 4 Columns */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#aircover">AirCover</a>
          <a href="#anti">Anti-discrimination</a>
          <a href="#disability">Disability support</a>
          <a href="#cancel">Cancellation options</a>
          <a href="#report">Report neighborhood concern</a>
        </div>
        <div className="footer-column">
          <h4>Hosting</h4>
          <a href="#airbnb-home">Airbnb your home</a>
          <a href="#aircover-hosts">AirCover for Hosts</a>
          <a href="#resources">Hosting resources</a>
          <a href="#forum">Community forum</a>
          <a href="#responsible">Hosting responsibly</a>
          <a href="#join">Join a free Hosting class</a>
        </div>
        <div className="footer-column">
          <h4>Airbnb</h4>
          <a href="#newsroom">Newsroom</a>
          <a href="#features">New features</a>
          <a href="#careers">Careers</a>
          <a href="#investors">Investors</a>
          <a href="#gift">Gift cards</a>
          <a href="#emergency">Airbnb.org emergency stays</a>
        </div>
        <div className="footer-column">
          <h4>Discover</h4>
          <a href="#trust">Trust & Safety</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#travel">Travel credit</a>
          <a href="#business">Airbnb for Business</a>
          <a href="#magazine">Airbnb Magazine</a>
          <a href="#adventures">Airbnb Adventures</a>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>&copy; 2025 Airbnb Clone, Inc.</span>
          <span className="footer-dot">&middot;</span>
          <a href="#privacy">Privacy</a>
          <span className="footer-dot">&middot;</span>
          <a href="#terms">Terms</a>
          <span className="footer-dot">&middot;</span>
          <a href="#sitemap">Sitemap</a>
        </div>
        <div className="footer-right">
          {/* Language Selector */}
          <button className="footer-lang-btn">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 .25a7.77 7.77 0 00-7.75 7.78 7.75 7.75 0 0015.5 0A7.77 7.77 0 008 .25zm0 14.5A6.75 6.75 0 011.25 8 6.75 6.75 0 018 1.25 6.75 6.75 0 0114.75 8 6.75 6.75 0 018 14.75z"/>
              <path d="M7.25 1.47v13.06a6.73 6.73 0 001.5 0V1.47a6.73 6.73 0 00-1.5 0zM1.47 7.25a6.73 6.73 0 000 1.5h13.06a6.73 6.73 0 000-1.5z"/>
            </svg>
            <span>English (US)</span>
          </button>
          {/* Currency Selector */}
          <button className="footer-currency-btn">
            <span>$ USD</span>
          </button>
          {/* Social Links */}
          <div className="footer-social">
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#twitter" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41l.002-.003z"/></svg>
            </a>
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
