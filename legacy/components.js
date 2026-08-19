/* ============================================================
   Travel with Anu — components.js
   Injects shared Navbar + Footer into every page
   ============================================================ */
'use strict';

const NAV_HTML = `

<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Travel with Anu home">
      <img src="images/logo.png" alt="Travel with Anu Logo" class="nav-logo-img" style="height: 55px; width: auto; object-fit: contain;">
      <div class="nav-logo-text">
        <div class="nav-logo-name">Travel with Anu</div>
        <div class="nav-logo-tagline">Your Journey Through Paradise</div>
      </div>
    </a>
    <ul class="nav-links" role="list">
      <li><a href="index.html">Home</a></li>
      <li><a href="destinations.html">Destinations</a></li>
      <li><a href="packages.html">Packages</a></li>
      <li><a href="experiences.html">Experiences</a></li>
      <li><a href="guides.html">Travel Guides</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="contact.html" class="btn btn-gold btn-sm">Book Trip ✈️</a>
    </div>
    <button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="nav-mobile" id="mobile-menu" role="navigation" aria-hidden="true">
  <a href="index.html" class="mobile-link">🏠 Home</a>
  <a href="destinations.html" class="mobile-link">🏔️ Destinations</a>
  <a href="packages.html" class="mobile-link">📦 Kashmir Packages</a>
  <a href="experiences.html" class="mobile-link">✨ Experiences</a>
  <a href="guides.html" class="mobile-link">📖 Travel Guides</a>
  <a href="about.html" class="mobile-link">👥 About Us</a>
  <a href="contact.html" class="mobile-link">📞 Contact Us</a>
  <a href="amarnath-yatra.html" class="mobile-link">🕉️ Amarnath Yatra 2026</a>
  <a href="https://wa.me/919419000000" style="color:#25D366;margin-top:12px;" target="_blank" rel="noopener">💬 WhatsApp Enquiry</a>
</nav>`;

const FOOTER_HTML = `
<footer id="footer" role="contentinfo">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="images/logo.png" alt="Travel with Anu Logo" class="footer-logo-img" style="height: 60px; width: auto; object-fit: contain;">
            <div>
              <div class="footer-logo-name">Travel with Anu</div>
              <div class="footer-tagline">Your Journey Through Paradise</div>
            </div>
          </div>
          <p class="footer-desc">We are a Kashmir-based premium travel company creating authentic, meaningful experiences across the valley. From Dal Lake to Gurez Valley — we know every path.</p>
          <div class="footer-socials" aria-label="Social media">
            <a href="#" class="social-btn" aria-label="Instagram">📷</a>
            <a href="#" class="social-btn" aria-label="Facebook">📘</a>
            <a href="#" class="social-btn" aria-label="YouTube">📺</a>
          </div>
        </div>
        <div>
          <h3 class="footer-col-title">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="packages.html">Kashmir Packages</a></li>
            <li><a href="destinations.html">Destinations</a></li>
            <li><a href="experiences.html">Experiences</a></li>
            <li><a href="guides.html">Travel Guides</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="amarnath-yatra.html">Amarnath Yatra Package</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-col-title">Useful Info</h3>
          <ul class="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="contact.html#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-col-title">Top Packages</h3>
          <ul class="footer-links">
            <li><a href="package-highlights.html">Kashmir Highlights (5D)</a></li>
            <li><a href="package-escape.html">Kashmir Escape (6D)</a></li>
            <li><a href="package-honeymoon.html">Kashmir Honeymoon (6D)</a></li>
            <li><a href="package-adventure.html">Kashmir Adventure (7D)</a></li>
            <li><a href="amarnath-yatra.html">Amarnath Yatra Package</a></li>
            <li><a href="packages.html">Gulmarg Snow Tour</a></li>
            <li><a href="packages.html">Pahalgam Valley Tour</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <span>© 2025 Travel with Anu. All rights reserved. Made with ❤️ in Kashmir.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </div>
</footer>
<div class="fab-container">
  <a href="https://wa.me/919419000000?text=Hello%20Travel with Anu!" class="fab-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.095 1.509 5.823L0 24l6.335-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.016-1.376l-.36-.214-3.72.87.94-3.63-.235-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
  </a>
  <a href="tel:+919419000000" class="fab-call" aria-label="Call">📞</a>
</div>
<button id="back-to-top" aria-label="Back to top">↑</button>
<div class="toast" id="toast" role="alert" aria-live="assertive" aria-atomic="true"></div>`;

// Inject nav
const header = document.querySelector('header');
if (header) header.innerHTML = NAV_HTML;

// Inject footer
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

// Mark active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--gold-400)';
      a.style.fontWeight = '700';
    }
  });
});
