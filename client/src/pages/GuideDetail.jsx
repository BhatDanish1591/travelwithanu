import React from 'react';
import { Link } from 'react-router-dom';
import './GuideDetail.css';

const GuideDetail = () => {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 90;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Guide Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_srinagar.jpg" className="active" alt="Beautiful wooden houseboats on Dal Lake Srinagar" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Best Places to Visit in<br /><em style={{ color: 'var(--gold)' }}>Kashmir in 2025</em>
          </h1>
          
          <div className="hero-subtitle" style={{ fontSize: '1rem', color: '#eee', marginTop: '16px', maxWidth: '100%' }}>
            <span>✍️ Written by: <strong>Travel with Anu Editorial Team</strong></span> &nbsp;·&nbsp; 
            <span>📅 Updated: <strong>August 15, 2025</strong></span>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '80px' }}>
        {/* Main Content Layout */}
        <div className="article-container">
          
          {/* Article Content */}
          <article className="guide-article-body" itemProp="mainEntityOfPage" itemScope itemType="https://schema.org/BlogPosting">

            <p>
              Kashmir, often described as 'Paradise on Earth', is a destination that captivates every traveler's heart. With its alpine meadows, roaring river streams, dense pine forests, and historic culture, the Kashmir valley remains one of the world's most spectacular tourist regions. As travel resumes at full scale, 2025 brings new opportunities to explore both classic highlights and untouched valleys.
            </p>

            <p>
              In this guide, we break down the top 8 absolute best places to visit in Kashmir, complete with expert guidance on what to see, when to go, and how to plan your stay.
            </p>

            <h2 id="sec-srinagar">1. Srinagar – The Venice of the East</h2>
            <p>
              Your journey in Kashmir will inevitably start and end in Srinagar. Spanning both banks of the Jhelum River, the city is famous for its massive calm lakes—Dal Lake and Nigeen Lake—where beautiful hand-carved heritage houseboats provide a romantic, floating escape.
            </p>
            <p>
              Don't miss a walk through the historical Mughal Gardens (Shalimar, Nishat, and Chashma Shahi) which showcase royal water fountains, cascades, and centuries-old Chinar trees. For panoramic valley views, climb or drive up to the hilltop Shankaracharya Temple.
            </p>
            
            <div className="highlight-box">
              <strong>💡 Local Guide Tip:</strong> Always wake up early (5:30 AM) to experience the Floating Vegetable Market on Dal Lake via Shikara. It is a raw, bustling trade market on water that only lasts until 7:30 AM!
            </div>

            <h2 id="sec-gulmarg">2. Gulmarg – Meadow of Flowers & Snow</h2>
            <p>
              Gulmarg is a scenic high-altitude meadow situated 54 km west of Srinagar. In spring and summer, the valley is carpeted with thousands of wildflowers. In winter, it transforms into Asia's premier ski resort with deep powdery snow slopes.
            </p>
            <p>
              The primary attraction is the Gulmarg Gondola, one of the highest and longest cable cars in the world, climbing to Mt. Apharwat at 14,000 feet. The cable car operates in two phases, taking you from green conifer forests straight into freezing glacier slopes.
            </p>
            <div className="guide-article-img">
              <img src="/images/dest_gulmarg.jpg" alt="Snow slopes and gondola in Gulmarg" />
            </div>

            <h2 id="sec-pahalgam">3. Pahalgam – The Valley of Shepherds</h2>
            <p>
              Located at the confluence of the Lidder River and Sheshnag Lake stream, Pahalgam is a tranquil pine-surrounded retreat. It is highly famous for its spectacular green meadows like Baisaran (referred to as Mini Switzerland) and pine valley drives.
            </p>
            <p>
              From Pahalgam, hire local cabs to explore Aru Valley, a scenic mountain village, and Betaab Valley, a stunning flat river meadow with conifer hills on all sides. It is also the traditional starting point for the annual Amarnath Yatra pilgrimage.
            </p>

            <h2 id="sec-sonamarg">4. Sonamarg – The Meadow of Gold</h2>
            <p>
              Sonamarg lies on the Srinagar-Ladakh highway at an altitude of 2,730m. The valley gets its name because the late afternoon sun rays paint the alpine meadows in golden colors. It is surrounded by dramatic snow-capped peaks and glaciers.
            </p>
            <p>
              You can trek or hire local ponies to visit the Thajiwas Glacier, which remains snow-clad throughout the summer. It is also an excellent base camp for major high-altitude alpine lake treks.
            </p>
            <div className="guide-article-img">
              <img src="/images/dest_sonamarg.jpg" alt="Sonamarg golden meadows and mountain stream" />
            </div>

            <h2 id="sec-doodhpathri">5. Doodhpathri – The Valley of Milk</h2>
            <p>
              Doodhpathri is a relatively new, offbeat hill station located 42 km from Srinagar. The meadow is named "Valley of Milk" because the Shaliganga River rushes rapidly over stone-lined beds, making the water look white and frothy like milk.
            </p>
            <p>
              It is an ideal destination for day picnics, hikes through conifer forests, and relaxing away from crowded tourist centers.
            </p>

            <h2 id="sec-yusmarg">6. Yusmarg – The Secluded Forest Sanctuary</h2>
            <p>
              Yusmarg is a massive open meadow situated in the Badgam district. Legend says Jesus visited this meadow, naming it the "Meadow of Jesus". It offers absolute quiet, conifer forests, and raw trails leading down to the Doodhganga river basin.
            </p>

            <h2 id="sec-gurez">7. Gurez Valley – The Raw Borderlands</h2>
            <p>
              Gurez is a remote border valley situated at 8,000 feet. Accessible only between June and September due to heavy winter snow blocks on Razdan Pass, Gurez is a paradise of raw nature, wooden Dard tribal homes, and the turquoise Kishanganga River. The massive pyramid-like peak of Habba Khatoon dominates Dawar town.
            </p>

            <h2 id="sec-aharbal">8. Aharbal – The Waterfall Canyon</h2>
            <p>
              Known as the "Niagara of Kashmir", Aharbal is a powerful waterfall where the Veshu River crashes down a 25-meter rocky gorge. Located in South Kashmir, it is a fantastic day-trip spot surrounded by thick pine woods, popular among hikers and photography enthusiasts.
            </p>

            <h2>Final Planning Thoughts</h2>
            <p>
              For a complete trip, we recommend a 6 to 8-day itinerary covering Srinagar, Gulmarg, Pahalgam, and a day trip to Sonamarg or Doodhpathri. Always secure your Gondola ticket passes at least 2 weeks in advance during peak season, and book pre-arranged private cabs for a stress-free experience.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            
            {/* Table of Contents */}
            <div className="toc-card reveal">
              <h3 className="toc-title">Table of Contents</h3>
              <div className="toc-list">
                <a href="#sec-srinagar" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-srinagar')}>1. Srinagar (Dal Lake)</a>
                <a href="#sec-gulmarg" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-gulmarg')}>2. Gulmarg (Snow Ski)</a>
                <a href="#sec-pahalgam" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-pahalgam')}>3. Pahalgam (Valleys)</a>
                <a href="#sec-sonamarg" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-sonamarg')}>4. Sonamarg (Glaciers)</a>
                <a href="#sec-doodhpathri" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-doodhpathri')}>5. Doodhpathri (Streams)</a>
                <a href="#sec-yusmarg" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-yusmarg')}>6. Yusmarg (Pine Woods)</a>
                <a href="#sec-gurez" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-gurez')}>7. Gurez Valley (Offbeat)</a>
                <a href="#sec-aharbal" className="toc-link" onClick={(e) => scrollToSection(e, 'sec-aharbal')}>8. Aharbal (Waterfall)</a>
              </div>
            </div>

            {/* Plan My Trip CTA Card */}
            <div className="cta-card reveal">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '12px' }}>Plan Your Kashmir Trip</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.85, marginBottom: '20px', lineHeight: 1.6 }}>Let our local experts build a customized itinerary matching these destinations to your budget.</p>
              <Link to="/contact" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Get Custom Quote</Link>
            </div>
          </aside>

        </div>
      </div>

      {/* Related Tour Packages */}
      <section className="section-py bg-alt" aria-labelledby="related-heading" style={{ marginTop: '60px' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '40px' }}>
            <span className="section-label">Matching tours</span>
            <h2 className="section-title gradient-title" id="related-heading">Tours Visiting These Spots</h2>
          </div>

          <div className="packages-grid">
            {/* Tour 1 */}
            <article className="pkg-card reveal" data-type="family" itemScope itemType="https://schema.org/TouristTrip">
              <div className="pkg-card-img">
                <img src="/images/dest_srinagar.jpg" alt="Kashmir Highlights Tour" />
                <span className="pkg-card-ribbon">⭐ Best Seller</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Classic Kashmir Itinerary</div>
                <h3 className="pkg-card-title">Kashmir Highlights</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.9</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount">₹12,999</span>
                    <span className="pkg-price-per">per person</span>
                  </div>
                  <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </article>

            {/* Tour 2 */}
            <article className="pkg-card reveal" style={{ transitionDelay: '0.05s' }} data-type="family" itemScope itemType="https://schema.org/TouristTrip">
              <div className="pkg-card-img">
                <img src="/images/package_escape.jpg" alt="Kashmir Escape Tour" />
                <span className="pkg-card-ribbon">🌟 Best Value</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Complete Kashmir Sightseeing</div>
                <h3 className="pkg-card-title">Kashmir Escape</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Sonamarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">4.8</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount">₹18,499</span>
                    <span className="pkg-price-per">per person</span>
                  </div>
                  <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </article>

            {/* Tour 3 */}
            <article className="pkg-card reveal" style={{ transitionDelay: '0.1s' }} data-type="honeymoon" itemScope itemType="https://schema.org/TouristTrip">
              <div className="pkg-card-img">
                <img src="/images/package_honeymoon.jpg" alt="Kashmir Honeymoon Tour" />
                <span className="pkg-card-ribbon">💖 Special Honeymoon</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">Kashmir Honeymoon Package</div>
                <h3 className="pkg-card-title">Kashmir Honeymoon</h3>
                <div className="pkg-card-destinations">
                  <span className="pkg-dest-tag">Srinagar Houseboat</span>
                  <span className="pkg-dest-tag">Gulmarg</span>
                  <span className="pkg-dest-tag">Pahalgam</span>
                </div>
                <div className="pkg-card-rating">
                  <span className="stars">★★★★★</span>
                  <span className="pkg-rating-score">5.0</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount">₹24,999</span>
                    <span className="pkg-price-per">per couple</span>
                  </div>
                  <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GuideDetail;
