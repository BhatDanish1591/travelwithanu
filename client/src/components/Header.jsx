import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label="Travel with Anu home">
            <img src="/images/logo.png" alt="Travel with Anu Logo" className="nav-logo-img" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
            <div className="nav-logo-text">
              <div className="nav-logo-name">Travel with Anu</div>
              <div className="nav-logo-tagline">Your Journey Through Paradise</div>
            </div>
          </Link>
          
          <ul className="nav-links" role="list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/places-to-visit">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/things-to-do">Experiences</Link></li>
            <li><Link to="/guides">Travel Guides</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          
          <div className="nav-actions">
            <a href="https://wa.me/916005655257?text=Hello%2C%20I%20want%20to%20plan%20my%20Kashmir%20trip!" className="nav-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp enquiry">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.095 1.509 5.823L0 24l6.335-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.016-1.376l-.36-.214-3.72.87.94-3.63-.235-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
              WhatsApp
            </a>
            <Link to="/contact" className="nav-book-btn">Book Trip ✈️</Link>
          </div>
          
          <button 
            className={`nav-hamburger ${mobileOpen ? 'open' : ''}`} 
            id="hamburger" 
            aria-label="Open mobile menu" 
            aria-expanded={mobileOpen} 
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <nav className={`nav-mobile ${mobileOpen ? 'open' : ''}`} id="mobile-menu" role="navigation" aria-hidden={!mobileOpen}>
        <Link to="/" className="mobile-link">🏠 Home</Link>
        <Link to="/places-to-visit" className="mobile-link">🏔️ Destinations</Link>
        <Link to="/packages" className="mobile-link">📦 Kashmir Packages</Link>
        <Link to="/things-to-do" className="mobile-link">✨ Experiences</Link>
        <Link to="/guides" className="mobile-link">📖 Travel Guides</Link>
        <Link to="/about" className="mobile-link">👥 About Us</Link>
        <Link to="/contact" className="mobile-link">📞 Contact Us</Link>
        <Link to="/amarnath-yatra" className="mobile-link">🕉️ Amarnath Yatra 2026</Link>
        <a href="https://wa.me/916005655257" style={{ color: '#25D366', marginTop: '12px' }} target="_blank" rel="noopener noreferrer" className="mobile-link">💬 WhatsApp Enquiry</a>
      </nav>
    </header>
  );
};

export default Header;
