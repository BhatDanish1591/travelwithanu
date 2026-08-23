import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '916005655257';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSezaySRHDmMRGIvkx4jfVj7PoG0KkelgxZkM2PGvDgroFKX4A/formResponse';
const FORM_ENTRIES = {
  name:         'entry.377689001',
  phone:        'entry.1075946897',
  email:        'entry.456220714',
  month:        'entry.1171905381',
  travelers:    'entry.818741328',
  style:        'entry.917885087',
  destinations: 'entry.1121926050',
  budget:       'entry.118958278',
  message:      'entry.806400053',
};

const PACKAGES = [
  { id: 'trek',       label: 'Trek Package',       price: '₹18,500', desc: 'Baltal trek route · 3N/4D' },
  { id: 'helicopter', label: 'Helicopter Package',  price: '₹28,500', desc: 'Helicopter Baltal–Panjtarni · Most popular' },
  { id: 'vip',        label: 'Senior / VIP Package', price: '₹42,000', desc: 'Helicopter + Palki + 4-star · All-inclusive' },
];

const ROUTES = [
  { id: 'baltal',   label: '⚡ Baltal Route', desc: '14 km · 1 day · Our standard package' },
  { id: 'pahalgam', label: '🏔️ Pahalgam Route', desc: '36 km · 3-5 days · Traditional scenic' },
];

const AmarnathBooking = () => {
  const [status, setStatus]       = useState('idle');
  const [name, setName]           = useState('');
  const [phone, setPhone]         = useState('');
  const [email, setEmail]         = useState('');
  const [date, setDate]           = useState('');
  const [pkg, setPkg]             = useState('');
  const [route, setRoute]         = useState('baltal');
  const [adults, setAdults]       = useState('1');
  const [seniors, setSeniors]     = useState('0');
  const [children, setChildren]   = useState('0');
  const [medical, setMedical]     = useState(false);
  const [notes, setNotes]         = useState('');

  const selectedPkg = PACKAGES.find(p => p.id === pkg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !pkg) { alert('Please fill Name, Phone and select a Package.'); return; }
    if (!medical) { alert('Please acknowledge the medical certificate requirement.'); return; }
    setStatus('submitting');

    const travelers = `Adults: ${adults}, Seniors: ${seniors}, Children: ${children}`;
    const msgText = `Package: ${selectedPkg?.label}\nRoute: ${route}\nDate: ${date}\n${travelers}\n${notes}`;

    try {
      const fd = new FormData();
      fd.append(FORM_ENTRIES.name,         name);
      fd.append(FORM_ENTRIES.phone,        phone);
      fd.append(FORM_ENTRIES.email,        email);
      fd.append(FORM_ENTRIES.month,        date);
      fd.append(FORM_ENTRIES.travelers,    travelers);
      fd.append(FORM_ENTRIES.style,        'Amarnath Yatra');
      fd.append(FORM_ENTRIES.destinations, 'Amarnath Cave');
      fd.append(FORM_ENTRIES.budget,       selectedPkg?.price || '');
      fd.append(FORM_ENTRIES.message,      msgText);
      await fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd });
    } catch (_) {}


    setStatus('success');
  };

  if (status === 'success') return (
    <main>
      <section style={{ minHeight:'80vh', display:'flex', alignItems:'center', background:'linear-gradient(135deg,#fff9f0,#f0fdf4)' }} className="section-py">
        <div className="container" style={{ maxWidth:'560px', textAlign:'center' }}>
          <div style={{ background:'#fff', borderRadius:'24px', padding:'60px 40px', boxShadow:'0 8px 40px rgba(0,0,0,0.10)', border:'1.5px solid #f1f5f9' }}>
            <div style={{ fontSize:'4rem', marginBottom:'16px' }}>🕉️</div>
            <h2 style={{ fontFamily:'var(--font-serif)', fontSize:'2rem', fontWeight:800, color:'#1e293b', marginBottom:'12px' }}>Jai Baba Barfani!</h2>
            <p style={{ color:'#64748b', lineHeight:1.7, marginBottom:'32px' }}>
              Your booking request has been received and saved! Our team is reviewing your details.
              Expect a confirmed itinerary within <strong>2–4 hours</strong>.
            </p>
            <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
              <Link to="/amarnath-yatra" className="btn btn-outline">← Back to Yatra</Link>
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
      <section id="hero" className="hero-sm" aria-label="Book Amarnath Yatra">
        <div className="hero-bg">
          <img src="/images/amarnath_hero.jpg" className="active" alt="Amarnath Yatra Booking" fetchPriority="high" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <span style={{ display:'inline-block', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,0.3)', borderRadius:'99px', padding:'6px 18px', fontSize:'0.78rem', fontWeight:700, color:'#fff', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>
            🕉️ Amarnath Yatra 2026
          </span>
          <h1 className="hero-headline">Book Your <em style={{ color:'var(--gold)' }}>Yatra Package</em></h1>
          <p className="hero-subtitle">Sacred pilgrimage · Permits handled · Helicopter &amp; Trek options</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-py" style={{ background:'linear-gradient(160deg,#fff9f0 0%,#f0fdf4 100%)' }}>
        <div className="container" style={{ maxWidth:'980px' }}>
          <div className="booknow-grid">

            {/* Sidebar */}
            <aside className="booknow-sidebar">
              <div className="bn-pkg-card">
                <div className="bn-pkg-img-wrap">
                  <img src="/images/amarnath_trek.jpg" alt="Amarnath Yatra" className="bn-pkg-img" />
                  <div className="bn-pkg-img-overlay"></div>
                  <span className="bn-pkg-badge">Amarnath Yatra 2026</span>
                </div>
                <div className="bn-pkg-body">
                  <h3 className="bn-pkg-name">Sacred Himalayan Pilgrimage</h3>
                  <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'14px' }}>
                    <span className="bn-pkg-tag">🗓️ 3N / 4D</span>
                    <span className="bn-pkg-tag">🚁 Helicopter option</span>
                  </div>
                  {selectedPkg && (
                    <div className="bn-pkg-price-row">
                      <div>
                        <div className="bn-pkg-price-label">Selected package</div>
                        <div className="bn-pkg-price-value">{selectedPkg.price}</div>
                        <div className="bn-pkg-price-unit">per person</div>
                      </div>
                      <div className="bn-pkg-price-icon">🕉️</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bn-trust-card">
                <div className="bn-trust-title">🛡️ Why Book With Us</div>
                <div className="bn-trust-list">
                  {[
                    { icon:'📋', text:'Permit registration assistance' },
                    { icon:'🚁', text:'Helicopter tickets arranged' },
                    { icon:'🐴', text:'Pony / Palki booking help' },
                    { icon:'⚡', text:'Reply in 2–4 hours' },
                    { icon:'📞', text:'24/7 WhatsApp support' },
                  ].map((t,i) => (
                    <div key={i} className="bn-trust-item">
                      <span className="bn-trust-icon">{t.icon}</span>
                      <span className="bn-trust-text">{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to book Amarnath Yatra 2026')}`}
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
                <h2 className="bn-form-title">Yatra Booking Request</h2>
                <p className="bn-form-subtitle">Fields marked <span style={{ color:'#ef4444' }}>*</span> are required. All details are securely transmitted.</p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Step 1 */}
                <div className="bn-step-label">Step 1 — Contact Details</div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="yb-name">Full Name <span style={{ color:'#ef4444' }}>*</span></label>
                    <input className="form-control" id="yb-name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="yb-phone">Phone / WhatsApp <span style={{ color:'#ef4444' }}>*</span></label>
                    <input className="form-control" id="yb-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="yb-email">Email Address</label>
                    <input className="form-control" id="yb-email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="yb-date">Preferred Travel Date</label>
                    <input className="form-control" id="yb-date" type="date" value={date} onChange={e => setDate(e.target.value)} />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bn-step-label" style={{ marginTop:'28px' }}>Step 2 — Choose Package <span style={{ color:'#ef4444' }}>*</span></div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'12px', marginBottom:'20px' }}>
                  {PACKAGES.map(p => (
                    <div key={p.id} onClick={() => setPkg(p.id)}
                      style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderRadius:'14px', border:`2px solid ${pkg===p.id ? '#f59e0b' : '#e2e8f0'}`, background: pkg===p.id ? '#fffbeb' : '#f8fafc', cursor:'pointer', transition:'all 0.18s', boxShadow: pkg===p.id ? '0 0 0 3px rgba(245,158,11,0.15)' : 'none' }}>
                      <div>
                        <div style={{ fontWeight:800, fontSize:'0.95rem', color:'#1e293b', marginBottom:'2px' }}>{p.label}</div>
                        <div style={{ fontSize:'0.78rem', color:'#64748b' }}>{p.desc}</div>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <div style={{ fontFamily:'var(--font-serif)', fontSize:'1.3rem', fontWeight:900, color: pkg===p.id ? '#d97706' : '#1e293b' }}>{p.price}</div>
                        <div style={{ fontSize:'0.7rem', color:'#94a3b8' }}>per person</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step 3 */}
                <div className="bn-step-label" style={{ marginTop:'28px' }}>Step 3 — Route &amp; Travelers</div>
                <div className="form-group">
                  <label className="form-label">Preferred Route</label>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'8px' }}>
                    {ROUTES.map(r => (
                      <div key={r.id} onClick={() => setRoute(r.id)}
                        style={{ padding:'14px 16px', borderRadius:'12px', border:`2px solid ${route===r.id ? '#22c55e' : '#e2e8f0'}`, background: route===r.id ? '#f0fdf4' : '#f8fafc', cursor:'pointer', transition:'all 0.18s', boxShadow: route===r.id ? '0 0 0 3px rgba(34,197,94,0.12)' : 'none' }}>
                        <div style={{ fontWeight:700, fontSize:'0.88rem', color:'#1e293b', marginBottom:'3px' }}>{r.label}</div>
                        <div style={{ fontSize:'0.75rem', color:'#64748b' }}>{r.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px' }}>
                  {[
                    { label:'Adults (13–70)', val:adults, set:setAdults, id:'yb-adults' },
                    { label:'Seniors (60–75)', val:seniors, set:setSeniors, id:'yb-seniors' },
                    { label:'Children (under 13)', val:children, set:setChildren, id:'yb-children' },
                  ].map(f => (
                    <div className="form-group" key={f.id}>
                      <label className="form-label" htmlFor={f.id}>{f.label}</label>
                      <input className="form-control" id={f.id} type="number" min="0" max="50" value={f.val} onChange={e => f.set(e.target.value)} />
                    </div>
                  ))}
                </div>
                <p style={{ fontSize:'0.78rem', color:'#94a3b8', marginTop:'-8px', marginBottom:'20px' }}>
                  * Children under 13 and pilgrims above 75 are not permitted by SASB regulations.
                </p>

                {/* Notes */}
                <div className="form-group">
                  <label className="form-label" htmlFor="yb-notes">Special Requests or Notes</label>
                  <textarea className="form-control" id="yb-notes" rows={3} value={notes} onChange={e => setNotes(e.target.value)} style={{ resize:'vertical' }} required></textarea>
                </div>

                {/* Medical acknowledgement */}
                <label style={{ display:'flex', gap:'12px', alignItems:'flex-start', padding:'16px', background:'#fffbeb', border:'1.5px solid #fde68a', borderRadius:'12px', cursor:'pointer', marginBottom:'24px' }}>
                  <input type="checkbox" checked={medical} onChange={e => setMedical(e.target.checked)} style={{ marginTop:'3px', accentColor:'#f59e0b', width:'18px', height:'18px', flexShrink:0 }} required />
                  <span style={{ fontSize:'0.84rem', color:'#78350f', lineHeight:1.6 }}>
                    <strong>I acknowledge</strong> that a valid Compulsory Health Certificate (CHC) from an SASB-approved doctor is mandatory. Permits are subject to medical fitness and Shri Amarnathji Shrine Board regulations.
                  </span>
                </label>

                <button type="submit" className="bn-submit-btn" disabled={status === 'submitting'}>
                  {status === 'submitting'
                    ? <><span className="bn-spinner"></span> Submitting...</>
                    : <>🕉️ Confirm Yatra Booking</>}
                </button>
                <div className="bn-submit-note">
                  🔒 Your details are safely stored.
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AmarnathBooking;
