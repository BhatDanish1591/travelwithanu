import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Destinations Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_srinagar.jpg" className="active" alt="Srinagar Dal Lake panoramic view" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Explore Kashmir<br /><em style={{ color: 'var(--gold)' }}>Destinations</em>
          </h1>
          <p className="hero-subtitle">
            From romantic houseboats on serene lakes to majestic snow-capped peaks and winding valleys, find your perfect Himalayan getaway.
          </p>
          </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-py" aria-label="All Destinations">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-label">All Valley Wonders</span>
            <h2 className="section-title gradient-title">Handpicked Destinations</h2>
            <p className="section-subtitle">A curated list of Kashmir's most remarkable travel locations, complete with key highlights and best seasons.</p>
          </div>

          <div className="destinations-grid">
            {/* Srinagar */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_srinagar.jpg" alt="Houseboats in Srinagar" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">🌟 Popular Crown</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Srinagar</h3>
                <p className="dest-card-desc" itemProp="description">The summer capital nestled along the Jhelum. Known for stunning Mughal gardens, historical wooden mosques, and iconic Shikara stays on Dal Lake.</p>
                <div className="dest-card-meta">📅 Best Time: March – Nov</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 1,585 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Dal & Nigeen Lakes</li>
                  <li>Mughal Gardens (Shalimar, Nishat)</li>
                  <li>Shankaracharya Temple</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Gulmarg */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_gulmarg.jpg" alt="Gulmarg gondola and snow slopes" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">❄️ Winter Skiing</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Gulmarg</h3>
                <p className="dest-card-desc" itemProp="description">The meadow of flowers transforms into Asia's premier ski resort in winter. Home to the legendary Gondola lift climbing up to Mt. Apharwat.</p>
                <div className="dest-card-meta">📅 Best Time: Dec – Feb / Apr – Sep</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,650 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Gulmarg Gondola Ride</li>
                  <li>Apharwat Peak Snowsports</li>
                  <li>Strawberry Valley Trails</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Pahalgam */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_pahalgam.jpg" alt="Pahalgam Lidder valley" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">🌲 Valley of Shepherds</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Pahalgam</h3>
                <p className="dest-card-desc" itemProp="description">A majestic valley of pine forests and the pristine Lidder River. The base camp for treks and the spiritual Amarnath Yatra pilgrimage.</p>
                <div className="dest-card-meta">📅 Best Time: Apr – Oct</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,740 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Betaab & Aru Valleys</li>
                  <li>Baisaran Meadow (Mini Switzerland)</li>
                  <li>Lidder River Rafting</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Sonamarg */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_sonamarg.jpg" alt="Sonamarg glacier meadow" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">✨ Meadow of Gold</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Sonamarg</h3>
                <p className="dest-card-desc" itemProp="description">The gateway to Ladakh. Surrounded by glacier streams, alpine lakes, and dramatic snowy mountain ridges. Excellent for high-altitude trekking.</p>
                <div className="dest-card-meta">📅 Best Time: May – Oct</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,730 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Thajiwas Glacier Trek</li>
                  <li>Zoji La Pass Gate</li>
                  <li>Nilagrad River Springs</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Doodhpathri */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_doodhpathri.jpg" alt="Doodhpathri valley of milk" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">🥛 Milky Meadow</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Doodhpathri</h3>
                <p className="dest-card-desc" itemProp="description">An untouched meadow where clear waters flow rapidly over pebbles, resembling milk. Offers tranquility away from usual tourist trails.</p>
                <div className="dest-card-meta">📅 Best Time: May – Sep</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,730 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Shaliganga River Walk</li>
                  <li>Tangnar Meadows picnic</li>
                  <li>Yusmarg hiking connections</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Yusmarg */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="/images/dest_yusmarg.jpg" alt="Yusmarg pine forest meadow" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">🌲 Secluded Peace</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Yusmarg</h3>
                <p className="dest-card-desc" itemProp="description">The "Meadow of Jesus". A quiet paradise filled with pine forest trails, mountain streams, and the majestic peaks of Tatakooti and Sunset.</p>
                <div className="dest-card-meta">📅 Best Time: May – Oct</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,396 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Doodhganga River Trek</li>
                  <li>Nilnag Lake hike</li>
                  <li>Tatakooti Peak views</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Gurez Valley */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85" alt="Gurez valley remote mountains" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">🏕️ Raw Wilds</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Gurez Valley</h3>
                <p className="dest-card-desc" itemProp="description">A high-altitude valley of absolute serenity. Famous for Habba Khatoon peak, the Kishanganga river, and unique Shina-speaking culture.</p>
                <div className="dest-card-meta">📅 Best Time: June – Sep</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,400 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Habba Khatoon Pyramid Peak</li>
                  <li>Kishanganga River Camping</li>
                  <li>Dawar Town exploration</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>

            {/* Aharbal */}
            <article className="dest-card reveal" itemScope itemType="https://schema.org/TouristAttraction">
              <div className="dest-card-img">
                <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&q=85" alt="Aharbal waterfall" itemProp="photo" />
                <div className="dest-card-overlay"></div>
                <span className="dest-card-badge">💧 Cascading Falls</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-card-name" itemProp="name">Aharbal</h3>
                <p className="dest-card-desc" itemProp="description">The "Niagara of Kashmir" where the Veshu River plunges 25 meters down. A pine-surrounded canyon perfect for day trips and photography.</p>
                <div className="dest-card-meta">📅 Best Time: Apr – Oct</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--neutral-500)', marginBottom: '12px' }}>📈 Altitude: 2,260 m</div>
                <ul style={{ fontSize: '0.85rem', marginBottom: '18px', paddingLeft: '16px', color: 'var(--neutral-600)' }}>
                  <li>Aharbal Waterfall Viewpoint</li>
                  <li>Kungwattan Meadows Trek</li>
                  <li>Kausar Nag Alpine Lake trek</li>
                </ul>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link to="/packages" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>View Packages</Link>
                  <Link to="/guides/destination-guide" className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Learn More</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Best Time to Visit Calendar Section */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)' }} aria-label="Best Time to Visit Calendar">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">📅 Planner Tool</span>
            <h2 className="section-title gradient-title">Best Season Guide</h2>
            <p className="section-subtitle">Understand at a glance the optimal months to visit each destination based on weather, accessibility, and seasonal events.</p>
          </div>

          {/* Legend */}
          <div className="season-legend reveal">
            <div className="season-legend-item peak">
              <span className="season-dot"></span>
              <span>🌟 Peak Season — Best Experience</span>
            </div>
            <div className="season-legend-item good">
              <span className="season-dot"></span>
              <span>🌤️ Good Season — Pleasant Trip</span>
            </div>
            <div className="season-legend-item off">
              <span className="season-dot"></span>
              <span>❄️ Off Season — Closed / Harsh</span>
            </div>
          </div>

          <div className="reveal" style={{ overflowX: 'auto', marginTop: '24px' }}>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th className="cal-dest-head">🏔️ Destination</th>
                  <th><span className="month-head">Jan</span></th>
                  <th><span className="month-head">Feb</span></th>
                  <th><span className="month-head">Mar</span></th>
                  <th><span className="month-head">Apr</span></th>
                  <th><span className="month-head">May</span></th>
                  <th><span className="month-head">Jun</span></th>
                  <th><span className="month-head">Jul</span></th>
                  <th><span className="month-head">Aug</span></th>
                  <th><span className="month-head">Sep</span></th>
                  <th><span className="month-head">Oct</span></th>
                  <th><span className="month-head">Nov</span></th>
                  <th><span className="month-head">Dec</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dest-name-cell">🏛️ Srinagar</td>
                  <td><span className="s-off">❄️ Cold</span></td>
                  <td><span className="s-off">❄️ Cold</span></td>
                  <td><span className="s-good">🌸 Tulips</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">🍂 Autumn</span></td>
                  <td><span className="s-good">🍁 Chinar</span></td>
                  <td><span className="s-off">❄️ Cold</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">⛷️ Gulmarg</td>
                  <td><span className="s-peak">🎿 Ski</span></td>
                  <td><span className="s-peak">🎿 Ski</span></td>
                  <td><span className="s-good">🌨️ Snow</span></td>
                  <td><span className="s-good">🌸 Spring</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🌤️ Cool</span></td>
                  <td><span className="s-good">🌤️ Cool</span></td>
                  <td><span className="s-good">🌤️ Cool</span></td>
                  <td><span className="s-good">🍂 Autumn</span></td>
                  <td><span className="s-good">🍂 Autumn</span></td>
                  <td><span className="s-off">🥶 Frost</span></td>
                  <td><span className="s-peak">🎿 Ski</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">🌿 Pahalgam</td>
                  <td><span className="s-off">🌨️ Snow</span></td>
                  <td><span className="s-off">🌨️ Snow</span></td>
                  <td><span className="s-good">🌸 Spring</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🕉️ Yatra</span></td>
                  <td><span className="s-good">🕉️ Yatra</span></td>
                  <td><span className="s-good">🕉️ Yatra</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">🍂 Autumn</span></td>
                  <td><span className="s-off">❄️ Cold</span></td>
                  <td><span className="s-off">🌨️ Snow</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">🏔️ Sonamarg</td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-good">🌨️ Snowy</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🕉️ Yatra</span></td>
                  <td><span className="s-good">🌤️ Cool</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🍂 Autumn</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">🥛 Doodhpathri</td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-good">🌬️ Chilly</span></td>
                  <td><span className="s-good">🌸 Spring</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🌿 Green</span></td>
                  <td><span className="s-good">🌿 Green</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🌤️ Cool</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">🌲 Yusmarg</td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-good">🌬️ Chilly</span></td>
                  <td><span className="s-good">🌸 Spring</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🌿 Lush</span></td>
                  <td><span className="s-good">🌿 Lush</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🍂 Autumn</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">🏕️ Gurez Valley</td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-good">🔓 Opens</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🏁 Last</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                  <td><span className="s-off">🚫 Closed</span></td>
                </tr>
                <tr>
                  <td className="dest-name-cell">💧 Aharbal</td>
                  <td><span className="s-off">🥶 Chilly</span></td>
                  <td><span className="s-off">🥶 Chilly</span></td>
                  <td><span className="s-good">🌸 Spring</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-good">☀️ Warm</span></td>
                  <td><span className="s-peak">⭐ Peak</span></td>
                  <td><span className="s-good">🍂 Autumn</span></td>
                  <td><span className="s-off">🥶 Frost</span></td>
                  <td><span className="s-off">❄️ Cold</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="section-py" aria-label="Travel Tips">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-label">Traveler Smart Care</span>
            <h2 className="section-title gradient-title">Kashmir Travel Tips</h2>
            <p className="section-subtitle">Important practical tips compiled by our local travel guides to keep your trip safe, hassle-free and comfortable.</p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon">📱</div>
              <h3 className="why-title">Prepaid SIM Cards</h3>
              <p className="why-desc">Prepaid SIM cards from other Indian states do not work in J&K due to security regulations. Only postpaid connection roaming works. Alternatively, buy a local BSNL/Airtel prepaid SIM on arrival with identity verification.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="why-icon">🧤</div>
              <h3 className="why-title">Packing Essentials</h3>
              <p className="why-desc">Even in summer, evenings are cool, so carry a light jacket. In winter, heavy woolens, thermal inner-wear, waterproof coats, and warm boots are essential. Shoes and coats can also be rented in Gulmarg/Srinagar.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="why-icon">🚖</div>
              <h3 className="why-title">Local Transport Restrictions</h3>
              <p className="why-desc">Due to local union rules, Srinagar taxis are not allowed to do internal sightseeing inside Gulmarg, Pahalgam, and Sonamarg. You will need to take local union pony guides or union cabs, which we help organize.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="why-icon">💳</div>
              <h3 className="why-title">Cash is King</h3>
              <p className="why-desc">While UPI and card payments are expanding in hotels and bigger Srinagar shops, network connectivity in valleys can be erratic. Keep sufficient cash for local vendors, pony rides, tips, and street shopping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, var(--green-900) 0%, var(--green-800) 100%)', textAlign: 'center', color: 'var(--white)' }} aria-label="Book Trip CTA">
        <div className="container reveal">
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '20px' }}>Ready to Explore Paradise?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '1.1rem' }}>Let our local experts craft the ultimate custom itinerary fitting your specific budget and style.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Build My Itinerary 🗺️</Link>
            <a href="https://wa.me/916005655257" className="btn btn-ghost">Chat with Experts 💬</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Destinations;
