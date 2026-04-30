# Code Review Findings - AGENTS.md Compliance Audit
**Date:** 2026-04-30  
**Audited Against:** AGENTS.md standards document  
**Status:** 8 major violation categories identified

---

## Issue 1: Desktop-First Media Queries Violations
**Severity:** HIGH  
**Affected Files:** 4 CSS files, ~11 query occurrences  
**Standards Violated:** Responsive design (mobile-first CSS)

### Files:
- `/workspace/css/index.varieties.partial.css` (Line 31)
- `/workspace/css/index.hero.partial.css` (Lines 89, 120, 129)
- `/workspace/css/global.header-nav.partial.css` (Lines 71, 189, 195)
- `/workspace/css/index.about.partial.css` (Lines 81, 94, 103)

### Problem:
Uses `@media (max-width: ...)` instead of mobile-first `@media (min-width: ...)` approach.

### Example:
```css
/* WRONG - Desktop-first */
@media (max-width: 769px) {
  .nv__menu-navigation { ... }
}

/* RIGHT - Mobile-first */
/* Base styles for mobile */
.nv__menu-navigation { ... }

/* Larger screens */
@media (min-width: 769px) {
  .nv__menu-navigation { ... }
}
```

### Suggested Fix:
Restructure CSS to define base mobile styles, then progressively enhance with `@media (min-width: ...)` queries.

---

## Issue 2: BEM Naming & Generic Component Names
**Severity:** MEDIUM-HIGH  
**Affected Files:** 7 files (HTML, CSS, JS)  
**Standards Violated:** BEM naming methodology, component naming

### Violations:

#### A. "Carousel" naming (generic)
- **Files:** 
  - `/workspace/index.best-deals.partial.html` (Lines 14–113)
  - `/workspace/css/index.best-deals.partial.css`
  - `/workspace/js/index.best-deals.js`
  - `/workspace/img/wines-best-deals/carousel_arrow.svg` (filename)

- **Problem:** AGENTS.md explicitly forbids generic names like `.carousel`, `.slider`, `.tabs`, `.accordion`
- **Current:** `.best-deals__carousel`, `.best-deals__carousel-track`
- **Suggested:** Rename to `.best-deals__slider` or `.best-deals__gallery` + update all references

#### B. Awards section BEM inconsistencies
- **Files:** 
  - `/workspace/index.awards.partial.html` (Lines 12–67)
  - `/workspace/css/index.awards.partial.css`
  - `/workspace/js/index.awards-reveal.js`

- **Problem:** Uses `.award-item` and `.award-col-1`, `.award-col-3` (not consistent BEM)
- **Suggested:** Use `.awards__item`, `.awards__col`, `.awards__col--logo`

#### C. Varieties section split blocks
- **Files:**
  - `/workspace/index.varieties.partial.html` (Lines 9, 15)
  - `/workspace/css/index.varieties.partial.css` (Lines 60, 81)
  - `/workspace/js/index.varieties-animation.js` (Line 6)

- **Problem:** `.redwines__title` and `.whitewines__title` mix two block names
- **Suggested:** Nest under one block: `.varieties__wine-title--red`, `.varieties__wine-title--white`

#### D. Navigation abbreviated block name
- **File:** `/workspace/global.header-nav.partial.html` (Line 1)
- **Problem:** Uses `class="header__nav nv"` (two blocks mixed)
- **Suggested:** Use single clear block: `class="header__nav"` or `class="site-nav"`

#### E. Bootstrap Icons classes
- **File:** `/workspace/global.header-nav.partial.html` (Lines 45, 61, 77)
- **Problem:** `class="bi bi-facebook"` (external library classes mixed with BEM)
- **Suggested:** Use BEM: `class="header__social-icon header__social-icon--facebook"`

#### F. Button modifiers without block
- **File:** `/workspace/css/components.css` (Lines 12–52)
- **Problem:** `.button--primary` / `.button--secondary` are modifiers without block
- **Current:** Only `.button--primary` and `.button--secondary` defined
- **Suggested:** Add `.button` block with modifiers: `.button { } .button--primary { }`

---

## Issue 3: Hardcoded Colors (Not Using CSS Variables)
**Severity:** MEDIUM  
**Affected Files:** 12+ locations across CSS  
**Standards Violated:** CSS variables usage

### Violations:

| File | Line(s) | Color | Variable Suggestion |
|------|---------|-------|-------------------|
| `/workspace/css/global.css` | 78 | `white` | `var(--text-color)` |
| `/workspace/css/components.css` | 57 | `red` | `--color-error` or `--color-required` |
| `/workspace/css/global.cart-popup.partial.css` | 9, 47 | `white` | `var(--text-color)` |
| `/workspace/css/index.newsletter.partial.css` | 84, 94, 104, 161 | `rgba(...)`, `#fff` | Multiple variables needed |
| `/workspace/css/index.wine-categories.partial.css` | 36–39 | Gradient `rgba(0,0,0,...)` | `--overlay-gradient-start` |
| `/workspace/css/index.awards.partial.css` | 79 | `rgba(255, 255, 255, 0.05)` | `--surface-highlight` |
| `/workspace/css/global.header-nav.partial.css` | 5 | `rgba(0, 0, 0, 0.5)` | Reuse backdrop token |
| `/workspace/css/index.about.partial.css` | 22, 26, 30 | `rgb(38, 30, 28)` | `var(--background-color)` |
| `/workspace/css/global.shopping-cart.partial.css` | 8, 98–101, 209 | Multiple | Centralize in `:root` |
| `/workspace/css/index.best-deals.partial.css` | 226, 231 | `white` | `var(--text-color)` |

### Suggested Fix:
Add missing color variables to `:root` in `/workspace/css/global.css` and replace all hardcoded colors.

---

## Issue 4: CSS Nesting vs Flat BEM
**Severity:** MEDIUM  
**Affected Files:** 5+ files  
**Standards Violated:** BEM architecture (flat structure)

### Problem:
Files use Sass/nested CSS syntax where children selectors are nested under parent blocks, which conflicts with flat BEM structure.

### Files:
- `/workspace/css/components.css` (e.g., lines 38–59)
- `/workspace/css/index.newsletter.partial.css` (e.g., lines 64, 125, 167)
- `/workspace/css/global.footer.partial.css` (5–100+)
- `/workspace/css/index.best-deals.partial.css` (10–120+)
- `/workspace/css/underage-main-content.css` (29–38, 56–73)

### Example:
```css
/* WRONG - Nested */
.best-deals {
  .best-deals__carousel {
    .best-deals__carousel-track {
      /* ... */
    }
  }
}

/* RIGHT - Flat BEM */
.best-deals { }
.best-deals__carousel { }
.best-deals__carousel-track { }
```

### Suggested Fix:
Flatten all nested selectors to full compound selectors or single-class BEM rules.

---

## Issue 5: JavaScript - Globals & Complex Event Handling
**Severity:** LOW-MEDIUM  
**Affected Files:** 8 files  
**Standards Violated:** Minimal JS, avoid globals, prefer event delegation

### Violations:

#### A. Module-level variables
- **File:** `/workspace/js/index.js` (Lines 16–19, 26–33)
- **Problem:** `totalPartials`, `loadedPartialsCount`, `window.onload` assignment
- **Suggested:** Use `addEventListener('load', ...)` and IIFE for scope

#### B. Per-element listeners instead of delegation
- **File:** `/workspace/js/index.header-nav.js` (Lines 1–21)
- **Problem:** `querySelectorAll` + `forEach` on every nav link
- **Suggested:** One delegated listener on `.nv__menu`

- **File:** `/workspace/js/index.craft-wines.js` (Lines 3–11)
- **Problem:** Per-button listeners
- **Suggested:** Delegate on `.craft-wines-menu`

- **File:** `/workspace/js/global.shopping-cart.js` (Lines 111–153)
- **Problem:** `addProductListeners` adds listeners per row on every `updateCartUI`
- **Suggested:** Event delegation on `productList`

#### C. Complex JavaScript
- **File:** `/workspace/js/index.best-deals.js` (Full file)
- **Problem:** Clone logic, `matchMedia`, multiple listeners (acceptable but complex)
- **Suggested:** Document as "complex but necessary" or consolidate into single handler

#### D. Inline style manipulation
- **File:** `/workspace/js/index.header-nav.js` (Lines 15–16, 19–20)
- **Problem:** Setting `style.color` and `style.backgroundColor` in JS
- **Suggested:** Use CSS classes instead of inline styles

---

## Issue 6: File Naming Inconsistencies
**Severity:** LOW  
**Affected Files:** 2 locations  
**Standards Violated:** Kebab-case naming

### Violations:

| File | Issue | Suggested |
|------|-------|-----------|
| `/workspace/js-tasks/tasks01.js` | Mixed with underscore | `tasks-01.js` |
| `/workspace/js-tasks/tasks02.js` | Mixed with underscore | `tasks-02.js` |
| `/workspace/js-tasks/tasks03.js` | Mixed with underscore | `tasks-03.js` |

---

## Issue 7: Semantic HTML Violations
**Severity:** MEDIUM  
**Affected Files:** 3 files  
**Standards Violated:** Semantic HTML

### Violations:

#### A. FAQ accordion using divs
- **File:** `/workspace/index.faq.partial.html` (Lines 12–68)
- **Problem:** FAQ built from nested `<div>`s, not `<details>`/`<summary>`
- **Suggested:** Use `<details>`/`<summary>` or ARIA accordion pattern

#### B. Missing main landmark
- **File:** `/workspace/underage.html` (Lines 16–30)
- **Problem:** Content not wrapped in `<main>`
- **Suggested:** Wrap content in `<main>` tag

---

## Issue 8: Unnecessary Narrative Comments
**Severity:** LOW  
**Affected Files:** 4 files  
**Standards Violated:** Code cleanliness

### Violations:

| File | Lines | Issue |
|------|-------|-------|
| `/workspace/index.html` | 22–24, 27, 36 | Author markers, apologies, spreadsheet links |
| `/workspace/js/index.best-deals.js` | 1–5, 22, 37 | Comments restate obvious behavior |
| `/workspace/js/global.shopping-cart.js` | 1–3, 73–78, 111 | Narrative / "I know this is inefficient" |
| `/workspace/css/components.css` | 1–9, 33, 44 | "Utility Classes" repeats code |

### Suggested Fix:
Remove or move to internal docs/README. Keep only essential API notes and non-obvious rationale.

---

## Issue 9: Missing Assets
**Severity:** MEDIUM (affects functionality)  
**Affected Files:** 2 files with broken references  
**Standards Violated:** Asset organization

### Violations:

| File | Line | Issue | Suggested |
|------|------|-------|-----------|
| `/workspace/index.loader.partial.html` | 2 | `src="img/loader.gif"` not in `/img/` | Add asset or fix path |
| `/workspace/css/index.about.partial.css` | 22–30 | Background URLs to missing images | Add images or fix paths |

---

## Summary Statistics

| Category | Count | Severity |
|----------|-------|----------|
| Max-width media queries | 11 | HIGH |
| BEM naming violations | 6 major issues | MEDIUM-HIGH |
| Hardcoded colors | 12+ | MEDIUM |
| CSS nesting issues | 5 files | MEDIUM |
| JavaScript issues | 8 files | LOW-MEDIUM |
| File naming | 3 files | LOW |
| Semantic HTML | 2 files | MEDIUM |
| Narrative comments | 4 files | LOW |

---

## Recommended Priority

1. **HIGH (Break deployment):** Max-width media queries, BEM naming for "carousel"
2. **MEDIUM (Code quality):** Hardcoded colors, CSS nesting, JavaScript refactoring
3. **LOW (Nice-to-have):** Comments, file naming, semantic HTML improvements

