import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '917006291591';
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSezaySRHDmMRGIvkx4jfVj7PoG0KkelgxZkM2PGvDgroFKX4A/formResponse';
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [plannerStatus, setPlannerStatus] = useState('idle');
  const [activePackageFilter, setActivePackageFilter] = useState('all');

  useEffect(() => {
    const cards = document.querySelectorAll('.pkg-card');
    cards.forEach(card => {
      const types = card.dataset.type ? card.dataset.type.split(' ') : [];
      if (activePackageFilter === 'all' || types.includes(activePackageFilter)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }, [activePackageFilter]);

  const handlePlannerSubmit = async (e) => {
    e.preventDefault();
    setPlannerStatus('submitting');
    
    const form = e.target;
    const name = form.querySelector('#planner-name')?.value || '';
    const phone = form.querySelector('#planner-phone')?.value || '';
    const email = form.querySelector('#planner-email')?.value || '';
    const pkg = form.querySelector('#planner-pkg')?.value || '';
    const travelers = form.querySelector('#planner-travelers')?.value || '';
    const date = form.querySelector('#planner-date')?.value || '';
    const msg = form.querySelector('#planner-msg')?.value || '';

    if (GOOGLE_FORM_URL) {
      try {
        const fd = new FormData();
        fd.append(FORM_ENTRIES.name, name);
        fd.append(FORM_ENTRIES.phone, phone);
        fd.append(FORM_ENTRIES.email, email);
        fd.append(FORM_ENTRIES.month, date);
        fd.append(FORM_ENTRIES.travelers, travelers);
        fd.append(FORM_ENTRIES.style, pkg);
        fd.append(FORM_ENTRIES.destinations, 'Home Page Query');
        fd.append(FORM_ENTRIES.message, msg);
        
        await fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd });
      } catch (error) {
        // ignore
      }
    }



    setPlannerStatus('success');
    form.reset();
    setTimeout(() => setPlannerStatus('idle'), 5000);
  };
  
  const heroImages = [
    { src: "images/hero_dal_lake.jpg", alt: "Dal Lake Srinagar Kashmir" },
    { src: "images/dest_gulmarg.jpg", alt: "Gulmarg snow mountains" },
    { src: "images/dest_pahalgam.jpg", alt: "Pahalgam valley" },
    { src: "images/dest_sonamarg.jpg", alt: "Sonamarg mountains" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ============================================================
     NAVIGATION
     ============================================================ */}


{/* ============================================================
     HERO
     ============================================================ */}
<main>
<section id="hero" aria-label="Hero section">
  <div className="hero-bg" id="hero-slider">
    {heroImages.map((img, index) => (
      <img 
        key={index}
        src={img.src} 
        className={index === currentSlide ? "active" : ""} 
        alt={img.alt} 
        fetchPriority={index === 0 ? "high" : "auto"} 
      />
    ))}
    <div className="hero-overlay"></div>
  </div>

  <div className="container hero-content text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>


    <h1 className="hero-headline" style={{ marginBottom: '24px', fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
      Discover the<br /><em style={{ color: 'var(--gold)' }}>Soul of Kashmir</em>
    </h1>

    <p className="hero-subtitle" style={{ marginBottom: '48px', fontSize: '1.15rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
      Explore breathtaking valleys, snow-covered mountains, peaceful lakes and unforgettable experiences — crafted just for you by local Kashmir experts.
    </p>

    <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: '0' }}>
      <a href="/packages" className="btn btn-gold" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>Explore Packages</a>
      <button onClick={() => document.getElementById('trip-planner')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-ghost" style={{ fontSize: '1.05rem', padding: '16px 36px', cursor: 'pointer', border: 'none' }}>Plan My Trip</button>
    </div>
  </div>
</section>

{/* ============================================================
     STATS BAR
     ============================================================ */}
<div className="container" style={{ position: 'relative', zIndex: '10' }}>
  <div className="stats-bar reveal">
    <div className="stat-item">
      <div className="stat-number">10K+</div>
      <div className="stat-label">Happy Travelers</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">8+</div>
      <div className="stat-label">Destinations Covered</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">15+</div>
      <div className="stat-label">Years in Kashmir</div>
    </div>
    <div className="stat-item">
      <div className="stat-number">4.9★</div>
      <div className="stat-label">Average Rating</div>
    </div>
  </div>
</div>

{/* ============================================================
     TOUR PACKAGES
     ============================================================ */}
<section id="packages" className="section-py" style={{ paddingTop: '80px' }} aria-labelledby="packages-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '40px' }}>
      <span className="section-label">Find Your Trip</span>
      <h2 className="section-title gradient-title" id="packages-heading">Kashmir Travel Packages</h2>
      <p className="section-subtitle">Handcrafted itineraries for families, couples, adventurers and solo travelers — all with local expertise and best-price guarantee.</p>
    </div>

    <div className="packages-filter reveal" role="group" aria-label="Package filters">
      <button className={`filter-btn ${activePackageFilter === 'all' ? 'active' : ''}`} onClick={() => setActivePackageFilter('all')}>🌟 All Packages</button>
      <button className={`filter-btn ${activePackageFilter === 'family' ? 'active' : ''}`} onClick={() => setActivePackageFilter('family')}>👨‍👩‍👧 Family</button>
      <button className={`filter-btn ${activePackageFilter === 'honeymoon' ? 'active' : ''}`} onClick={() => setActivePackageFilter('honeymoon')}>💑 Honeymoon</button>
      <button className={`filter-btn ${activePackageFilter === 'adventure' ? 'active' : ''}`} onClick={() => setActivePackageFilter('adventure')}>🏔️ Adventure</button>
      <button className={`filter-btn ${activePackageFilter === 'luxury' ? 'active' : ''}`} onClick={() => setActivePackageFilter('luxury')}>✨ Luxury</button>
      <button className={`filter-btn ${activePackageFilter === 'budget' ? 'active' : ''}`} onClick={() => setActivePackageFilter('budget')}>💰 Budget</button>
    </div>

    <div className="packages-grid" id="packages-grid">
      {[
        { id:1, types:['budget','family'],   ribbon:'💰 Pocket Friendly',    img:'images/dest_pahalgam.jpg',  imgAlt:'Kashmir Budget Explorer',   type:'Best Cost-saving',       name:'Kashmir Budget Explorer',   tags:['Srinagar Stay','Pahalgam Day-trip'],                            dur:'4D / 3N', tripType:'Budget Group',       group:'4 – 15',   rating:4.6, reviews:201, price:9500,  per:'per person · 3N4D', link:'/packages' },
        { id:2, types:['luxury'],            ribbon:'❄️ Season Special',     img:'images/dest_gulmarg.jpg',   imgAlt:'Kashmir Winter Magic',      type:'Premium Experience',     name:'Kashmir Winter Magic',      tags:['Gulmarg Snow','Houseboat','Srinagar'],                          dur:'4D / 3N', tripType:'Luxury Stay',        group:'2 – 6',    rating:4.7, reviews:98,  price:9500,  per:'per person · 3N4D', link:'/packages' },
        { id:3, types:['family'],            ribbon:'⭐ Most Booked',         img:'images/family_tour.jpg',    imgAlt:'Kashmir Highlights',        type:'Kashmir Classic',        name:'Kashmir Highlights',        tags:['Srinagar','Gulmarg','Pahalgam'],                                dur:'5D / 4N', tripType:'Family / Couple',    group:'2 – 10',   rating:4.9, reviews:342, price:9500,  per:'per person · 4N5D', link:'/packages' },
        { id:4, types:['family','luxury'],   ribbon:"🌟 Editor's Pick",      img:'images/autumn.jpg',         imgAlt:'Kashmir Escape',            type:'All-inclusive Comfort',  name:'Kashmir Escape',            tags:['Srinagar','Gulmarg','Sonamarg','Pahalgam'],                     dur:'6D / 5N', tripType:'All Types',          group:'2 – 12',   rating:4.8, reviews:218, price:10500, per:'per person · 5N6D', link:'/packages' },
        { id:5, types:['adventure','budget'],ribbon:'⛺ Backpacker Choice',   img:'images/trekking.webp',      imgAlt:'Gurez Offbeat Explorer',    type:'Remote Trekking',        name:'Gurez Offbeat Explorer',    tags:['Gurez Dawar','Kishanganga','Wular Lake'],                       dur:'5D / 4N', tripType:'Adventure Trek',     group:'2 – 8',    rating:4.9, reviews:54,  price:10500, per:'per person · 4N5D', link:'/packages' },
        { id:6, types:['adventure'],         ribbon:'🏔️ Adventure',          img:'images/trekking.webp',      imgAlt:'Kashmir Adventure',         type:'Thrill Seeker',          name:'Kashmir Adventure',         tags:['Gurez','Sonamarg','Gulmarg','Trekking'],                        dur:'7D / 6N', tripType:'Adventure',          group:'2 – 8',    rating:4.9, reviews:167, price:12000, per:'per person · 6N7D', link:'/packages' },
        { id:7, types:['family'],            ribbon:'👨‍👩‍👧 Family First',        img:'images/family_tour.jpg',    imgAlt:'Kashmir Family Delight',    type:'Complete Sightseeing',   name:'Kashmir Family Delight',    tags:['Srinagar','Pahalgam','Gulmarg Gondola','Shikara Ride'],         dur:'7D / 6N', tripType:'Family Sightseeing', group:'3 – 12',   rating:4.8, reviews:134, price:12000, per:'per person · 6N7D', link:'/packages' },
        { id:8, types:['adventure','family'],ribbon:'🕉️ Pilgrimage',          img:'images/dest_pahalgam.jpg',  imgAlt:'Amarnath Yatra 2026',       type:'Sacred Journey',         name:'Amarnath Yatra 2026',       tags:['Baltal','Pahalgam','Holy Cave'],                                dur:'4D / 3N', tripType:'Trek / Helicopter',  group:'1 – 20',   rating:4.9, reviews:512, price:18500, per:'per person',        link:'/amarnath-yatra', ribbonStyle:{ background:'linear-gradient(135deg,#ea580c,#f59e0b)' } },
        { id:9, types:['honeymoon','luxury'],ribbon:'💑 Honeymoon',           img:'images/offbeat.png',        imgAlt:'Kashmir Honeymoon',         type:'Romantic Escape',        name:'Kashmir Honeymoon',         tags:['Houseboat Stay','Shikara Ride','Gulmarg','Pahalgam'],           dur:'6D / 5N', tripType:'Couples Only',       group:'2 Persons',rating:5.0, reviews:456, price:25000, per:'per couple',        link:'/packages',       ribbonStyle:{ background:'linear-gradient(135deg,#e91e8c,#f43f5e)' } },
      ]
        .filter(pkg => activePackageFilter === 'all' || pkg.types.includes(activePackageFilter))
        .map((pkg, idx) => (
          <article key={pkg.id} className={`pkg-card reveal reveal-d${(idx % 4) + 1}`} itemScope itemType="https://schema.org/TouristTrip">
            <div className="pkg-card-img">
              <img src={pkg.img} alt={pkg.imgAlt} loading="lazy" />
              <span className="pkg-card-ribbon" style={pkg.ribbonStyle || {}}>{pkg.ribbon}</span>
              <button className="pkg-card-fav" aria-label="Save to wishlist"><span>🤍</span></button>
            </div>
            <div className="pkg-card-body">
              <div className="pkg-card-type">{pkg.type}</div>
              <h3 className="pkg-card-title" itemProp="name">{pkg.name}</h3>
              <div className="pkg-card-destinations">
                {pkg.tags.map(t => <span key={t} className="pkg-dest-tag">{t}</span>)}
              </div>
              <div className="pkg-card-meta">
                <div className="pkg-meta-item"><span className="pkg-meta-label">Duration</span><span className="pkg-meta-value">{pkg.dur}</span></div>
                <div className="pkg-meta-item"><span className="pkg-meta-label">Type</span><span className="pkg-meta-value">{pkg.tripType}</span></div>
                <div className="pkg-meta-item"><span className="pkg-meta-label">Group Size</span><span className="pkg-meta-value">{pkg.group}</span></div>
              </div>
              <div className="pkg-card-rating">
                <span className="stars">★★★★★</span>
                <span className="pkg-rating-score">{pkg.rating}</span>
                <span className="pkg-rating-count">({pkg.reviews} reviews)</span>
              </div>
              <div className="pkg-card-footer">
                <div className="pkg-price">
                  <span className="pkg-price-from">Starting from</span>
                  <span className="pkg-price-amount" itemProp="offers">₹{pkg.price.toLocaleString('en-IN')}</span>
                  <span className="pkg-price-per">{pkg.per}</span>
                </div>
                <div className="pkg-card-actions">
                  <Link to={pkg.link} className="btn btn-outline btn-sm">View</Link>
                  <Link to="/book-now" className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            </div>
          </article>
        ))
      }
    </div>

    <div className="text-center" style={{ marginTop: '48px' }}>
      <Link to="/packages" className="btn btn-outline">View All Kashmir Packages →</Link>
    </div>
  </div>
</section>

{/* ============================================================
     POPULAR DESTINATIONS
     ============================================================ */}
<section id="destinations" className="section-py bg-alt" aria-labelledby="destinations-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Explore Kashmir</span>
      <h2 className="section-title gradient-title" id="destinations-heading">Popular Destinations</h2>
      <p className="section-subtitle">From the floating gardens of Dal Lake to the pristine meadows of Gulmarg — Kashmir is a world unto itself.</p>
    </div>

    <div className="destinations-grid">

      {/* Srinagar - AI generated image */}
      <article className="dest-card reveal reveal-d1" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/hotel_srinagar.jpg" alt="The Grand Lalit Srinagar luxury hotel with mountain views" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">🌟 Most Popular</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Srinagar</h3>
          <p className="dest-card-desc" itemProp="description">The crown of Kashmir — iconic Dal Lake, opulent houseboats, Mughal gardens and vibrant local bazaars in a breathtaking mountain setting.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>March – November</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Gulmarg - AI generated image */}
      <article className="dest-card reveal reveal-d2" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/hero_new.jpg" alt="The Khyber Himalayan Resort Gulmarg snow-covered view" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">❄️ Winter Paradise</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Gulmarg</h3>
          <p className="dest-card-desc" itemProp="description">Asia's premier ski destination — a flower meadow in summer and a snowy paradise in winter with Asia's highest gondola cable car.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>Dec–Feb (Snow) · Apr–Oct (Green)</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Pahalgam - AI generated image */}
      <article className="dest-card reveal reveal-d3" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/hotel_pahalgam.jpg" alt="Heevan Hotel Pahalgam near Lidder River" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">💚 Valley of Shepherds</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Pahalgam</h3>
          <p className="dest-card-desc" itemProp="description">Nestled in the Lidder River valley — famous for pine-clad hills, trout fishing, Betab Valley and the gateway to the Amarnath Yatra.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>April – September</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Sonamarg - AI generated image */}
      <article className="dest-card reveal reveal-d4" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/hotel_sonmarg.jpg" alt="Four Points by Sheraton Sonamarg with surrounding peaks" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">✨ Meadow of Gold</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Sonamarg</h3>
          <p className="dest-card-desc" itemProp="description">The "Golden Meadow" at 2,800m — surrounded by glaciers, crystal streams, wild ponies and some of the most dramatic peaks in the Himalayas.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>May – October</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Doodhpathri - AI generated image */}
      <article className="dest-card reveal reveal-d5" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/dest_doodhpathri.jpg" alt="Doodhpathri Kashmir – milky white stream through wildflower alpine meadow" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">🥛 Hidden Gem</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Doodhpathri</h3>
          <p className="dest-card-desc" itemProp="description">"Valley of Milk" — a secluded alpine meadow with milky white streams, dense fir forests, wildflowers and sweeping untouched landscapes.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>June – September</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Yusmarg - AI generated image */}
      <article className="dest-card reveal reveal-d6" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="images/dest_yusmarg.jpg" alt="Yusmarg Kashmir – pine forest meadow with wild ponies and mountain ridges" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">🌲 Forest Retreat</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Yusmarg</h3>
          <p className="dest-card-desc" itemProp="description">A serene meadow surrounded by towering cedar and pine forests — the perfect off-the-beaten-path Kashmir experience for true nature lovers.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>May – October</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Gurez Valley - curated Unsplash */}
      <article className="dest-card reveal reveal-d7" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85&fit=crop" alt="Gurez Valley Kashmir – remote mountain valley with Kishanganga river" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">🏕️ Offbeat Escape</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Gurez Valley</h3>
          <p className="dest-card-desc" itemProp="description">One of India's most breathtaking remote valleys — dramatic Himalayan scenery, the Kishanganga river and untouched Dard tribal culture.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>June – September</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

      {/* Aharbal - curated Unsplash */}
      <article className="dest-card reveal reveal-d8" itemScope itemType="https://schema.org/TouristAttraction">
        <div className="dest-card-img">
          <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&q=85&fit=crop" alt="Aharbal waterfall Kashmir – cascading waterfall in dense lush forest" loading="lazy" itemProp="photo" />
          <div className="dest-card-overlay"></div>
          <span className="dest-card-badge">💧 Niagara of Kashmir</span>
        </div>
        <div className="dest-card-body">
          <h3 className="dest-card-name" itemProp="name">Aharbal</h3>
          <p className="dest-card-desc" itemProp="description">Often called the "Niagara of Kashmir" — a stunning waterfall cascading through dense forest, perfect for picnics and nature walks.</p>
          <div className="dest-card-meta">📅 Best Time: <strong>April – October</strong></div>
          <a href="/packages" className="dest-card-btn">Explore Destination →</a>
        </div>
      </article>

    </div>
  </div>
</section>

{/* ============================================================
     EXPERIENCES
     ============================================================ */}
<section id="experiences" className="section-py" aria-labelledby="experiences-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '48px' }}>
      <span className="section-label" style={{ color: 'var(--green-300)' }}>Things to Do</span>
      <h2 className="section-title" id="experiences-heading" style={{ color: 'var(--white)' }}>Kashmir Experiences</h2>
      <p className="section-subtitle" style={{ color: 'rgba(255,255,255,.65)' }}>Curated activities and moments that make your Kashmir journey truly unforgettable.</p>
    </div>

    <div className="experiences-scroll reveal" role="list">
      <div className="exp-card active" role="listitem" tabIndex="0">
        <img src="images/hero_dal_lake.jpg" alt="Shikara Ride" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🛶</span>
          <div className="exp-name">Shikara Ride</div>
          <div className="exp-count">Dal Lake & Nagin Lake</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/dest_gulmarg.jpg" alt="Snow Adventures" />
        <div className="exp-card-overlay">
          <span className="exp-icon">❄️</span>
          <div className="exp-name">Snow Adventures</div>
          <div className="exp-count">Skiing & Snowboarding</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/trekking.webp" alt="Mountain Trekking" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🏔️</span>
          <div className="exp-name">Mountain Trekking</div>
          <div className="exp-count">15+ Trek Routes</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/dest_sonamarg.jpg" alt="Camping" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🏕️</span>
          <div className="exp-name">Camping</div>
          <div className="exp-count">Under the Stars</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/dest_pahalgam.jpg" alt="Valley Exploration" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🌲</span>
          <div className="exp-name">Valley Exploration</div>
          <div className="exp-count">Hidden Meadows</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/gallery_mosaic.jpg" alt="Kashmiri Cuisine" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🍵</span>
          <div className="exp-name">Kashmiri Cuisine</div>
          <div className="exp-count">Wazwan & Kahwa</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/dest_srinagar.jpg" alt="Photography Tours" />
        <div className="exp-card-overlay">
          <span className="exp-icon">📸</span>
          <div className="exp-name">Photography Tours</div>
          <div className="exp-count">Pro Guided Tours</div>
        </div>
      </div>
      <div className="exp-card" role="listitem" tabIndex="0">
        <img src="images/hero_tulip.jpg" alt="Sunrise Experiences" />
        <div className="exp-card-overlay">
          <span className="exp-icon">🌅</span>
          <div className="exp-name">Sunrise Experiences</div>
          <div className="exp-count">Dal Lake Sunrise</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============================================================
     WHY US
     ============================================================ */}
<section id="why-us" className="section-py" aria-labelledby="why-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Why Choose Us</span>
      <h2 className="section-title gradient-title" id="why-heading">Why Choose Travel with Anu</h2>
      <p className="section-subtitle">We're not just a travel agency — we're Kashmiris who know every valley, every trail and every hidden gem.</p>
    </div>
    <div className="why-grid">
      <div className="why-card reveal reveal-d1">
        <div className="why-icon">🏔️</div>
        <h3 className="why-title">Local Travel Experts</h3>
        <p className="why-desc">Get recommendations from people who were born and raised in Kashmir. Our guides know the terrain, the seasons and the hidden spots no guidebook mentions.</p>
      </div>
      <div className="why-card reveal reveal-d2">
        <div className="why-icon">🗺️</div>
        <h3 className="why-title">Custom Itineraries</h3>
        <p className="why-desc">Every trip is crafted according to your interests, budget and pace. Luxury houseboat or budget guesthouse — we design it around you.</p>
      </div>
      <div className="why-card reveal reveal-d3">
        <div className="why-icon">✅</div>
        <h3 className="why-title">Verified Experiences</h3>
        <p className="why-desc">We personally inspect every hotel, activity and experience we recommend. No surprises — only quality-assured, carefully selected stays and activities.</p>
      </div>
      <div className="why-card reveal reveal-d4">
        <div className="why-icon">🛡️</div>
        <h3 className="why-title">24/7 Travel Assistance</h3>
        <p className="why-desc">From planning to return — our local team is available round the clock to ensure your Kashmir journey is seamless and stress-free.</p>
      </div>
    </div>
  </div>
</section>

{/* ============================================================
     TRIP PLANNER
     ============================================================ */}
<section id="trip-planner" className="section-py bg-alt" aria-labelledby="planner-heading">
  <div className="container">
    <div className="planner-card reveal">
      <div className="planner-left">
        <h2 className="planner-left-title" id="planner-heading">Build Your Perfect Kashmir Trip</h2>
        <p className="planner-left-desc">Answer a few simple questions and we'll craft a personalized Kashmir itinerary — with destinations, activities, hotels and an estimated budget.</p>
        <div className="planner-features">
          <div className="planner-feature"><div className="planner-feature-icon">📅</div><span>Day-by-day itinerary</span></div>
          <div className="planner-feature"><div className="planner-feature-icon">🏨</div><span>Curated hotel recommendations</span></div>
          <div className="planner-feature"><div className="planner-feature-icon">💰</div><span>Real-time budget estimate</span></div>
          <div className="planner-feature"><div className="planner-feature-icon">🚗</div><span>Transport & transfer guide</span></div>
        </div>
      </div>

      <div className="planner-right" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--green-900)' }}>Plan Your Kashmir Journey</h3>
        <form id="planner-form" onSubmit={handlePlannerSubmit}>
          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="form-label" style={{ color: 'var(--green-900)' }}>Full Name</label>
            <input type="text" className="form-control" id="planner-name" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required />
          </div>

          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--green-900)' }}>Phone Number</label>
              <input type="tel" className="form-control" id="planner-phone" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--green-900)' }}>Email Address</label>
              <input type="email" className="form-control" id="planner-email" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required />
            </div>
          </div>

          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--green-900)' }}>Select Package</label>
              <select className="form-control" id="planner-pkg" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required>
                <option value="" disabled selected></option>
                <option>Kashmir Highlights (5 Days)</option>
                <option>Kashmir Escape (6 Days)</option>
                <option>Kashmir Honeymoon (6 Days)</option>
                <option>Kashmir Adventure (7 Days)</option>
                <option>Custom Itinerary</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--green-900)' }}>No. of Travellers</label>
              <select className="form-control" id="planner-travelers" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required>
                <option value="" disabled selected></option>
                <option>1 Person</option>
                <option>2 Persons (Couple)</option>
                <option>3 - 4 Persons</option>
                <option>5 - 8 Persons</option>
                <option>9+ Persons</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '16px' }}>
            <label className="form-label" style={{ color: 'var(--green-900)' }}>Travel Date</label>
            <input type="date" className="form-control" id="planner-date" style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1' }} required />
          </div>

          <div className="form-group" style={{ marginBottom: '24px' }}>
            <label className="form-label" style={{ color: 'var(--green-900)' }}>Your Message</label>
            <textarea className="form-control" id="planner-msg" rows={3} style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', resize: 'vertical' }} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            {plannerStatus === 'success' ? '✅ Successfully submitted!' : plannerStatus === 'submitting' ? 'Sending...' : 'Send Enquiry — Get Free Quote →'}
          </button>
        </form>

        <div className="itinerary-result" id="itinerary-result" aria-live="polite">
          <h3 style={{ fontWeight: '700', color: 'var(--neutral-900)', marginBottom: '16px', fontSize: '1.1rem' }}>🗺️ Your Kashmir Itinerary</h3>
          <div id="itinerary-days"></div>
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--green-50)', borderRadius: 'var(--radius-md)', border: '1px solid var(--green-100)' }}>
            <div style={{ fontSize: '.85rem', color: 'var(--green-700)', fontWeight: '700', marginBottom: '8px' }}>💰 Estimated Budget</div>
            <div id="itinerary-budget" style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--neutral-900)' }}></div>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>📞 Get Exact Quote</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ============================================================
     DESTINATION GUIDES / BLOG
     ============================================================ */}
<section id="guides" className="section-py" aria-labelledby="guides-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Kashmir Travel Blog</span>
      <h2 className="section-title gradient-title" id="guides-heading">Explore Kashmir Travel Guides</h2>
      <p className="section-subtitle">In-depth guides to help you plan the perfect Kashmir trip — from season tips to hidden gems.</p>
    </div>

    <div className="guides-grid">

      <article className="guide-card reveal reveal-d1">
        <div className="guide-card-img">
          <img src="images/dest_srinagar.jpg" alt="Best places to visit in Kashmir – Srinagar Dal Lake travel guide" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Destinations</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">8 min read</span>
          </div>
          <h3 className="guide-card-title">Best Places to Visit in Kashmir in 2025</h3>
          <p className="guide-card-desc">A complete guide to Kashmir's most stunning destinations — from the iconic Dal Lake to the remote Gurez Valley.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

      <article className="guide-card reveal reveal-d2">
        <div className="guide-card-img">
          <img src="images/dest_gulmarg.jpg" alt="Best time to visit Kashmir – Gulmarg snow winter guide" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Planning</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">6 min read</span>
          </div>
          <h3 className="guide-card-title">Best Time to Visit Kashmir — Month by Month</h3>
          <p className="guide-card-desc">When to go, what to expect — spring blooms, summer meadows, autumn colors or winter snow. A complete seasonal guide.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

      <article className="guide-card reveal reveal-d3">
        <div className="guide-card-img">
          <img src="images/package_honeymoon.jpg" alt="Kashmir honeymoon guide – romantic trip planning for couples" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Honeymoon</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">10 min read</span>
          </div>
          <h3 className="guide-card-title">The Complete Kashmir Honeymoon Guide</h3>
          <p className="guide-card-desc">Romantic Shikara rides, luxury houseboat stays, candlelit dinners in meadows — the ultimate Kashmir honeymoon plan.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

      <article className="guide-card reveal reveal-d4">
        <div className="guide-card-img">
          <img src="images/dest_doodhpathri.jpg" alt="Kashmir in winter – snow adventures and cold weather travel tips" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Seasonal</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">7 min read</span>
          </div>
          <h3 className="guide-card-title">Kashmir in Winter — A Snow Lover's Paradise</h3>
          <p className="guide-card-desc">Everything you need to know about visiting Kashmir in December, January and February — snow activities to packing tips.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

      <article className="guide-card reveal reveal-d5">
        <div className="guide-card-img">
          <img src="images/dest_pahalgam.jpg" alt="Kashmir family trip guide – Pahalgam Betab Valley with kids" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Family</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">9 min read</span>
          </div>
          <h3 className="guide-card-title">Kashmir Family Trip Guide — Tips, Routes & Budget</h3>
          <p className="guide-card-desc">Child-friendly activities, best family hotels, safe routes and fun things to do with kids in Kashmir. Complete planning guide.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

      <article className="guide-card reveal reveal-d6">
        <div className="guide-card-img">
          <img src="images/dest_sonamarg.jpg" alt="Kashmir travel budget guide – cost breakdown for trip planning" loading="lazy" />
        </div>
        <div className="guide-card-body">
          <div className="guide-card-meta">
            <span className="guide-card-cat">Budget</span>
            <span className="guide-card-dot">•</span>
            <span className="guide-card-read">12 min read</span>
          </div>
          <h3 className="guide-card-title">Kashmir Trip Budget — Full Cost Breakdown</h3>
          <p className="guide-card-desc">A realistic breakdown of Kashmir travel costs — flights, hotels, transport, food and activities for budget to luxury travelers.</p>
          <Link to="/guides/kashmir-guide" className="guide-read-btn">Read Guide →</Link>
        </div>
      </article>

    </div>

    <div className="text-center" style={{ marginTop: '48px' }}>
      <Link to="/guides" className="btn btn-outline">Browse All Kashmir Guides →</Link>
    </div>
  </div>
</section>

{/* ============================================================
     INTERACTIVE MAP
     ============================================================ */}
<section id="map" className="section-py bg-alt" aria-labelledby="map-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '48px' }}>
      <span className="section-label">Kashmir Route Map</span>
      <h2 className="section-title gradient-title" id="map-heading">Explore Kashmir's Destinations</h2>
      <p className="section-subtitle">Click any destination on the map to discover what makes it special. Plan your Kashmir route with confidence.</p>
    </div>

    <div className="map-container reveal">
      <div className="map-visual" role="application" aria-label="Interactive Kashmir destination map">
        <div className="map-route-line" aria-hidden="true"></div>
        <div className="map-vehicle">✈️</div>

        <div className="map-pin" style={{ left: '8%', top: '50%' }} tabIndex="0" role="button" aria-label="Srinagar" aria-haspopup="true">
          <div className="map-pin-dot"></div>
          <div className="map-pin-label">Srinagar</div>
          <div className="map-popup" role="tooltip" style={{ animationDelay: '0s' }}>
            <img src="/images/dest_srinagar.jpg" alt="Srinagar" className="map-popup-img" />
            <div className="map-popup-name">🌸 Srinagar</div>
            <div className="map-popup-desc">Dal Lake · Houseboats · Mughal Gardens · Shopping</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '21%', top: '27%' }} tabIndex="0" role="button" aria-label="Gulmarg" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: 'var(--blue-600)' }}></div>
          <div className="map-pin-label">Gulmarg</div>
          <div className="map-popup" style={{ animationDelay: '3s' }}>
            <img src="/images/dest_gulmarg.jpg" alt="Gulmarg" className="map-popup-img" />
            <div className="map-popup-name">❄️ Gulmarg</div>
            <div className="map-popup-desc">Skiing · Gondola · Snow Meadows</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '38%', top: '50%' }} tabIndex="0" role="button" aria-label="Sonamarg" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: 'var(--gold-600)' }}></div>
          <div className="map-pin-label">Sonamarg</div>
          <div className="map-popup" style={{ animationDelay: '6s' }}>
            <img src="/images/dest_sonamarg.jpg" alt="Sonamarg" className="map-popup-img" />
            <div className="map-popup-name">✨ Sonamarg</div>
            <div className="map-popup-desc">Thajiwas Glacier · Zero Point · Trekking</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '52%', top: '73%' }} tabIndex="0" role="button" aria-label="Pahalgam" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: '#16a34a' }}></div>
          <div className="map-pin-label">Pahalgam</div>
          <div className="map-popup" style={{ animationDelay: '9s' }}>
            <img src="/images/dest_pahalgam.jpg" alt="Pahalgam" className="map-popup-img" />
            <div className="map-popup-name">💚 Pahalgam</div>
            <div className="map-popup-desc">Betab Valley · Chandanwari · Lidder River</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '64%', top: '42%' }} tabIndex="0" role="button" aria-label="Doodhpathri" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: '#64748b' }}></div>
          <div className="map-pin-label">Doodhpathri</div>
          <div className="map-popup" style={{ left: 'auto', right: '0', transform: 'none', animationDelay: '12s' }}>
            <img src="/images/dest_doodhpathri.jpg" alt="Doodhpathri" className="map-popup-img" />
            <div className="map-popup-name">🥛 Doodhpathri</div>
            <div className="map-popup-desc">Milky Streams · Alpine Meadows · Wildflowers</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '76%', top: '61%' }} tabIndex="0" role="button" aria-label="Yusmarg" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: '#7c3aed' }}></div>
          <div className="map-pin-label">Yusmarg</div>
          <div className="map-popup" style={{ left: 'auto', right: '0', transform: 'none', animationDelay: '15s' }}>
            <img src="/images/dest_yusmarg.jpg" alt="Yusmarg" className="map-popup-img" />
            <div className="map-popup-name">🌲 Yusmarg</div>
            <div className="map-popup-desc">Pine Forest · Doodhganga River · Ponies</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

        <div className="map-pin" style={{ left: '90%', top: '34%' }} tabIndex="0" role="button" aria-label="Gurez Valley" aria-haspopup="true">
          <div className="map-pin-dot" style={{ background: '#dc2626' }}></div>
          <div className="map-pin-label">Gurez</div>
          <div className="map-popup" style={{ left: 'auto', right: '0', transform: 'none', animationDelay: '18s' }}>
            <img src="/images/package_escape.jpg" alt="Gurez Valley" className="map-popup-img" />
            <div className="map-popup-name">🏕️ Gurez Valley</div>
            <div className="map-popup-desc">Remote · Tribal Culture · Kishanganga River</div>
            <a href="/places-to-visit" className="map-popup-link">Explore →</a>
          </div>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '28px' }}>
        <p style={{ fontSize: '.85rem', color: 'var(--neutral-500)' }}>🖱️ Click any pin for destination details &nbsp;·&nbsp; Route: Srinagar → Gulmarg → Sonamarg → Pahalgam → Doodhpathri → Yusmarg → Gurez</p>
      </div>
    </div>
  </div>
</section>

{/* ============================================================
     TESTIMONIALS
     ============================================================ */}
<section id="testimonials" className="section-py" aria-labelledby="testimonials-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Traveler Stories</span>
      <h2 className="section-title gradient-title" id="testimonials-heading">Stories From Our Travelers</h2>
      <p className="section-subtitle">Real experiences from people who trusted Travel with Anu to plan their dream Kashmir journey.</p>
    </div>

    <div className="testimonials-grid">

      <blockquote className="testi-card reveal reveal-d1" itemScope itemType="https://schema.org/Review">
        <span className="testi-quote" aria-hidden="true">"</span>
        <p className="testi-text" itemProp="reviewBody">We came for a honeymoon and left with a lifetime of memories. The houseboat on Dal Lake was beyond anything we imagined — peaceful, beautiful, and the sunrise was magical. Travel with Anu handled every detail perfectly.</p>
        <div className="stars" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
          <meta itemProp="ratingValue" content="5" />★★★★★
        </div>
        <div className="testi-footer">
          <div className="testi-avatar" aria-hidden="true">RA</div>
          <div>
            <div className="testi-name" itemProp="author">Rohan & Ananya Kapoor</div>
            <div className="testi-meta">Mumbai, Maharashtra</div>
          </div>
        </div>
        <div className="testi-trip">💑 Honeymoon Trip</div>
      </blockquote>

      <blockquote className="testi-card reveal reveal-d2" itemScope itemType="https://schema.org/Review">
        <span className="testi-quote" aria-hidden="true">"</span>
        <p className="testi-text" itemProp="reviewBody">Took my family of four to Gulmarg and Pahalgam. My kids saw snow for the first time — their faces were priceless. Our guide Tariq was incredibly knowledgeable and made us feel safe the entire trip. Highly recommend!</p>
        <div className="stars">★★★★★</div>
        <div className="testi-footer">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,var(--blue-600),var(--blue-400))' }} aria-hidden="true">PS</div>
          <div>
            <div className="testi-name" itemProp="author">Priya Sharma</div>
            <div className="testi-meta">Bangalore, Karnataka</div>
          </div>
        </div>
        <div className="testi-trip">👨‍👩‍👧 Family Trip</div>
      </blockquote>

      <blockquote className="testi-card reveal reveal-d3" itemScope itemType="https://schema.org/Review">
        <span className="testi-quote" aria-hidden="true">"</span>
        <p className="testi-text" itemProp="reviewBody">The Gurez Valley trek was one of the most raw and beautiful experiences of my life. Travel with Anu sorted everything from transport to camping gear. As a solo traveler, I never felt alone or unsafe for a single moment.</p>
        <div className="stars">★★★★★</div>
        <div className="testi-footer">
          <div className="testi-avatar" style={{ background: 'linear-gradient(135deg,#ea580c,#f59e0b)' }} aria-hidden="true">DM</div>
          <div>
            <div className="testi-name" itemProp="author">Daniel Matthews</div>
            <div className="testi-meta">London, UK</div>
          </div>
        </div>
        <div className="testi-trip">🏔️ Adventure Trek</div>
      </blockquote>

    </div>
  </div>
</section>

{/* ============================================================
     GALLERY  — proper Kashmir images
     ============================================================ */}
<section id="gallery" className="section-py bg-alt" aria-labelledby="gallery-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Kashmir Through Our Lens</span>
      <h2 className="section-title gradient-title" id="gallery-heading">Kashmir in Every Frame</h2>
      <p className="section-subtitle">A visual journey through the most breathtaking landscapes, cultural moments and everyday magic of Kashmir.</p>
    </div>

    <div className="gallery-masonry reveal" role="list" aria-label="Kashmir photo gallery">

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Dal Lake houseboats at sunrise">
        <img src="images/dest_srinagar.jpg" alt="Dal Lake Srinagar houseboats and mountains at golden sunrise" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Dal Lake, Srinagar</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Gulmarg snow landscape">
        <img src="images/dest_gulmarg.jpg" alt="Gulmarg snow-covered winter meadow with gondola and Himalayan peaks" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Gulmarg in Winter</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Pahalgam green valley">
        <img src="images/dest_pahalgam.jpg" alt="Pahalgam Lidder river valley lush green forest and mountains" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Pahalgam Valley</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Sonamarg golden meadow">
        <img src="images/dest_sonamarg.jpg" alt="Sonamarg golden meadow with glacier and Himalayan peaks in evening light" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Sonamarg, Meadow of Gold</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Doodhpathri milky stream">
        <img src="images/dest_doodhpathri.jpg" alt="Doodhpathri milky white stream and wildflower alpine meadow" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Doodhpathri, Valley of Milk</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Yusmarg pine forest">
        <img src="images/dest_yusmarg.jpg" alt="Yusmarg alpine meadow with pine forest and wild ponies" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Yusmarg Forest Meadow</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Kashmir Shikara ride">
        <img src="images/hero_dal_lake.jpg" alt="Traditional Shikara ride on Dal Lake Kashmir with flower garlands" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Shikara Ride, Dal Lake</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Kashmir honeymoon sunset">
        <img src="images/package_honeymoon.jpg" alt="Romantic Kashmir sunset on Dal Lake – honeymoon Shikara ride" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Romantic Kashmir Sunset</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Himalayan trekking adventure">
        <img src="images/package_adventure.jpg" alt="Himalayan mountain trekking trail in Kashmir alpine meadows" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Himalayan Trekking</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Sonamarg glacier panorama">
        <img src="images/package_escape.jpg" alt="Sonamarg glacier panorama mountain road Kashmir" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Sonamarg Glacier View</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Kashmir mountain waterfall">
        <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&q=85&fit=crop" alt="Stunning mountain waterfall in Kashmir lush green forest" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Aharbal Waterfall</div></div>
      </div>

      <div className="gallery-item" role="listitem" tabIndex="0" aria-label="Himalayan mountain peaks">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=85&fit=crop" alt="Dramatic Himalayan mountain peaks and alpine landscape" loading="lazy" />
        <div className="gallery-item-overlay"><div className="gallery-item-caption">Himalayan Peaks</div></div>
      </div>

    </div>
  </div>
</section>

{/* Lightbox */}
<div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
  <button className="lightbox-close" id="lightbox-close" aria-label="Close lightbox">✕</button>
  <img src={null} alt="" id="lightbox-img" />
</div>

{/* ============================================================
     NEWSLETTER
     ============================================================ */}
<section id="newsletter" className="section-py" aria-labelledby="newsletter-heading">
  <div className="container">
    <div className="newsletter-inner">
      <span className="section-label" style={{ color: 'var(--green-300)' }}>Stay Inspired</span>
      <h2 className="section-title" id="newsletter-heading" style={{ color: 'var(--white)' }}>Get Kashmir Travel Inspiration</h2>
      <p className="section-subtitle">Travel tips, hidden destinations and exclusive Kashmir offers delivered to your inbox. No spam, ever.</p>
      <form className="newsletter-form" id="newsletter-form">
        <label htmlFor="newsletter-email" style={{ position: 'absolute', left: '-9999px' }}>Email address</label>
        <input type="email" id="newsletter-email" className="newsletter-input" required autoComplete="email" />
        <button type="submit" className="btn btn-gold" id="newsletter-submit">Subscribe ✉️</button>
      </form>
      <p style={{ marginTop: '16px', fontSize: '.8rem', color: 'rgba(255,255,255,.4)' }}>🔒 Your email is safe. Unsubscribe anytime.</p>
    </div>
  </div>
</section>

{/* ============================================================
     FAQ
     ============================================================ */}
<section id="faq" className="section-py" aria-labelledby="faq-heading">
  <div className="container">
    <div className="text-center reveal" style={{ marginBottom: '56px' }}>
      <span className="section-label">Common Questions</span>
      <h2 className="section-title gradient-title" id="faq-heading">Frequently Asked Questions</h2>
      <p className="section-subtitle">Everything you need to know before planning your Kashmir trip.</p>
    </div>

    <div className="faq-grid" itemScope itemType="https://schema.org/FAQPage">
      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">When is the best time to visit Kashmir?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">Kashmir is beautiful year-round. March–May offers famous tulip blooms and pleasant weather. June–September has lush green valleys perfect for trekking. October–November brings stunning autumn foliage. December–February transforms Kashmir into a winter wonderland, ideal for skiing in Gulmarg.</p></div>
      </div>

      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">Is Kashmir safe for tourists?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">Yes, Kashmir is very welcoming to tourists. Millions of visitors travel to Kashmir safely every year. Tourist areas including Srinagar, Gulmarg, Pahalgam and Sonamarg are well-monitored and hospitable. Our local guides are with you throughout the journey, making your trip safe and comfortable.</p></div>
      </div>

      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">What is the Kashmir trip budget for 5 days?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">A 5-day Kashmir trip costs ₹12,000–₹18,000 per person on a budget, ₹18,000–₹35,000 for mid-range and ₹40,000+ for luxury. This typically includes accommodation, houseboat stay, Shikara ride, private transfers, guide, and most meals. Costs vary by travel dates, group size and comfort level.</p></div>
      </div>

      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">Do I need a special permit to visit Kashmir?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">Indian nationals don't need any special permit for most parts of Kashmir. Some areas like Gurez Valley require a Protected Area Permit (PAP) which we arrange for you. International visitors need a valid Indian visa. Our team handles all necessary permits as part of your package.</p></div>
      </div>

      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">Can I customize my Kashmir itinerary?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">Absolutely! Every itinerary at Travel with Anu is fully customizable. Choose your destinations, duration, accommodation type, activities, travel dates and budget. Use our Trip Planner above for instant suggestions, or reach out via WhatsApp for a fully personalized Kashmir trip design.</p></div>
      </div>

      <div className="faq-item" itemScope itemType="https://schema.org/Question">
        <button className="faq-question" aria-expanded="false"><span itemProp="name">What is included in Travel with Anu packages?</span><span className="faq-icon">+</span></button>
        <div className="faq-answer"><p className="faq-answer-text">Standard packages include hotel accommodation, a houseboat stay in Srinagar, Shikara ride, all inter-destination transfers in private vehicles, a local guide, selected meals (usually breakfast and dinner), and all sightseeing per the itinerary. Flights are not included but we assist with booking.</p></div>
      </div>
    </div>
  </div>
</section>

{/* ============================================================
     CONTACT / BOOKING
     ============================================================ */}
<section id="contact" className="section-py bg-alt" aria-labelledby="contact-heading">
  <div className="container">
    <div className="contact-grid">
      <div className="reveal-left">
        <span className="section-label">Get In Touch</span>
        <h2 className="contact-info-title" id="contact-heading">Let's Plan Your Kashmir Trip</h2>
        <p className="contact-info-desc">Share your travel dates and preferences and our Kashmir expert will craft a personalized itinerary with exact pricing within 24 hours.</p>

        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-item-label">Phone & WhatsApp</div>
              <div className="contact-item-value">+91-9419-000-000</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">hello@kashmirsafar.com</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-item-label">Office</div>
              <div className="contact-item-value">Dal Lake Boulevard, Nehru Park, Srinagar, J&K – 190001</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🕐</div>
            <div>
              <div className="contact-item-label">Working Hours</div>
              <div className="contact-item-value">Mon – Sun: 9:00 AM – 8:00 PM IST</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a href="https://wa.me/919419000000" target="_blank" rel="noopener" className="btn btn-primary">💬 WhatsApp Us</a>
          <a href="tel:+919419000000" className="btn btn-outline">📞 Call Us</a>
        </div>
      </div>

      <div className="reveal">
        <div className="contact-form-card">
          <h3 className="form-title">📋 Booking Enquiry</h3>
          <form id="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Full Name *</label>
                <input type="text" className="form-control" id="contact-name" required autoComplete="name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp *</label>
                <input type="tel" className="form-control" id="contact-phone" required autoComplete="tel" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input type="email" className="form-control" id="contact-email" autoComplete="email" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-travel-date">Travel Date</label>
                <input type="month" className="form-control" id="contact-travel-date" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-travelers">No. of Travelers</label>
                <select className="form-control" id="contact-travelers" defaultValue="2 Persons" required>
                  <option>1 Person</option><option>2 Persons</option>
                  <option>3–4 Persons</option><option>5–8 Persons</option><option>9+ Persons</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-trip-type">Trip Type</label>
                <select className="form-control" id="contact-trip-type" required>
                  <option>Honeymoon</option><option>Family Trip</option>
                  <option>Adventure</option><option>Luxury</option><option>Budget</option><option>Solo</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Special Requirements</label>
              <textarea className="form-control" id="contact-message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="contact-submit">
              ✈️ Send Enquiry
            </button>
            <p style={{ textAlign: 'center', marginTop: '14px', fontSize: '.8rem', color: 'var(--neutral-400)' }}>We respond within 2–4 hours during business hours.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</main>

    </>
  );
};

export default Home;
