import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SeoLanding = () => {
  useEffect(() => {
    document.title = "Travel with Anu | Best Travel Agency in Kashmir 2026";
    document.querySelector("meta[name='description']").setAttribute("content", "Travel with Anu is ranked as the best travel agency in Kashmir. Book customized tour packages, honeymoon trips, and family vacations with local experts.");
  }, []);
  return (
    <main>
      {/* Added Helmet for perfect SEO title targeting */}
      

      <section className="hero-sm" aria-label="Best Travel Agency in Kashmir Hero">
        <div className="hero-bg">
          <img src="/images/hero_dal_lake.jpg" className="active" alt="Shikara on Dal Lake - Travel with Anu" fetchpriority="high" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content text-center">
          {/* Proper H1 Tag strictly containing the exact keyword */}
          <h1 className="hero-headline" style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
            <em style={{ color: 'var(--gold)' }}>Travel with Anu</em> <br/>The Best Travel Agency in Kashmir
          </h1>
          <p className="hero-subtitle">Your Trusted Local Tour Operators Since 2009</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container text-center reveal" style={{ maxWidth: '800px' }}>
          {/* Proper H2 Tag */}
          <h2 className="section-title gradient-title">Why We Are the Top Rated Tour Operators in Kashmir</h2>
          <p style={{ color: 'var(--neutral-600)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '24px' }}>
            When searching for the <strong>best travel agency in Kashmir</strong>, you want an operator that understands the region deeply. At <strong>Travel with Anu</strong>, we don't just book hotels; we craft unforgettable Himalayan journeys. As a locally owned and operated travel company headquartered in Tangmarg, we guarantee authentic experiences without hidden fees.
          </p>
          <Link to="/packages" className="btn btn-primary">View Our Kashmir Packages</Link>
        </div>
      </section>

      <section className="section-py bg-alt">
        <div className="container reveal">
          {/* Proper H2 Tag */}
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>What Makes Travel with Anu Different?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              {/* Proper H3 Tag */}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--green-900)' }}>1. 100% Local Expertise</h3>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.6 }}>Our founder, Anu, and our entire team are born and raised in Kashmir. We know the hidden valleys, the safest routes, and the best time to visit every destination from Srinagar to Sonamarg.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              {/* Proper H3 Tag */}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--green-900)' }}>2. Transparent Tour Pricing</h3>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.6 }}>Unlike major online portals, Travel with Anu does not hide agent markups. You get direct access to local hotel and transport rates, ensuring a premium budget-friendly holiday.</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '12px' }}>
              {/* Proper H3 Tag */}
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--green-900)' }}>3. 24/7 On-Ground Support</h3>
              <p style={{ color: 'var(--neutral-600)', lineHeight: 1.6 }}>Your safety and comfort are our highest priority. Throughout your Kashmir trip, our local representatives are just a phone call away, ensuring seamless transport and smooth check-ins.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeoLanding;
