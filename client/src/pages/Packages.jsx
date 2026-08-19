import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [filter, setFilter] = useState('all');

  // Helper to check if a package should be visible based on its data-type
  const isVisible = (types) => filter === 'all' || types.includes(filter);

  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Packages Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/package_escape.jpg" className="active" alt="Beautiful landscape of Kashmir valley" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Kashmir Tour<br /><em style={{ color: 'var(--gold)' }}>Packages</em>
          </h1>
          <p className="hero-subtitle">
            Explore our top-selling, expertly curated Kashmir tour packages designed for ultimate comfort, sightseeing, and value.
          </p>
          </div>
      </section>

      {/* Filter & Packages Grid */}
      <section className="section-py" aria-label="All Packages Grid">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '40px' }}>
            <span className="section-label">Find Your Trip</span>
            <h2 className="section-title gradient-title">Kashmir Travel Packages</h2>
            <p className="section-subtitle">Use the filters below to instantly find the best package matching your travel style and duration.</p>
          </div>

          {/* Filter Bar */}
          <div className="packages-filter reveal" role="group" aria-label="Package category filters" style={{ justifyContent: 'center', marginBottom: '48px' }}>
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>🌟 All Packages</button>
            <button className={`filter-btn ${filter === 'family' ? 'active' : ''}`} aria-pressed={filter === 'family'} onClick={() => setFilter('family')}>👨‍👩‍👧 Family</button>
            <button className={`filter-btn ${filter === 'honeymoon' ? 'active' : ''}`} aria-pressed={filter === 'honeymoon'} onClick={() => setFilter('honeymoon')}>💑 Honeymoon</button>
            <button className={`filter-btn ${filter === 'adventure' ? 'active' : ''}`} aria-pressed={filter === 'adventure'} onClick={() => setFilter('adventure')}>🏔️ Adventure</button>
            <button className={`filter-btn ${filter === 'luxury' ? 'active' : ''}`} aria-pressed={filter === 'luxury'} onClick={() => setFilter('luxury')}>✨ Luxury</button>
            <button className={`filter-btn ${filter === 'budget' ? 'active' : ''}`} aria-pressed={filter === 'budget'} onClick={() => setFilter('budget')}>💰 Budget</button>
          </div>

          {/* Grid */}
          <div className="packages-grid" id="inner-packages-grid">
            
            {/* Package 1: Highlights */}
            <article className="pkg-card reveal" data-type="family" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('family') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/dest_srinagar.jpg" alt="Kashmir Highlights tour – Dal Lake Srinagar" loading="lazy" />
                <span className="pkg-card-ribbon">⭐ Most Booked</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Kashmir Classic</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Highlights</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">5D / 4N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Family / Couple</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 - 10</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.9</span>
                  <span className="pkg-rating-count">(342 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹9,500</span>
                    <span className="pkg-price-per">per person · 4N5D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 1.5: Amarnath Yatra */}
            <article className="pkg-card reveal" data-type="adventure family" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('adventure family') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/dest_pahalgam.jpg" alt="Amarnath Yatra 2026 tour" loading="lazy" />
                <span className="pkg-card-ribbon" style={{ background: 'linear-gradient(135deg, #ea580c, #f59e0b)' }}>🕉️ Pilgrimage</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Sacred Journey</div>
                <h3 className="pkg-card-title" itemProp="name">Amarnath Yatra 2026</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Baltal</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                  <span className="pkg-dest-tag">Holy Cave</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">4D / 3N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Trek / Helicopter</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">1 - 20</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.9</span>
                  <span className="pkg-rating-count">(512 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹18,500</span>
                    <span className="pkg-price-per">per person</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/amarnath-yatra" className="btn btn-outline btn-sm">View Package</Link>
                    <a href="https://wa.me/919419000000" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book Now</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 2: Escape */}
            <article className="pkg-card reveal" data-type="family luxury" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('family luxury') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/package_escape.jpg" alt="Kashmir Escape tour" loading="lazy" />
                <span className="pkg-card-ribbon">🌟 Editor's Choice</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">All-inclusive Comfort</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Escape</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Sonamarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">6D / 5N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Family / Luxury</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 - 12</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.8</span>
                  <span className="pkg-rating-count">(218 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹10,500</span>
                    <span className="pkg-price-per">per person · 5N6D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 3: Honeymoon */}
            <article className="pkg-card reveal" data-type="honeymoon luxury" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('honeymoon luxury') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/package_honeymoon.jpg" alt="Kashmir Honeymoon tour" loading="lazy" />
                <span className="pkg-card-ribbon" style={{ background: 'linear-gradient(135deg, #e91e8c, #f43f5e)' }}>💖 Romantic Stays</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Special Couples</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Honeymoon</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Romantic Houseboat</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">6D / 5N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Couples Only</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 Persons</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">5.0</span>
                  <span className="pkg-rating-count">(456 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹25,000</span>
                    <span className="pkg-price-per">per couple</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 4: Adventure */}
            <article className="pkg-card reveal" data-type="adventure" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('adventure') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/package_adventure.jpg" alt="Kashmir Adventure tour" loading="lazy" />
                <span className="pkg-card-ribbon" style={{ background: 'linear-gradient(135deg, #ea580c, #f59e0b)' }}>🏔️ Trekking</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Active & Thrilling</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Adventure</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Gurez Valley</span>
                  <span className="pkg-dest-tag">Sonamarg Trekking</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">7D / 6N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Adventure Trek</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 - 8</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.9</span>
                  <span className="pkg-rating-count">(167 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹12,000</span>
                    <span className="pkg-price-per">per person · 6N7D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 5: Winter Wonderland */}
            <article className="pkg-card reveal" data-type="luxury" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('luxury') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/dest_gulmarg.jpg" alt="Winter snow in Gulmarg" loading="lazy" />
                <span className="pkg-card-ribbon">❄️ Season Special</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Premium Experience</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Winter Magic</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Gulmarg Snow</span>
                  <span className="pkg-dest-tag">Houseboat Room</span>
                  <span className="pkg-dest-tag">Srinagar</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">4D / 3N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Luxury Stay</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 - 6</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.7</span>
                  <span className="pkg-rating-count">(98 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹9,500</span>
                    <span className="pkg-price-per">per person · 4N5D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 6: Budget Special */}
            <article className="pkg-card reveal" data-type="budget" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('budget') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/dest_pahalgam.jpg" alt="Pahalgam pine valley" loading="lazy" />
                <span className="pkg-card-ribbon">💰 Pocket Friendly</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Best Cost-saving</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Budget Explorer</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar Stay</span>
                  <span className="pkg-dest-tag">Pahalgam Day-trip</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">4D / 3N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Budget Group</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">4 - 15</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.6</span>
                  <span className="pkg-rating-count">(201 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹9,500</span>
                    <span className="pkg-price-per">per person · 4N5D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 7: Family Special */}
            <article className="pkg-card reveal" data-type="family" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('family') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/dest_gulmarg.jpg" alt="Scenic snow mountains in Gulmarg" loading="lazy" />
                <span className="pkg-card-ribbon">👨‍👩‍👧 Family First</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Complete Sightseeing</div>
                <h3 className="pkg-card-title" itemProp="name">Kashmir Family Delight</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                  <span className="pkg-dest-tag">Gulmarg Gondola</span>
                  <span className="pkg-dest-tag">Shikara Ride</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">7D / 6N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Family Sightseeing</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">3 - 12</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.8</span>
                  <span className="pkg-rating-count">(134 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹12,000</span>
                    <span className="pkg-price-per">per person · 6N7D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 8: Gurez Valley Offbeat */}
            <article className="pkg-card reveal" data-type="adventure budget" itemScope itemType="https://schema.org/TouristTrip" style={{ display: isVisible('adventure budget') ? 'flex' : 'none' }}>
              <div className="pkg-card-img">
                <img src="/images/package_adventure.jpg" alt="Gurez high altitude river valley" loading="lazy" />
                <span className="pkg-card-ribbon">⛺ Backpacker choice</span>
                <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Remote Trekking</div>
                <h3 className="pkg-card-title" itemProp="name">Gurez Offbeat Explorer</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Gurez Dawar</span>
                  <span className="pkg-dest-tag">Kishanganga river</span>
                  <span className="pkg-dest-tag">Wular Lake</span>
                </div>
                <div className="pkg-card-meta">
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">5D / 4N</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">Adventure Trek</span></div>
                  <div className="pkg-meta-item"><span className="pkg-meta-label">Group</span><span className="pkg-meta-value">2 - 8</span></div>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.9</span>
                  <span className="pkg-rating-count">(54 reviews)</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-from">Starting from</span>
                    <span className="pkg-price-amount" itemProp="offers">₹10,500</span>
                    <span className="pkg-price-per">per person · 5N6D</span>
                  </div>
                  <div className="pkg-card-actions">
                    <Link to="/packages/kashmir-highlights" className="btn btn-outline btn-sm">View Package</Link>
                    <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Section: Why Our Packages */}
      <section className="section-py bg-alt" aria-label="Why Book With Us">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-label">Quality Assured</span>
            <h2 className="section-title gradient-title">What Makes Our Packages Better</h2>
            <p className="section-subtitle">We design our packages with specific standards to ensure your trip is smooth and fully premium.</p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon">🚗</div>
              <h3 className="why-title">Private AC Cabs Only</h3>
              <p className="why-desc">No sharing with strangers or crowded buses. Every package comes with a dedicated clean private vehicle and an experienced local driver for all transfers and sightseeing.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="why-icon">🏨</div>
              <h3 className="why-title">Top 4★ & Houseboat Stays</h3>
              <p className="why-desc">Every room is handpicked. We choose stays with continuous heating, hot water, stunning mountain views, and highly hospitable service staff.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="why-icon">🍛</div>
              <h3 className="why-title">Delicious Half Board (MAP)</h3>
              <p className="why-desc">Packages include daily fresh breakfast and premium buffet dinners in your hotels. Try traditional Kashmiri cuisine including Kahwa tea and selected Wazwan dishes.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="why-icon">🛡️</div>
              <h3 className="why-title">Fair Cancellation & Reschedule</h3>
              <p className="why-desc">Travel plans can shift. We offer flexible rescheduling options and transparent, minimal-deduction cancellation policies up to 14 days before arrival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, var(--green-900) 0%, var(--blue-900) 100%)', textAlign: 'center', color: 'var(--white)' }} aria-label="Custom Package CTA">
        <div className="container reveal">
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '20px' }}>Need a Tailor-made Package?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '1.1rem' }}>Mix and match destinations, extend duration, choose specific hotels, and define your own travel budget.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Design Custom Trip 🗺️</Link>
            <a href="https://wa.me/919419000000" className="btn btn-ghost">Chat on WhatsApp 💬</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Packages;
