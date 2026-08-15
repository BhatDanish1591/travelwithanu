# KashmirSafar (travelwithanu)

A premium, modern, SEO-friendly Kashmir tour and travel website. This platform features clean visual design, trip discovery, tour packages, destination guides, interactive itineraries, and booking inquiries.

## 🏔️ Tech Stack & Features
- **Frontend:** HTML5, Vanilla CSS3 (custom styling system with tokens & variables), Vanilla JS.
- **Interactions:** Dynamic package filtering, custom day-by-day itinerary generator, image gallery lightboxes, mobile navigation menus, and accordion FAQs.
- **SEO & Semantics:** Structured JSON-LD Schema data (`TravelAgency`, `TouristAttraction`, `BlogPosting`, `FAQPage`), open graph meta tags, canonical links, semantic HTML5 tags.
- **Performance:** Native lazy loading for high-resolution images, optimized animations, and passive scroll listeners.

## 📁 Project Structure
- `index.html` - Homepage with search panel, destinations grid, packages preview, and reviews.
- `destinations.html` - Directory of 8 popular Kashmir destinations and months season calendar.
- `packages.html` - Travel package listing with filterable categories.
- `package-highlights.html` - Tour detail page with tab-based overview, timeline itinerary, inclusions/exclusions, and book form.
- `experiences.html` - Activities list (Trekking, Skiing, Shikara) with difficulty/fitness guide.
- `guides.html` - Blog listing page.
- `guide-detail.html` - Inner blog post article detailing destinations.
- `about.html` - Company bio, mission, team leaders, and tourism credentials.
- `contact.html` - Comprehensive enquiry form and FAQ accordion list.
- `components.js` - Dynamic navbar and footer injector.
- `app.js` - Interactive elements and script events.
- `styles.css` / `page.css` - Custom styling systems.
- `images/` - Directory containing high-res Kashmir landscapes and package photos.

## 🚀 How to Run Locally
Ensure you have Node.js installed, then run:
```bash
npx serve . --listen 3000
```
Then visit: **[http://localhost:3000](http://localhost:3000)**
