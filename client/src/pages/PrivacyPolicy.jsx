import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const h2Style = { fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--neutral-900)", marginBottom: "12px", paddingBottom: "8px", borderBottom: "2px solid var(--green-100)" };
  const pStyle = { fontSize: "0.95rem", color: "var(--neutral-600)", lineHeight: 1.85, marginBottom: "12px" };
  const liStyle = { marginBottom: "6px" };

  return (
    <main>
      <section id="hero" className="hero-sm" aria-label="Privacy Policy Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_sonamarg.jpg" className="active" alt="Beautiful landscape of Sonamarg valleys" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">Privacy<br /><em style={{ color: "var(--gold)" }}>Policy</em></h1>
          <p className="hero-subtitle">How we collect, use and protect your personal information</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ ...pStyle, background: "#f0fdf4", padding: "16px 20px", borderRadius: "12px", borderLeft: "4px solid var(--green-500)", marginBottom: "36px" }}>
              <strong>Last Updated: August 2026</strong> — Travel with Anu is committed to protecting your privacy. This policy explains how we handle your personal information.
            </p>

            {[
              {
                title: "1. Information We Collect",
                content: "When you submit an enquiry or booking form, we collect: your full name, phone number, email address, travel preferences (destinations, dates, group size), budget range, travel style, and any special requirements you share with us. We also collect standard website analytics data via cookies."
              },
              {
                title: "2. How We Use Your Information",
                content: "Your information is used to prepare a personalized Kashmir itinerary and pricing proposal, contact you regarding your booking, confirm your tour with local partners (hotels, transport, guides), and improve our website and services."
              },
              {
                title: "3. Information Sharing",
                content: "We never sell, rent, or trade your personal data. We only share necessary information with trusted local service providers (hotels, cab operators, guides) directly involved in fulfilling your booking."
              },
              {
                title: "4. Data Security",
                content: "Our website uses SSL encryption (HTTPS) to protect all data transmitted between your browser and our servers. Access to your information is restricted to authorized Travel with Anu team members only."
              },
              {
                title: "5. Cookies",
                content: "We use essential cookies to ensure our website functions correctly and analytics cookies to understand how visitors use our site. By continuing to use our website, you consent to our use of cookies."
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, please contact us at hello@travelwithanu.com."
              },
              {
                title: "7. Contact Us",
                content: "Travel with Anu, Dal Lake Boulevard, Nehru Park, Srinagar J&K 190001. Email: hello@travelwithanu.com | Phone: +91-6005655257"
              }
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: "32px" }}>
                <h2 style={h2Style}>{s.title}</h2>
                <p style={pStyle}>{s.content}</p>
              </div>
            ))}

            <div style={{ textAlign: "center", marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
