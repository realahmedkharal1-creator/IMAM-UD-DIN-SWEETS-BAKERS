# IMAM-UD-DIN SWEETS & BAKERS — Luxury Brand Website & Digital Ordering Platform

A bespoke, production-ready web application designed and built for **IMAM-UD-DIN SWEETS & BAKERS** (Jinnah Chowk, Arifwala, Punjab, Pakistan), tailored for high-converting customer engagement, celebration cake orders, and direct WhatsApp sales.

---

## 🎯 The One-Sentence Pitch to the Business Owner
> *"We built Imam-ud-Din Sweets & Bakers a fast, royal digital storefront that lets Arifwala families customize celebration cakes, explore your pure desi ghee mithai menu, and order directly on WhatsApp in one click."*

---

## ✨ Key Features

1. **Brand Identity & Royal Heritage Design**:
   - Custom color palette: Warm Ochre Gold (`#B45309`), Royal Crimson (`#92400E`), Cream Ivory (`#FAF8F5`), and Dark Slate (`#1C1917`).
   - Distinctive typography: Cinzel display headings, Playfair serif subheadings, and Plus Jakarta Sans body.
   - Urdu calligraphy identity badge (`امام الدین سویٹس اینڈ بیکرز`).

2. **Real-Time Opening Hours & Status Calculator**:
   - Dynamic time calculation based on Pakistan Standard Time (`Asia/Karachi`, UTC+5).
   - Live "Open Now" or "Opens at 07:00 AM" indicator across header, hero, and location cards.
   - Automatic highlighting of the current day in the weekly hours schedule.

3. **Interactive Custom Cake & Gift Box Builder**:
   - Allows customers to pick occasion (Birthday, Wedding, Anniversary, Baby Shower), select signature flavors (Butterscotch Pineapple, Belgian Chocolate Fudge, Red Velvet), choose weight (2 lbs to 8 lbs multi-tier), enter custom piped inscriptions, and select celebration add-ons.
   - Calculates estimated price in real-time and formats a ready-to-send WhatsApp order payload to `0312-6942500`.

4. **Categorized Menu with Live Search**:
   - Interactive tabs: Desi Ghee Mithai, Custom Cakes, Fresh Bakery & Biscuits, Fast Food & Savories, Wedding Gift Hampers.
   - Live instant search filtering with real prices in PKR.
   - 1-Click "Order on WhatsApp" button with pre-filled product name and price.

5. **HD Masonry Photo Gallery & Interactive Lightbox**:
   - Responsive category filter pills.
   - Modal lightbox supporting keyboard navigation (Arrow keys & Escape key) and click outside to close.

6. **Customer Reviews & Social Proof**:
   - Verified 4.6★ rating badge from 350+ Google and Facebook reviews.
   - Testimonial cards featuring authentic quotes in English and Urdu.
   - Direct link to Google Maps listing.

7. **Interactive Location & Map Embed**:
   - Google Maps iframe centered on coordinates `30.2901623, 73.0681054` at Jinnah Chowk.
   - Roadside parking guide and click-to-directions button.

8. **Direct Ordering & Inquiry Form**:
   - Form validation with inline error feedback.
   - Instant conversion into formatted WhatsApp message.
   - Placeholder for backend email wiring (`Formspree` / `Web3Forms`).

9. **Mobile-First UX & Sticky Actions**:
   - Fixed mobile bottom bar with instant "Call Store" (`tel:03126942500`) and "WhatsApp Order" (`https://wa.me/923126942500`).
   - Smooth back-to-top floating button.

---

## 🛠️ Technical Stack

- **Framework**: React 18 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS with custom theme variables
- **Icons**: Lucide React
- **SEO & Structured Data**: JSON-LD `Bakery` / `FoodEstablishment` schema, Open Graph, and Twitter card meta tags

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🌐 How to Deploy

### Option A: Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repo in [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Option B: Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `public/` containing `/* /index.html 200` for SPA fallback.

### Option C: Cloudflare Pages
1. Connect GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`

---

## 📋 Configuration & Hand-Off Notes

| Configuration Item | File Location | Default Setting | How to Change |
|---|---|---|---|
| **Business Phone Numbers** | `src/data/businessData.ts` | `0312-6942500`, `0300-6942500`, `0457-832500` | Update fields in `businessInfo` object |
| **WhatsApp Direct Number** | `src/data/businessData.ts` | `923126942500` | Update `whatsappNumber` field |
| **Menu Items & Pricing** | `src/data/businessData.ts` | Complete categorized array | Add/edit objects in `menuItems` array |
| **Form Endpoint** | `src/components/ContactSection.tsx` | Wireable to Formspree / Web3Forms | Set `action="https://formspree.io/f/YOUR_ID"` |
| **Agency Attribution** | `src/components/Footer.tsx` | `[YOUR AGENCY NAME]` | Replace placeholder text in footer |

---

## 📄 Attribution & License

- Built for **IMAM-UD-DIN SWEETS & BAKERS** (Arifwala, Pakistan).
- Open-source frontend codebase provided under the MIT License.
