# Sun Care Hospital & Diagnostic Center Ltd. — Front-End Website

Premium, modern, patient-first landing page for **Sun Care Hospital & Diagnostic Center Ltd.** (A Project by Sunset Kuakata Hotel & Resort Ltd.), located in Bosila Garden City, Mohammadpur, Dhaka-1207.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the site.

### 3. Production Build & Linting
```bash
npm run lint    # Check ESLint compliance
npm run build   # Generate optimized static production build
npm run start   # Run production server
```

---

## 📁 Architecture & File Structure

```
frontend/
├── app/
│   ├── favicon.ico                  # Browser tab icon
│   ├── globals.css                  # Tailwind v4 theme tokens & custom animations
│   ├── layout.tsx                   # Poppins font, SEO metadata, JSON-LD Schema.org
│   ├── page.tsx                     # Main single-page landing layout
│   └── sitemap.ts                   # Dynamic XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx               # Slim contact info bar (phones, address, social)
│   │   ├── Navbar.tsx               # Sticky blurred navbar + mobile slide drawer
│   │   ├── Footer.tsx               # 4-column footer with brand, links & disclaimer
│   │   └── FloatingButtons.tsx      # Mobile "Call Now" pill & Back-to-Top button
│   ├── sections/
│   │   ├── Hero.tsx                 # Proposed project badge, CTAs, building card
│   │   ├── QuickAccess.tsx          # 4-card action strip overlapping hero
│   │   ├── About.tsx                # Mission, heart-hands motif, stat counters
│   │   ├── Departments.tsx          # 8-card medical specialties grid
│   │   ├── Facilities.tsx           # Alternating feature showcases (Labs, ICU, etc.)
│   │   ├── WhyChooseUs.tsx          # 6-card benefits on brand green background
│   │   ├── Doctors.tsx              # Placeholder specialist cards + "coming soon" banner
│   │   ├── AppointmentForm.tsx      # Interactive client-side validated booking form
│   │   ├── Testimonials.tsx         # Patient review cards (placeholder format)
│   │   └── ContactLocation.tsx      # Address, direct call CTAs, Google Map embed
│   └── ui/
│       ├── Button.tsx               # Reusable styled button/link component
│       ├── SectionTag.tsx           # Pill badges for section headers
│       ├── Card.tsx                 # Elevated card wrapper with green-tinted shadow
│       ├── StatCounter.tsx          # Animated in-view stat counter
│       └── WaveDivider.tsx          # SVG wave transition dividers
├── lib/
│   ├── constants.ts                 # Single source of truth: phones, address, stats, links
│   ├── content.ts                   # All user-facing copy structured for English/Bangla
│   └── index.ts                     # Barrel export
├── public/
│   ├── images/
│   │   └── logo.png                 # Official Sun Care Hospital brand logo
│   └── robots.txt                   # Search engine crawl rules & sitemap declaration
└── PLACEHOLDERS.md                  # Comprehensive checklist of items to swap before launch
```

---

## ✏️ How to Edit Content & Replace Placeholders

All website text and contact details are centralized in **two files**:

### 1. Contact Info, Numbers, Links & Data: [`lib/constants.ts`](./lib/constants.ts)
- **Phone Numbers**: Change `CONTACT.phone1` and `CONTACT.phone2` (updates TopBar, Hero, Contact, Footer, and Floating buttons simultaneously).
- **Address**: Edit `ADDRESS` properties.
- **Stats Counters**: Update numbers in `STATS` (e.g., actual bed count, department count).
- **Departments & Facilities**: Edit names and descriptions in `DEPARTMENTS` and `FACILITIES`.
- **Doctors**: Drop in verified doctor profiles into `DOCTORS`.

### 2. Headlines, Paragraphs & Copy: [`lib/content.ts`](./lib/content.ts)
- Contains all section headlines, subheadlines, badges, button texts, and form labels.
- Already architected for future **Bangla (বাংলা) localization**: duplicate the `en` object as `bn` and translate strings.

### 3. Checklist of Required Assets: [`PLACEHOLDERS.md`](./PLACEHOLDERS.md)
Refer to [`PLACEHOLDERS.md`](./PLACEHOLDERS.md) for the complete list of items that require real data before the official hospital launch:
- Real building photo (`public/images/building.jpg`)
- Specific Google Maps pin embed iframe
- Confirmed doctor list & photos
- Backend appointment API integration (see comment in `AppointmentForm.tsx`)

---

## 🎨 Brand Design Tokens

Defined in [`app/globals.css`](./app/globals.css) via Tailwind v4 `@theme inline`:

| Token | Hex | Role |
|---|---|---|
| `--color-brand-green-700` | `#137A3B` | Deep brand green (TopBar, badges, hover) |
| `--color-brand-green-600` | `#1B9A47` | **Primary Brand Color** (buttons, accents) |
| `--color-brand-green-500` | `#3AAE5A` | Medium green |
| `--color-brand-green-400` | `#72BB68` | Leaf green accents |
| `--color-brand-green-100` | `#E6F4EA` | Soft green background tints |
| `--color-brand-red-500`   | `#ED1C24` | Medical emergency red (emergency card & indicators) |
| `--color-brand-sky-50`    | `#F2F9FD` | Airy soft sky blue background |
| `--color-brand-sky-100`   | `#E3F2FB` | Light sky blue accent |
| `--color-ink-900`         | `#0F2A1D` | Deep forest dark ink for text |
| `--color-ink-600`         | `#4A5B52` | Soft charcoal for body copy |
