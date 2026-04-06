# Rarebird Infra — PRD v2.0 Execution Plan (Final)

> **Stack:** HTML · CSS · Vanilla JavaScript (No frameworks, No backend)
> **Status:** ⏳ Awaiting Approval

---

## Final Homepage Section Order (LOCKED)

```
Hero → About Us → Our Team → Projects → Blog → Gallery → Career → Contact Us → Footer
```

---

## Change Summary vs. Previous Plan

| Change | Detail |
|--------|--------|
| ❌ Nav update | Keep existing navigation HTML as-is (no changes) |
| ❌ Stats section | Remove entirely from homepage |
| ❌ Services section | Remove entirely from homepage (not renamed, fully deleted) |
| 🆕 Our Team | Replaces Services slot — positioned after About Us |
| 🆕 Gallery on Homepage | Gallery section added below Projects on homepage (not just a separate page) |
| 🆕 Career on Homepage | Career section added below Gallery on homepage |
| 🆕 Contact Us on Homepage | Contact Us section at the bottom (before footer) |
| 🎨 Design direction | Dark → Light mode (clean, airy, premium) |
| ✏️ Footer links | Updated to reflect new section structure |

---

## Phase 0 — Project Audit & Baseline Understanding

- [ ] **0.1** Review all existing HTML files (index, township-1/2, blog, blog-detail)
- [ ] **0.2** Review `css/styles.css` — note all colour variables, dark backgrounds, section styles
- [ ] **0.3** Review `js/main.js` — understand existing scroll animations and nav toggle
- [ ] **0.4** Map all outdated references: `Rarebird Greens`, `Rarebird Heights`, `Bangalore`, `Hosur`, `Devanahalli`

✅ **Phase 0 Checkpoint:** Clear picture of what exists vs. what the final state must be.

---

## Phase 1 — Design Direction: Dark → Light Mode (`styles.css`)

> Navigation HTML stays untouched. Only CSS/visual treatment changes.

- [ ] **1.1** Update CSS root/global colour variables:
  - Page backgrounds: near-black → off-white / warm white (`#fafaf8`, `#f5f3ef`)
  - Body text: white-on-dark → dark charcoal (`#1a1a1a`, `#2d2d2d`) on light backgrounds
  - Section alternating backgrounds: use light greys (`#f0ede8`, `#fff`)
  - Accent/brand colour: keep warm gold/tone, verify it reads well on light backgrounds
- [ ] **1.2** Update Navbar:
  - Background: white / very light, subtle bottom border
  - Link colours: dark text
  - Scrolled state: soft white shadow
- [ ] **1.3** Update all section card styles → white background, subtle box-shadow, dark text
- [ ] **1.4** Footer: keep dark (deep charcoal/warm black — standard grounding for light-mode sites)
- [ ] **1.5** Hero: remains image-based with dark overlay (acceptable exception)
- [ ] **1.6** Audit all hover states, borders, transitions for light-mode compatibility

✅ **Phase 1 Checkpoint:** Homepage background is light/white. Navbar is light. Cards are white with dark text. No section looks like a dark website (except hero image overlay and footer).

---

## Phase 2 — Homepage Restructure (`index.html`)

> Rebuild the homepage to match the final locked section order exactly.

### 2.1 REMOVE: Statistics Section

- [ ] **2.1.1** Delete the entire `<section class="stats" id="stats">` block from `index.html`
- [ ] **2.1.2** Remove all stat CSS (`.stats`, `.stats__grid`, `.stat-card`, `.stat-card__number`, `.stat-card__label`) from `styles.css`
- [ ] **2.1.3** Verify no visual gap or layout break after removal

### 2.2 REMOVE: Services Section

- [ ] **2.2.1** Delete the entire `<section id="services">` block from `index.html`
- [ ] **2.2.2** Remove all services-related CSS (`.services__header`, `.services__grid`) from `styles.css`
- [ ] **2.2.3** Verify no visual gap or layout break after removal

### 2.3 Hero Section

- [ ] **2.3.1** Keep exactly ONE CTA button → e.g. `Explore Our Projects` → `#projects`
- [ ] **2.3.2** Remove second CTA button (the `Our Story` transparent button)
- [ ] **2.3.3** Update hero `href` from `#townships` → `#projects`
- [ ] **2.3.4** Keep headline, subtext, and background image as-is

### 2.4 About Us Section

- [ ] **2.4.1** Update H2 heading to `About Us`
- [ ] **2.4.2** Remove `"Who We Are"` section-label and `"A Legacy Built on Visionary Land"` subheading
- [ ] **2.4.3** Replace ALL body text with the following exact client-approved copy:

  > Welcome to Rare Bird Infra Pvt. Ltd., where vision meets luxury in real estate.
  >
  > Based in Lucknow, we specialize in premium plots, villas, and township developments designed to offer not just a property, but a refined lifestyle. With over a decade of experience in the real estate industry, we have built a strong reputation for trust, quality, and excellence.
  >
  > At Rare Bird Infra, we understand that every investment is a significant decision. That's why we focus on delivering carefully planned projects, transparent dealings, and complete customer satisfaction. Our expertise lies in identifying prime locations and transforming them into thriving residential spaces that combine comfort, connectivity, and long-term value.
  >
  > Driven by a passion for innovation and a commitment to luxury living, we aim to redefine modern real estate standards in Lucknow. Whether you are looking for a dream home or a smart investment opportunity, Rare Bird Infra Pvt. Ltd. is your trusted partner in building a better future.
  >
  > Rare Bird Infra Pvt. Ltd. — Where Luxury Takes Flight.

### 2.5 Our Team Section (NEW — positioned after About Us)

- [ ] **2.5.1** Add `<section id="our-team">` **directly after** the About Us section
- [ ] **2.5.2** Section heading: `"Our Team"`
- [ ] **2.5.3** CSS grid of 3–4 placeholder team member cards
- [ ] **2.5.4** Each card: portrait image (Unsplash) + Name + Role (placeholder data acceptable)
- [ ] **2.5.5** Light-mode styling: white cards, soft shadow, dark text

### 2.6 Projects Section (positioned after Our Team)

- [ ] **2.6.1** Rename section `id` from `townships` → `projects`
- [ ] **2.6.2** Update H2 → `"Our Projects"`
- [ ] **2.6.3** Remove section-label `"Featured Developments"`
- [ ] **2.6.4** Add intro paragraph below heading (exact client-approved copy):

  > At Rare Bird Infra Pvt. Ltd., we specialize in developing premium villas and well-planned plotting projects in prime locations across Lucknow.
  >
  > Our focus is on delivering high-quality construction, modern design, and secure investments. We are also expanding into large-scale township developments, offering a complete lifestyle with modern amenities and seamless connectivity.
  >
  > Luxury, trust, and excellence define every project we create.

- [ ] **2.6.5** Replace project card 1:
  - Name: **Rarebird Villas**, Location: **📍 Lucknow**
  - Short description, CTA: `"View Details"` → `project-rarebird-villas.html`
- [ ] **2.6.6** Replace project card 2:
  - Name: **Oriyana Enclave**, Location: **📍 Lucknow**
  - Short description, CTA: `"View Details"` → `project-oriyana-enclave.html`
- [ ] **2.6.7** Update card images (Unsplash, North India / luxury real estate)

### 2.7 Blog Section (positioned after Projects)

- [ ] **2.7.1** Keep existing blog preview layout and content
- [ ] **2.7.2** Ensure light-mode styling applied (white/off-white background, dark text)
- [ ] **2.7.3** Verify "View All Posts" link still points to `blog.html`

### 2.8 Gallery Section on Homepage (NEW — positioned after Blog)

- [ ] **2.8.1** Add `<section id="gallery">` after the Blog section
- [ ] **2.8.2** Section heading: `"Gallery"`
- [ ] **2.8.3** CSS image grid: 6–9 Unsplash real estate/architecture images
- [ ] **2.8.4** Clean spacing, optional hover zoom on images
- [ ] **2.8.5** Add a `"View All"` link at the bottom → `gallery.html`
- [ ] **2.8.6** Light-mode background

### 2.9 Career Section on Homepage (NEW — positioned after Gallery)

- [ ] **2.9.1** Add `<section id="career">` after the Gallery section
- [ ] **2.9.2** Section heading: `"Careers"`
- [ ] **2.9.3** Insert exact client-approved body copy:

  > At Rare Bird Infra Pvt. Ltd., we believe our people are the foundation of our success. We are always looking for passionate, driven, and talented individuals who want to grow with us in the dynamic world of real estate.
  >
  > We offer a professional work environment, growth opportunities, and a chance to be part of premium projects that shape modern living.
  >
  > If you are ready to build your career with us, we would love to hear from you.

- [ ] **2.9.4** Add a single CTA button `"Apply Now"` → links to `career.html`
- [ ] **2.9.5** Light-mode styling

### 2.10 Contact Us Section (positioned after Career — before Footer)

- [ ] **2.10.1** Rename existing CTA section → proper `id="contact"` with heading `"Contact Us"`
- [ ] **2.10.2** Single clean CTA button only (remove second enquiry button if present)
- [ ] **2.10.3** Remove all old township references from heading/body text
- [ ] **2.10.4** Keep clean layout — no clutter

✅ **Phase 2 Checkpoint:**
- Stats section: gone ✓
- Services section: gone ✓
- Hero: 1 CTA button ✓
- Section order on homepage matches: **Hero → About Us → Our Team → Projects → Blog → Gallery → Career → Contact Us** ✓
- About Us, Projects, Careers: exact client copy ✓

---

## Phase 3 — Footer Update (`index.html` + all pages)

> Update footer navigation links to reflect new homepage section structure and new pages.

- [ ] **3.1** Update footer **"Navigation"** column links:
  - `Home` → `index.html`
  - `About Us` → `index.html#about`
  - `Our Team` → `index.html#our-team`
  - `Projects` → `index.html#projects`
  - `Blog` → `blog.html`
  - `Gallery` → `gallery.html`
  - `Career` → `career.html`
  - `Contact Us` → `index.html#contact`
  - Remove: `Townships` link
- [ ] **3.2** Update footer **"Projects"** column:
  - `Rarebird Villas` → `project-rarebird-villas.html`
  - `Oriyana Enclave` → `project-oriyana-enclave.html`
  - Remove: `Enquire` link, `Rarebird Greens`, `Rarebird Heights`
- [ ] **3.3** Update footer contact address → Lucknow placeholder (remove Brigade Road, Bangalore)
- [ ] **3.4** Apply identical footer to: `project-rarebird-villas.html`, `project-oriyana-enclave.html`, `blog.html`, `blog-detail.html`, `career.html`, `gallery.html`

✅ **Phase 3 Checkpoint:**
- Footer nav has all 8 links pointing correctly
- No old project names or Bangalore address in footer
- Footer is consistent across all pages

---

## Phase 4 — Project Detail Pages

### 4.1 Rename Files

- [ ] **4.1.1** Rename `township-1.html` → `project-rarebird-villas.html`
- [ ] **4.1.2** Rename `township-2.html` → `project-oriyana-enclave.html`
- [ ] **4.1.3** Update ALL href references to old filenames across every HTML file

### 4.2 Rarebird Villas (`project-rarebird-villas.html`)

- [ ] **4.2.1** Hero: Large image, "Rarebird Villas", Location: Lucknow
- [ ] **4.2.2** Overview: Description + key highlights list
- [ ] **4.2.3** Gallery: 4–6 image grid
- [ ] **4.2.4** Details: Villa sizes, pricing placeholder, amenities list, Lucknow location advantages
- [ ] **4.2.5** Enquiry Form (`id="enquiry"`): Name, Phone, Email, Message → success message on submit (no backend, no redirect)
- [ ] **4.2.6** Light-mode styling throughout
- [ ] **4.2.7** Updated footer (Phase 3)

### 4.3 Oriyana Enclave (`project-oriyana-enclave.html`)

- [ ] **4.3.1** Hero: Large image, "Oriyana Enclave", Location: Lucknow
- [ ] **4.3.2** Overview: Description + key highlights list
- [ ] **4.3.3** Gallery: 4–6 image grid
- [ ] **4.3.4** Details: Plot sizes, pricing placeholder, amenities, Lucknow location advantages
- [ ] **4.3.5** Enquiry Form: Name, Phone, Email, Message → success message on submit
- [ ] **4.3.6** Light-mode styling throughout
- [ ] **4.3.7** Updated footer (Phase 3)

✅ **Phase 4 Checkpoint:** Both pages load, show Lucknow, no old project names anywhere, forms work, footer updated.

---

## Phase 5 — New Standalone Pages

### 5.1 Career Page (`career.html`)

- [ ] **5.1.1** Create from scratch (copy nav/footer from `index.html`)
- [ ] **5.1.2** Light-mode background, dark text
- [ ] **5.1.3** Hero/Banner: "Careers at Rare Bird Infra Pvt. Ltd."
- [ ] **5.1.4** Content heading: `"Careers"` + exact client-approved body copy (same as homepage Career section)
- [ ] **5.1.5** Career Application Form: `Name`, `Email ID`, `Contact`, `Job Role` → success message on submit, hides form, no backend
- [ ] **5.1.6** `<title>`: `Careers — Rare Bird Infra Pvt. Ltd.`
- [ ] **5.1.7** Updated footer (Phase 3)

### 5.2 Gallery Page (`gallery.html`)

- [ ] **5.2.1** Create from scratch (copy nav/footer from `index.html`)
- [ ] **5.2.2** Light-mode background
- [ ] **5.2.3** Banner heading: `"Gallery"`
- [ ] **5.2.4** Full image grid: 12–16 Unsplash real estate / architecture images, CSS grid, clean spacing, hover zoom
- [ ] **5.2.5** `<title>`: `Gallery — Rare Bird Infra Pvt. Ltd.`
- [ ] **5.2.6** Updated footer (Phase 3)

✅ **Phase 5 Checkpoint:** Both pages load, light-mode applied, forms work, footers updated, nav intact.

---

## Phase 6 — Content Replacement & Consistency Sweep

- [ ] **6.1** Brand name → `Rare Bird Infra Pvt. Ltd.` in ALL body copy (all files)
- [ ] **6.2** All location references → **Lucknow** (remove `Bangalore`, `Devanahalli`, `Hosur`, `Tamil Nadu`, `Brigade Road`)
- [ ] **6.3** Remove all `lorem ipsum` from non-blog visible sections
- [ ] **6.4** Remove all old project names (`Rarebird Greens`, `Rarebird Heights`)
- [ ] **6.5** Confirm no marketplace UI (search bars, filters) exists anywhere
- [ ] **6.6** Update `<title>` tags on all pages to correct brand name + page name

✅ **Phase 6 Checkpoint:** 0 file-search results for `Rarebird Greens`, `Rarebird Heights`, `Bangalore`, `Devanahalli`, `Hosur`, `lorem ipsum`.

---

## Phase 7 — UI Cleanup

- [ ] **7.1** Hero: Remove "Our Story" second CTA — ONE button only
- [ ] **7.2** Replace all `#townships` anchor hrefs with `#projects` across all files
- [ ] **7.3** Remove the Visual Showcase section (`<section class="showcase">`) or update its copy if it contains old/township text
- [ ] **7.4** Audit every page for: duplicate CTAs, orphaned elements, placeholder UI
- [ ] **7.5** Remove dead CSS: `.services__*`, `.stats`, `.stat-card*`, `.township-card` (if unused), `.showcase` (if removed)

✅ **Phase 7 Checkpoint:** No extra buttons, no dead anchors, no orphaned sections, no dead CSS rules.

---

## Phase 8 — CSS Additions (`styles.css`)

- [ ] **8.1** **Our Team section:**
  - `.team-section` — section wrapper, light background
  - `.team__grid` — responsive CSS grid (4 cols desktop, 2 tablet, 1 mobile)
  - `.team-card` — white card, rounded corners, subtle shadow
  - `.team-card__img` — circular portrait, `object-fit: cover`
  - `.team-card__name` — bold, dark
  - `.team-card__role` — muted grey
- [ ] **8.2** **Homepage Gallery section:**
  - `.gallery-section` — section wrapper
  - `.gallery-section__grid` — CSS grid (`repeat(auto-fill, minmax(280px, 1fr))`)
  - `.gallery-section__item img` — `width:100%; height:220px; object-fit:cover;` + hover scale
  - `"View All"` link row below grid
- [ ] **8.3** **Homepage Career section:**
  - `.career-section` — light or subtle accent background
  - `.career-section__content` — max-width constrained prose
  - `.career-section__cta` — single button styled
- [ ] **8.4** **Career standalone page:**
  - `.career-form`, `.form-group`, `.form-input`, `.form-textarea` — clean light form
  - `.success-message` — hidden by default, visible on submit
- [ ] **8.5** **Gallery standalone page:**
  - `.gallery-page__grid` — larger grid for full page (more images)
  - `.gallery-page__item img` — hover zoom
- [ ] **8.6** All new styles responsive at `768px` and `480px`
- [ ] **8.7** All new styles use existing font family, color, and spacing tokens

✅ **Phase 8 Checkpoint:** All new sections render correctly and look premium on desktop and mobile.

---

## Phase 9 — JavaScript Updates (`js/main.js`)

- [ ] **9.1** Add new sections to the Intersection Observer (fade-in): `#our-team`, `#gallery`, `#career`, gallery items, team cards
- [ ] **9.2** Add `fade-in` classes to all new section elements in HTML
- [ ] **9.3** **Enquiry form handler** (both project pages):
  - `e.preventDefault()` → validate all fields non-empty → show `.success-message` → optionally hide form
- [ ] **9.4** **Career form handler** (`career.html`):
  - Same pattern as 9.3
- [ ] **9.5** Verify mobile nav hamburger toggle still works (nav HTML unchanged)
- [ ] **9.6** Verify smooth scroll works to all new section anchors: `#our-team`, `#projects`, `#gallery`, `#career`, `#contact`

✅ **Phase 9 Checkpoint:** All 3 forms work. Scroll animations fire on all new sections. Mobile nav intact.

---

## Phase 10 — Final Testing & Polish

### 10.1 Section Order Verification (Homepage)
- [ ] Open `index.html` and scroll top to bottom — verify exact order:
  - Hero → About Us → Our Team → Projects → Blog → Gallery → Career → Contact Us → Footer

### 10.2 Link Audit
- [ ] Every footer link → correct destination, no 404
- [ ] Project card "View Details" buttons → correct project pages
- [ ] All internal anchors (`#about`, `#our-team`, `#projects`, `#blog`, `#gallery`, `#career`, `#contact`)
- [ ] `"View All"` in homepage Gallery → `gallery.html`
- [ ] `"Apply Now"` in homepage Career section → `career.html`

### 10.3 Content Final Check
- [ ] About Us = exact client copy (ending "Where Luxury Takes Flight.")
- [ ] Projects intro = exact client copy (ending "Luxury, trust, and excellence define every project we create.")
- [ ] Career text = exact client copy (ending "we would love to hear from you.") — same on homepage + `career.html`
- [ ] Project names = only `Rarebird Villas` + `Oriyana Enclave`
- [ ] All locations = `Lucknow`
- [ ] Stats section: completely absent
- [ ] Services section: completely absent

### 10.4 Form Testing
- [ ] Enquiry form on `project-rarebird-villas.html` → success message appears
- [ ] Enquiry form on `project-oriyana-enclave.html` → success message appears
- [ ] Career form on `career.html` → success message appears and form hides
- [ ] Empty field validation on all 3 forms

### 10.5 Responsive Testing
- [ ] Homepage at 1440px, 1024px, 768px, 375px
- [ ] Both project pages at same breakpoints
- [ ] Career page at same breakpoints
- [ ] Gallery page at same breakpoints
- [ ] Mobile nav opens/closes on all pages

### 10.6 Light Mode Visual QA
- [ ] No dark section backgrounds except: hero image overlay, footer
- [ ] All body text dark on light — readable contrast
- [ ] Navbar is light/white
- [ ] Cards are white with subtle shadow

### 10.7 Final Acceptance Checklist
- [ ] ✅ Nav untouched (no structural changes)
- [ ] ✅ Stats section fully removed
- [ ] ✅ Services section fully removed
- [ ] ✅ Homepage section order correct (Hero→About→Team→Projects→Blog→Gallery→Career→Contact)
- [ ] ✅ Design is light-mode — clean, premium
- [ ] ✅ All 3 content sections use exact client copy
- [ ] ✅ Footer links updated across all pages
- [ ] ✅ Career page + form works
- [ ] ✅ Gallery page works
- [ ] ✅ Both project pages with Lucknow + working enquiry forms
- [ ] ✅ No broken links, no marketplace UI, no old project names

---

## Final File Summary

| File | Action |
|------|--------|
| `index.html` | MODIFY — remove stats + services, restructure section order, add team/gallery/career sections |
| `project-rarebird-villas.html` | RENAME + MODIFY (was `township-1.html`) |
| `project-oriyana-enclave.html` | RENAME + MODIFY (was `township-2.html`) |
| `blog.html` | MODIFY — footer update + light-mode |
| `blog-detail.html` | MODIFY — footer update + light-mode |
| `career.html` | NEW — standalone career page with form |
| `gallery.html` | NEW — standalone gallery page |
| `css/styles.css` | MODIFY — light mode palette, remove stat/service CSS, add team/gallery/career styles |
| `js/main.js` | MODIFY — form handlers, updated fade-in targets, new anchors |

---

*End of PRD v2.0 Final Execution Plan — Awaiting Approval*
