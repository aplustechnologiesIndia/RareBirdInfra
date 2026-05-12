# Rarebird Infra — Website

> Premium real estate development website for Rare Bird Infra Pvt. Ltd. A static, design-aligned frontend built for brand presentation and client validation.

---

## Overview

This is the official website for **Rarebird Infra**, a real estate company focused on developing and marketing premium villas and plotted developments across Lucknow, India.

The website serves as a **brand and project showcase platform** — presenting developments like Rarebird Villas and Oriyana Enclave, communicating credibility, and capturing user enquiries.

---

## Pages

| Page | File | Description |
|---|---|---|
| Homepage | `index.html` | Hero, About, Team, Projects, Blog preview, Gallery, Integrated Career Form, CTA |
| Rarebird Villas | `project-rarebird-villas.html` | Project detail — Delivered premium villas in Lucknow |
| Oriyana Enclave | `project-oriyana-enclave.html` | Project detail — Upcoming 20-acre gated township |
| Gallery | `gallery.html` | Full masonry image gallery showcasing all projects |
| Blog Listing | `blog.html` | All blog posts in card grid layout |
| Blog Detail | `blog-detail.html` | Full article view with related posts |

---

## Project Structure

```
RrarebirdInfra/
├── index.html                       # Homepage (Hero, About, Team, Projects, Blog, Gallery, Career, CTA)
├── project-rarebird-villas.html     # Rarebird Villas project detail page
├── project-oriyana-enclave.html     # Oriyana Enclave project detail page
├── gallery.html                     # Full gallery page
├── blog.html                        # Blog listing page
├── blog-detail.html                 # Blog article detail page
│
├── css/
│   └── styles.css                   # Complete design system & all component styles
│
├── js/
│   └── main.js                      # Navbar scroll, mobile menu, form handler, animations
│
├── assets/
│   └── images/                      # Project images
│       ├── Hero Section/            # Homepage hero background
│       ├── Oriyana Enclave/         # 18 images including amenities, layouts, and main views
│       ├── Rarebird Villas/         # Main external views
│       └── Team/                    # Team member portraits
│
└── todo.md                          # Development task list
```

---

## Image Asset Organization & Mapping

The website uses real project assets replacing previous placeholders.

- **Rarebird Villas (`assets/images/Rarebird Villas/`)**:
  - `main.jpg` is utilized across the property card on the homepage, the hero section on the project detail page, and throughout the Rarebird Villas gallery slots.

- **Oriyana Enclave (`assets/images/Oriyana Enclave/`)**:
  - `Main.jpg` serves as the primary hero image and property card thumbnail.
  - The remaining 17 images (including `ClubHouse.jpg`, `SwimmingPool.jpg`, `Gym.jpg`, `Park.jpg`, `TennisCourt.jpg`, and various layout plans) are intelligently mapped across the homepage gallery, the full gallery page, and the Oriyana Enclave project detail page to showcase the premium amenities and infrastructure.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Vanilla CSS3 (custom design system) |
| Interactivity | Vanilla JavaScript (ES5 compatible) |
| Fonts | Google Fonts — Instrument Serif + Inter |
| Backend | None — fully static |

No frameworks. No build tools. No dependencies.

---

## Running Locally

No build step required. Open any HTML file directly in a browser or run a simple local server:

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

## Features

- **Transparent navbar** that transitions to solid on scroll (light mode updated)
- **Mobile navigation** — full-screen overlay menu with hamburger toggle
- **Enquiry & Career forms** — UI-only, shows success message on submit
- **Fade-in animations** via Intersection Observer API
- **Responsive layout** — mobile, tablet, and desktop breakpoints
- **Masonry gallery layouts** — clean grid structures for project showcases

---

## Author

**Archit Mishra**  
Rarebird Infra
