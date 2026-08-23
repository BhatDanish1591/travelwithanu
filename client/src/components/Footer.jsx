import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/images/logo.png" alt="Travel with Anu Logo" className="footer-logo-img" style={{height: '60px', width: 'auto', objectFit: 'contain'}} />
                <div className="footer-logo-text">
                  <div className="footer-logo-name">Travel with Anu</div>
                  <div className="footer-tagline">Your Journey Through Paradise</div>
                </div>
              </div>
              <p className="footer-desc">We are a Kashmir-based premium travel company dedicated to creating authentic, meaningful experiences in the valley of Kashmir. From Dal Lake to Gurez Valley — we know every path.</p>
              <div className="footer-socials" aria-label="Social media">
                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/travel_with__anu?igsh=MTV5cjNxOXl2Mjg1dQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            <div>
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/packages">Kashmir Packages</Link></li>
                <li><Link to="/places-to-visit">Destinations</Link></li>
                <li><Link to="/things-to-do">Experiences</Link></li>
                <li><Link to="/guides">Travel Guides</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/amarnath-yatra">Amarnath Yatra Package</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-col-title">Useful Info</h3>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
                <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
                <li><Link to="/contact#faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer-col-title">Top Packages</h3>
              <ul className="footer-links">
                <li><Link to="/packages">Kashmir Highlights (5D)</Link></li>
                <li><Link to="/packages">Kashmir Escape (6D)</Link></li>
                <li><Link to="/packages">Kashmir Honeymoon (6D)</Link></li>
                <li><Link to="/packages">Kashmir Adventure (7D)</Link></li>
                <li><Link to="/amarnath-yatra">Amarnath Yatra Package</Link></li>
                <li><Link to="/packages">Gulmarg Snow Tour</Link></li>
                <li><Link to="/packages">Pahalgam Valley Tour</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <span>© 2026 Travel with Anu. All rights reserved. Made with ❤️ in Kashmir.</span>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
