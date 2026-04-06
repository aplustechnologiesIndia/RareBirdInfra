# Product Requirements Document (PRD)

**Project:** Rarebird Infra Website
**Version:** 2.0 (Final – Client Revision Implementation)
**Prepared by:** Archit Mishra

---

## 1. Project Overview

Rarebird Infra Pvt. Ltd. is a **Lucknow-based real estate company** focused on:

* Premium plotted developments
* Villa projects
* Township development

This website is a **brand-first marketing platform** designed to:

* Showcase Rarebird’s projects
* Communicate trust and credibility
* Generate user enquiries

This version incorporates **client-approved structural, content, and navigation changes**.

---

## 2. Core Positioning (STRICT)

The website must reflect:

* Rarebird Infra is **NOT a property listing platform**
* There must be **NO search bars, filters, or property marketplace UI**
* The website must only showcase:

  * Rarebird’s own projects
  * Affiliated developments

---

## 3. Website Architecture

### Pages Required:

1. Homepage
2. Project Detail Page (Template) – 2 instances
3. Blog Listing Page
4. Blog Detail Page
5. Career Page
6. Gallery Page

---

## 4. Navigation (MANDATORY)

The header navigation must contain EXACTLY the following items in this order:

* Home
* About Us
* Our Team
* Projects
* Blog
* Gallery
* Career
* Contact Us

No additional or missing items are allowed.

---

## 5. Homepage Requirements

---

### 5.1 Hero Section

**Structure:**

* Full-width background image
* Left-aligned text block

**Content:**

* Primary headline (placeholder or existing)
* Supporting subtext

**CTA Rules:**

* Only ONE primary CTA button must be present
* Remove any secondary buttons
* CTA must be placed below the text block

---

### 5.2 About Section (REPLACE FULL CONTENT)

Replace all existing content with the following:

**Heading:** About Us

**Body Text:**

Welcome to Rare Bird Infra Pvt. Ltd., where vision meets luxury in real estate.

Based in Lucknow, we specialize in premium plots, villas, and township developments designed to offer not just a property, but a refined lifestyle. With over a decade of experience in the real estate industry, we have built a strong reputation for trust, quality, and excellence.

At Rare Bird Infra, we understand that every investment is a significant decision. That’s why we focus on delivering carefully planned projects, transparent dealings, and complete customer satisfaction. Our expertise lies in identifying prime locations and transforming them into thriving residential spaces that combine comfort, connectivity, and long-term value.

Driven by a passion for innovation and a commitment to luxury living, we aim to redefine modern real estate standards in Lucknow. Whether you are looking for a dream home or a smart investment opportunity, Rare Bird Infra Pvt. Ltd. is your trusted partner in building a better future.

Rare Bird Infra Pvt. Ltd. — Where Luxury Takes Flight.

---

### 5.3 Statistics Section

* Keep existing stats layout
* Ensure values are clean and aligned
* No placeholder labels like “lorem ipsum”

---

### 5.4 Services Section (Rename + Keep Structure)

**Section Title must be:**
“What We Offer”

Cards remain but must represent:

* Township Development
* Plot Sales
* Investment Opportunities
* Infrastructure Development

---

### 5.5 Projects Section (CRITICAL UPDATE)

**Section Title MUST be:**
“Projects”

Replace all existing project entries with EXACTLY:

---

#### Project 1:

* Name: Rarebird Villas
* Location: Lucknow

---

#### Project 2:

* Name: Oriyana Enclave
* Location: Lucknow

---

**Each project card must include:**

* Image
* Project Name
* Location (Lucknow)
* Short description
* CTA button → “View Details”

---

### 5.6 Remove Unnecessary UI Elements

Remove the following wherever present:

* Extra buttons not defined in PRD
* Duplicate CTAs
* Any placeholder UI elements that do not serve a purpose

---

### 5.7 Our Team Section (NEW – REQUIRED)

Add a new section below Projects or Blog:

**Section Title:** Our Team

**Structure:**

* Grid of team member cards

**Each card includes:**

* Image
* Name
* Role

(Placeholder data allowed)

---

### 5.8 Blog Section

* Keep layout minimal
* Use placeholder content
* Ensure clean typography

---

### 5.9 Final CTA Section

* Single clear call-to-action
* Clean layout
* No clutter

---

## 6. Project Detail Pages

Create 2 pages:

1. Rarebird Villas
2. Oriyana Enclave

---

### Each Page Must Include:

#### 6.1 Hero

* Large image
* Project name
* Location: Lucknow

---

#### 6.2 Overview

* Description text
* Key highlights

---

#### 6.3 Gallery

* Grid layout
* Multiple images

---

#### 6.4 Details Section

* Plot sizes
* Pricing (placeholder allowed)
* Amenities
* Location advantages

---

#### 6.5 Enquiry Form

Fields:

* Name
* Phone
* Email
* Message

Behavior:

* On submit → show success message
* No backend

---

## 7. Career Page (NEW)

---

### 7.1 Content Section

**Heading:** Careers

**Text:**

At Rare Bird Infra Pvt. Ltd., we believe our people are the foundation of our success. We are always looking for passionate, driven, and talented individuals who want to grow with us in the dynamic world of real estate.

We offer a professional work environment, growth opportunities, and a chance to be part of premium projects that shape modern living.

If you are ready to build your career with us, we would love to hear from you.

---

### 7.2 Career Form

Fields:

* Name
* Email ID
* Contact
* Job Role

Submit button:

* Shows success message
* No backend

---

## 8. Gallery Page (NEW)

* Grid layout
* Multiple images
* Clean spacing
* No captions required (optional)

---

## 9. Blog Pages

### Blog Listing:

* Multiple posts (placeholder)

### Blog Detail:

* Title
* Image
* Content

---

## 10. Content Consistency Rules

* Always use: **Rare Bird Infra Pvt. Ltd.**
* Always show location: **Lucknow**
* No lorem ipsum in final visible sections (except blog if needed)

---

## 11. Functional Constraints

* Static website only
* HTML, CSS, Vanilla JS only
* No backend
* No CMS
* Forms are UI-only

---

## 12. Acceptance Criteria (STRICT)

The build is complete only when:

* Navigation matches exactly
* Projects are correctly renamed and displayed
* Career page is implemented with form
* Team section exists and is styled properly
* All extra/unused UI elements are removed
* Content is replaced correctly
* Layout is clean and consistent across pages
* No broken links or UI issues

---

## 13. Final Quality Requirement

The website must:

* Feel premium
* Be visually clean
* Have consistent spacing and typography
* Reflect a professional real estate brand

---

**End of Document**
