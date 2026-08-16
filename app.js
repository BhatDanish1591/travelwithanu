/* ============================================================
   Travel with Anu — app.js
   Interactive features, animations & functionality
   ============================================================ */

'use strict';

// ---------- Utilities ----------
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function showToast(msg, duration = 3500) {
  const toast = $('#toast');
  if (!toast) return;
  toast.innerHTML = '✅ ' + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ---------- Navbar Scroll ----------
const navbar = $('#navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = y;

  // Back to top visibility
  const btt = $('#back-to-top');
  if (btt) {
    if (y > 400) btt.classList.add('visible');
    else btt.classList.remove('visible');
  }
}, { passive: true });

// ---------- Back to Top ----------
const bttBtn = $('#back-to-top');
if (bttBtn) {
  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Mobile Hamburger ----------
const hamburger = $('#hamburger');
const mobileMenu = $('#mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  $$('.mobile-link', mobileMenu).forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });
}

// ---------- Scroll Reveal (Intersection Observer) ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

$$('.reveal, .reveal-left').forEach(el => revealObserver.observe(el));

// ---------- Package Filtering ----------
const filterBtns = $$('.filter-btn');
const pkgCards = $$('.pkg-card[data-type]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    pkgCards.forEach(card => {
      const types = card.dataset.type || '';
      if (filter === 'all' || types.includes(filter)) {
        card.style.display = '';
        card.style.animation = 'fadeUp .4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---------- Favourite / Wishlist Toggle ----------
$$('.pkg-card-fav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isActive = btn.classList.toggle('active');
    btn.querySelector('span').textContent = isActive ? '❤️' : '🤍';
    btn.setAttribute('aria-label', isActive ? 'Remove from wishlist' : 'Save to wishlist');
    showToast(isActive ? 'Saved to wishlist!' : 'Removed from wishlist.');
  });
});

// ---------- Experiences Tab ----------
$$('.exp-card').forEach(card => {
  card.addEventListener('click', () => {
    $$('.exp-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// ---------- Trip Planner ----------
const styleChips = $$('.style-chip');
styleChips.forEach(chip => {
  chip.addEventListener('click', () => {
    styleChips.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
  });
});

const itineraryData = {
  honeymoon: {
    days: [
      { dest: 'Srinagar', acts: 'Arrive & check into luxury houseboat. Evening Shikara ride on Dal Lake.', hotel: 'Heritage Palace Houseboat' },
      { dest: 'Srinagar', acts: 'Mughal Garden tour (Shalimar & Nishat). Shankaracharya Temple. Floating market.', hotel: 'Heritage Palace Houseboat' },
      { dest: 'Gulmarg', acts: 'Gondola ride to Aparwath peak (14,000 ft). Snow play. Horse riding in meadow.', hotel: 'Pine Wood Resort Gulmarg' },
      { dest: 'Pahalgam', acts: 'Betab Valley drive. Aru Valley walk. Romantic sunset by Lidder River.', hotel: 'The Royal Pahalgam' },
      { dest: 'Srinagar', acts: 'Free morning for local craft shopping. Afternoon transfer to airport.', hotel: '—' },
    ],
    budget: '₹24,999 – ₹38,000 per couple (2 persons, mid-range hotels)'
  },
  family: {
    days: [
      { dest: 'Srinagar', acts: 'Arrival. Shikara ride. Dal Lake floating market. Local dinner.', hotel: 'Grand Dal View Hotel' },
      { dest: 'Srinagar', acts: 'Mughal Gardens. Zoo & Botanical Park. Laad Bazaar shopping.', hotel: 'Grand Dal View Hotel' },
      { dest: 'Gulmarg', acts: 'Gondola to Phase 1. Snow activities. Kids photography at snowfields.', hotel: 'Snow Leopard Resort' },
      { dest: 'Pahalgam', acts: 'Betab Valley nature walk. Mini amusement. Lidder river picnic.', hotel: 'Pahalgam Valley Resort' },
      { dest: 'Srinagar', acts: 'Craft shopping. Transfer to airport with family memories.', hotel: '—' },
    ],
    budget: '₹15,000 – ₹25,000 per person (family of 4, budget to mid-range)'
  },
  adventure: {
    days: [
      { dest: 'Srinagar', acts: 'Arrive. Equipment check. Briefing. Evening local market.', hotel: 'Trek Lodge Srinagar' },
      { dest: 'Sonamarg', acts: 'Drive to Sonamarg. Trek to Thajiwas Glacier. Camp setup.', hotel: 'Alpine Camp Sonamarg' },
      { dest: 'Sonamarg', acts: 'Zero Point excursion by snow scooter. River crossing. Photography.', hotel: 'Alpine Camp Sonamarg' },
      { dest: 'Gurez Valley', acts: 'Drive to Gurez. Kishanganga river trek. Village cultural interaction.', hotel: 'Gurez Camp' },
      { dest: 'Gulmarg', acts: 'Drive to Gulmarg. Mountain biking. High-altitude meadow run.', hotel: 'Adventure Inn Gulmarg' },
      { dest: 'Gulmarg', acts: 'Gondola to Kongdoori. Advanced skiing / snowboarding. Summit views.', hotel: 'Adventure Inn Gulmarg' },
      { dest: 'Srinagar', acts: 'Debrief. Souvenir shopping. Farewell dinner. Airport transfer.', hotel: '—' },
    ],
    budget: '₹22,000 – ₹36,000 per person (7 days, adventure grade)'
  },
  default: {
    days: [
      { dest: 'Srinagar', acts: 'Arrive. Check-in houseboat. Dal Lake Shikara ride. Welcome dinner.', hotel: 'Dal Lake Houseboat' },
      { dest: 'Srinagar', acts: 'Mughal Gardens tour. Pari Mahal. Chashma Shahi. Shopping.', hotel: 'Dal Lake Houseboat' },
      { dest: 'Gulmarg', acts: 'Gondola ride. Snow / meadow exploration. Sunset at Khilanmarg.', hotel: 'Gulmarg Resort' },
      { dest: 'Pahalgam', acts: 'Betab & Aru Valley. Lidder river walk. Local trout cuisine.', hotel: 'Pahalgam Hotel' },
      { dest: 'Srinagar', acts: 'Departure prep. Last-minute craft shopping. Airport transfer.', hotel: '—' },
    ],
    budget: '₹14,000 – ₹22,000 per person (5 days, mid-range)'
  }
};

const plannerForm = $('#planner-form');
if (plannerForm) {
  plannerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const from = $('#planner-from').value.trim();
    const style = ($('.style-chip.active') || {}).dataset?.style || 'default';
    const days = parseInt($('#planner-days').value) || 5;

    if (!from) {
      alert('Please enter where you are traveling from.');
      $('#planner-from').focus();
      return;
    }

    const data = itineraryData[style] || itineraryData.default;
    const slicedDays = data.days.slice(0, Math.min(days, data.days.length));

    const daysHtml = slicedDays.map((d, i) => `
      <div class="itin-day">
        <div class="itin-day-num">D${i + 1}</div>
        <div class="itin-day-content">
          <div class="itin-day-title">📍 ${d.dest} ${d.hotel !== '—' ? '· 🏨 ' + d.hotel : ''}</div>
          <div class="itin-day-desc">${d.acts}</div>
        </div>
      </div>
    `).join('');

    $('#itinerary-days').innerHTML = daysHtml;
    $('#itinerary-budget').textContent = data.budget;

    const result = $('#itinerary-result');
    result.classList.add('show');
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    showToast('Your Kashmir itinerary is ready!');
  });
}

// ---------- FAQ Accordion ----------
$$('.faq-question').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Close all
    $$('.faq-item').forEach(it => {
      it.classList.remove('open');
      it.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ---------- Hero Search ----------
const heroSearchBtn = $('#hero-search-btn');
if (heroSearchBtn) {
  heroSearchBtn.addEventListener('click', () => {
    const dest = $('#search-destination').value;
    const travelers = $('#search-travelers').value;
    const budget = $('#search-budget').value;

    showToast(`Showing trips to ${dest || 'Kashmir'} for ${travelers}`);

    // Scroll to packages
    const pkgsSection = $('#packages');
    if (pkgsSection) {
      setTimeout(() => pkgsSection.scrollIntoView({ behavior: 'smooth' }), 500);
    }
  });
}

// ---------- Newsletter Form ----------
const newsletterForm = $('#newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#newsletter-email').value.trim();
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    const btn = $('#newsletter-submit');
    btn.textContent = 'Subscribed! ✅';
    btn.disabled = true;
    btn.style.opacity = '.7';
    showToast('You\'re subscribed! Look out for Kashmir travel inspiration in your inbox.');
    $('#newsletter-email').value = '';
  });
}

// ---------- Contact Form ----------
const contactForm = $('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#contact-name').value.trim();
    const phone = $('#contact-phone').value.trim();

    if (!name) {
      alert('Please enter your name.');
      $('#contact-name').focus();
      return;
    }
    if (!phone) {
      alert('Please enter your phone number.');
      $('#contact-phone').focus();
      return;
    }

    const btn = $('#contact-submit');
    btn.textContent = '✅ Enquiry Sent!';
    btn.disabled = true;
    btn.style.background = 'var(--green-700)';

    showToast('Enquiry received! Our team will reach out within 2–4 hours.');

    setTimeout(() => {
      contactForm.reset();
      btn.textContent = '✈️ Send Enquiry';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}

// ---------- Map Pins ----------
$$('.map-pin').forEach(pin => {
  pin.addEventListener('click', (e) => {
    const wasActive = pin.classList.contains('active');
    $$('.map-pin').forEach(p => p.classList.remove('active'));
    if (!wasActive) pin.classList.add('active');
    e.stopPropagation();
  });

  pin.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pin.click();
    }
  });
});

document.addEventListener('click', () => {
  $$('.map-pin').forEach(p => p.classList.remove('active'));
});

// ---------- Gallery Lightbox ----------
const lightbox = $('#lightbox');
const lightboxImg = $('#lightbox-img');
const lightboxClose = $('#lightbox-close');

$$('.gallery-item img').forEach(img => {
  img.parentElement.addEventListener('click', () => {
    lightboxImg.src = img.src.replace(/w=400/, 'w=1200');
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

// ---------- Smooth Anchor Scroll ----------
$$('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (target === '#') return;
    const el = $(target);
    if (el) {
      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ---------- Lazy image loading with native support ----------
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading is supported, nothing to do
} else {
  // Polyfill for older browsers
  const lazyImages = $$('img[loading="lazy"]');
  const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        imgObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imgObserver.observe(img));
}

// ---------- Passive scroll for performance ----------
window.addEventListener('touchstart', () => {}, { passive: true });

// ---------- Active Nav Highlighting ----------
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.style.color = 'var(--gold-400)';
      a.style.fontWeight = '700';
    }
  });
})();

// ---------- Log init ----------
console.log('%c🏔️ Travel with Anu — Your Journey Through Paradise', 'color:#1f6b43; font-size:1.1em; font-weight:bold;');
console.log('%cDesigned & built with ❤️ for Kashmir', 'color:#6b7280;');

// ---------- Hero Slider ----------
const heroImages = $$('#hero-slider img');
if (heroImages.length > 1) {
  let currentHeroIdx = 0;
  setInterval(() => {
    heroImages[currentHeroIdx].classList.remove('active');
    currentHeroIdx = (currentHeroIdx + 1) % heroImages.length;
    heroImages[currentHeroIdx].classList.add('active');
  }, 20000);
}
