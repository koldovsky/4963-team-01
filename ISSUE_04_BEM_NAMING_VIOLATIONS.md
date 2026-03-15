# Issue: Improper BEM Component Naming

**Type:** CSS Naming Convention Violation  
**Severity:** MEDIUM  
**AGENTS.md Rule:** "Each component should have a **unique namespace**" and follow "BEM methodology"  
**Branch:** cursor/code-review-issues-302c

## Summary

Component classes in the About section and header navigation do not follow BEM (Block, Element, Modifier) methodology correctly, violating AGENTS.md CSS architecture requirements.

## Violations Found

### 1. About Cards - Improper BEM Modifier Syntax (HTML)
- **File:** `index.about.partial.html` (Lines 3, 10, 17)
- **Author:** vladbondrevo
- **Current Code:**
  ```html
  <div class="about-card event-card">
  <div class="about-card addictives-card">
  <div class="about-card grape-card">
  ```
- **Issue:** Modifier classes (`event-card`, `addictives-card`, `grape-card`) lack proper BEM modifier syntax with `--`
- **Fix:** Rename to follow BEM: `.about-card--event`, `.about-card--addictives`, `.about-card--grape`

### 2. About Cards - Improper BEM Modifier Syntax (CSS)
- **File:** `css/index.about.partial.css` (Lines 20, 24, 28)
- **Author:** vladbondrevo
- **Current Code:**
  ```css
  .event-card { ... }
  .addictives-card { ... }
  .grape-card { ... }
  ```
- **Issue:** Class names are generic and lack proper BEM modifier prefix
- **Fix:** Rename to follow BEM: `.about-card--event`, `.about-card--addictives`, `.about-card--grape`

### 3. Header Navigation - Unclear Namespace Abbreviation
- **File:** `global.header-nav.partial.html` (Line 1)
- **Author:** TBD
- **Current Code:**
  ```html
  <nav class="header__nav nv">
  ```
- **Issue:** Abbreviated namespace `nv` is unclear and violates AGENTS.md naming principles
- **Fix:** Remove the `nv` class or rename to a more descriptive identifier

## AGENTS.md Reference

From AGENTS.md - CSS Architecture section:

> "CSS must follow **BEM methodology**.
>
> Pattern:
> ```css
> .block
> .block__element
> .block__element--modifier
> ```
>
> Example:
> ```css
> .header
> .header__nav
> .header__menu
> .header__menu-item
> .header__menu-link
> ```"

And from Component Naming section:

> "Avoid generic class names.
>
> Bad: `.carousel`, `.slider`, `.tabs`, `.accordion`
>
> Good: `carousel-clients`, `slider-products`, `tabs-pricing`, `accordion-faq`
>
> Each component should have a **unique namespace**."

## BEM Explanation

**BEM Structure:**
- **Block:** The main component (e.g., `about-card`)
- **Element:** A sub-component within the block (e.g., `about-card__title`)
- **Modifier:** A variation of the block or element (e.g., `about-card--event`)

**Correct Usage:**
```css
.about-card { /* Block */ }
.about-card__title { /* Element */ }
.about-card__description { /* Element */ }
.about-card--event { /* Block Modifier */ }
.about-card--addictives { /* Block Modifier */ }
.about-card--grape { /* Block Modifier */ }
```

**Incorrect Usage (Current):**
```css
.about-card { /* Block */ }
.event-card { /* Generic name, not a modifier */ }
.addictives-card { /* Generic name, not a modifier */ }
.grape-card { /* Generic name, not a modifier */ }
```

## Required Actions

- [ ] Rename `.event-card` to `.about-card--event` in both HTML and CSS
- [ ] Rename `.addictives-card` to `.about-card--addictives` in both HTML and CSS
- [ ] Rename `.grape-card` to `.about-card--grape` in both HTML and CSS
- [ ] Remove or clarify the `nv` class in header navigation
- [ ] Review all other CSS files for BEM compliance

## Files to Update

- `/workspace/index.about.partial.html`
- `/workspace/css/index.about.partial.css`
- `/workspace/global.header-nav.partial.html`
- `/workspace/css/global.header-nav.partial.css`

---

**Assigned to:** vladbondrevo  
**Priority:** MEDIUM  
**Created:** 2026-03-15
