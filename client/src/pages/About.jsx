import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="About Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_sonamarg.jpg" className="active" alt="Beautiful landscape of Sonamarg valleys" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            About<br /><em style={{ color: 'var(--gold)' }}>Travel with Anu</em>
          </h1>
          <p className="hero-subtitle">
            Born in Srinagar. Handcrafting authentic, local-guided Himalayan journeys for travelers worldwide since 2009.
          </p>
          </div>
      </section>

      {/* Story Section */}
      <section className="section-py" aria-label="Our Story">
        <div className="container">
          <div className="about-grid">
            <div className="reveal-left">
              <span className="section-label">Our Story</span>
              <h2 className="section-title gradient-title" style={{ marginBottom: '20px' }}>15+ Years Guiding in the Valley</h2>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.75, marginBottom: '16px' }}>Travel with Anu was founded in Srinagar in 2009 by a group of local guides and mountain trekking lovers. Disillusioned by standardized, cookie-cutter tour layouts that rushed tourists through crowded hotspots, we decided to build a travel agency centered around true local knowledge, hospitality, and customized pacings.</p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.75, marginBottom: '16px' }}>Over the past 15 years, we have hosted over 10,000 happy travelers. We have mapped hidden alpine lakes, built deep relationships with cottage hoteliers, trained local guides, and created standard tour packages that support the local community directly.</p>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.75 }}>Whether you are booking a romantic honeymoon, a family holiday, or a challenging mountain trek, we promise an authentic journey filled with comfortable stays and memories that will last a lifetime.</p>
            </div>

            <div className="about-img-stack reveal" style={{ justifySelf: 'center' }}>
              <div className="about-img-main">
                <img src="/images/dest_srinagar.jpg" alt="Houseboat stay Srinagar" />
              </div>
              <div className="about-img-badge">
                <div className="about-badge-num">15+</div>
                <div className="about-badge-label">Years of Local Guiding</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-py bg-alt" aria-label="Company Statistics">
        <div className="container">
          <div className="stats-bar reveal">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Guests Hosted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Guiding Kashmir</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Valleys Explored</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9â˜…</div>
              <div className="stat-label">Average Review Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="section-py" aria-label="Our Mission">
        <div className="container text-center reveal" style={{ maxWidth: '780px' }}>
          <span className="section-label">Our Mission</span>
          <h2 className="section-title gradient-title">Connecting You to the Soul of Kashmir</h2>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--green-800)', lineHeight: 1.6, margin: '28px 0', fontStyle: 'italic' }}>
            "We do not just show you tourist spots. We connect you with local families, traditional houseboats, wilderness guides, and authentic crafts so that you leave with a piece of Kashmir in your heart."
          </blockquote>
          <p style={{ color: 'var(--neutral-500)', fontSize: '0.95rem' }}>- Tariq Ahmad, Founder of Travel with Anu</p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-py bg-alt" aria-labelledby="team-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '56px' }}>
            <span className="section-label">The Locals Behind Travel with Anu</span>
            <h2 className="section-title gradient-title" id="team-heading">Meet Our Team Leaders</h2>
            <p className="section-subtitle">A team born and raised in Kashmir, passionate about guiding you through our beautiful homeland.</p>
          </div>

          <div className="team-grid">
            {/* Team 1 */}
            <article className="team-card reveal">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--green-600), var(--green-400))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: 800, fontSize: '1.8rem' }}>TA</div>
              <h3 className="team-name">Tariq Ahmad</h3>
              <div className="team-role">Founder & Lead Guide</div>
              <p className="team-bio">Srinagar native with 15+ years guiding experience. Knows every mountain trail and houseboat owner in the valley.</p>
            </article>

            {/* Team 2 */}
            <article className="team-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--blue-600), var(--blue-400))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: 800, fontSize: '1.8rem' }}>ZK</div>
              <h3 className="team-name">Zara Khan</h3>
              <div className="team-role">Lead Travel Designer</div>
              <p className="team-bio">Specialist in honeymoon tours and luxury houseboat experiences. Zara customizes all romantic itineraries.</p>
            </article>

            {/* Team 3 */}
            <article className="team-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #ea580c, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: 800, fontSize: '1.8rem' }}>BM</div>
              <h3 className="team-name">Bilal Mir</h3>
              <div className="team-role">Adventure Specialist</div>
              <p className="team-bio">Certified mountaineer who leads our trekking, camping, and skiing trips. Loves Gurez and Sonamarg glaciers.</p>
            </article>

            {/* Team 4 */}
            <article className="team-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #7c3aed, #c084fc)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontWeight: 800, fontSize: '1.8rem' }}>NS</div>
              <h3 className="team-name">Nadia Shah</h3>
              <div className="team-role">Customer Care Head</div>
              <p className="team-bio">Handles our 24/7 travel assistance. Nadia checks in on guests daily to guarantee comfortable transport and stays.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py" aria-label="Our Values">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '40px' }}>
            <span className="section-label">How We Work</span>
            <h2 className="section-title gradient-title">Our Core Values</h2>
          </div>

          <div className="value-grid">
            <div className="why-card reveal">
              <div className="why-icon">🗺️</div>
              <h3 className="why-title">True Local Expertise</h3>
              <p className="why-desc">We never outsource tour design. Our itineraries are written from first-hand valley experience, recommending only hotels and transport links we have verified ourselves.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="why-icon">🌿</div>
              <h3 className="why-title">Responsible Ecotourism</h3>
              <p className="why-desc">We support family-owned guesthouses, pay guide unions fairly, and emphasize leave-no-trace principles during treks and camping in alpine meadows.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="why-icon">🛡️</div>
              <h3 className="why-title">Safety & Security First</h3>
              <p className="why-desc">We track local weather forecasts and safety updates in real time. Our drivers are trained for snowy mountain passes and keep medical aid kits in all cabs.</p>
            </div>
            <div className="why-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="why-icon">💎</div>
              <h3 className="why-title">Absolute Transparency</h3>
              <p className="why-desc">No hidden expenses, agent markups, or shopping traps. Pony union rates and valley cab rentals are fully declared upfront in our bookings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-py bg-alt" aria-label="Awards & Certifications">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '32px' }}>
            <span className="section-label">Trust Symbols</span>
            <h2 className="section-title gradient-title">Recognitions & Licenses</h2>
          </div>

          <div className="awards-row reveal">
            <div className="award-card">🏛️ recognized by Ministry of Tourism (J&K)</div>
            <div className="award-card">🏆 TripAdvisor Choice 2024 (Local Tour Agency)</div>
            <div className="award-card">🤝 Member of J&K Tourism Association</div>
            <div className="award-card">⭐ 4.9 Rating (Google Reviews)</div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, var(--green-900) 0%, var(--green-800) 100%)', textAlign: 'center', color: 'var(--white)' }} aria-label="Start Planning CTA">
        <div className="container reveal">
          <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '20px' }}>Ready to Start Your Journey?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '1.1rem' }}>Get in touch with our founders and guides today to start planning your dream Kashmir trip.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Contact Travel Experts 📞</Link>
            <a href="https://wa.me/919419000000" className="btn btn-ghost">Chat on WhatsApp 💬</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
