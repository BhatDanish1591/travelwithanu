import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AmarnathYatra() {
  const [openItin, setOpenItin] = useState([0, 1]); // first two open by default in original HTML
  const toggleItin = (index) => {
    setOpenItin(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const [openFaq, setOpenFaq] = useState([0]); // first one open
  const toggleFaq = (index) => {
    setOpenFaq(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section id="hero" aria-label="Amarnath Yatra 2026">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/amarnath_hero.jpg" className="active" alt="Amarnath Yatra 2026 – Sacred Himalayan Pilgrimage" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
          <span style={{ display:'inline-block', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'99px', padding:'6px 18px', fontSize:'0.78rem', fontWeight:700, color:'#fff', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>
            🕉️ Sacred Himalayan Pilgrimage
          </span>
          <h1 className="hero-headline" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: '1.08', marginBottom: '20px' }}>
            Amarnath Yatra<br /><em style={{ color: 'var(--gold)' }}>Package 2026</em>
          </h1>
          <p className="hero-subtitle" style={{ fontSize: '1.15rem', maxWidth: '640px', marginLeft: 0, marginRight: 0, fontStyle: 'italic' }}>
            3 Nights · 4 Days · Pahalgam or Baltal Route · Helicopter Option Available
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginBottom:'32px' }}>
            {['🗓️ Late June – Mid August 2026','📋 Registrations Open','🚁 Helicopter Available','✅ Permit Assistance'].map((b,i) => (
              <span key={i} style={{ background:'rgba(0,0,0,0.45)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.2)', padding:'7px 16px', borderRadius:'99px', color:'#fff', fontSize:'0.82rem', display:'flex', alignItems:'center', gap:'6px' }}>{b}</span>
            ))}
          </div>
          <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
            <Link to="/amarnath-yatra/booking" className="btn btn-primary" style={{ fontSize:'1rem', padding:'14px 32px', borderRadius:'99px' }}>Book Now</Link>
            <button onClick={() => document.getElementById('itinerary')?.scrollIntoView({behavior:'smooth'})} className="btn btn-outline" style={{ fontSize:'1rem', padding:'14px 32px', borderRadius:'99px', border:'1px solid rgba(255,255,255,0.6)', color:'#fff', background:'transparent' }}>📋 View Itinerary</button>
          </div>
          {/* Scroll indicator */}
          <div className="hero-scroll" style={{ marginTop:'48px' }}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', opacity:0.6 }}>
              <span style={{ color:'#fff', fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600 }}>Scroll</span>
              <div style={{ width:'24px', height:'38px', border:'2px solid rgba(255,255,255,0.5)', borderRadius:'99px', display:'flex', justifyContent:'center', paddingTop:'6px' }}>
                <div style={{ width:'4px', height:'8px', background:'#fff', borderRadius:'99px', animation:'scrollDot 1.8s infinite' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="section-py" style={{ paddingTop: '60px', paddingBottom: '0' }}>
        <div className="container">
          <div className="yatra-stats reveal">
            <div className="yatra-stat">
              <div className="yatra-stat-label">Duration</div>
              <div className="yatra-stat-value">3N / 4D</div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Starting Price</div>
              <div className="yatra-stat-value">₹18,500 <span>/ person</span></div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Cave Altitude</div>
              <div className="yatra-stat-value">3,888 <span>m</span></div>
            </div>
            <div className="yatra-stat">
              <div className="yatra-stat-label">Meals</div>
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
              <h2 className="section-title" id="overview-heading">Darshan of the<br /><em>Holy Amarnath Cave</em></h2>
              <p style={{ color: 'var(--neutral-600)', lineHeight: '1.75', marginBottom: '18px' }}>
                The Amarnath Yatra is one of Hinduism's most revered pilgrimages — a journey to the holy cave shrine of Lord Shiva at 3,888 m in the Himalayan ranges of Jammu & Kashmir. Inside the cave, a naturally formed ice Shivalingam waxes and wanes with the moon cycle, believed to represent Lord Shiva's immortality.
              </p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: '1.75', marginBottom: '24px' }}>
                Our 3 Nights 4 Days Amarnath Yatra package is planned for both first-time pilgrims and experienced trekkers. Choose the traditional Pahalgam route through lush valleys, or the shorter Baltal route. Helicopter transfers available for comfortable aerial access to Panjtarni. All yatra permits, medical certificate assistance, pony/palki arrangements, and dedicated local support included.
              </p>
              <div className="feature-pills">
                <span className="feature-pill">🙏 Shiva Darshan</span>
                <span className="feature-pill">🚁 Helicopter Option</span>
                <span className="feature-pill">🏔️ Pahalgam Route</span>
                <span className="feature-pill">⛺ Baltal Route</span>
                <span className="feature-pill">📋 Permits Included</span>
                <span className="feature-pill">🐴 Pony / Palki Available</span>
                <span className="feature-pill">👴 Senior Friendly</span>
              </div>
              <div style={{ display: 'flex', gap: '24px', marginTop: '28px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="altitude-badge"><strong>3,888m</strong><small>Cave</small></div>
                  <div style={{ fontSize: '.72rem', color: 'var(--neutral-500)', marginTop: '6px' }}>Altitude</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="altitude-badge" style={{ background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' }}><strong>14 km</strong><small>Baltal</small></div>
                  <div style={{ fontSize: '.72rem', color: 'var(--neutral-500)', marginTop: '6px' }}>Trek</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="altitude-badge" style={{ background: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' }}><strong>36 km</strong><small>Pahalgam</small></div>
                  <div style={{ fontSize: '.72rem', color: 'var(--neutral-500)', marginTop: '6px' }}>Trek</div>
                </div>
              </div>
            </div>
            <div className="overview-img">
              <img src="/images/amarnath_trek.jpg"
                   alt="Holy Amarnath Cave – Sacred Ice Shivalingam" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ YATRA INFORMATION ═══════════ */}
      <section className="section-py" style={{ background: '#f7faf8' }} aria-labelledby="yatra-info-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Yatra Information</span>
            <h2 className="section-title" id="yatra-info-heading">Everything You Need to Know<br />About Amarnath Yatra 2026</h2>
          </div>
          <div className="info-grid reveal">
            <div className="yatra-info-card">
              <div className="yatra-info-icon">🗓️</div>
              <div className="yatra-info-title">Yatra Dates 2026</div>
              <div className="yatra-info-text">Expected late June to mid-August 2026. Begins on Guru Purnima with Pratham Puja and concludes on Shravan Purnima. Dates announced by Shri Amarnathji Shrine Board.</div>
              <div className="yatra-info-tag">June – August 2026</div>
            </div>
            <div className="yatra-info-card">
              <div className="yatra-info-icon">📋</div>
              <div className="yatra-info-title">Registration & Permits</div>
              <div className="yatra-info-text">Mandatory registration at shriamarnathjishrine.com. Medical certificate from SASB-approved doctor required. We assist all package guests with registration and documentation.</div>
              <div className="yatra-info-tag">We Help with Permits</div>
            </div>
            <div className="yatra-info-card">
              <div className="yatra-info-icon">🚁</div>
              <div className="yatra-info-title">Helicopter Service</div>
              <div className="yatra-info-text">Helicopters from Baltal and Pahalgam helipads to Panjtarni (6 km from cave). Takes just 8–10 minutes. Ideal for senior citizens and those with health conditions.</div>
              <div className="yatra-info-tag">8 Min to Panjtarni</div>
            </div>
            <div className="yatra-info-card">
              <div className="yatra-info-icon">🌡️</div>
              <div className="yatra-info-title">Weather at Cave</div>
              <div className="yatra-info-text">Temperature at cave: 2°C to 15°C in peak season. Nights are cold — heavy woolens essential. Sudden snowfall and rain possible. Our team provides weather updates throughout.</div>
              <div className="yatra-info-tag">2°C – 15°C at Cave</div>
            </div>
            <div className="yatra-info-card">
              <div className="yatra-info-icon">🏥</div>
              <div className="yatra-info-title">Medical Requirements</div>
              <div className="yatra-info-text">SASB-approved medical certificate mandatory for all pilgrims. Those with heart conditions, high BP, asthma or diabetes must consult doctors. We guide all pilgrims on requirements.</div>
              <div className="yatra-info-tag">Certificate Mandatory</div>
            </div>
            <div className="yatra-info-card">
              <div className="yatra-info-icon">🐴</div>
              <div className="yatra-info-title">Pony & Palki Services</div>
              <div className="yatra-info-text">Ponies on both routes for those who cannot trek. Palki (palanquin) available for elderly and differently-abled pilgrims. Charges extra, arrangement available on request.</div>
              <div className="yatra-info-tag">Available on Both Routes</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ITINERARY ═══════════ */}
      <section className="section-py" id="itinerary" aria-labelledby="itin-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Day by Day</span>
            <h2 className="section-title" id="itin-heading">3 Nights 4 Days<br /><em>Amarnath Yatra Itinerary</em></h2>
          </div>
          <div className="itin-list reveal">
            <div className={`itin-item ${openItin.includes(0) ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleItin(0)}>
                <div className="itin-day-num">1</div>
                <div>
                  <div className="itin-day-title">Arrive Srinagar / Jammu → Transfer to Base Camp</div>
                  <div className="itin-day-sub">Airport pickup · Hotel check-in · Base camp briefing · Gear check</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>Arrival at Srinagar Airport or Jammu Railway Station — airport/station pickup in private AC vehicle</li>
                  <li>Transfer to Baltal Base Camp (approx. 100 km from Srinagar, 3.5 hours)</li>
                  <li>Check-in to base camp accommodation — tents or guesthouses</li>
                  <li>Evening briefing on yatra procedures, permits, route and safety guidelines</li>
                  <li>Gear check — ensure adequate warm clothing, trekking boots, walking poles</li>
                  <li>Dinner and overnight rest at base camp — early to bed for 4 AM departure</li>
                </ul>
              </div>
            </div>
            
            <div className={`itin-item ${openItin.includes(1) ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleItin(1)}>
                <div className="itin-day-num" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)' }}>2</div>
                <div>
                  <div className="itin-day-title">⭐ The Sacred Amarnath Cave Darshan</div>
                  <div className="itin-day-sub">Trek or helicopter to cave · Ice Shivalingam darshan · Return to base camp</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <div className="itin-highlight">⭐ The Most Sacred Day — The heart of the Yatra. Early 4 AM start recommended for smooth darshan and return before afternoon weather changes.</div>
                <ul className="itin-steps">
                  <li>Early departure from base camp at 4:00 AM</li>
                  <li>Trek / helicopter to Panjtarni (via Baltal: 8 km trek or 8-minute helicopter flight)</li>
                  <li>Final 6 km ascent to the Amarnath Cave Shrine</li>
                  <li>Darshan of the sacred ice Shivalingam — <em>Jai Baba Barfani!</em></li>
                  <li>Prayers, aarti and prasad at the cave shrine</li>
                  <li>Return descent to Baltal base camp</li>
                  <li>Hot dinner and overnight rest at base camp</li>
                </ul>
              </div>
            </div>

            <div className={`itin-item ${openItin.includes(2) ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleItin(2)}>
                <div className="itin-day-num">3</div>
                <div>
                  <div className="itin-day-title">Return to Srinagar · Dal Lake & Sightseeing</div>
                  <div className="itin-day-sub">Srinagar transfer · Shikara ride · Mughal Gardens · Bazaar stroll</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>Morning breakfast at base camp, check-out</li>
                  <li>Transfer to Srinagar city (approx. 3.5 hours)</li>
                  <li>Check-in to hotel or houseboat on Dal Lake</li>
                  <li>1-hour Shikara ride on the serene Dal Lake</li>
                  <li>Visit Nishat Bagh and Shalimar Bagh — Mughal Gardens</li>
                  <li>Evening stroll through Lal Chowk bazaar — pick up saffron, shawls, dry fruits</li>
                  <li>Overnight at hotel/houseboat, Srinagar</li>
                </ul>
              </div>
            </div>

            <div className={`itin-item ${openItin.includes(3) ? 'open' : ''}`}>
              <div className="itin-header" onClick={() => toggleItin(3)}>
                <div className="itin-day-num">4</div>
                <div>
                  <div className="itin-day-title">Srinagar Departure</div>
                  <div className="itin-day-sub">Breakfast · Shopping · Airport transfer · Depart with blessings</div>
                </div>
                <span className="itin-toggle">+</span>
              </div>
              <div className="itin-body">
                <ul className="itin-steps">
                  <li>Morning breakfast at hotel</li>
                  <li>Last-minute shopping — Pashmina shawls, saffron, walnuts, papier-mâché crafts</li>
                  <li>Transfer to Srinagar Airport in time for your onward flight</li>
                  <li>Depart with blessings of Baba Barfani and memories of a lifetime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="section-py" style={{ background: '#f7faf8' }} aria-labelledby="gallery-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Photo Gallery</span>
            <h2 className="section-title" id="gallery-heading">Amarnath Yatra — Journey in Images</h2>
          </div>
          <div className="yatra-gallery reveal">
            <div className="yatra-gallery-item">
              <img src="/images/dest_pahalgam.jpg" alt="Holy Amarnath Cave – Ice Shivalingam" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Holy Amarnath Cave – Ice Shivalingam</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/amarnath_valley.jpg" alt="Amarnath Yatra Valley Route" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Scenic Valley Route</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_sonamarg.jpg" alt="Helicopter to Panjtarni from Baltal" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Helicopter – Baltal to Panjtarni</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_gulmarg.jpg" alt="Pilgrims trekking to Amarnath Cave" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Pilgrims on the Sacred Trek</div>
            </div>
            <div className="yatra-gallery-item">
              <img src="/images/dest_srinagar.jpg" alt="Himalayan peaks near Amarnath" loading="lazy" />
              <div className="yatra-gallery-item-overlay">Majestic Himalayan Peaks</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ROUTE COMPARISON ═══════════ */}
      <section className="section-py" aria-labelledby="route-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Choose Your Route</span>
            <h2 className="section-title" id="route-heading">Pahalgam vs Baltal —<br /><em>Which Route?</em></h2>
          </div>
          <div className="route-grid reveal">
            <div className="route-card">
              <div className="route-card-header">
                <div className="route-tag">🏔️ Traditional Route</div>
                <div className="route-name">Pahalgam Route</div>
                <div className="route-meta">The original pilgrimage route through Chandanwari, Sheshnag Lake, Mahagunas Pass and Panjtarni.</div>
                <div style={{ marginTop: '12px' }}><span style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--neutral-700)' }}>36–48 km · 3–5 Days</span></div>
              </div>
              <div className="route-body">
                <ul className="route-points">
                  <li>Most scenic — Sheshnag Lake, alpine meadows, glacial terrain</li>
                  <li>Gentler gradient — better for first-time pilgrims</li>
                  <li>More rest camps, shops, and medical facilities en route</li>
                  <li>Ideal for families, elderly pilgrims, and groups</li>
                </ul>
              </div>
            </div>
            <div className="route-card recommended">
              <div className="route-card-header">
                <div className="route-tag">⚡ Short & Popular</div>
                <div className="route-name">Baltal Route</div>
                <div className="route-meta">Steep but shorter 14 km route completed in 1 day. Most popular with time-constrained pilgrims. Helicopter departure point.</div>
                <div style={{ marginTop: '12px' }}><span style={{ fontSize: '.9rem', fontWeight: 700, color: 'var(--green-600)' }}>14 km · 1 Day ✓ Our Package</span></div>
              </div>
              <div className="route-body">
                <ul className="route-points">
                  <li>Complete yatra in a single day — ideal for working professionals</li>
                  <li>Helicopter service from Baltal helipad to Panjtarni</li>
                  <li>Used in our 3N/4D package — most efficient for most pilgrims</li>
                  <li>Popular with all age groups when helicopter is booked</li>
                </ul>
              </div>
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
                <li><span className="inc-icon">✅</span> 3 nights accommodation — 2N base camp + 1N Srinagar hotel</li>
                <li><span className="inc-icon">✅</span> Daily breakfast and dinner throughout the tour</li>
                <li><span className="inc-icon">✅</span> Private AC cab — all airport/station transfers and sightseeing</li>
                <li><span className="inc-icon">✅</span> Yatra permit registration assistance and documentation support</li>
                <li><span className="inc-icon">✅</span> Medical certificate guidance — SASB-approved doctor referral</li>
                <li><span className="inc-icon">✅</span> Helicopter tickets Baltal–Panjtarni–Baltal (helicopter package only)</li>
                <li><span className="inc-icon">✅</span> 1-hour Shikara ride on Dal Lake, Srinagar</li>
                <li><span className="inc-icon">✅</span> Mughal Gardens — Nishat Bagh & Shalimar Bagh</li>
                <li><span className="inc-icon">✅</span> All toll charges, parking fees and driver allowances</li>
                <li><span className="inc-icon">✅</span> Dedicated local yatra manager throughout</li>
                <li><span className="inc-icon">✅</span> Basic medical kit — altitude tablets, energy bars, ORS</li>
                <li><span className="inc-icon">✅</span> All GST taxes — no hidden charges</li>
              </ul>
            </div>
            <div className="inc-card">
              <div className="inc-header excluded">❌ Not Included</div>
              <ul className="inc-list">
                <li><span className="inc-icon">❌</span> Airfare / train tickets to Srinagar or Jammu</li>
                <li><span className="inc-icon">❌</span> Lunches at base camp or en route</li>
                <li><span className="inc-icon">❌</span> Pony / palki charges on trek route (own cost)</li>
                <li><span className="inc-icon">❌</span> Helicopter tickets in non-helicopter packages</li>
                <li><span className="inc-icon">❌</span> Personal expenses, tips, shopping</li>
                <li><span className="inc-icon">❌</span> Medical / evacuation costs (travel insurance recommended)</li>
                <li><span className="inc-icon">❌</span> Trekking gear — boots, walking poles, warm clothing</li>
                <li><span className="inc-icon">❌</span> Extra costs due to weather or road closures</li>
                <li><span className="inc-icon">❌</span> Any service not mentioned in inclusions</li>
                <li><span className="inc-icon">❌</span> Camera fees at monuments and cave</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section className="section-py" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Choose Your Package</span>
            <h2 className="section-title" id="pricing-heading">Amarnath Yatra Package<br /><em>Pricing 2026</em></h2>
          </div>
          <div className="pricing-grid reveal">
            <div className="price-card">
              <div className="price-card-header">
                <div className="price-card-name">Trek Package</div>
                <div className="price-original">₹24,000</div>
                <div className="price-amount">₹18,500</div>
                <div className="price-per">per person · Baltal trek route</div>
              </div>
              <div className="price-card-body">
                <ul className="price-features">
                  <li>3N accommodation</li>
                  <li>Breakfast + Dinner</li>
                  <li>Private AC cab</li>
                  <li>Permit assistance</li>
                  <li>Srinagar sightseeing</li>
                  <li>Yatra manager</li>
                </ul>
                <Link to="/amarnath-yatra/booking" className="btn btn-outline btn-sm" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>Enquire Now</Link>
              </div>
            </div>
            <div className="price-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="price-card-header">
                <div className="price-card-name">Helicopter Package</div>
                <div className="price-original">₹38,000</div>
                <div className="price-amount">₹28,500</div>
                <div className="price-per">per person · includes helicopter</div>
              </div>
              <div className="price-card-body">
                <ul className="price-features">
                  <li>3N premium accommodation</li>
                  <li>Breakfast + Dinner</li>
                  <li>Private Innova cab</li>
                  <li>Helicopter Baltal–Panjtarni return</li>
                  <li>Permit + medical assistance</li>
                  <li>Priority darshan slots</li>
                </ul>
                <Link to="/amarnath-yatra/booking" className="btn btn-primary btn-sm" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>Book Now</Link>
              </div>
            </div>
            <div className="price-card">
              <div className="price-card-header">
                <div className="price-card-name">Senior / VIP Package</div>
                <div className="price-original">₹52,000</div>
                <div className="price-amount">₹42,000</div>
                <div className="price-per">per person · all-inclusive premium</div>
              </div>
              <div className="price-card-body">
                <ul className="price-features">
                  <li>4-star hotel Srinagar stay</li>
                  <li>All meals included</li>
                  <li>Helicopter both ways</li>
                  <li>Palki arrangement at cave</li>
                  <li>Personal medical support</li>
                  <li>VIP darshan priority</li>
                </ul>
                <Link to="/amarnath-yatra/booking" className="btn btn-outline btn-sm" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>Enquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="section-py" style={{ background: '#f7faf8' }} aria-labelledby="testi-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Pilgrim Experiences</span>
            <h2 className="section-title" id="testi-heading">What Our Pilgrims Say</h2>
          </div>
          <div className="testi-grid reveal">
            <div className="yatra-testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Doing the Amarnath Yatra with Travel with Anu was the most spiritually fulfilling experience of my life. The helicopter package was perfect — 8 minutes flying over glaciers then sacred darshan. Every permit was handled flawlessly. Jai Baba Barfani!"</p>
              <div className="testi-author-row">
                <div className="testi-avatar">R</div>
                <div>
                  <div className="testi-name">Ramesh Sharma</div>
                  <div className="testi-tag">Delhi · Helicopter Package 2025</div>
                </div>
              </div>
            </div>
            <div className="yatra-testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"I am 68 years old and did the Yatra via helicopter with the VIP package. Travel with Anu arranged the palki for the 6 km from Panjtarni to the cave. I never felt unsafe for a single moment. The darshan brought me to tears. Truly life-changing."</p>
              <div className="testi-author-row">
                <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' }}>S</div>
                <div>
                  <div className="testi-name">Sunita Gupta</div>
                  <div className="testi-tag">Jaipur · Senior VIP Package 2025</div>
                </div>
              </div>
            </div>
            <div className="yatra-testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"Came from Hyderabad with my family of 5. Travel with Anu handled the entire Amarnath Yatra — permits, base camp, helicopter, Srinagar sightseeing and all meals. The Shikara ride on Dal Lake after Yatra was beautiful. Highly recommended!"</p>
              <div className="testi-author-row">
                <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#000' }}>V</div>
                <div>
                  <div className="testi-name">Vijay Reddy</div>
                  <div className="testi-tag">Hyderabad · Family Package 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIPS ═══════════ */}
      <section className="section-py" aria-labelledby="tips-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Expert Advice</span>
            <h2 className="section-title" id="tips-heading">Essential Tips for<br /><em>Amarnath Yatra 2026</em></h2>
          </div>
          <div className="tips-grid reveal">
            <div className="tip-card">
              <div className="tip-icon">🧥</div>
              <div className="tip-title">What to Wear & Carry</div>
              <div className="tip-text">Heavy woolens, waterproof jacket, thermal innerwear, gloves, woollen cap and sturdy trekking boots essential. Temperature drops to 2°C at cave even in July.</div>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🏔️</div>
              <div className="tip-title">Altitude & Health Precautions</div>
              <div className="tip-text">Acclimatise at base camp Day 1 — do not rush to cave. Carry Diamox for altitude sickness. Stay hydrated. Avoid alcohol. Descend immediately if breathless or chest pain occurs.</div>
            </div>
            <div className="tip-card">
              <div className="tip-icon">📋</div>
              <div className="tip-title">Permit & Registration Tips</div>
              <div className="tip-text">Register at shriamarnathjishrine.com well in advance — permits sell out fast. Medical certificate from SASB-approved doctor required. Carry physical copies of all documents on trek.</div>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🎒</div>
              <div className="tip-title">What to Pack</div>
              <div className="tip-text">Pack light — you will be trekking. Essential: walking poles, energy bars, ORS packets, first-aid kit, torch, portable charger, ID proof and yatra permit. Porters available at base camp.</div>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌦️</div>
              <div className="tip-title">Weather Caution</div>
              <div className="tip-text">Weather changes rapidly at 3,888 m — sudden snowfall, rain and fog common. Always start trek by 4 AM. Never trek alone — always stay with the group and follow guide instructions.</div>
            </div>
            <div className="tip-card">
              <div className="tip-icon">👴</div>
              <div className="tip-title">For Senior Citizens</div>
              <div className="tip-text">Strongly recommend helicopter + palki for pilgrims above 60. Helicopter takes 8 minutes to Panjtarni. Palki available for the 6 km to cave. Fully safe, comfortable, and dignified.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-py" style={{ background: '#f7faf8' }} aria-labelledby="faq-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '48px' }}>
            <span className="section-label">Common Questions</span>
            <h2 className="section-title" id="faq-heading">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list reveal">
            <div className={`faq-item ${openFaq.includes(0) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(0)}>What is the price of Amarnath Yatra package 2026? <span className="faq-toggle">+</span></div>
              <div className="faq-a">Amarnath Yatra Package 2026 with Travel with Anu starts from ₹18,500 per person for the trek package (Baltal route, 3N/4D). The helicopter package is ₹28,500 per person and the Senior/VIP package is ₹42,000 per person. All prices include accommodation, meals, transfers, and permit assistance. No hidden charges.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(1) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(1)}>When is Amarnath Yatra 2026? <span className="faq-toggle">+</span></div>
              <div className="faq-a">Amarnath Yatra 2026 is expected from late June to mid-August 2026. It begins on Guru Purnima with the Pratham Puja and concludes on Shravan Purnima. The exact dates are announced by the Shri Amarnathji Shrine Board (SASB). Contact us for updates as dates are confirmed.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(2) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(2)}>Can I book Amarnath Yatra package from Delhi, Mumbai or Hyderabad? <span className="faq-toggle">+</span></div>
              <div className="faq-a">Yes, our Amarnath Yatra tour package is available from all major Indian cities. From Delhi — direct flight to Srinagar (80 minutes). From Mumbai and Hyderabad — direct flights via IndiGo, Air India and SpiceJet. From Bangalore — connecting via Delhi (3–4 hours total). We receive all pilgrims at Srinagar Airport or Jammu and handle complete onward arrangements.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(3) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(3)}>What is included in the Amarnath helicopter package? <span className="faq-toggle">+</span></div>
              <div className="faq-a">The helicopter package (₹28,500/person) includes: helicopter tickets Baltal–Panjtarni–Baltal return, 3 nights premium accommodation, daily breakfast and dinner, private Innova cab for all transfers, yatra permit registration assistance, medical certificate guidance, Srinagar sightseeing with Shikara ride, Mughal Gardens, and dedicated yatra manager. Palki at the cave is available at extra cost.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(4) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(4)}>Which route is better — Pahalgam or Baltal? <span className="faq-toggle">+</span></div>
              <div className="faq-a">Baltal route (14 km one-way) is shorter and can be completed in a single day — ideal for time-constrained pilgrims, senior citizens using helicopter, and those with limited time. Pahalgam route (36–48 km) is the traditional, more scenic route through Sheshnag Lake and alpine meadows, taking 3–5 days. Our standard 3N/4D package uses the Baltal route.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(5) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(5)}>Can senior citizens do Amarnath Yatra? <span className="faq-toggle">+</span></div>
              <div className="faq-a">Yes, senior citizens can absolutely do the Amarnath Yatra with proper support. We recommend our Senior/VIP Package (₹42,000) which includes helicopter to Panjtarni, palki arrangement for the 6 km to the cave, 4-star hotel accommodation, personal medical support, and all meals. Age limit is 13–75 years. Pregnant women are not permitted on the Yatra.</div>
            </div>
            <div className={`faq-item ${openFaq.includes(6) ? 'open' : ''}`}>
              <div className="faq-q" onClick={() => toggleFaq(6)}>What medical certificate is needed for Amarnath Yatra? <span className="faq-toggle">+</span></div>
              <div className="faq-a">All pilgrims require a medical fitness certificate issued by an SASB-approved doctor (listed on shriamarnathjishrine.com). The certificate confirms you are fit for high-altitude trekking. Those with heart conditions, high blood pressure, diabetes, or asthma must get special clearance. Travel with Anu guides all package guests through the medical certificate process and provides doctor referrals.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="section-py yatra-cta" aria-labelledby="cta-heading">
        <div className="container yatra-cta-inner reveal">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🕉️</div>
          <h2 className="yatra-cta-title" id="cta-heading">Begin Your Journey Where Faith Meets the Divine<br />to Amarnath</h2>
          <p className="yatra-cta-sub">Book your Amarnath Yatra Package 2026 now — permits, helicopter, accommodation and full support handled by Kashmir's most trusted native travel experts.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/amarnath-yatra/booking" className="btn-saffron">Enquire Now</Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: '#fff', padding: '14px 28px', borderRadius: '99px' }}>📞 Contact Us</Link>
          </div>
          <p className="yatra-cta-meta">From ₹18,500 / person · Permits included · Helicopter & trek options · Available from all cities</p>
        </div>
      </section>
    </>
  );
}
