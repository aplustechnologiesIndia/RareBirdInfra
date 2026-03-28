# Rarebird Infra — Website

> Premium township development website. A static, design-aligned frontend built for brand presentation and client validation.

---

## Overview

This is the official website for **Rarebird Infra**, a real estate company focused on developing and marketing integrated township projects across India.

The website serves as a **brand and project showcase platform** — presenting township developments, communicating credibility, and capturing user enquiries.

---

## Pages

| Page | File | Description |
|---|---|---|
| Homepage | `index.html` | Hero, About, Stats, Services, Townships, Blog preview, CTA |
| Rarebird Greens | `township-1.html` | Township detail — Devanahalli, Bangalore |
| Rarebird Heights | `township-2.html` | Township detail — Hosur, Tamil Nadu |
| Blog Listing | `blog.html` | All blog posts in card grid layout |
| Blog Detail | `blog-detail.html` | Full article view with related posts |

---

## Project Structure

```
RrarebirdInfra/
├── index.html              # Homepage
├── township-1.html         # Rarebird Greens detail page
├── township-2.html         # Rarebird Heights detail page
├── blog.html               # Blog listing page
├── blog-detail.html        # Blog article detail page
│
├── css/
│   └── styles.css          # Complete design system & all component styles
│
├── js/
│   └── main.js             # Navbar scroll, mobile menu, form handler, animations
│
├── assets/
│   └── images/             # Project images
│
└── Docs/
    ├── prd.md              # Product Requirements Document
    ├── design.md           # Design Document
    ├── todo.md             # Development task list
    └── tech.md             # Technical Stack Document
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Vanilla CSS3 (custom design system) |
| Interactivity | Vanilla JavaScript (ES5 compatible) |
| Fonts | Google Fonts — Instrument Serif + Inter |
| Images | Unsplash (placeholder) |
| Backend | None — fully static |

No frameworks. No build tools. No dependencies.

---

## Features

- **Transparent navbar** that transitions to solid on scroll
- **Mobile navigation** — full-screen overlay menu with hamburger toggle
- **Enquiry forms** — UI-only, shows success message on submit
- **Fade-in animations** via Intersection Observer API
- **Responsive layout** — mobile, tablet, and desktop breakpoints
- **Hero image animation** — subtle zoom-out on load
- **Card hover effects** — lift + shadow on services, township, and blog cards

---

## Design System

Defined in `css/styles.css` via CSS custom properties:

```css
--color-bg:           #F5F5F5   /* Page background */
--color-surface:      #FFFFFF   /* Card / section surface */
--color-text-primary: #242424   /* Headings & primary text */
--color-dark:         #1A1A1A   /* Navbar, footer, CTA backgrounds */

--font-serif:  'Instrument Serif', Georgia, serif   /* Headings */
--font-sans:   'Inter', system-ui, sans-serif       /* Body & UI */
```

---

## Running Locally

No build step required. Open any HTML file directly in a browser:

```bash
# Option 1 — open directly
start index.html

# Option 2 — use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — Python simple server
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Scope

### ✅ Included in this version
- Complete website structure and all pages
- Placeholder content and imagery
- Functional navigation between pages
- Demo enquiry forms (UI only — no data sent)
- Responsive layout

### ❌ Not included (future phases)
- Backend / API integration
- CMS or admin panel
- Form data storage or email delivery
- Search or filtering
- Authentication

---

## Docs

All planning documents are in the `/Docs` folder:

- [`prd.md`](Docs/prd.md) — Product Requirements
- [`design.md`](Docs/design.md) — Design Specification
- [`tech.md`](Docs/tech.md) — Technical Stack
- [`todo.md`](Docs/todo.md) — Development Task List

---

## Author

**Archit Mishra**  
Rarebird Infra — Version 1.0 (Initial Skeleton Build)
