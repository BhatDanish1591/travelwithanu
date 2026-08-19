import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Guides.css';

const Guides = () => {
  const [filter, setFilter] = useState('all');
  const [email, setEmail] = useState('');

  const isVisible = (category) => filter === 'all' || category === filter;

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Guides Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_pahalgam.jpg" className="active" alt="Beautiful Pahalgam road" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Kashmir Travel<br /><em style={{ color: 'var(--gold)' }}>Guides</em>
          </h1>
          <p className="hero-subtitle">
            Expert articles and complete logs covering best times, budget plans, hotel selections, and valley routes written by local guides.
          </p>
          </div>
      </section>

      {/* Blog/Guides Section */}
      <section className="section-py" aria-label="Blog Articles">
        <div className="container">
          
          {/* Featured Guide Card */}
          <article className="featured-guide-card reveal" itemScope itemType="https://schema.org/BlogPosting">
            <div className="featured-guide-img">
              <img src="/images/dest_srinagar.jpg" alt="Srinagar Dal Lake Houseboats sunrise" itemProp="image" />
            </div>
            <div className="featured-guide-body">
              <div className="guide-card-meta">
                <span className="guide-card-cat" itemProp="articleSection">Destinations</span>
                <span className="guide-card-dot">•</span>
                <span className="guide-card-read">8 min read</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--neutral-900)', marginBottom: '14px', lineHeight: 1.2 }} itemProp="headline">
                Best Places to Visit in Kashmir in 2025
              </h2>
              <p style={{ color: 'var(--neutral-500)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }} itemProp="description">
                A comprehensive, seasonal guide detailing the top 8 absolute must-visit locations across Kashmir. From classical spots like Srinagar, Gulmarg, and Pahalgam to remote valleys like Gurez and hidden waterfall picnics like Aharbal.
              </p>
              <Link to="/guides/kashmir-guide" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Read Guide →</Link>
            </div>
          </article>

          {/* Category Filter Tabs */}
          <div className="packages-filter reveal" role="group" aria-label="Article category filters" style={{ justifyContent: 'center', marginBottom: '48px' }}>
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>📑 All Articles</button>
            <button className={`filter-btn ${filter === 'destinations' ? 'active' : ''}`} aria-pressed={filter === 'destinations'} onClick={() => setFilter('destinations')}>🏔️ Destinations</button>
            <button className={`filter-btn ${filter === 'planning' ? 'active' : ''}`} aria-pressed={filter === 'planning'} onClick={() => setFilter('planning')}>📅 Planning</button>
            <button className={`filter-btn ${filter === 'seasonal' ? 'active' : ''}`} aria-pressed={filter === 'seasonal'} onClick={() => setFilter('seasonal')}>❄️ Seasonal</button>
            <button className={`filter-btn ${filter === 'honeymoon' ? 'active' : ''}`} aria-pressed={filter === 'honeymoon'} onClick={() => setFilter('honeymoon')}>💑 Honeymoon</button>
            <button className={`filter-btn ${filter === 'family' ? 'active' : ''}`} aria-pressed={filter === 'family'} onClick={() => setFilter('family')}>👨‍👩‍👧 Family</button>
            <button className={`filter-btn ${filter === 'adventure' ? 'active' : ''}`} aria-pressed={filter === 'adventure'} onClick={() => setFilter('adventure')}>🏔️ Adventure</button>
            <button className={`filter-btn ${filter === 'budget' ? 'active' : ''}`} aria-pressed={filter === 'budget'} onClick={() => setFilter('budget')}>💰 Budget</button>
          </div>

          {/* Articles Grid */}
          <div className="guides-grid" id="blog-grid">
            
            {/* Guide 1 */}
            <article className="guide-card reveal" data-category="destinations" style={{ display: isVisible('destinations') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_srinagar.jpg" alt="Srinagar Dal Lake" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Destinations</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">8 min read</span>
                </div>
                <h3 className="guide-card-title">Best Places to Visit in Kashmir in 2025</h3>
                <p className="guide-card-desc">A complete guide to Kashmir's most stunning destinations — from Dal Lake houseboats to Gurez valley.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 2 */}
            <article className="guide-card reveal" data-category="planning" style={{ display: isVisible('planning') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_gulmarg.jpg" alt="Gulmarg winter" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Planning</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">6 min read</span>
                </div>
                <h3 className="guide-card-title">Best Time to Visit Kashmir — Month by Month</h3>
                <p className="guide-card-desc">Tulip blooms in spring, cool summer meadows, red Chinar leaves in autumn, or ski snows in winter.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 3 */}
            <article className="guide-card reveal" data-category="honeymoon" style={{ display: isVisible('honeymoon') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/package_honeymoon.jpg" alt="Kashmir honeymoon houseboats" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Honeymoon</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">10 min read</span>
                </div>
                <h3 className="guide-card-title">The Complete Kashmir Honeymoon Guide</h3>
                <p className="guide-card-desc">Romantic Shikara rides, candlelit dinners in meadows, cozy houseboats, and planning details.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 4 */}
            <article className="guide-card reveal" data-category="seasonal" style={{ display: isVisible('seasonal') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_doodhpathri.jpg" alt="Kashmir winter snow" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Seasonal</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">7 min read</span>
                </div>
                <h3 className="guide-card-title">Kashmir in Winter — A Snow Lover's Guide</h3>
                <p className="guide-card-desc">Gulmarg skiing, Pahalgam winter trails, freezing temperatures care, and warm woolens check list.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 5 */}
            <article className="guide-card reveal" data-category="family" style={{ display: isVisible('family') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_pahalgam.jpg" alt="Pahalgam family holiday" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Family</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">9 min read</span>
                </div>
                <h3 className="guide-card-title">Kashmir Family Trip Guide — Tips & Routes</h3>
                <p className="guide-card-desc">Safe travel routes, child-friendly sightseeing spots, hotel bookings, and custom travel layouts.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 6 */}
            <article className="guide-card reveal" data-category="budget" style={{ display: isVisible('budget') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_sonamarg.jpg" alt="Sonamarg budget trip" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Budget</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">12 min read</span>
                </div>
                <h3 className="guide-card-title">Kashmir Trip Budget — Full Cost Breakdown</h3>
                <p className="guide-card-desc">Cost analysis of flights, hotels, local cab rentals, food bills, activity passes, and shopping.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 7 */}
            <article className="guide-card reveal" data-category="destinations" style={{ display: isVisible('destinations') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_gulmarg.jpg" alt="Gulmarg travel details" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Destinations</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">8 min read</span>
                </div>
                <h3 className="guide-card-title">Gulmarg Travel Guide – Gondola & Ski slopes</h3>
                <p className="guide-card-desc">Explore ticket bookings, phases breakdown, ski training centers, and best hotels near cable cars.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 8 */}
            <article className="guide-card reveal" data-category="destinations" style={{ display: isVisible('destinations') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/dest_pahalgam.jpg" alt="Pahalgam travel details" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Destinations</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">7 min read</span>
                </div>
                <h3 className="guide-card-title">Pahalgam Travel Guide – Pine Valley Sightseeing</h3>
                <p className="guide-card-desc">Complete walkthrough of local taxis, pony union rates, Betaab Valley tickets, and Lidder river hikes.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

            {/* Guide 9 */}
            <article className="guide-card reveal" data-category="adventure" style={{ display: isVisible('adventure') ? 'block' : 'none' }}>
              <div className="guide-card-img"><img src="/images/package_adventure.jpg" alt="Kashmir adventure trekking guide" /></div>
              <div className="guide-card-body">
                <div className="guide-card-meta">
                  <span className="guide-card-cat">Adventure</span>
                  <span className="guide-card-dot">•</span>
                  <span className="guide-card-read">11 min read</span>
                </div>
                <h3 className="guide-card-title">Kashmir Adventure Guide – Trekking & Trails</h3>
                <p className="guide-card-desc">Plan alpine lake treks, mountain climbing routes, rafting spots, and winter ski slopes in Kashmir.</p>
                <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Popular Topics Tag Cloud */}
      <section className="section-py bg-alt" aria-label="Explore Topics">
        <div className="container text-center">
          <span className="section-label">Find by tag</span>
          <h2 className="section-title gradient-title" style={{ marginBottom: '12px' }}>Popular Guide Topics</h2>
          <p className="section-subtitle">Select any keyword tag to filter and browse related helpful guide articles.</p>
          
          <div className="tag-cloud reveal">
            <span className="tag-pill">#HouseboatStays</span>
            <span className="tag-pill">#GondolaTickets</span>
            <span className="tag-pill">#TulipFestival</span>
            <span className="tag-pill">#BetaabValley</span>
            <span className="tag-pill">#WazwanCuisine</span>
            <span className="tag-pill">#LocalShopping</span>
            <span className="tag-pill">#PonyUnionRates</span>
            <span className="tag-pill">#WinterSkiing</span>
            <span className="tag-pill">#GurezPermits</span>
            <span className="tag-pill">#KashmiriKahwa</span>
            <span className="tag-pill">#LidderRafting</span>
            <span className="tag-pill">#HouseboatBooking</span>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, var(--green-900) 0%, var(--blue-900) 100%)', color: 'var(--white)' }} aria-label="Newsletter Newsletter">
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'var(--green-300)' }}>Stay Updated</span>
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '12px' }}>Get Kashmir Travel Inspiration</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px' }}>Travel updates, seasonal guidelines, and special limited tour deals delivered to your inbox.</p>
          <form className="newsletter-form" id="newsletter-guides" onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '12px' }}>
            <label htmlFor="guide-email-input" style={{ position: 'absolute', left: '-9999px' }}>Email</label>
            <input 
              type="email" 
              id="guide-email-input" 
              className="newsletter-input" 
              required 
              style={{ flex: 1 }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-gold">Subscribe ✉️</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Guides;
