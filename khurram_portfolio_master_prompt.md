# MASTER PROMPT — Khurram Zaman Portfolio Revamp (Next.js)

---

## ROLE & MINDSET

You are a senior full-stack engineer and UI/UX designer hired to revamp an existing Next.js portfolio repo. You work in a strict **plan → confirm → build** loop. Never write a single line of production code without first laying out a complete implementation plan in numbered steps and waiting for approval. Each build step must be atomic, testable, and committed cleanly.

---

## PHASE 0 — REPO AUDIT (do this first, touch nothing)

1. List every file and folder in the repo tree.
2. Identify what is safe to delete vs. what is a Next.js/config essential.
3. Output a deletion manifest (`DELETE:`), a keep manifest (`KEEP:`), and a new-files manifest (`CREATE:`).
4. Wait for explicit approval before touching anything.

---

## PHASE 1 — DATA LAYER (JSON resume file)

Create `/data/resume.json` from the resume below. Structure it as follows — do not paraphrase, keep exact copy from the resume:

```json
{
  "meta": {
    "name": "Khurram Zaman",
    "title": "Full Stack Developer & AI Integration Engineer",
    "summary": "...",
    "contact": {
      "phone": "+92-305-352-9034",
      "email": "khurramzaman2001@gmail.com",
      "linkedin": "...",
      "github": "...",
      "portfolio": "..."
    }
  },
  "skills": {
    "languages": ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    "frontend": ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    "backend": ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT", "OAuth 2.0"],
    "databases": ["PostgreSQL", "MongoDB", "Firebase Firestore", "Prisma ORM"],
    "cloud": ["AWS (EC2, S3)", "Firebase Hosting", "Docker", "GitHub Actions", "Vercel"],
    "tools": ["Stripe", "Postman", "Jest", "Git", "Google Analytics"]
  },
  "experience": [
    {
      "role": "Full Stack Engineer",
      "company": "Infini8 AI",
      "location": "Remote, England",
      "period": "Nov 2025 – Present",
      "bullets": [
        "Integrated 3+ Generative AI APIs for video, caption, and image generation into a production content pipeline, cutting manual content production time by ~60% for 500+ active paying subscribers.",
        "Built and maintained the React 19 frontend across multiple feature modules, converting Figma designs into responsive production interfaces within an Agile cross-functional team.",
        "Managed Firebase infrastructure with CI/CD pipelines across all production releases, keeping uptime consistently above 99%."
      ]
    },
    {
      "role": "Junior Full Stack Developer",
      "company": "NextGenXolution",
      "location": "Wah Cantt, Pakistan",
      "period": "Aug 2025 – Nov 2025",
      "bullets": [
        "Developed and shipped frontend features across multiple web application modules using React and TypeScript, collaborating within an Agile team on a live client product.",
        "Architected RESTful APIs in Node.js, Express.js, and MongoDB covering auth middleware, CRUD operations, and wrote full API documentation for team-wide use.",
        "Built a media upload pipeline handling image and video processing reliably for 300+ active users."
      ]
    },
    {
      "role": "Freelance Full Stack Developer",
      "company": "Self-Employed",
      "location": "Remote",
      "period": "Feb 2025 – Aug 2025",
      "bullets": [
        "Delivered 4+ full-stack SaaS projects end-to-end for startup and SME clients, handling everything from requirements and system design through to testing and AWS deployment.",
        "Integrated Generative AI and third-party APIs into client platforms, adding intelligent automation features that directly improved monetisation.",
        "Set up and managed AWS infrastructure (EC2, S3) for each client, reducing hosting costs by up to 40% compared to their previous setups."
      ]
    }
  ],
  "projects": [
    {
      "name": "Data Lumio",
      "stack": ["React", "FastAPI", "Firebase", "Stripe", "AWS S3"],
      "url": "https://datalumio.co",
      "bullets": [
        "Built the qualitative and quantitative analysis module as Frontend and AI Integration Engineer, letting users upload CSV/XLSX files and get structured AI insight reports with no code required.",
        "Wired together FastAPI endpoints, AWS S3 for file storage, Firebase Auth for user sessions, and Stripe for subscription billing into a single cohesive end-to-end pipeline.",
        "Cut manual data analysis time by ~70% — from file upload to exportable report in under 3 minutes."
      ]
    },
    {
      "name": "Audit AI",
      "stack": ["React", "Node.js", "MongoDB", "Gemini API"],
      "url": "https://audit-ai-analyzer.vercel.app",
      "bullets": [
        "Built a full-stack smart contract security tool where developers paste Solidity code and get an instant vulnerability report with suggested fixes in a downloadable file.",
        "Integrated Gemini API to detect reentrancy attacks, integer overflow, and access control issues, with a severity-tiered UI (Critical / High / Medium / Low).",
        "Brought audit turnaround from days to under 30 seconds at zero cost."
      ]
    },
    {
      "name": "Maqaam",
      "stack": ["Next.js", "Node.js", "PostgreSQL", "AWS EC2"],
      "url": "https://maqaam.me",
      "bullets": [
        "Built a non-profit community platform for Muslims to find and post local Islamic events, with secure sign-up, map-driven event listings, and an admin panel for moderation.",
        "Implemented geo-pinned event listings on OpenStreetMap, a normalised PostgreSQL schema with geo-filtering, and JWT-secured role-based access.",
        "Launched a free, globally accessible platform serving Muslim communities across multiple countries."
      ]
    },
    {
      "name": "Viva Bot",
      "stack": ["Next.js", "MongoDB", "Stripe"],
      "url": "https://admin.meetingwithteacher.com",
      "bullets": [
        "Contributed to a full-stack research and interview prep tool where users upload PDFs and ask questions against the content, with AI-driven mock interview sessions.",
        "Fixed 15+ bugs across session management, auth flows, and the admin dashboard.",
        "Dropped average load time from ~3.2s to under 2s and reduced session drop-off by ~35%."
      ]
    },
    {
      "name": "PAPU.AI",
      "stack": ["React", "FastAPI", "Firebase", "Stripe"],
      "url": "https://papu.ai",
      "bullets": [
        "Built the frontend and handled AI integrations on a platform where content creators generate images, avatars, videos, and captions from a single workspace.",
        "Integrated multiple Generative AI APIs through FastAPI and wired in Stripe billing across subscription and pay-per-use credit tiers.",
        "Platform launched fully monetised with 200+ paying users in the first month."
      ]
    }
  ],
  "education": {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University of Wah, Punjab, Pakistan",
    "period": "Sep 2021 – Aug 2025",
    "gpa": "3.27 / 4.0",
    "coursework": ["Data Structures & Algorithms", "Database Systems", "Web Engineering", "Software Engineering", "Operating Systems", "Computer Networks"]
  }
}
```

After writing the file, import and validate it renders correctly in a test component before proceeding.

---

## PHASE 2 — TOOLING SETUP

Run these in order. Confirm each succeeds before the next:

```bash
# 1. Shadcn MCP (Cursor integration)
pnpm dlx shadcn@latest mcp init --client cursor

# 2. Lenis smooth scroll
pnpm add @studio-freight/lenis
# (if the above 404s, use the darkroom fork)
pnpm add lenis
```

Create `/lib/lenis.ts` — a singleton Lenis instance exported as a React context provider. Wrap the root layout with it. Every `<a href="#section">` and `next/link` scroll target must route through this provider.

---

## PHASE 3 — DESIGN SYSTEM

### Color Tokens (from Clockwork palette — exact hex values)

```css
:root {
  --color-orange-vivid:   #E56515;  /* primary CTA, accent */
  --color-orange-soft:    #FBA45C;  /* hover states, tags */
  --color-grey-mid:       #919599;  /* secondary text, borders */
  --color-grey-light:     #CDCDCB;  /* dividers, disabled */
  --color-surface:        #F8F8F8;  /* page background, cards */
  --color-ink:            #111111;  /* headings, body text */
  --color-white:          #FFFFFF;  /* nav bg, modals */
}
```

### Typography

- **Display / Hero**: `Inter` (700–900 weight), tracked tight, very large (clamp 56px→96px). Use `font-feature-settings: 'ss01'` for cleaner numerals — metrics and impact numbers must look sharp.
- **Body**: `Inter` (400–500), line-height 1.65, max prose width 68ch.
- **Mono / Code tags**: `JetBrains Mono` (stack badge labels, URLs, code snippets).
- **Eyebrow labels**: `Inter` 500, 11px, letter-spacing 0.15em, ALL CAPS, `--color-grey-mid`.

Load via `next/font/google`. Never use system fonts for display roles.

### Spacing Scale

Use a strict 4px base grid. All spacing values must be multiples of 4. Section padding: `clamp(80px, 10vw, 140px)` top/bottom.

### Border Radius

- Cards: `12px`
- Buttons: `6px`
- Tags/badges: `4px`
- Modals: `16px`

### Motion (Lenis + CSS)

- Scroll: Lenis with `lerp: 0.08`, `duration: 1.2`
- Section reveals: `opacity 0 → 1`, `translateY 24px → 0`, staggered with `Intersection Observer`, 400ms ease-out
- CTA hover: `background-color` 200ms ease, `transform: scale(1.02)` 150ms
- No parallax on text — only on decorative elements
- Respect `prefers-reduced-motion`: wrap all animations in a media query check

### Signature Element

**Animated metric counters in the Hero** — the three key numbers from the resume (700+ users, 5 SaaS platforms, ~60% time saved) count up from 0 on page load using a lightweight JS counter. Each number sits in a large `--color-orange-vivid` numeral above a small grey label. This is the one bold moment; everything else stays disciplined and quiet.

---

## PHASE 4 — PAGE ARCHITECTURE

Build as a single scrollable page (`/app/page.tsx`). All sections get a stable `id` for anchor nav.

### Section Order

```
1. Hero + Nav (fused — nav lives inside the hero viewport)
2. About (client-centric value proposition)
3. Services (what you build for clients)
4. Experience (timeline)
5. Projects (case study cards)
6. Tech Stack (visual skill grid)
7. Testimonials / Social Proof (placeholder-ready)
8. Book a Meeting (cal.com embed)
9. Contact Form
10. Footer
```

---

## PHASE 5 — SECTION SPECS

### 5.1 Hero + Nav (fused)

**Nav behaviour:**
- Inside the hero: transparent background, white/ink text, logo left, links right.
- On scroll past the hero: nav becomes a sticky bar with `--color-white` background, `1px solid --color-grey-light` bottom border, `backdrop-filter: blur(12px)`.
- Mobile: hamburger → full-screen overlay with Lenis-linked anchor links.
- Nav links: `About`, `Services`, `Work`, `Stack`, `Book a Call` (CTA button in `--color-orange-vivid`).

**Hero layout:**
```
┌──────────────────────────────────────────────┐
│  [Nav: Logo ←————————————————→ Links + CTA]  │
│                                              │
│  EYEBROW: Full Stack Dev & AI Engineer       │
│                                              │
│  Headline (2 lines max):                     │
│  "I build SaaS products                      │
│   that people pay for."                      │
│                                              │
│  Sub: 1–2 lines, client-centric value prop   │
│                                              │
│  [View My Work ↓]   [Book a Call →]          │
│                                              │
│  ───────────────────────────────────────     │
│  700+        5          ~60%                 │
│  Active      SaaS       Dev Time             │
│  Users       Products   Saved for Clients    │
└──────────────────────────────────────────────┘
```

Headline copy (use exactly): **"I build SaaS products that people pay for."**
Sub copy: *"Full Stack + AI engineer specialising in React, Next.js, and FastAPI. I take ideas from spec to deployed, monetised product — fast."*

### 5.2 About

Two-column layout: left = a short punchy paragraph written from the client's POV ("Here's what working with me looks like…"), right = a vertical list of 4 differentiators with `--color-orange-vivid` icon dots.

Differentiators:
- End-to-end ownership (design → deploy)
- AI integration that ships to production
- AWS infrastructure with 99%+ uptime
- Fast turnaround, async-friendly, remote-first

### 5.3 Services

3-column card grid. Each card: icon (Lucide), title, 2-line description, a small "→" link. Cards have `--color-surface` bg, `1px solid --color-grey-light` border, `12px` radius, hover lifts with `box-shadow` and left `4px` border animates to `--color-orange-vivid`.

Services:
1. **Full Stack SaaS Development** — React / Next.js frontend + Node.js / FastAPI backend, end-to-end.
2. **AI Feature Integration** — Generative AI APIs wired into existing or new products.
3. **AWS Infrastructure & DevOps** — EC2, S3, CI/CD, 99%+ uptime SLAs.
4. **Stripe Billing & Auth** — Subscription models, usage tiers, secure auth flows.
5. **Performance Optimisation** — Load time, re-renders, Core Web Vitals.
6. **Technical Consulting** — Architecture review, stack selection, code audit.

### 5.4 Experience (Timeline)

Vertical timeline. Left column: year/period label in `--color-orange-vivid` mono font. Right column: role, company, location, bullet points. A vertical `2px` line in `--color-grey-light` connects the nodes. Animate each entry in on scroll.

Data source: `resume.json` → `experience[]`

### 5.5 Projects (Case Studies)

Horizontal scroll on mobile, 2-col masonry on desktop. Each card:
- Project name (large, ink)
- Stack badges (mono font, `--color-surface` bg with orange border)
- 3 bullet impact points
- External link icon → opens URL in new tab

Data source: `resume.json` → `projects[]`

### 5.6 Tech Stack Grid

Group skills by category (Languages, Frontend, Backend, Databases, Cloud, Tools). Each group: eyebrow label, then a wrapping flex row of pill badges. Pills: `--color-surface` bg, `--color-grey-light` border, hover fills to `--color-orange-soft`.

Data source: `resume.json` → `skills`

### 5.7 Testimonials

Placeholder section. 2-column card layout. Each card has a grey avatar circle, quote in italic, name + role below. Add a comment `{/* Replace with real testimonials */}`. This section should render cleanly even with placeholder data.

### 5.8 Book a Meeting (cal.com)

Full-width section with `--color-surface` background. Left: heading "Let's talk about your project", 2–3 lines of copy, and a bullet list of what to expect. Right: embed `cal.com/khurramzaman` inline calendar widget via their embed script.

```tsx
// Cal.com inline embed
<div
  data-cal-link="khurramzaman"
  data-cal-config='{"layout":"month_view"}'
  style={{ width: '100%', height: '600px', overflow: 'scroll' }}
/>
```

Include the Cal.com embed script in `_document` or via `next/script` with `strategy="lazyOnload"`.

### 5.9 Contact Form

Two-column: left = heading + copy ("Prefer async? Drop me a message.") + email address as a styled link. Right = form.

Form fields (all required):
- Name (text)
- Email (email)
- Project type (select: New SaaS, AI Integration, Existing App, Consulting, Other)
- Budget range (select: <$1k, $1k–$5k, $5k–$15k, $15k+, Let's discuss)
- Message (textarea, min 4 rows)
- Submit button: full-width, `--color-orange-vivid` bg, white text, `6px` radius

Use `react-hook-form` + `zod` for validation. On submit, `POST` to `/api/contact` which sends an email via Resend (add a `RESEND_API_KEY` env var placeholder with a comment). Show a success toast via shadcn `<Sonner />` and an error state inline.

### 5.10 Footer

Single row on desktop, stacked on mobile:
- Left: Name + title
- Center: nav links (same as header)
- Right: GitHub, LinkedIn icons + "Available for new projects" badge (green dot + text)

---

## PHASE 6 — COMPONENT CHECKLIST

Generate each as its own file under `/components/`:

```
/components/
  layout/
    Navbar.tsx          ← fused hero/sticky behaviour
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Services.tsx
    Experience.tsx
    Projects.tsx
    TechStack.tsx
    Testimonials.tsx
    BookMeeting.tsx
    ContactForm.tsx
  ui/
    MetricCounter.tsx   ← animated number counter
    ProjectCard.tsx
    ServiceCard.tsx
    TimelineItem.tsx
    SkillBadge.tsx
    SectionLabel.tsx    ← eyebrow text component
  providers/
    LenisProvider.tsx
```

---

## PHASE 7 — PERFORMANCE & QUALITY GATES

Before calling any section "done", verify:

- [ ] Lighthouse Performance ≥ 90 on mobile
- [ ] No layout shift on font load (`font-display: swap`)
- [ ] All images use `next/image` with explicit `width`/`height`
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] `aria-label` on all icon-only buttons
- [ ] Keyboard navigable: Tab order is logical, focus ring visible
- [ ] `prefers-reduced-motion` disables all transitions
- [ ] Mobile breakpoints: 375px, 768px, 1280px, 1440px tested

---

## PHASE 8 — ENV & CONFIG

Create `.env.local.example`:
```
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_CAL_LINK=khurramzaman
```

Add a `/app/api/contact/route.ts` handler that reads `RESEND_API_KEY` and sends form data to `khurramzaman2001@gmail.com`.

---

## EXECUTION RULES (Cursor must follow these at all times)

1. **Plan before code.** Every phase starts with a numbered plan. Do not write production code until the plan is approved.
2. **One phase at a time.** Complete and verify Phase N before starting Phase N+1.
3. **Import from JSON only.** All copy (name, bullets, dates, URLs) must come from `resume.json`. No hardcoded strings in components.
4. **No inline styles.** Use Tailwind utility classes or CSS custom properties only.
5. **shadcn components first.** Before building a custom component, check if shadcn has one (`Button`, `Card`, `Dialog`, `Sonner`, `Select`, `Input`, `Textarea`).
6. **Lenis for all scrolling.** No native `window.scrollTo`. All smooth scroll must go through the Lenis instance.
7. **Mobile-first CSS.** Write base styles for 375px, layer up with `md:` and `lg:` prefixes.
8. **TypeScript strict mode.** No `any`. All props typed with interfaces.
9. **Git commit after each phase.** Commit message format: `feat(phase-N): description`.
10. **Ask before deleting.** Never delete a file without showing the deletion manifest first.

---

*End of master prompt. Begin with Phase 0: repo audit.*
