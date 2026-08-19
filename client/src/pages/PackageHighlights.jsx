import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PackageHighlights = () => {
  // Itinerary states
  const [openDays, setOpenDays] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false
  });

  const toggleDay = (dayNum) => {
    setOpenDays(prev => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  return (
    <main>
      <style>{`
        .exclusion-item .inclusion-icon { color: #ef4444; }
      `}</style>

      {/* ═══════════ HERO ═══════════ */}
      <section className="yatra-hero" id="hero" aria-label="Package Highlights Hero">
        <div className="yatra-hero-bg" id="hero-slider">
          <img src="/images/hero_dal_lake.jpg" className="active" alt="Dal Lake Srinagar Kashmir" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="yatra-hero-overlay"></div>
        </div>
        
        <div className="yatra-hero-content container">
          <h1 className="yatra-title">
            Kashmir<br /><span>Highlights Tour</span>
          </h1>
          <p className="yatra-subtitle">
            Explore the best of Kashmir's iconic sights: Srinagar houseboat romantic stays, Gulmarg Gondola high-altitude skiing, and Pahalgam river meadows.
          </p>
          
          <div className="yatra-badges">
            <span className="yatra-badge">🌟 Best Seller</span>
            <span className="yatra-badge">⏳ 5 Days / 4 Nights</span>
            <span className="yatra-badge">👨‍👩‍👧 Family & Couple Special</span>
          </div>

          <div className="yatra-hero-cta">
            <Link to="/contact" className="btn-saffron">Book Now</Link>
            <a href="#itinerary" className="btn btn-outline" style={{ border: '1px solid rgba(255,255,255,.5)', color: '#fff', padding: '14px 28px', borderRadius: '99px' }}>📋 View Itinerary</a>
          </div>
          </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="section-py" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="yatra-stats reveal">
            <div className="yatra-stat">
              <div className="yatra-stat-label">Duration</div>
              <div className="yatra-stat-value">4N / 5D</div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Starting Price</div>
              <div className="yatra-stat-value">₹12,999 <span>/ person</span></div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Rating</div>
              <div className="yatra-stat-value">4.9 <span>★</span></div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Meals Included</div>
              <div className="yatra-stat-value" style={{ fontSize: '1rem' }}>Breakfast + Dinner</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ OVERVIEW ═══════════ */}
      <section className="section-py" aria-labelledby="overview-heading">
        <div className="container">
          <div className="overview-grid reveal">
            <div>
              <span className="section-label">Package Overview</span>
              <h2 className="section-title" id="overview-heading">Experience the<br /><em>Magic of Kashmir</em></h2>
              <p style={{ color: 'var(--neutral-600)', lineHeight: '1.75', marginBottom: '18px' }}>
                This 5-day journey is specially curated for travelers wanting to experience the absolute highlights of Jammu & Kashmir. Perfect for families, friend groups, and couples alike, the itinerary covers the floating charm of Srinagar, the high slopes of Gulmarg, and the stunning pine-clad river banks of Pahalgam.
              </p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: '1.75', marginBottom: '24px' }}>
                You will stay in deluxe hotels and spend one memorable night inside a beautifully hand-carved heritage cedar-wood houseboat floating on Dal Lake. Includes dedicated private sedan transfers, sightseeing passes, daily fresh breakfasts, and dinners.
              </p>
              <div className="feature-pills">
                <span className="feature-pill">🛶 Shikara Ride</span>
                <span className="feature-pill">🚡 Gondola Ride</span>
                <span className="feature-pill">🏞️ Pahalgam Valley</span>
                <span className="feature-pill">🌺 Mughal Gardens</span>
                <span className="feature-pill">🏡 Houseboat Stay</span>
                <span className="feature-pill">🚗 Private Transfers</span>
              </div>
            </div>
            <div className="overview-img">
              <img src="/images/hero_dal_lake.jpg" alt="Dal Lake Shikara" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ITINERARY ═══════════ */}
      <section className="section-py" id="itinerary" aria-labelledby="itin-heading" style={{ background: '#f7faf8' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Day by Day</span>
            <h2 className="section-title" id="itin-heading">5 Days 4 Nights<br /><em>Kashmir Highlights Itinerary</em></h2>
          </div>
          
          <div className="itin-list reveal">
            {/* Day 1 */}
            <div className={`itin-item ${openDays[1] ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleDay(1)}>
                <div className="itin-day-num">1</div>
                <div>
                  <div className="itin-day-title">Arrival in Srinagar & Sunset Shikara Ride</div>
                  <div className="itin-day-sub">Airport pickup · Houseboat check-in · Shikara ride</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <div className="itin-highlight">⭐ Highlight: A romantic sunset Shikara ride on Dal Lake</div>
                <ul className="itin-steps">
                  <li>On arrival at Srinagar Airport, meet our representative and get transferred in your private car to Dal Lake.</li>
                  <li>Check-in to your luxury houseboat.</li>
                  <li>In the evening, enjoy a peaceful, romantic 2-hour Shikara boat ride on the lake. Witness the floating gardens, local vendors selling flowers, and the beautiful sunset.</li>
                  <li>Enjoy dinner and stay overnight in the houseboat.</li>
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className={`itin-item ${openDays[2] ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleDay(2)}>
                <div className="itin-day-num">2</div>
                <div>
                  <div className="itin-day-title">Srinagar Mughal Gardens Sightseeing</div>
                  <div className="itin-day-sub">Shalimar Bagh · Nishat Bagh · Shankaracharya Temple</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>After breakfast, check-out from the houseboat and transfer to your luxury hotel.</li>
                  <li>Proceed for a sightseeing tour of Srinagar. Visit Shalimar Bagh (Abode of Love) built by Emperor Jahangir, Nishat Bagh (Garden of Pleasure), and the royal springs of Chashma Shahi.</li>
                  <li>In the afternoon, visit the historic Shankaracharya Temple on a hilltop for panoramic city views.</li>
                  <li>Overnight in Srinagar hotel.</li>
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className={`itin-item ${openDays[3] ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleDay(3)}>
                <div className="itin-day-num">3</div>
                <div>
                  <div className="itin-day-title">Gulmarg Meadow Snow Excursion</div>
                  <div className="itin-day-sub">Gulmarg drive · Gondola Ride · Apharwat Peak</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>Take a morning drive (54 km) to Gulmarg, passing through willow and pine-lined mountain roads.</li>
                  <li>On arrival, board the famous Gulmarg Gondola (cable car passes pre-booked) up to Phase 1 (Kongdoori) and Phase 2 (Apharwat Peak at 14,000 ft).</li>
                  <li>Play in the snow, try skiing with local trainers, or hike along the frozen lake.</li>
                  <li>Return to Srinagar in the evening for dinner and overnight stay.</li>
                </ul>
              </div>
            </div>

            {/* Day 4 */}
            <div className={`itin-item ${openDays[4] ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleDay(4)}>
                <div className="itin-day-num">4</div>
                <div>
                  <div className="itin-day-title">Pahalgam River Valleys Tour</div>
                  <div className="itin-day-sub">Betaab Valley · Aru Valley · Lidder River</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>After early breakfast, drive to Pahalgam (96 km), the "Valley of Shepherds". Stop en-route at Pampore to see raw saffron fields.</li>
                  <li>In Pahalgam, take a local vehicle to explore the magnificent Betaab Valley (named after the Bollywood movie Betaab) and Aru Valley, a beautiful meadow hamlet.</li>
                  <li>Walk along the roaring Lidder River.</li>
                  <li>Return to Srinagar hotel for dinner.</li>
                </ul>
              </div>
            </div>

            {/* Day 5 */}
            <div className={`itin-item ${openDays[5] ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleDay(5)}>
                <div className="itin-day-num">5</div>
                <div>
                  <div className="itin-day-title">Shopping & Airport Departure</div>
                  <div className="itin-day-sub">Local Shopping · Airport Drop</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>Enjoy breakfast in your hotel.</li>
                  <li>Check-out and proceed for some last-minute souvenir shopping in Srinagar - look for premium pashmina shawls, organic saffron, walnuts, and papier-mâché crafts.</li>
                  <li>Get transferred in time to Srinagar Airport for your onward flight home with sweet memories of Kashmir.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="section-py" aria-labelledby="gallery-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Photo Gallery</span>
            <h2 className="section-title" id="gallery-heading">Highlights of Your Trip</h2>
          </div>
          <div className="yatra-gallery reveal">
            <div className="yatra-gallery-item">
              <img src="/images/dest_srinagar.jpg" alt="Houseboats Srinagar" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Houseboats on Dal Lake</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_gulmarg.jpg" alt="Gulmarg Snow" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Snowy Peaks of Gulmarg</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_pahalgam.jpg" alt="Pahalgam Valley" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Valleys of Pahalgam</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_sonamarg.jpg" alt="Sonamarg Meadows" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Sonamarg Meadows</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/package_honeymoon.jpg" alt="Romantic Houseboat Dal Lake" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Romantic Shikara Rides</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ INCLUSIONS ═══════════ */}
      <section className="section-py" style={{ background: '#f7faf8' }} aria-labelledby="inc-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">What's Covered</span>
            <h2 className="section-title" id="inc-heading">Package Inclusions & Exclusions</h2>
          </div>
          <div className="inc-grid reveal">
            <div className="inc-card">
              <div className="inc-header included">✅ What's Included</div>
              <ul className="inc-list">
                <li><span className="inc-icon">✅</span> 1 Night stay in Premium Houseboat on Dal Lake</li>
                <li><span className="inc-icon">✅</span> 3 Nights stay in Deluxe 4-star hotels in Srinagar</li>
                <li><span className="inc-icon">✅</span> Daily MAP meals (4 Breakfasts + 4 Dinners in hotel buffet)</li>
                <li><span className="inc-icon">✅</span> All inter-destination transfers in private AC sedan car</li>
                <li><span className="inc-icon">✅</span> Fuel charges, toll tax, state permits, and driver allowance</li>
                <li><span className="inc-icon">✅</span> Complimentary 2-hour Shikara boat ride on Dal Lake</li>
                <li><span className="inc-icon">✅</span> Dedicated local tour manager throughout</li>
              </ul>
            </div>
            <div className="inc-card">
              <div className="inc-header excluded">❌ Not Included</div>
              <ul className="inc-list">
                <li><span className="inc-icon">❌</span> Airfare / Train tickets to and from Srinagar</li>
                <li><span className="inc-icon">❌</span> Daily lunch and extra snacks or beverages ordered</li>
                <li><span className="inc-icon">❌</span> Gulmarg Gondola Phase 2 ticket (optional, ₹950 extra)</li>
                <li><span className="inc-icon">❌</span> Local union vehicles in Pahalgam for Aru/Betaab valley</li>
                <li><span className="inc-icon">❌</span> Horse rides, pony rides, ski gear rent, and tour guide tips</li>
                <li><span className="inc-icon">❌</span> Personal expenses, tips, shopping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default PackageHighlights;
