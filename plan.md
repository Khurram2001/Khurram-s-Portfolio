# Portfolio Implementation Plan

> **Purpose:** Single-page Next.js personal portfolio that acts as a high-conversion consultancy engine.  
> **Design System:** [`DESIGN.md`](./DESIGN.md) (Linear Aesthetic)  
> **Content Source:** Resume (to be attached — drives hero copy, experience rows, and metrics)  
> **Status:** Greenfield — scaffold exists; placeholder page only.

---

## 1. Project Goals

| Goal | Success Criteria |
|---|---|
| Establish credibility instantly | Hero + nav communicate role and business value within 3 seconds |
| Prove technical craft | Interactive AI terminal mockup feels like a live product panel |
| Convert visitors to leads | Friction-free path to booking a 15-min strategy call |
| Match Linear aesthetic | Dark canvas, lavender accent used sparingly, hairline borders, no decorative noise |

---

## 2. Architectural Flow (User Journey)

The site structure mirrors a premium software landing page — validation → proof → transaction:

```
┌─────────────────────────────────────────────────────────────────┐
│  1. HOOK          Top Nav + Hero — who I am, what value I bring │
├─────────────────────────────────────────────────────────────────┤
│  2. PROTAGONIST   Interactive AI Terminal Mockup — craft proof  │
├─────────────────────────────────────────────────────────────────┤
│  3. VALUE PROP    3 Pillars (Services) — how I solve problems   │
├─────────────────────────────────────────────────────────────────┤
│  4. EVIDENCE      Experience & Projects — resume-backed impact  │
├─────────────────────────────────────────────────────────────────┤
│  5. CONVERSION    Consultancy Booking — calendar scheduling     │
└─────────────────────────────────────────────────────────────────┘
```

**Scroll anchors:** `Services` → `#services` · `Experience` → `#experience` · `Dashboard` → `#dashboard` · Booking CTAs → `#booking`

---

## 3. Tech Stack

### Current (from `package.json`)

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Radix UI primitives, shadcn-style setup (`components.json`)
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`
- **Forms:** `react-hook-form`, `zod`, `@hookform/resolvers`
- **Calendar:** `react-day-picker`, `date-fns` (for booking mockup)

### To Add

| Package | Purpose |
|---|---|
| `framer-motion` | Section reveals, micro-interactions, terminal streaming animation |
| `geist` or `next/font` (Inter) | Display + text font substitutes per DESIGN.md |

### Design Token Strategy

Map all `DESIGN.md` tokens to Tailwind `@theme` in `app/globals.css`:

```css
@theme inline {
  --color-canvas: #010102;
  --color-surface-1: #0f1011;
  --color-surface-2: #141516;
  --color-surface-3: #18191a;
  --color-primary: #5e6ad2;
  --color-primary-hover: #828fff;
  --color-ink: #f7f8f8;
  --color-ink-muted: #d0d6e0;
  --color-ink-subtle: #8a8f98;
  --color-hairline: #23252a;
  --color-semantic-success: #27a644;
  /* ...remaining tokens from DESIGN.md */
}
```

Fonts: **Inter** (display + body) + **JetBrains Mono** (terminal mockup) as open substitutes.

---

## 4. File & Component Architecture

```
app/
├── layout.tsx              # Fonts, metadata, global providers
├── page.tsx                # Single-page composition (all sections)
├── globals.css             # Design tokens + base styles
└── fonts/                  # Local or next/font config

components/
├── layout/
│   ├── top-nav.tsx         # Sticky header (Section 1)
│   └── section-container.tsx  # Max-width 1280px wrapper
├── sections/
│   ├── hero.tsx            # Section 2
│   ├── ai-dashboard.tsx    # Section 3 — "Protagonist"
│   ├── services.tsx        # Section 4
│   ├── experience.tsx      # Section 5
│   └── booking-cta.tsx     # Section 6
├── ui/
│   ├── button.tsx          # button-primary / secondary variants
│   ├── status-badge.tsx    # Pulse "Available" indicator
│   ├── feature-card.tsx
│   ├── changelog-row.tsx
│   └── cta-banner.tsx
└── motion/
    ├── fade-in-up.tsx      # Reusable motion wrapper
    └── presets.ts          # Shared Framer Motion variants

lib/
├── content.ts              # Resume-parsed content (static data)
├── motion.ts               # Animation presets export
└── utils.ts                # Existing cn() helper

data/
└── resume.json             # Structured resume content (manual parse)
```

---

## 5. Section Specifications

### Section 1: Sticky Navigation (`top-nav`)

| Attribute | Spec |
|---|---|
| **ID** | `#top-nav` (implicit, sticky) |
| **Height** | 56px |
| **Background** | `canvas` (#010102) |
| **Border** | 1px bottom `hairline` (#23252a) |
| **Position** | `sticky top-0 z-50` |

**Layout (desktop):**

| Zone | Content |
|---|---|
| Left | `[Name]` wordmark + `status-badge` with pulse dot in `semantic-success` — *"Available for Q3 Consultancy"* |
| Center | Nav links: `Services` · `Experience` · `Dashboard` |
| Right | `button-primary` — *"Book Strategy Call"* → scrolls to `#booking` |

**Mobile (< 768px):** Hamburger menu; CTA remains visible in header or drawer.

**Component token:** `{components.top-nav}`

---

### Section 2: Hero Canvas (`display-xl`)

| Attribute | Spec |
|---|---|
| **ID** | `#hero` |
| **Padding** | `spacing.section` (96px) vertical |
| **Max width** | 1280px centered |

**Content hierarchy:**

1. **Eyebrow** — `{typography.eyebrow}`, `ink-subtle`, +0.4px tracking  
   > `FULL STACK AI ENGINEERING`

2. **Headline** — `{typography.display-xl}`, weight 600, -3.0px tracking  
   > `Building Intelligent Applications That Scale Business Revenue.`

3. **Subhead** — `{typography.body-lg}`, `ink-muted`  
   > 2-sentence technical summary parsed from resume (TBD from resume attachment).

4. **CTAs:**
   - Primary: `button-primary` — *"Schedule 15-Min Strategy Session"* → `#booking`
   - Secondary: plain text link — *"View Active Systems"* → smooth scroll to `#dashboard`

**Responsive:** `display-xl` scales 80px → ~40px (`display-md`) on mobile.

---

### Section 3: The "Protagonist" Dashboard (`product-screenshot-card`)

| Attribute | Spec |
|---|---|
| **ID** | `#dashboard` |
| **Container** | `surface-1` bg, `rounded-xl` (16px), 1px `hairline` border |
| **Padding** | 24px (`spacing.lg`) |

**Purpose:** Proof of craft — immersive product-grade simulation, not a static image.

**Sub-components:**

| Element | Behavior |
|---|---|
| **Terminal panel** | Mock streaming LLM response or vector DB search — typewriter effect via Framer Motion `animate` on text opacity |
| **Metric tokens** | Mono badges: `Latency: 142ms` · `Token Efficiency: +32%` · `Active RAG Vectors: 1.2M` |
| **Status bar** | Simulated request lifecycle: `INIT` → `RETRIEVE` → `GENERATE` → `COMPLETE` |
| **Code block** | `{typography.mono}` in `surface-3` inset panel |

**Animation rules for terminal:**
- Character reveal: 20–40ms per character (feels real-time, not instant)
- Cursor blink: 1s interval, no bounce
- Metric values: subtle count-up on viewport enter (0.3s max)

**Component token:** `{components.product-screenshot-card}`

---

### Section 4: Service Architecture (`feature-card` Grid)

| Attribute | Spec |
|---|---|
| **ID** | `#services` |
| **Layout** | 3-column grid (desktop) · 2-up tablet · 1-up mobile |
| **Gap** | `spacing.lg` (24px) |

**Columns:**

| # | Title | Body (bullet themes) |
|---|---|---|
| 1 | **Intelligent AI Systems** | RAG pipelines, autonomous agents, semantic routing, vector infrastructure |
| 2 | **Full-Stack Engineering** | High-performance Next.js, secure state management, API design |
| 3 | **Cloud & AI Deployment** | LLM hosting optimization, Docker/Kubernetes, cost reduction engineering |

**Card spec:** `surface-1` bg, `rounded-lg` (12px), 1px `hairline` border, 24px padding, `{typography.card-title}` for headings.

**Component token:** `{components.feature-card}`

---

### Section 5: Experience & Impact Logs (`changelog-row`)

| Attribute | Spec |
|---|---|
| **ID** | `#experience` |
| **Layout** | Linear changelog-style horizontal rows on flat `canvas` |
| **Separator** | 1px bottom `hairline` rule per row |
| **Padding** | 24px vertical per row |

**Row structure:**

```
┌──────────────────────┬────────────────────────────────────────────┐
│  Jan 2024 – Present  │  Led migration of legacy monolith to       │
│  Company Name        │  Next.js micro-frontends. Reduced infra    │
│  Role Title          │  costs 34%. Stack: TypeScript, AWS, K8s.   │
└──────────────────────┴────────────────────────────────────────────┘
```

| Column | Width | Content |
|---|---|---|
| Left | ~30% | Date range, company, role — `ink-subtle` / `caption` |
| Right | ~70% | Impact bullets with metrics — `body`, `ink` |

**Data source:** `data/resume.json` — one object per role:

```typescript
interface ExperienceEntry {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | "Present"
  highlights: string[]  // metric-driven bullets
  stack: string[]
}
```

**Component token:** `{components.changelog-row}`

---

### Section 6: Strategy Booking Node (`cta-banner`)

| Attribute | Spec |
|---|---|
| **ID** | `#booking` |
| **Container** | Full-width `surface-1` or `surface-2`, `rounded-lg`, `spacing.xxl` (48px) padding |

**Content:**

1. **Headline** — `{typography.headline}`  
   > `Let's Map Out Your AI Strategy.`

2. **Subtext** — `{typography.body-lg}`, `ink-muted`  
   > `Book a complimentary 15-minute technical consultation. We'll analyze your current product bottlenecks and map out a direct line to integration.`

3. **Scheduling UI** — Cal.com/Calendly-style mock in `surface-3`:
   - Month/week header
   - Day grid (`react-day-picker`, dark-themed)
   - Time slot pills (selectable, `primary` on selected)
   - Confirm button → external Calendly/Cal.com link (or embed when URL is provided)

**Phase 1:** Styled placeholder with link-out CTA.  
**Phase 2:** Embed real Cal.com/Calendly widget.

**Component token:** `{components.cta-banner}`

---

## 6. Interaction & Animation Manifesto (Framer Motion)

Animations must be **nearly invisible** — quietly luxurious, never distracting.

### Core Rules

| Rule | Constraint |
|---|---|
| No spring bounces | Use cubic-bezier ease curves only |
| Minimal distance | Slide distance: **10px–20px max** |
| Duration caps | **0.3s–0.4s** max per transition |
| Stagger | 0.05s–0.1s between sibling elements |
| Reduced motion | Respect `prefers-reduced-motion` — skip transforms, keep opacity only |

### Preset: Page Reveal (Fade + Micro-rise)

Apply to Hero elements sequentially with staggered delays.

```typescript
// lib/motion.ts
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}
```

### Preset: Section Scroll Reveal

Trigger on viewport enter (`whileInView`, `viewport: { once: true, margin: "-80px" }`).

```typescript
export const sectionRevealVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
}
```

### Preset: Card Hover (Subtle Lift)

```typescript
export const cardHover = {
  rest: { y: 0, borderColor: "var(--color-hairline)" },
  hover: {
    y: -2,
    borderColor: "var(--color-hairline-strong)",
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  },
}
```

### Preset: Status Pulse

CSS-only pulse on the availability dot — no Framer Motion spring.

```css
@keyframes pulse-success {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Preset: Nav Scroll Behavior

- Nav background: add `surface-1` at 80% opacity after 56px scroll (0.2s ease)
- Active nav link: `ink` with `primary` underline (no color fill)

### What NOT to Animate

- Page layout shifts
- Large parallax sections
- Rotating or bouncing icons
- Lavender color transitions on backgrounds
- Infinite looping except terminal cursor blink

---

## 7. Content Model (`lib/content.ts`)

All copy is centralized for easy resume-driven updates.

```typescript
export const siteContent = {
  name: "[Your Name]",           // from resume
  title: "Full Stack AI Engineer",
  availability: "Available for Q3 Consultancy",
  hero: {
    eyebrow: "FULL STACK AI ENGINEERING",
    headline: "Building Intelligent Applications That Scale Business Revenue.",
    subhead: "[2 sentences from resume — TBD]",
  },
  services: [ /* 3 pillar objects */ ],
  experience: [ /* ExperienceEntry[] from resume */ ],
  booking: {
    headline: "Let's Map Out Your AI Strategy.",
    subtext: "Book a complimentary 15-minute technical consultation...",
    calendlyUrl: "[TBD]",
  },
  social: {
    github: "[TBD]",
    linkedin: "[TBD]",
    email: "[TBD]",
  },
}
```

> **Action required:** Attach resume to populate `data/resume.json` and `lib/content.ts`.

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default layout |
| Desktop | 1280px | 3-column grids maintained |
| Tablet | 1024px | Service grid 3 → 2 columns |
| Mobile-Lg | 768px | Nav hamburger; single-column grids |
| Mobile | 480px | `display-xl` → ~40px; stacked changelog rows |

**Touch targets:** CTAs ≥ 40px height; form inputs ≥ 44px on touch.

---

## 9. Implementation Phases

### Phase 0 — Foundation (Day 1)

- [ ] Install `framer-motion`
- [ ] Map `DESIGN.md` tokens to `globals.css` `@theme`
- [ ] Configure fonts (Inter + JetBrains Mono via `next/font`)
- [ ] Update `layout.tsx` metadata and dark canvas body
- [ ] Create `lib/motion.ts` presets
- [ ] Create `section-container.tsx` wrapper

### Phase 1 — Layout Shell (Day 1–2)

- [ ] `top-nav.tsx` — sticky nav, scroll anchors, mobile menu
- [ ] `button.tsx` — primary / secondary / tertiary variants per DESIGN.md
- [ ] `status-badge.tsx` — pulse availability indicator
- [ ] Wire `page.tsx` with empty section placeholders + IDs

### Phase 2 — Hero + Dashboard (Day 2–3)

- [ ] `hero.tsx` — eyebrow, headline, subhead, CTAs with staggered fade-in
- [ ] `ai-dashboard.tsx` — terminal mockup, metric tokens, streaming animation
- [ ] Scroll-to-section behavior for "View Active Systems"

### Phase 3 — Services + Experience (Day 3–4)

- [ ] `services.tsx` — 3-column `feature-card` grid
- [ ] `changelog-row.tsx` + `experience.tsx`
- [ ] Parse resume → `data/resume.json` → render rows
- [ ] Section scroll-reveal animations

### Phase 4 — Booking + Polish (Day 4–5)

- [ ] `booking-cta.tsx` — CTA banner + calendar mockup
- [ ] Connect all "Book" CTAs to `#booking`
- [ ] Footer (minimal — `DESIGN.md` footer token)
- [ ] `prefers-reduced-motion` support
- [ ] Lighthouse / accessibility pass (contrast, focus rings, keyboard nav)

### Phase 5 — Launch (Day 5+)

- [ ] Replace calendar mock with real Cal.com/Calendly embed
- [ ] Final resume copy review
- [ ] SEO metadata, OG image
- [ ] Deploy to Vercel

---

## 10. Accessibility & SEO

| Area | Requirement |
|---|---|
| Color contrast | `ink` on `canvas` — verify WCAG AA |
| Focus states | 2px `primary-focus` outline at 50% opacity on interactive elements |
| Keyboard | All nav links and CTAs focusable; skip-to-content link |
| Semantic HTML | `<header>`, `<main>`, `<section>`, `<footer>` with `aria-labelledby` |
| Metadata | Title, description, OG tags from resume headline |

---

## 11. Design System Quick Reference

### Colors (use sparingly)

| Token | Hex | Use |
|---|---|---|
| `canvas` | #010102 | Page background |
| `surface-1` | #0f1011 | Cards, panels |
| `surface-3` | #18191a | Terminal inset, calendar UI |
| `primary` | #5e6ad2 | CTA buttons, focus rings only |
| `semantic-success` | #27a644 | Availability pulse dot |
| `hairline` | #23252a | 1px borders and dividers |

### Do's

- Reserve lavender for brand mark, primary CTA, focus rings
- Use surface ladder for hierarchy (no shadows)
- Lead with product UI mockup as section protagonist
- Aggressive negative tracking on display type

### Don'ts

- No light mode
- No atmospheric gradients or spotlight cards
- No second chromatic accent
- No pill-rounded CTAs
- No spring/bounce animations

---

## 12. Open Items / Blockers

| Item | Owner | Status |
|---|---|---|
| Resume attachment for copy + experience rows | User | **Pending** |
| Calendly / Cal.com booking URL | User | **Pending** |
| Name + social links | User | **Pending** |
| Real project screenshots (optional Phase 2) | User | Optional |

---

## 13. Page Composition (`app/page.tsx`)

```tsx
export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <AiDashboard />      {/* id="dashboard" */}
        <Services />          {/* id="services" */}
        <Experience />        {/* id="experience" */}
        <BookingCta />        {/* id="booking" */}
      </main>
      <Footer />
    </>
  )
}
```

---

*This plan is the single source of truth for implementation. Update section specs and `lib/content.ts` as resume content is finalized.*
