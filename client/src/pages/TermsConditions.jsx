import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  const h2Style = { fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--neutral-900)", marginBottom: "12px", paddingBottom: "8px", borderBottom: "2px solid var(--green-100)" };
  const pStyle = { fontSize: "0.95rem", color: "var(--neutral-600)", lineHeight: 1.85, marginBottom: "12px" };

  return (
    <main>
      <section id="hero" className="hero-sm" aria-label="Terms and Conditions Hero">
        <div className="hero-bg" id="hero-slider">
          <img src="/images/dest_sonamarg.jpg" className="active" alt="Beautiful landscape of Sonamarg valleys" fetchPriority="high" />
          <img src="/images/dest_gulmarg.jpg" alt="Gulmarg snow mountains" />
          <img src="/images/dest_pahalgam.jpg" alt="Pahalgam valley" />
          <img src="/images/dest_sonamarg.jpg" alt="Sonamarg mountains" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">Terms &amp;<br /><em style={{ color: "var(--gold)" }}>Conditions</em></h1>
          <p className="hero-subtitle">Please read these terms carefully before booking with us</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ ...pStyle, background: "#f0fdf4", padding: "16px 20px", borderRadius: "12px", borderLeft: "4px solid var(--green-500)", marginBottom: "36px" }}>
              <strong>Last Updated: August 2026</strong> — By booking a tour or enquiring through Travel with Anu, you agree to the following terms and conditions.
            </p>

            {[
              {
                title: "1. Agreement to Terms",
                content: "By accessing our website or making a booking with Travel with Anu, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions. These terms apply to all travellers included in your booking."
              },
              {
                title: "2. Booking & Payment",
                content: "A booking is confirmed only upon receipt of an advance token payment. The balance amount is due before the departure date as specified in your booking confirmation. Payment can be made via bank transfer, UPI, or other agreed methods. Bookings without advance payment are held for a maximum of 48 hours."
              },
              {
                title: "3. Pricing",
                content: "All prices are quoted in Indian Rupees (INR) and are subject to change before a booking is confirmed. Once your advance payment is received and booking confirmed in writing, the quoted price is honoured. Prices may vary based on season, group size, accommodation preferences, and specific inclusions."
              },
              {
                title: "4. Traveler Responsibility",
                content: "All travellers must carry valid government-issued photo identification (Aadhaar card, passport, or voter ID). Travellers are responsible for complying with all local laws, regulations, and park/forest entry rules. Travel with Anu is not liable for any losses arising from a traveller's failure to carry required documents."
              },
              {
                title: "5. Our Responsibility",
                content: "Travel with Anu acts as a facilitator and coordinator, arranging accommodation, transportation, and guide services through our network of trusted local partners. While we take every care to ensure quality and reliability, we are not the direct provider of these services and cannot accept liability for the actions or omissions of third-party service providers."
              },
              {
                title: "6. Force Majeure",
                content: "Travel with Anu shall not be liable for any failure or delay in performance caused by circumstances beyond our reasonable control, including but not limited to: adverse weather conditions, natural disasters, earthquakes, floods, government orders, curfews, strikes, or epidemics. In such cases, we will work to reschedule your trip without penalty."
              },
              {
                title: "7. Intellectual Property",
                content: "All content on this website including text, images, logos, and itineraries are the intellectual property of Travel with Anu. Reproduction or redistribution without express written permission is prohibited."
              },
              {
                title: "8. Governing Law",
                content: "These Terms and Conditions are governed by the laws of Jammu and Kashmir, India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Srinagar, J&K."
              },
              {
                title: "9. Contact",
                content: "For any questions regarding these Terms and Conditions, please contact us at hello@travelwithanu.com or call +91-6005655257."
              }
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: "32px" }}>
                <h2 style={h2Style}>{s.title}</h2>
                <p style={pStyle}>{s.content}</p>
              </div>
            ))}

            <div style={{ textAlign: "center", marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
              <Link to="/cancellation-policy" className="btn btn-outline">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
