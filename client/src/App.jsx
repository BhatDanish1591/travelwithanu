import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Packages from './pages/Packages';
import AmarnathYatra from './pages/AmarnathYatra';
import AmarnathBooking from './pages/AmarnathBooking';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import PackageHighlights from './pages/PackageHighlights';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';

// Assets
import './assets/styles.css';
import './assets/page.css';

const seoMap = {
  '/': { title: 'Travel with Anu | Premium Kashmir Tour Packages & Travel Guides', desc: 'Experience the paradise of Kashmir with Travel with Anu. We offer customized family tours, romantic honeymoon packages, Amarnath Yatra bookings, and thrilling adventure treks in Srinagar, Gulmarg, and Pahalgam.' },
  '/packages': { title: 'Kashmir Tour Packages | Family, Honeymoon & Adventure | Travel with Anu', desc: 'Explore handcrafted Kashmir travel packages for families, couples, adventurers and solo travelers. Best price guarantee and 24/7 local support.' },
  '/amarnath-yatra': { title: 'Amarnath Yatra 2026 Packages & Helicopter Booking | Travel with Anu', desc: 'Book your Amarnath Yatra 2026 packages via Baltal or Pahalgam. Helicopter tickets, registration assistance, and premium stays.' },
  '/amarnath-yatra/booking': { title: 'Book Amarnath Yatra 2026 | Travel with Anu', desc: 'Secure your Amarnath Yatra 2026 booking with helicopter tickets and VIP darshan.' },
  '/about': { title: 'About Travel with Anu | Your Trusted Kashmir Travel Experts', desc: 'Learn about Travel with Anu, a local Srinagar-based travel agency with 15+ years of experience in crafting unforgettable Kashmir holidays.' },
  '/places-to-visit': { title: 'Best Places to Visit in Kashmir | Srinagar, Gulmarg, Pahalgam', desc: 'Discover the top tourist destinations in Kashmir. From the floating gardens of Dal Lake to the snow-capped peaks of Gulmarg and Sonamarg.' },
  '/things-to-do': { title: 'Top Things to Do in Kashmir | Shikara Rides, Skiing & Trekking', desc: 'Curated activities in Kashmir: Shikara rides on Dal Lake, Gondola in Gulmarg, trekking in Sonamarg, and white water rafting in Pahalgam.' },
  '/contact': { title: 'Contact Us | Plan Your Kashmir Tour | Travel with Anu', desc: 'Get in touch to plan your custom Kashmir holiday. We respond within 2-4 hours with a personalized day-by-day itinerary and quote.' },
  '/book-now': { title: 'Book Your Kashmir Tour | Travel with Anu', desc: 'Book your customized Kashmir tour package today. Secure your dream holiday with a small advance token payment.' },
  '/guides': { title: 'Kashmir Travel Guides & Blog | Travel with Anu', desc: 'Read expert travel tips, packing guides, and seasonal itineraries for your Kashmir trip written by local experts.' }
};

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamic SEO
    const seo = seoMap[location.pathname] || seoMap['/'];
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.desc);

    // Scroll to top on route change reliably after render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    // Re-initialize IntersectionObserver for reveal animations
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Slight delay to ensure DOM is painted
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left');
      elements.forEach(el => revealObserver.observe(el));
    }, 100);

    return () => revealObserver.disconnect();
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="app-container">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:packageSlug" element={<PackageHighlights />} />
            <Route path="/amarnath-yatra" element={<AmarnathYatra />} />
            <Route path="/amarnath-yatra/booking" element={<AmarnathBooking />} />
            <Route path="/about" element={<About />} />
            <Route path="/places-to-visit" element={<Destinations />} />
            <Route path="/things-to-do" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:guideSlug" element={<GuideDetail />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </main>

        {/* Floating Actions */}
        <div className="fab-container" aria-label="Quick contact">
          <a href="https://wa.me/919419000000?text=Hello%20Travel with Anu%2C%20I%20want%20to%20plan%20a%20Kashmir%20trip!" className="fab-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp enquiry">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.095 1.509 5.823L0 24l6.335-1.483A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.016-1.376l-.36-.214-3.72.87.94-3.63-.235-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
          </a>
          <a href="tel:+919419000000" className="fab-call" aria-label="Call us">📞</a>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
