import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '916005655257';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScH8JUTH-eRcXFut3ZZk-Ah5mWDNdabgezpUsI8zAaeovh3vw/formResponse';
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

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DEST_OPTIONS = [
  { label: 'Srinagar', emoji: '🏛️' }, { label: 'Gulmarg', emoji: '⛷️' },
  { label: 'Pahalgam', emoji: '🌿' }, { label: 'Sonamarg', emoji: '🏔️' },
  { label: 'Doodhpathri', emoji: '🥛' }, { label: 'Gurez Valley', emoji: '🏕️' },
];

const BookNow = () => {
  const [searchParams] = useSearchParams();
  const packageName = searchParams.get('package') || '';

  const [formStatus, setFormStatus] = useState('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [month, setMonth] = useState('');
  const [travelers, setTravelers] = useState('2 Persons (Couple)');
  const [tripStyle, setTripStyle] = useState('Family Tour');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [dests, setDests] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !month) { alert('Please fill in Full Name, Phone / WhatsApp, and Travel Month.'); return; }
    setFormStatus('submitting');
    try {
      const fd = new FormData();
      fd.append(FORM_ENTRIES.name, name); fd.append(FORM_ENTRIES.phone, phone);
      fd.append(FORM_ENTRIES.email, email); fd.append(FORM_ENTRIES.month, month);
      fd.append(FORM_ENTRIES.travelers, travelers); fd.append(FORM_ENTRIES.style, tripStyle);
      fd.append(FORM_ENTRIES.destinations, dests.join(', ')); fd.append(FORM_ENTRIES.budget, budget);
      fd.append(FORM_ENTRIES.message, packageName ? `Package: ${packageName}\n${message}` : message);
      await fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd });
    } catch (_) {}

    setFormStatus('success');
  };

  if (formStatus === 'success') return (
    <main>
      <section style={{ minHeight:'80vh', display:'flex', alignItems:'center', background:'linear-gradient(135deg,#f0fdf4,#eff6ff)' }} className="section-py">
        <div className="container" style={{ maxWidth:'560px', textAlign:'center' }}>
          <div style={{ background:'#fff', borderRadius:'24px', padding:'60px 40px', boxShadow:'0 8px 40px rgba(0,0,0,0.06)', border:'1.5px solid #f8fafc' }}>
            <div style={{ fontSize:'4rem', marginBottom:'16px' }}>🎉</div>
            <h2 style={{ fontFamily:'var(--font-serif)', fontSize:'2.2rem', fontWeight:800, color:'#0f172a', marginBottom:'12px' }}>Request Received!</h2>
            <p className="bn-success-desc">
              Your query is saved! Our team is reviewing your details.
              Expect your <strong>custom Kashmir itinerary within 2–4 hours</strong>.
            </p>
            <div className="bn-success-steps">
              {[{n:'1',t:'Query received',d:'Saved to our team'},
                {n:'2',t:'Itinerary in 2–4 hrs',d:'Custom day-by-day plan'},
                {n:'3',t:'Confirm & pay 20%',d:'Rest on arrival'}].map((s,i)=>(
                <div key={i} className="bn-success-step">
                  <div className="bn-step-num">{s.n}</div>
                  <div><div className="bn-step-t">{s.t}</div><div className="bn-step-d">{s.d}</div></div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/packages" className="btn btn-outline">Browse Packages</Link>
              <Link to="/" className="btn btn-primary">Go to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return (
    <main>
      {/* Hero */}
      <section id="hero" className="hero-sm" aria-label="Book Now">
        <div className="hero-bg">
          <img src="/images/hero_dal_lake.jpg" className="active" alt="Dal Lake Kashmir" fetchPriority="high" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          
          <h1 className="hero-headline">
            {packageName
              ? <>{`Book `}<em style={{color:'var(--gold)'}}>{packageName}</em></>
              : <>Book Your <em style={{color:'var(--gold)'}}>Kashmir Trip</em></>}
          </h1>
          <p className="hero-subtitle">Fill in your details — we confirm your itinerary within 2–4 hours.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-py" style={{ background:'linear-gradient(160deg,#f0fdf4 0%,#eff6ff 100%)' }}>
        <div className="container" style={{ maxWidth:'980px' }}>
          <div className="booknow-grid">

            {/* Left Sidebar */}
            <aside className="booknow-sidebar">
              <div className="bn-trust-card">
                <div className="bn-trust-title">Why Book With Us</div>
                <div className="bn-trust-list">
                  {[
                    { icon: '✅', text: 'Free custom itinerary' },
                    { icon: '⚡', text: 'Reply within 2–4 hours' },
                    { icon: '💳', text: 'Pay only 20% advance' },
                    { icon: '🔄', text: 'Free date change' },
                    { icon: '📞', text: '24/7 WhatsApp support' },
                  ].map((t,i) => (
                    <div key={i} className="bn-trust-item">
                      <span className="bn-trust-icon">{t.icon}</span>
                      <span className="bn-trust-text">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to book a Kashmir trip')}`}
                target="_blank" rel="noreferrer" className="bn-wa-btn">
                <span style={{ fontSize:'1.3rem' }}>💬</span>
                <div>
                  <div style={{ fontWeight:800, fontSize:'0.92rem' }}>Chat on WhatsApp</div>
                  <div style={{ fontSize:'0.75rem', opacity:0.85 }}>Instant reply · +91 6005655257</div>
                </div>
              </a>
            </aside>

            {/* Form */}
            <div className="bn-form-card">
              <div className="bn-form-header">
                <h2 className="bn-form-title">Your Booking Details</h2>
                <p className="bn-form-subtitle">Fields marked <span style={{color:'#ef4444'}}>*</span> are required.</p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-name">Full Name <span style={{color:'#ef4444'}}>*</span></label>
                    <input className="form-control" id="bn-name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-phone">Phone / WhatsApp <span style={{color:'#ef4444'}}>*</span></label>
                    <input className="form-control" id="bn-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-email">Email Address</label>
                    <input className="form-control" id="bn-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-month">Travel Month <span style={{color:'#ef4444'}}>*</span></label>
                    <select className="form-control" id="bn-month" value={month} onChange={e => setMonth(e.target.value)} required>
                      <option value="" disabled></option>
                      {MONTHS.map(m => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-travelers">Total Travelers</label>
                    <select className="form-control" id="bn-travelers" value={travelers} onChange={e => setTravelers(e.target.value)} required>
                      {['1 Person','2 Persons (Couple)','3 – 4 Persons','5 – 8 Persons','9+ Group'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-style">Travel Style</label>
                    <select className="form-control" id="bn-style" value={tripStyle} onChange={e => setTripStyle(e.target.value)} required>
                      {['Honeymoon Special','Family Tour','Adventure Trek','Luxury Experience','Budget Explorer','Solo Traveler'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-dests">Destinations of Interest</label>
                    <select className="form-control" id="bn-dests" value={dests[0] || ''} onChange={e => setDests([e.target.value])} required>
                      <option value=""></option>
                      {DEST_OPTIONS.map(d => <option key={d.label} value={d.label}>{d.emoji} {d.label}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="bn-budget">Budget Per Person <span style={{color:'#94a3b8', fontWeight:400}}>(excl. flights)</span></label>
                    <select className="form-control" id="bn-budget" value={budget} onChange={e => setBudget(e.target.value)} required>
                      <option value="" disabled></option>
                      <option>Budget (₹8k – ₹12k / person)</option>
                      <option>Standard (₹12k – ₹18k / person)</option>
                      <option>Deluxe (₹18k – ₹25k / person)</option>
                      <option>Premium Luxury (₹25k+ / person)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="bn-msg">Special Requests or Notes</label>
                  <textarea className="form-control" id="bn-msg" rows={3}
                    value={message} onChange={e => setMessage(e.target.value)} style={{resize:'vertical'}} required></textarea>
                </div>

                <button type="submit" className="bn-submit-btn" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting'
                    ? <><span className="bn-spinner"></span> Submitting...</>
                    : <>✈️ Confirm Booking Request</>}
                </button>
                <div className="bn-submit-note">
                  🔒 Your details are safe and securely transmitted.
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default BookNow;
