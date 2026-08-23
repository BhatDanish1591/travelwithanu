import React from "react";
import { Link } from "react-router-dom";

const CancellationPolicy = () => {
  const h2Style = { fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "var(--neutral-900)", marginBottom: "12px", paddingBottom: "8px", borderBottom: "2px solid var(--green-100)" };
  const pStyle = { fontSize: "0.95rem", color: "var(--neutral-600)", lineHeight: 1.85, marginBottom: "12px" };

  const rows = [
    { days: "30+ days before trip", refund: "90% Refund", color: "#16a34a", bg: "#fff" },
    { days: "15 – 29 days before trip", refund: "75% Refund", color: "#65a30d", bg: "#f0fdf4" },
    { days: "7 – 14 days before trip", refund: "50% Refund", color: "#d97706", bg: "#fff" },
    { days: "3 – 6 days before trip", refund: "25% Refund", color: "#ea580c", bg: "#f0fdf4" },
    { days: "0 – 2 days before trip / No-show", refund: "No Refund", color: "#dc2626", bg: "#fff" },
  ];

  return (
    <main>
      <section className="hero-sm" aria-label="Cancellation Policy">
        <div className="hero-bg">
          <img src="/images/dest_pahalgam.jpg" className="active" alt="Pahalgam Kashmir" fetchPriority="high" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-headline">Cancellation &amp;<br /><em style={{ color: "var(--gold)" }}>Refund Policy</em></h1>
          <p className="hero-subtitle">Fair and transparent cancellation terms for your Kashmir holiday</p>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ ...pStyle, background: "#f0fdf4", padding: "16px 20px", borderRadius: "12px", borderLeft: "4px solid var(--green-500)", marginBottom: "36px" }}>
              <strong>Last Updated: August 2026</strong> — We understand plans can change. Our cancellation policy is designed to be fair for both our travellers and our local partner teams who prepare for every trip.
            </p>

            <div style={{ marginBottom: "36px" }}>
              <h2 style={h2Style}>Refund Schedule</h2>
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1.5px solid #bbf7d0", marginTop: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 24px", background: "var(--green-600)", color: "#fff" }}>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Cancellation Timing</span>
                  <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Refund Amount</span>
                </div>
                {rows.map((row, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", background: row.bg, borderBottom: i < rows.length - 1 ? "1px solid #bbf7d0" : "none" }}>
                    <span style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.93rem" }}>{row.days}</span>
                    <span style={{ fontWeight: 800, color: row.color, fontSize: "1rem" }}>{row.refund}</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "How to Cancel",
                content: "To cancel your booking, please notify us in writing via email at hello@travelwithanu.com or via WhatsApp at +91-9419-000-000. The cancellation date will be the date we receive your written notification. Verbal cancellations over a phone call are not accepted."
              },
              {
                title: "Refund Processing",
                content: "Approved refunds will be processed within 5–7 business days and credited to your original payment method (bank account or UPI). We will send you a confirmation email once the refund has been initiated."
              },
              {
                title: "Non-Refundable Items",
                content: "The following items are strictly non-refundable as per government and third-party policies: Amarnath Yatra registration and permit fees, helicopter booking tickets (Baltal/Pahalgam route), forest entry permits, and Gondola tickets (Gulmarg) once issued."
              },
              {
                title: "Rescheduling",
                content: "We offer one free rescheduling of your tour if you notify us at least 15 days before your departure date. Rescheduling is subject to availability of hotels and transport. A second reschedule or rescheduling with less than 15 days notice may incur additional charges."
              },
              {
                title: "Cancellations by Travel with Anu",
                content: "In the rare event that Travel with Anu cancels your tour due to unforeseen circumstances (severe weather, security advisories, natural disasters), you will receive a full 100% refund or the option to reschedule at no extra cost."
              },
              {
                title: "Contact for Cancellations",
                content: "Email: hello@travelwithanu.com | WhatsApp: +91-9419-000-000 | Office hours: 9 AM – 8 PM IST, Monday to Saturday"
              }
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: "32px" }}>
                <h2 style={h2Style}>{s.title}</h2>
                <p style={pStyle}>{s.content}</p>
              </div>
            ))}

            <div style={{ textAlign: "center", marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary">Plan My Trip</Link>
              <Link to="/terms-conditions" className="btn btn-outline">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CancellationPolicy;
