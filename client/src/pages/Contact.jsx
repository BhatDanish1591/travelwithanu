import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── CONFIG ─────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '916005655257';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdFi_OF-UBAdvpIr8THeGgSFgJE6Zvy-PTrotvVYrTldGUkEQ/formResponse';
const FORM_ENTRIES = {
  name: 'entry.377689001',
  phone: 'entry.1075946897',
  email: 'entry.456220714',
  month: 'entry.1171905381',
  travelers: 'entry.818741328',
  style: 'entry.917885087',
  destinations: 'entry.1121926050',
  budget: 'entry.118958278',
  message: 'entry.806400053',
};
// ────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const els = e.target.elements;

    const name        = els['c-name']?.value?.trim() || '';
    const phone       = els['c-phone']?.value?.trim() || '';
    const email       = els['c-email']?.value?.trim() || '';
    const month       = els['c-month']?.value || '';
    const travelers   = els['c-travelers']?.value || '';
    const style       = els['c-style']?.value || '';
    const budget      = els['c-budget']?.value || '';
    const message     = els['c-msg']?.value?.trim() || '';

    // Collect checked destinations
    const destChecks = e.target.querySelectorAll('input[name="dest"]:checked');
    const destinations = Array.from(destChecks).map(cb => cb.value.replace(/[^\w ]/g,'').trim()).join(', ');

    if (!name || !phone) {
      alert('Please fill in Full Name and Phone / WhatsApp.');
      return;
    }

    setFormStatus('submitting');

    // ── 1. Submit to Google Form (no-cors — data goes to Google Sheets) ──
    if (GOOGLE_FORM_URL && !GOOGLE_FORM_URL.includes('YOUR_GOOGLE')) {
      try {
        const formData = new FormData();
        formData.append(FORM_ENTRIES.name,        name);
        formData.append(FORM_ENTRIES.phone,       phone);
        formData.append(FORM_ENTRIES.email,       email);
        formData.append(FORM_ENTRIES.month,       month);
        formData.append(FORM_ENTRIES.travelers,   travelers);
        formData.append(FORM_ENTRIES.style,       style);
        formData.append(FORM_ENTRIES.destinations, destinations);
        formData.append(FORM_ENTRIES.budget,      budget);
        formData.append(FORM_ENTRIES.message,     message);

        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Forms
          body: formData,
        });
      } catch (_) {
        // no-cors always throws — data still reaches Google
      }
    }



    setFormStatus('success');
    e.target.reset();
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <main>
      {/* Page Hero */}
      <section id="hero" className="hero-sm" aria-label="Contact Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/hero_dal_lake.jpg" className="active" alt="Dal Lake Sunrise in Srinagar" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">
            Plan Your Kashmir<br /><em style={{ color: 'var(--gold)' }}>Trip</em>
          </h1>
          <p className="hero-subtitle">
            Fill out our quick query form below to receive a custom Kashmir holiday plan and pricing proposal within 24 hours.
          </p>
          </div>
      </section>

      {/* Contact & Form Grid */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)' }} aria-label="Booking Details Form">
        <div className="container">
          <div className="contact-page-grid">

            {/* ── LEFT: Info Panel ── */}
            <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

              <div>
                <span className="section-label">📞 Reach Us Directly</span>
                <h2 className="contact-info-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: '12px' }}>Let's Plan Your Perfect Kashmir Holiday</h2>
                <p className="contact-info-desc" style={{ marginBottom: 0 }}>Have urgent questions? Reach out via WhatsApp or call us directly in Srinagar — we're available <strong>9 AM – 8 PM IST, daily</strong>.</p>
              </div>

              {/* Contact Cards */}
              <div className="contact-info-grid">
                {[
                  { icon: '📞', title: 'Call Us', value: '+91-6005655257', link: { href: 'tel:+916005655257', label: 'Call now →' }, color: '#22c55e' },
                  { icon: '💬', title: 'WhatsApp', value: '+91-6005655257', link: { href: 'https://wa.me/916005655257?text=Hello%20Travel%20with%20Anu', label: 'Chat now →', target: '_blank' }, color: '#25D366' },
                  { icon: '✉️', title: 'Email', value: 'hello@travelwithanu.com', sub: 'Replied within 4 hours', color: '#3b82f6' },
                  { icon: '📍', title: 'Office', value: 'Main market kunzer,', sub: 'Tangmarg 193404', color: '#f59e0b' },
                ].map((c, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: '16px', padding: '18px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', border: '1.5px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: c.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{c.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#64748b', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{c.title}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#1e293b', lineHeight: 1.4 }}>{c.value}</div>
                    {c.sub && <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{c.sub}</div>}
                    {c.link && <a href={c.link.href} target={c.link.target} rel="noreferrer" style={{ fontSize: '0.8rem', fontWeight: 700, color: c.color, textDecoration: 'none', marginTop: '2px' }}>{c.link.label}</a>}
                  </div>
                ))}
              </div>

              {/* Response guarantee */}
              <div style={{ background: 'linear-gradient(135deg,#dcfce7,#d1fae5)', borderRadius: '16px', padding: '20px 24px', border: '1.5px solid #86efac' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.4rem' }}>⚡</span>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#166534' }}>Response Time Guarantee</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#15803d', lineHeight: '1.6', margin: 0 }}>All booking queries are reviewed and answered with a <strong>custom itinerary draft in 2–4 hours</strong> during working hours (9 AM – 8 PM IST, daily).</p>
              </div>

              {/* How it works mini */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', border: '1.5px solid #f1f5f9' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e293b', marginBottom: '16px' }}>🗺️ How It Works</div>
                {[
                  { n: '1', t: 'Submit Your Details', d: 'Fill the form or WhatsApp us your travel dates.' },
                  { n: '2', t: 'Get Custom Itinerary', d: 'We\'ll send a full day-by-day PDF plan within 4 hours.' },
                  { n: '3', t: 'Confirm & Book', d: 'Pay a small advance. Rest on arrival in Srinagar.' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: i < 2 ? '14px' : 0, alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.n}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1e293b' }}>{s.t}</div>
                      <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ── RIGHT: Form ── */}
            <div className="reveal">
              <div className="contact-form-wrapper">
                <div style={{ marginBottom: '28px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '6px' }}>📋 Plan My Custom Tour</h3>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Fill in your details and we'll craft a personalised Kashmir itinerary just for you.</p>
                </div>

                <form id="contact-page-form" onSubmit={handleFormSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-name">Full Name *</label>
                      <input type="text" className="form-control" id="c-name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">Phone / WhatsApp *</label>
                      <input type="tel" className="form-control" id="c-phone" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">Email Address</label>
                      <input type="email" className="form-control" id="c-email" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-month">Travel Month</label>
                      <select className="form-control" id="c-month" defaultValue="" required>
                        <option value="" disabled>Select Month</option>
                        {['January','February','March','April','May','June','July','August','September','October','November','December'].map(m => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-travelers">Total Travelers</label>
                      <select className="form-control" id="c-travelers" defaultValue="2 Persons (Couple)" required>
                        <option>1 Person</option>
                        <option>2 Persons (Couple)</option>
                        <option>3 – 4 Persons</option>
                        <option>5 – 8 Persons</option>
                        <option>9+ Group</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-style">Travel Style</label>
                      <select className="form-control" id="c-style" defaultValue="Family Tour" required>
                        <option>💑 Honeymoon Special</option>
                        <option>👨‍👩‍👧 Family Tour</option>
                        <option>🏔️ Adventure Trek</option>
                        <option>✨ Luxury Experience</option>
                        <option>💰 Budget Explorer</option>
                        <option>🎒 Solo Traveler</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Destinations of Interest</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginTop: '8px' }}>
                      {['🏛️ Srinagar','⛷️ Gulmarg','🌿 Pahalgam','🏔️ Sonamarg','🥛 Doodhpathri','🏕️ Gurez Valley'].map((d, i) => (
                        <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '8px 12px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, color: '#334155', transition: 'all 0.2s' }}>
                          <input type="checkbox" name="dest" value={d.replace(/[^\w ]/g,'').trim()} defaultChecked={i < 3} style={{ accentColor: '#22c55e' }} />
                          {d}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-budget">Budget Per Person <span style={{ color: '#94a3b8', fontWeight: 400 }}>(excl. flights)</span></label>
                    <select className="form-control" id="c-budget" defaultValue="" required>
                      <option value="" disabled>Select your budget range</option>
                      <option>💚 Budget (₹8k – ₹12k / person)</option>
                      <option>🔵 Standard (₹12k – ₹18k / person)</option>
                      <option>🟡 Deluxe (₹18k – ₹25k / person)</option>
                      <option>👑 Premium Luxury (₹25k+ / person)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="c-msg">Tell us what you want from this trip</label>
                    <textarea className="form-control" id="c-msg" rows={4} style={{ resize: 'vertical' }} required></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '16px', borderRadius: '12px', marginTop: '4px', opacity: formStatus === 'success' ? 0.7 : 1 }}
                    id="c-submit"
                    disabled={formStatus === 'success' || formStatus === 'submitting'}
                  >
                    {formStatus === 'success' ? '✅ Enquiry Sent!' : formStatus === 'submitting' ? '⏳ Sending...' : '✈️ Send My Query'}
                  </button>
                  <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.78rem', color: '#94a3b8' }}>🔒 Your details are safe. We never share your data.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="section-py bg-alt" aria-labelledby="works-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: "56px" }}>
            <span className="section-label">Easy booking</span>
            <h2 className="section-title gradient-title" id="works-heading">How Booking Works</h2>
            <p className="section-subtitle">A simple three-step process to finalize your dream holiday in paradise.</p>
          </div>

          <div className="steps-row">
            {/* Step 1 */}
            <div className="step-card reveal">
              <div className="step-badge">1</div>
              <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "var(--neutral-900)", marginBottom: "10px", marginTop: "12px" }}>Submit Details</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--neutral-500)", lineHeight: "1.6" }}>Fill out your preferences on this form or send a message on WhatsApp. Share your dates and passenger details.</p>
            </div>

            {/* Step 2 */}
            <div className="step-card reveal" style={{ transitionDelay: "0.05s" }}>
              <div className="step-badge">2</div>
              <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "var(--neutral-900)", marginBottom: "10px", marginTop: "12px" }}>Customize Plan</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--neutral-500)", lineHeight: "1.6" }}>Our designer will build a complete PDF day-by-day itinerary and quote. Customize it until you are fully satisfied.</p>
            </div>

            {/* Step 3 */}
            <div className="step-card reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="step-badge">3</div>
              <h3 style={{ fontWeight: "700", fontSize: "1.1rem", color: "var(--neutral-900)", marginBottom: "10px", marginTop: "12px" }}>Confirm & Book</h3>
              <p style={{ fontSize: "0.88rem", color: "var(--neutral-500)", lineHeight: "1.6" }}>Confirm your booking by making a small advance token payment. Receive hotel booking slips and cab detail sheets instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (8 Questions) */}
      <section className="section-py" id="faq" aria-labelledby="contact-faq-heading">
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: "56px" }}>
            <span className="section-label">Clear Answers</span>
            <h2 className="section-title gradient-title" id="contact-faq-heading">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know before finalizing your tour package.</p>
          </div>

          <div className="faq-grid" style={{ maxWidth: "800px" }}>
            {[
              { q: "When is the best time to visit Kashmir?", a: "Kashmir is beautiful all year round. March to May is best for spring blooms, including Tulips. June to September brings pleasant weather ideal for meadow exploration. October and November showcase golden autumn colors. December to February is best for heavy winter snows." },
              { q: "Do we need to pay full amount in advance?", a: "No, you only need to pay a small token advance (typically 20% to 30%) to secure your hotel room bookings and cab allocations. The remaining balance can be paid on arrival in Srinagar after check-in." },
              { q: "Is local transport union-controlled?", a: "Yes. Due to local regulations, outer taxis cannot do internal sightseeing in Gulmarg, Pahalgam, or Sonamarg. For internal sight tours, union taxis or local horse guides are hired. We clarify and coordinate this as part of our packages." },
              { q: "Are meals included in your tour packages?", a: "Yes, all our standard packages include breakfast and dinner (Half Board/MAP plan) inside the respective hotels. Lunch and extra snacks are excluded so you can explore local street vendors and cafes during sightseeing." },
              { q: "Is a prepaid SIM card functional in Kashmir?", a: "Only Indian postpaid SIM cards work on roaming. Prepaid SIM cards registered outside Jammu & Kashmir do not catch any network signal. We assist guests in acquiring temporary local prepaid SIMs on arrival if needed." },
              { q: "Can we adjust destinations on the go?", a: "Yes, minor adjustments can be made by discussing with your private driver. However, changes to pre-booked hotel locations or duration are subject to hotel availability and booking cancellation policies." },
              { q: "What is your booking cancellation policy?", a: "We offer full refund of your token deposit if cancelled at least 15 days before arrival. For cancellations made within 14 days of arrival, a minimal hotel retention fee is charged according to specific hotel rules." },
              { q: "Are medical facilities easily available?", a: "Srinagar has major hospitals and clinics. Key hill stations like Gulmarg, Pahalgam, and Sonamarg have local government clinics and pharmacies. Our drivers are trained to handle minor emergencies and always keep basic first-aid boxes." }
            ].map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <button 
                  className="faq-question" 
                  aria-expanded={openFaq === index} 
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === index ? '-' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
