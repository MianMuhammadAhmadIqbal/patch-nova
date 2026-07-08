# PatchNova Clone — Frontend Recreation

A pixel-perfect recreation of [PatchNova.com](https://www.PatchNova.com/) built as a learning project.

## Tech Stack

| Tool                 | Purpose                                     |
| -------------------- | ------------------------------------------- |
| React 18 + Vite      | Core framework                              |
| Tailwind CSS 3       | Utility-first styling                       |
| Framer Motion        | Page/component animations                   |
| GSAP + ScrollTrigger | Scroll-driven animations, process timeline  |
| Lenis                | Smooth scroll                               |
| React Icons          | Icon library                                |
| Swiper.js            | Mobile carousels (categories, testimonials) |
| React CountUp        | Animated number statistics                  |
| Split-Type           | Character-level text animations             |
| AOS                  | Scroll reveal fallback                      |

## Project Structure

```
src/
├── components/
│   ├── Navbar/         # Sticky nav with mega-dropdown
│   ├── Hero/           # Full-screen hero with parallax
│   ├── Animations/     # Marquee ticker
│   ├── Services/       # About + services cards (About.jsx, Services.jsx)
│   ├── Categories/     # Packaging grid + mobile swiper
│   ├── Statistics/     # Animated CountUp stats
│   ├── Process/        # GSAP timeline scroll animation
│   ├── Cards/          # Testimonials with swiper
│   ├── CTA/            # Audit section + form
│   └── Footer/         # Multi-column footer
├── data/
│   └── siteData.js     # All site content, categories, process, stats
├── hooks/
│   ├── useLenis.js     # Smooth scroll setup
│   └── useScrollAnimation.js
└── styles/
    └── globals.css     # Tailwind + custom CSS variables
```

## Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features Recreated

### Layout

- ✅ Sticky transparent → frosted glass navbar on scroll
- ✅ Full-screen hero with left text + right packaging illustration
- ✅ Responsive grid: 1 col mobile → 2 col tablet → 3-4 col desktop
- ✅ Max-width 1320px container with responsive padding
- ✅ Section padding system (`py-20 md:py-28 lg:py-36`)

### Design System

- ✅ Color palette: `#1a1a1a` primary, `#c8a96e` gold accent, `#f8f5f0` cream
- ✅ Typography: Playfair Display (display) + Inter (body)
- ✅ Fluid type scale with `clamp()` for hero and section headings
- ✅ Custom button variants: primary, outline, ghost
- ✅ Gold gradient text via CSS `background-clip: text`
- ✅ Subtle grain/noise overlay on backgrounds
- ✅ Border radius system: sm=8px, md=16px, xl=24px, 2xl=32px

### Animations

- ✅ **Hero**: staggered fade-up on mount (Framer Motion)
- ✅ **Hero**: parallax scroll effect on content (useScroll + useTransform)
- ✅ **Hero**: floating badge (GSAP yoyo animation)
- ✅ **Hero**: scroll indicator bounce
- ✅ **Navbar**: slide-in on page load, background on scroll
- ✅ **Navbar**: animated mega-dropdown (AnimatePresence)
- ✅ **Marquee**: infinite horizontal ticker
- ✅ **Categories**: staggered card reveal on scroll
- ✅ **Categories**: card hover lift + glow
- ✅ **Process**: GSAP ScrollTrigger timeline line draw
- ✅ **Process**: staggered step reveal
- ✅ **Stats**: CountUp triggered when section enters viewport
- ✅ **Testimonials**: Swiper carousel on mobile
- ✅ **All sections**: scroll-triggered fade-up (Framer Motion whileInView)

### Responsive

- ✅ Mobile: single-column, Swiper carousels, collapsed nav
- ✅ Tablet: 2-column grids, expanded spacing
- ✅ Desktop: full 3-4 column layouts, side-by-side hero

## Key Design Decisions

1. **Gold accent `#c8a96e`** — matches PatchNova's luxury packaging positioning. Used for labels, CTAs, gradients, and icon backgrounds.

2. **Playfair Display** — serif display type gives the brand premium positioning. Used with italic + gradient for hero emphasis.

3. **Dark categories section** — `bg-primary` (#1a1a1a) creates contrast and lets the colorful category cards pop, matching the original's approach.

4. **SVG packaging illustrations** — hand-coded SVG illustrations (no external images) recreate the packaging visual feel without requiring image assets.

5. **Lenis smooth scroll** — creates the premium feel matching the original site's scroll behavior.

6. **GSAP process timeline** — the vertical line in the process section is animated via ScrollTrigger scrub, drawing as you scroll through the section.
