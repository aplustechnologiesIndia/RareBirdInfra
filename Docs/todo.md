# Rarebird Infra Website — Development TODO

**Project:** Rarebird Infra Website  
**Version:** 1.0 (Initial Skeleton Build)  
**Stack:** HTML5 · CSS3 · Vanilla JavaScript (No frameworks)

---

## Phase 0 — Project Setup

- [ ] **0.1** Create the root project folder structure as follows:
  ```
  /RrarebirdInfra
    /css
        styles.css
    /js
        main.js
    /assets
        /images
    index.html
    township-1.html
    township-2.html
    blog.html
    blog-detail.html
  ```
- [ ] **0.2** Source and download placeholder images for:
  - Hero background (full-width, high-resolution)
  - 2× Township project images (aerial/architectural)
  - 3–4 Service section images
  - Image showcase (large aerial township view)
  - 3–4 Blog cover thumbnails
  - Township gallery images (for detail pages — at least 4 per township)
- [ ] **0.3** Optimize all images for web (compress, use appropriate resolution)
- [ ] **0.4** Link Google Fonts in all HTML files — load both:
  - **Instrument Serif** (or equivalent serif font) — for headings
  - **Inter** or similar sans-serif — for body/UI text
- [ ] **0.5** Create skeleton HTML boilerplate (shared `<head>` block) to reuse across pages:
  - Correct `charset`, `viewport` meta tags
  - Link to `/css/styles.css`
  - Link to `/js/main.js` (deferred)
  - Apply consistent `<title>` pattern

---

## Phase 1 — Design System (CSS Foundation)

*Build all tokens and utilities first — everything depends on this.*

- [ ] **1.1** Define CSS custom properties (variables) in `:root`:
  - `--color-bg: #F5F5F5`
  - `--color-surface: #FFFFFF`
  - `--color-text-primary: #242424`
  - `--color-text-secondary: (muted grey)`
  - `--font-serif: 'Instrument Serif', Georgia, serif`
  - `--font-sans: 'Inter', sans-serif`
  - `--transition-base: 200ms ease`
  - Spacing scale: `--space-xs` through `--space-xxl`
  - Max container width: `--container-max: 1200px`

- [ ] **1.2** Write CSS reset / base styles:
  - Box-sizing, margin/padding reset
  - `body` base: background `#F5F5F5`, font-family sans-serif, color `#242424`
  - Smooth scroll: `html { scroll-behavior: smooth; }`
  - Link reset, image responsive defaults

- [ ] **1.3** Write layout utilities:
  - `.container` — centered, max-width, horizontal padding
  - `.section` — large vertical padding for section separation
  - Grid helpers: `.grid-2`, `.grid-3`, `.grid-4`
  - Flex helpers: `.flex`, `.flex-center`, `.flex-between`

- [ ] **1.4** Write typography scale:
  - `h1`–`h4` using serif font, large scale
  - `p`, `.text-muted`, `.text-small` using sans-serif
  - Generous line-height on all text
  - Italic serif variant class: `.serif-italic`

- [ ] **1.5** Write button styles:
  - `.btn-primary` — dark background, light text, consistent padding, border-radius
  - `.btn-outline` — bordered, transparent background
  - Hover states using CSS transitions (200–300ms)

- [ ] **1.6** Write card component base styles:
  - `.card` — white surface, rounded corners, overflow hidden
  - `.card-image` — full-width image, fixed aspect ratio
  - `.card-body` — padded content area
  - Hover interaction: subtle box-shadow lift or scale (200ms transition)

- [ ] **1.7** Write form base styles:
  - `.form-group` wrapper
  - `input`, `textarea` — clean border, consistent padding, full-width
  - Focus states — subtle border color change
  - `.btn-submit` styling
  - `.form-success` hidden state / visible state

- [ ] **1.8** Write navbar styles:
  - Fixed top positioning
  - Transparent background (over hero)
  - Solid background once page is scrolled (JS-controlled class)
  - Logo area (left) + nav links (right)
  - Mobile hamburger icon (hidden on desktop)

- [ ] **1.9** Write footer styles:
  - Multi-column layout (logo + links + contact)
  - Neutral/dark background
  - Clear hierarchy for footer links

- [ ] **1.10** Write responsive breakpoints:
  - Mobile (`max-width: 768px`): single-column, collapsible nav
  - Tablet (`max-width: 1024px`): two-column grids
  - Desktop: full multi-column layout
  - Ensure all section layouts collapse gracefully

- [ ] **1.11** ✅ **VALIDATE Phase 1:** Open `styles.css` in browser dev tools, confirm variables load, no syntax errors

---

## Phase 2 — Shared Components (HTML + JS)

*These components are reused across every page.*

- [ ] **2.1** Build the **Navbar component** (to be hand-copied into every HTML page):
  - Logo (text or placeholder image)
  - Navigation links: Home | Townships | Blog | Contact
  - Hamburger menu icon (SVG or Unicode) — hidden on desktop
  - `aria-label`, semantic `<nav>` element

- [ ] **2.2** Build the **Footer component** (to be hand-copied into every HTML page):
  - Logo placeholder
  - Navigation links (same as navbar)
  - Contact details: address, phone, email (all placeholder)
  - Copyright notice
  - Neutral background

- [ ] **2.3** Write **JavaScript — Navbar scroll behavior** (`main.js`):
  - On scroll past threshold: add `.scrolled` class to `<nav>` → apply solid background
  - Remove class when scrolled back to top

- [ ] **2.4** Write **JavaScript — Mobile menu toggle** (`main.js`):
  - Hamburger button toggles `.nav-open` class on `<nav>`
  - Mobile menu expands/collapses with CSS transition
  - Close menu when a nav link is clicked

- [ ] **2.5** Write **JavaScript — Enquiry form handler** (`main.js`):
  - Listen for `submit` event on `.enquiry-form`
  - `preventDefault()` — no actual submission
  - Hide form fields, show `.form-success` message
  - Reset form state after a delay (optional)

- [ ] **2.6** ✅ **VALIDATE Phase 2:** Test navbar scroll behavior, mobile toggle, and form success message in isolation using a temporary test page

---

## Phase 3 — Homepage (`index.html`)

*Build each section in order, top to bottom.*

### 3.1 — Page Scaffolding
- [ ] Create `index.html` with full boilerplate (meta, fonts, stylesheet, script link)
- [ ] Paste shared Navbar component at top of `<body>`
- [ ] Paste shared Footer component at bottom of `<body>`

### 3.2 — Hero Section
- [ ] Structure: `<section class="hero">` with full-viewport height
- [ ] Full-width background image (CSS `background-image`, `cover`, `center`)
- [ ] Dark overlay for text readability (`::before` pseudo-element or overlay `<div>`)
- [ ] Text overlay — left-aligned:
  - Large serif `<h1>` headline (placeholder: e.g., *"Building Communities, Shaping Futures"*)
  - Supporting `<p>` subtext (1–2 sentences)
  - Primary CTA `<a>` button (e.g., *"Explore Our Townships"*, links to `#townships`)
- [ ] **No search bar or filter UI**

### 3.3 — About Section
- [ ] `<section class="about section">` with `.container`
- [ ] Split layout (CSS grid/flex — heading left, content right):
  - Left: Section label + large serif `<h2>` (e.g., *"Who We Are"*)
  - Right: Two short `<p>` paragraphs (placeholder lorem ipsum describing the company)
- [ ] Below split: supporting statistics row (3–4 items — visual emphasis, not the dedicated stats circles)

### 3.4 — Statistics Section
- [ ] `<section class="stats section">` with `.container`
- [ ] 3–4 stat items displayed in circular/soft-shaped containers:
  - **Projects Delivered** — e.g., 12+
  - **Acres Developed** — e.g., 500+
  - **Years of Experience** — e.g., 15+
  - (Optional 4th) **Happy Families** — e.g., 2000+
- [ ] Large numeric value (serif, large font)
- [ ] Minimal label below (sans-serif, muted)
- [ ] Use CSS `border-radius` circles or soft backgrounds

### 3.5 — Services Section
- [ ] `<section class="services section">` with `.container`
- [ ] Section heading: *"What We Do"* or *"Our Services"*
- [ ] Grid of 3–4 `.card` components:
  - Placeholder image (architectural/real estate related)
  - Service title (e.g., *Township Development, Land Acquisition, Infrastructure Planning, Community Design*)
  - Short description — 2–3 sentences placeholder

### 3.6 — Township Showcase Section (`id="townships"`)
- [ ] `<section class="townships section" id="townships">` with `.container`
- [ ] Section heading: *"Our Townships"*
- [ ] 2 township `.card` components:
  - Card 1 → links to `township-1.html`
  - Card 2 → links to `township-2.html`
  - Each card: image, project name, location, short description, CTA button (*"View Project"*)
- [ ] Cards use shared `.card` styles from Phase 1

### 3.7 — Visual Showcase Section
- [ ] `<section class="showcase section">` — full-width (no `.container` constraint)
- [ ] Large, high-quality background image (aerial township view)
- [ ] Optional non-interactive overlay text (e.g., project name or tagline)
- [ ] **No map, no pricing overlay, no interactive elements**

### 3.8 — Blog Preview Section
- [ ] `<section class="blog-preview section">` with `.container`
- [ ] Section heading: *"Latest Insights"* or *"From Our Blog"*
- [ ] 3–4 blog entry items (editorial/text-focused):
  - Blog title (placeholder)
  - Date (placeholder, e.g., *March 2026*)
  - Short excerpt (1–2 sentences)
  - Link: *"Read More"* → links to `blog-detail.html`
- [ ] Minimal image use — editorial text-focused layout
- [ ] End of section: link/button to `blog.html` — *"View All Posts"*

### 3.9 — Call-to-Action Section
- [ ] `<section class="cta section">` with `.container`
- [ ] Centered layout:
  - Serif headline (e.g., *"Ready to Find Your Township?"*)
  - Supporting subtext (1 sentence)
  - Primary CTA button — smooth scroll to `#enquiry` or links to township pages

### 3.10 — Homepage Validation
- [ ] ✅ Open `index.html` in browser
- [ ] All sections visible and in correct order
- [ ] Navbar transparent over hero, becomes solid on scroll
- [ ] Mobile menu toggle works
- [ ] CTA button scrolls to or navigates to townships section
- [ ] Township cards link to correct pages
- [ ] Blog preview links navigate to correct pages
- [ ] No broken image paths
- [ ] No horizontal scroll at any viewport width

---

## Phase 4 — Township Detail Pages

*Build a complete instance for `township-1.html`, then duplicate and adapt for `township-2.html`.*

### 4.1 — Page Scaffolding
- [ ] Create `township-1.html` — full boilerplate, shared navbar, shared footer

### 4.2 — Township Hero Section
- [ ] Full-width background image (different from homepage hero)
- [ ] Dark overlay
- [ ] Text overlay:
  - Project name `<h1>` (e.g., *"Rarebird Greens"*)
  - Location `<p>` (placeholder)
  - Tagline (1 sentence, serif italic)

### 4.3 — Township Overview Section
- [ ] `<section class="township-overview section">` with `.container`
- [ ] Detailed description paragraphs (3–4 placeholder paragraphs)
- [ ] Key highlights as styled unordered list:
  - e.g., *Gated Community, 24/7 Security, Park & Clubhouse, Wide Roads*

### 4.4 — Image Gallery Section
- [ ] `<section class="gallery section">` with `.container`
- [ ] Section heading: *"Project Gallery"*
- [ ] CSS grid layout — at least 4 placeholder images
- [ ] Consistent aspect ratios, rounded corners (`.card` style)
- [ ] **No lightbox or modal required** (static skeleton only)

### 4.5 — Project Details Section
- [ ] `<section class="project-details section">` with `.container`
- [ ] Display the following in a structured layout (cards or list):
  - **Plot Sizes** (placeholder: e.g., *100 sq yd, 200 sq yd, 500 sq yd*)
  - **Pricing** (placeholder: e.g., *Starting from ₹X Lakhs*)
  - **Amenities** (list: park, clubhouse, schools, hospitals, roads)
  - **Location Advantages** (list: proximity to highway, city center, airport)

### 4.6 — Enquiry Form Section
- [ ] `<section class="enquiry section" id="enquiry">` with `.container`
- [ ] Section heading: *"Enquire Now"*
- [ ] Form fields:
  - Name (text input)
  - Phone (tel input)
  - Email (email input)
  - Message (textarea)
- [ ] Submit button: *"Send Enquiry"*
- [ ] On submit: hide form, show `.form-success` message (*"Thank you! We'll be in touch."*)
- [ ] Form uses shared styles from Phase 1, handler from Phase 2

### 4.7 — Duplicate for Township 2
- [ ] Copy `township-1.html` → `township-2.html`
- [ ] Change all references: project name, location, tagline, gallery images
- [ ] Ensure form handler works independently on both pages
- [ ] Update page `<title>` tag

### 4.8 — Township Pages Validation
- [ ] ✅ Open both `township-1.html` and `township-2.html` in browser
- [ ] Navbar, footer present and functional on both
- [ ] All sections render in correct order
- [ ] Gallery images load (no broken paths)
- [ ] Enquiry form → success message on submit
- [ ] Back navigation to homepage works (logo link)
- [ ] Responsive layout on mobile (sections collapse to single column)

---

## Phase 5 — Blog Listing Page (`blog.html`)

- [ ] **5.1** Create `blog.html` — full boilerplate, shared navbar, shared footer
- [ ] **5.2** Page hero strip:
  - Simple page heading: *"Blog & Insights"*
  - Breadcrumb: *Home > Blog*
- [ ] **5.3** Blog listing grid — 4 blog entry cards:
  - Cover image (placeholder)
  - Title (placeholder)
  - Date
  - Short excerpt (2–3 sentences)
  - *"Read More"* link → links to `blog-detail.html`
- [ ] **5.4** Cards use shared `.card` styles
- [ ] **5.5** ✅ **Validate:** All 4 cards render, links to blog detail are correct, no broken images

---

## Phase 6 — Blog Detail Page (`blog-detail.html`)

- [ ] **6.1** Create `blog-detail.html` — full boilerplate, shared navbar, shared footer
- [ ] **6.2** Article hero:
  - Full-width cover image
  - Category label or date
  - Article `<h1>` title (placeholder)
- [ ] **6.3** Article body:
  - 5–7 paragraphs of placeholder body text (lorem ipsum)
  - Proper typographic spacing (`line-height`, `max-width` on text container)
- [ ] **6.4** *"Back to Blog"* link → `blog.html`
- [ ] **6.5** ✅ **Validate:** Article reads cleanly, cover image loads, blog link works

---

## Phase 7 — Cross-Page Navigation & Link Audit

- [ ] **7.1** Verify every navbar link works on every page:
  - Home → `index.html`
  - Townships → `#townships` anchor (or `index.html#townships`)
  - Blog → `blog.html`
  - Contact → `#enquiry` or scroll anchor
- [ ] **7.2** Verify footer links are consistent across all pages
- [ ] **7.3** Verify Township card CTAs on homepage → correct detail pages
- [ ] **7.4** Verify Blog preview *"Read More"* links → `blog-detail.html`
- [ ] **7.5** Verify *"Back"* / breadcrumb links work on detail pages
- [ ] **7.6** Verify logo on every page links back to `index.html`
- [ ] **7.7** Open browser console on every page — confirm zero JavaScript errors

---

## Phase 8 — Responsive Design Polish

- [ ] **8.1** Test homepage on mobile (≤768px):
  - Single-column layout for all grid sections
  - Navbar collapses to hamburger menu
  - Hero text readable, not overflowing
  - Stats, services, townships stack vertically
- [ ] **8.2** Test township detail pages on mobile:
  - Gallery collapses to 1–2 column grid
  - Enquiry form full-width
- [ ] **8.3** Test blog pages on mobile:
  - Blog cards stack to single column
  - Article text readable with proper line length
- [ ] **8.4** Test tablet breakpoint (768px–1024px):
  - 2-column grids where applicable
  - Navigation remains usable
- [ ] **8.5** Fix any overflow or alignment issues found during responsive testing

---

## Phase 9 — Visual Polish & Interaction Details

- [ ] **9.1** Verify all card hover effects work (box-shadow lift, 200ms transition)
- [ ] **9.2** Verify button hover states (200–300ms transition)
- [ ] **9.3** Verify navbar transition on scroll is smooth
- [ ] **9.4** Check all font usage:
  - Headings using serif font
  - Body/UI using sans-serif
  - Italic serif variant applied where appropriate
- [ ] **9.5** Check vertical spacing — sections must have clear separation (generous padding)
- [ ] **9.6** Confirm no cluttered compositions — minimal, uncluttered layout throughout
- [ ] **9.7** Confirm consistent container max-width and margins across all pages
- [ ] **9.8** Run a final check: no placeholder `[object Object]` or broken template strings visible
- [ ] **9.9** Verify no strong accent colors appear — palette restricted to `#F5F5F5`, `#FFFFFF`, `#242424`, and muted greys

---

## Phase 10 — Final Acceptance Checklist

Based on the PRD and tech document acceptance criteria:

- [ ] **10.1** All 5 pages exist and open without error:
  - `index.html`, `township-1.html`, `township-2.html`, `blog.html`, `blog-detail.html`
- [ ] **10.2** Navigation flows correctly between all pages
- [ ] **10.3** Layout aligns with design specification (serif headings, clean sections, card components)
- [ ] **10.4** Placeholder content applied consistently on all pages
- [ ] **10.5** Enquiry form on both township pages displays success message on submit
- [ ] **10.6** No broken links across the site
- [ ] **10.7** No UI inconsistencies (spacing, typography, colors)
- [ ] **10.8** No external dependencies required to run (pure HTML/CSS/JS)
- [ ] **10.9** Zero JavaScript console errors on all pages
- [ ] **10.10** Site is presentable for internal review and client validation

---

## File Deliverables Summary

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `township-1.html` | Township 1 Detail Page |
| `township-2.html` | Township 2 Detail Page |
| `blog.html` | Blog Listing Page |
| `blog-detail.html` | Blog Detail Page |
| `css/styles.css` | All site styles (design tokens, layout, components) |
| `js/main.js` | Navigation toggle, scroll behavior, form handler |
| `assets/images/` | All placeholder images |

---

*End of TODO — Awaiting approval before implementation begins.*
