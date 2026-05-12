# Rarebird Infra — Content and Image Update Execution Plan

> **Status:** ⏳ Awaiting Approval

---

## Task Summary
The objective is to replace all placeholder/demo images with the real project assets for **Rarebird Villas** and **Oriyana Enclave**, update the text content for both projects, map these assets across the entire website, and update the project documentation (`README.md`). All existing layouts, styling, animations, and responsiveness must be preserved.

---

## Phase 1 — Rarebird Villas Updates

**Target Asset:** `assets/images/Rarebird Villas/main.jpg`

- [ ] **1.1 Homepage Updates (`index.html`)**
  - Replace the placeholder image on the Rarebird Villas project/property card with `main.jpg`.
  - Replace any Rarebird Villas slots in the homepage Gallery with `main.jpg`.
- [ ] **1.2 Project Page Updates (`project-rarebird-villas.html`)**
  - Replace the hero/banner image with `main.jpg`.
  - Update any gallery/showcase slots on this page with `main.jpg`.
  - Update the project text content with the provided new copy (starting with "Rarebird Villas successfully developed...").
- [ ] **1.3 Gallery Page Updates (`gallery.html`)**
  - Replace any Rarebird Villas placeholder images in the full gallery with `main.jpg`.
- [ ] **1.4 Blog Pages (`blog.html`, `blog-detail.html`)**
  - Ensure any sidebar or footer links referencing the project use the correct image if applicable.

---

## Phase 2 — Oriyana Enclave Updates

**Target Assets:** `assets/images/Oriyana Enclave/*` (18 images including Main, ClubHouse, SwimmingPool, Layouts, etc.)

- [ ] **2.1 Homepage Updates (`index.html`)**
  - Replace the placeholder image on the Oriyana Enclave project/property card with `Main.jpg`.
  - Populate the homepage gallery sections with appropriate Oriyana Enclave assets to showcase the luxury township.
- [ ] **2.2 Project Page Updates (`project-oriyana-enclave.html`)**
  - Replace the hero/banner image with `Main.jpg` (or another appropriate high-impact image).
  - Intelligently slot the remaining assets (amenities, layouts, parks, etc.) into the development/gallery showcase sections on this page.
  - Update the project text content with the provided new copy (starting with "Oriyana Enclave is an upcoming ultra-premium...").
- [ ] **2.3 Gallery Page Updates (`gallery.html`)**
  - Populate the full gallery page with the Oriyana Enclave images, preserving masonry/grid layouts.

---

## Phase 3 — Global Gallery & Layout Verification

- [ ] **3.1 Visual Cohesion**
  - Ensure all image assignments make visual sense for their respective contexts (e.g., placing amenity images in amenity sections).
  - Verify that image sizing, cropping, and aspect ratios remain consistent with the original luxury design.
- [ ] **3.2 Technical Integrity**
  - Ensure all hover effects, masonry/grid layouts, and responsive behaviors remain intact.
  - Apply basic image loading optimization strategies (e.g., `loading="lazy"`) where appropriate without breaking visual quality or layout sizing.

---

## Phase 4 — Full Website Review & Polish

- [ ] **4.1 Technical Review**
  - Validate all links and interactive elements across the site to ensure no broken connections.
  - Confirm the website functions flawlessly without backend dependencies or console errors.
- [ ] **4.2 Aesthetic & UX Review**
  - Conduct a complete visual walkthrough to confirm the overall layout maintains its premium, luxury feel.
  - Ensure image placements feel natural and spacing remains balanced across all pages.

---

## Phase 5 — Documentation Updates

- [ ] **5.1 Update `README.md`**
  - Document the updated image asset structure.
  - Provide a project overview and page overview.
  - Add notes on image organization and how assets are mapped across pages.
  - Detail the setup/run instructions.

---

## Final QA Checklist
- [ ] No layouts, structural HTML, or global CSS variables have been unnecessarily changed.
- [ ] Rarebird Villas content updated & image placed correctly.
- [ ] Oriyana Enclave content updated & all 18 images utilized without breaking layouts.
- [ ] Responsive design verified (Desktop, Tablet, Mobile).
- [ ] `README.md` is updated per the requirements.
