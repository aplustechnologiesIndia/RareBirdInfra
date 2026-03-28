# Technical Stack Document

**Project:** Rarebird Infra Website
**Version:** 1.0 (Initial Skeleton Build)
**Prepared by:** Archit Mishra

---

## 1. Overview

This document defines the **technology stack and development approach** for the initial version of the Rarebird Infra website.

The current phase is focused on building a **static, design-aligned skeleton website** for presentation and validation purposes.

---

## 2. Technology Stack

The website must be developed using the following:

### Core Technologies

* **HTML5** – for structure and content
* **CSS3** – for styling and layout
* **JavaScript (Vanilla JS)** – for basic interactivity

---

## 3. Development Approach

### 3.1 Static Website Architecture

* The website will be implemented as a **fully static frontend**
* Each page will be created as an individual HTML file
* No frameworks or libraries are required

---

### 3.2 Page-Based Structure

Each page should be built as a separate file:

* `index.html` → Homepage
* `township-1.html` → Township Page 1
* `township-2.html` → Township Page 2
* `blog.html` → Blog Listing Page
* `blog-detail.html` → Blog Detail Page

---

### 3.3 Styling Approach

* Use **custom CSS** for styling

* Maintain:

  * Consistent spacing system
  * Reusable class naming
  * Organized CSS structure

* CSS should be placed in a dedicated file:

  * `/css/styles.css`

---

### 3.4 JavaScript Usage

JavaScript should be used only for **basic UI interactions**, such as:

* Navigation toggles (mobile menu)
* Button interactions
* Form submission feedback (success message)
* Simple animations or transitions (if required)

No complex application logic is required.

---

## 4. Functional Constraints

The following constraints must be strictly followed:

### Not Included in This Phase

* No backend integration
* No APIs
* No CMS
* No authentication systems
* No database connectivity

---

### Forms

* Enquiry forms should be **UI-only**
* On submission:

  * Display a success message
  * Do not store or send data

---

## 5. Code Organization

### Recommended Folder Structure

/project
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

---

## 6. Reusability Guidelines

Even though the project is static:

* Maintain consistent structure across pages
* Reuse components manually where possible:

  * Navigation bar
  * Footer
  * Cards
  * Section layouts

This will ensure easier updates in future iterations.

---

## 7. Performance Considerations

* Optimize images for web usage
* Avoid unnecessary scripts
* Keep CSS and JS lightweight

---

## 8. Future Scalability (For Reference)

This stack is intended for the **initial prototype phase only**.

In future phases, the project may transition to:

* Component-based architecture
* Dynamic content handling
* Backend integration

---

## 9. Deliverables

* Fully functional static website
* Clean and organized codebase
* All pages linked and navigable
* Consistent styling across pages

---

## 10. Acceptance Criteria

The implementation will be considered complete when:

* All pages are developed using HTML, CSS, and JavaScript
* Navigation works across all pages
* Layout matches design specifications
* Forms display success messages
* No external dependencies are required

---

**End of Document**
