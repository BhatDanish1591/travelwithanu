import React, { useState } from 'react';
import './Experiences.css';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSezaySRHDmMRGIvkx4jfVj7PoG0KkelgxZkM2PGvDgroFKX4A/formResponse';
const FORM_ENTRIES = {
  name: 'entry.377689001',
  phone: 'entry.1075946897',
  date: 'entry.1171905381',
  activity: 'entry.917885087',
  msg: 'entry.806400053',
};

const Experiences = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    activity: 'Shikara Ride',
    msg: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('exp-', '')]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const fd = new FormData();
      fd.append(FORM_ENTRIES.name, formData.name);
      fd.append(FORM_ENTRIES.phone, formData.phone);
      fd.append(FORM_ENTRIES.date, formData.date);
      fd.append(FORM_ENTRIES.activity, formData.activity);
      fd.append(FORM_ENTRIES.msg, formData.msg);
      await fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd });
    } catch (_) {}

    setStatus('success');
    setFormData({
      name: '',
      phone: '',
      date: '',
      activity: 'Shikara Ride',
      msg: ''
    });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Experiences Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/package_adventure.jpg" className="active" alt="Trekkers in Kashmir hills" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Kashmir<br /><em style={{ color: 'var(--gold)' }}>Experiences</em>
          </h1>
          <p className="hero-subtitle">
            Discover the activities that make your tour unforgettable: local cuisine tours, skiing, high-altitude trekking, and peaceful lakes.
          </p>
          </div>
      </section>

      {/* All Experiences section */}
      <section className="section-py" aria-label="Explore All Activities">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '32px' }}>
            <span className="section-label">Valleys of Fun</span>
            <h2 className="section-title gradient-title">Handpicked Kashmir Activities</h2>
            <p className="section-subtitle">A list of immersive activities covering every style, budget, and age group. Book them as standalone experiences or add them to your custom tour.</p>
          </div>

          <div className="packages-grid">
            
            {/* Experience 1 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/dest_srinagar.jpg" alt="Shikara ride Dal Lake" loading="lazy" />
                <span className="pkg-card-ribbon">1-2 Hours</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">🛶 Floating Serenity</div>
                <h3 className="pkg-card-title">Traditional Shikara Ride</h3>
                <p className="pkg-card-desc">Glide on the mirror-like waters of Dal Lake in a colorful hand-paddled wooden boat. Explore water lotus gardens, visit floating handicraft markets, and watch the sun dip behind the peaks.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Dal Lake</span>
                  <span className="pkg-dest-tag">Local Guides</span>
                  <span className="pkg-dest-tag">All Ages</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹500 - ₹1,500</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Experience 2 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/dest_gulmarg.jpg" alt="Snow activities Gulmarg" loading="lazy" />
                <span className="pkg-card-ribbon">Full Day</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">❄️ Snow sports</div>
                <h3 className="pkg-card-title">Gulmarg Snow Adventures</h3>
                <p className="pkg-card-desc">Explore the heavy winter snowfields of Apharwat. Book skiing and snowboarding lessons under certified coaches, go sledding down the natural curves, or ride high on snowmobiles.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Gulmarg Resort</span>
                  <span className="pkg-dest-tag">Gear Included</span>
                  <span className="pkg-dest-tag">Training Options</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹2,000 - ₹8,000</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Experience 3 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/package_adventure.jpg" alt="Mountain trekking" loading="lazy" />
                <span className="pkg-card-ribbon">1 - 7 Days</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">🏔️ Alpine Trails</div>
                <h3 className="pkg-card-title">Himalayan Mountain Trekking</h3>
                <p className="pkg-card-desc">Trek to legendary high-altitude alpine lakes like Great Lakes, Tarsar Marsar, or Gadsar. Walk through massive pine forests, cross glacial streams, and walk under sheer cliffs.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Various Valleys</span>
                  <span className="pkg-dest-tag">Pro Guides</span>
                  <span className="pkg-dest-tag">Active Trek</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹3,000 - ₹25,000</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Experience 4 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/dest_sonamarg.jpg" alt="Camping Sonamarg" loading="lazy" />
                <span className="pkg-card-ribbon">Overnight</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">🏕️ Glamping Stays</div>
                <h3 className="pkg-card-title">Alpine Camping Under Stars</h3>
                <p className="pkg-card-desc">Camp on lush green meadows inside Sonamarg or Pahalgam. Fall asleep looking at a clear starry sky, enjoy traditional bonfire dinners, and wake up to cold river mists.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Meadows</span>
                  <span className="pkg-dest-tag">Bonfires</span>
                  <span className="pkg-dest-tag">Waterproof Tents</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹4,000 - ₹12,000</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Experience 5 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/dest_doodhpathri.jpg" alt="Jeep Safari Doodhpathri" loading="lazy" />
                <span className="pkg-card-ribbon">Full Day</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">🌲 Valley Sightseeing</div>
                <h3 className="pkg-card-title">Secluded Valley Safaris</h3>
                <p className="pkg-card-desc">Take offbeat 4x4 trails to hidden meadows like Doodhpathri or Yusmarg. Walk through dense conifer forests, see nomad wooden mud-huts, and enjoy a picnic on the grass.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Offbeat Valleys</span>
                  <span className="pkg-dest-tag">Jeep Included</span>
                  <span className="pkg-dest-tag">Sightseeing</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹2,500 - ₹6,000</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

            {/* Experience 6 */}
            <article className="pkg-card reveal">
              <div className="pkg-card-img" style={{ height: '240px' }}>
                <img src="/images/package_honeymoon.jpg" alt="Kashmiri Cuisine tour" loading="lazy" />
                <span className="pkg-card-ribbon">3-4 Hours</span>
              </div>
              <div className="pkg-card-body">
                <div className="pkg-card-type">🍵 Gastronomy</div>
                <h3 className="pkg-card-title">Traditional Kashmiri Culinary Tour</h3>
                <p className="pkg-card-desc">Immerse yourself in authentic Kashmiri flavors. Learn about Wazwan, a multi-course royal feast, taste traditional breads from local bakers, and sip aromatic saffron-brewed Kahwa.</p>
                <div className="pkg-card-destinations" style={{ marginBottom: '16px' }}>
                  <span className="pkg-dest-tag">Srinagar Old Town</span>
                  <span className="pkg-dest-tag">Wazwan Buffet</span>
                  <span className="pkg-dest-tag">Spices Included</span>
                </div>
                <div className="pkg-card-footer">
                  <div className="pkg-price">
                    <span className="pkg-price-amount" style={{ fontSize: '1.2rem' }}>₹1,500 - ₹3,000</span>
                  </div>
                  <div className="pkg-card-actions">
                    <a href="#custom-experience" className="btn btn-primary btn-sm">Enquire & Book</a>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Activity Level Guide */}
      <section className="section-py bg-alt" aria-label="Activity Level Guide">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '40px' }}>
            <span className="section-label">Trek & Activity levels</span>
            <h2 className="section-title gradient-title">Activity Fitness Guide</h2>
            <p className="section-subtitle">Review our standard guide to understand which experiences match your travel group's age and health conditions.</p>
          </div>

          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="level-table">
              <thead>
                <tr>
                  <th>Experience</th>
                  <th>Suitable For</th>
                  <th>Difficulty Level</th>
                  <th>Gear Required</th>
                  <th>Age Limit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 700 }}>Traditional Shikara Ride</td>
                  <td>Families, Couples, Seniors</td>
                  <td><span className="level-badge level-easy">Easy</span></td>
                  <td>Life-jacket (provided)</td>
                  <td>No limit</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Valley Exploration (Jeep + Walk)</td>
                  <td>Families, Couples, Kids</td>
                  <td><span className="level-badge level-easy">Easy</span></td>
                  <td>Sport/Walking Shoes</td>
                  <td>No limit</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Kashmiri Culinary Tour</td>
                  <td>Foodies, Families</td>
                  <td><span className="level-badge level-easy">Easy</span></td>
                  <td>None</td>
                  <td>No limit</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Alpine Camping</td>
                  <td>Families, Couples, Friends</td>
                  <td><span className="level-badge level-mod">Moderate</span></td>
                  <td>Warm jackets & flashlights</td>
                  <td>5+ years</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Gulmarg Skiing & Gondola</td>
                  <td>Adventure lovers, Couples, Friends</td>
                  <td><span className="level-badge level-mod">Moderate</span></td>
                  <td>Ski coat, gloves (available to rent)</td>
                  <td>4+ years</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>Himalayan Lakes Trekking</td>
                  <td>Hikers, Backpackers, Youth</td>
                  <td><span className="level-badge level-hard">Challenging</span></td>
                  <td>Trekking boots, backpacks, sleeping bag</td>
                  <td>12 - 50 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section: Book Custom Experience */}
      <section id="custom-experience" className="section-py" aria-label="Book Custom Activity">
        <div className="container">
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'stretch' }}>
            
            {/* Left side: Image */}
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/travel_with_anu_logo.jpg" alt="Travel with Anu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Right side: Form */}
            <div className="contact-form-card" style={{ margin: 0 }}>
              <h2 className="form-title" style={{ textAlign: 'center', marginBottom: '24px' }}>📋 Request Custom Activities</h2>
            <form id="exp-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="exp-name">Full Name *</label>
                  <input type="text" className="form-control" id="exp-name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="exp-phone">Phone / WhatsApp *</label>
                  <input type="tel" className="form-control" id="exp-phone" required value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="exp-date">Preferred Date</label>
                  <input type="date" className="form-control" id="exp-date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="exp-activity">Activity of Interest</label>
                  <select className="form-control" id="exp-activity" value={formData.activity} onChange={handleChange} required>
                    <option value="Shikara Ride">Shikara Ride</option>
                    <option value="Gulmarg Skiing">Gulmarg Skiing</option>
                    <option value="Himalayan Trekking">Himalayan Trekking</option>
                    <option value="Camping Stays">Camping Stays</option>
                    <option value="Valley Jeeps">Valley Jeeps</option>
                    <option value="Culinary Tour">Culinary Tour</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="exp-msg">Group Size & Custom Needs</label>
                <textarea className="form-control" id="exp-msg" value={formData.msg} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                {status === 'success' ? '✅ Successfully submitted!' : status === 'submitting' ? 'Sending...' : 'Send Enquiry ✈️'}
              </button>
            </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiences;
