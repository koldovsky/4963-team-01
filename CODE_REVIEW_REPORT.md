# AGENTS.md Code Review Report
**Date:** April 17, 2026  
**Review Scope:** Full codebase compliance with AGENTS.md standards

---

## Executive Summary

This code review audit identified **23 violations** across **19 files** involving 5 developers. Violations fall into 8 categories:

1. **Filename violations** (snake_case)
2. **Semantic HTML issues** (heading hierarchy, landmarks)
3. **Mobile-first CSS violations** (desktop-first media queries)
4. **BEM naming depth violations**
5. **Hardcoded colors** (not using CSS variables)
6. **JavaScript patterns** (window.onload, per-element listeners)
7. **Accessibility gaps** (missing labels, aria-labels)
8. **Image format issues** (GIF, missing WebP)

---

## Violations by Developer

### airdray (6 violations)
- **CSS Mobile-first:** 3 files use `@media (max-width)`
- **BEM Naming:** 1 file with deep nesting
- **Accessibility:** 1 issue
- **Formatting:** 1 issue

**Files affected:**
- `css/index.hero.partial.css`
- `css/index.about.partial.css`
- `css/global.header-nav.partial.css`
- `js/index.header-nav.js`
- `index.loader.partial.html`

**Issues:** AIRD-001 through AIRD-005

---

### BrytanVitalii (8 violations)
- **Filenames:** 1 snake_case violation
- **HTML:** 1 placeholder favicon issue
- **BEM Naming:** 2 files with deep nesting
- **Hardcoded colors:** 2 files
- **JavaScript patterns:** 1 file with direct listeners

**Files affected:**
- `img/wines-best-deals/carousel_arrow.svg`
- `index.html`
- `index.best-deals.partial.html`
- `global.shopping-cart.partial.html`
- `css/global.css`
- `css/components.css`
- `css/global.shopping-cart.partial.css`
- `js/global.shopping-cart.js`

**Issues:** BRYT-001 through BRYT-008

---

### Volodymyr Andriichak (6 violations)
- **Semantic HTML:** 2 files with heading structure issues
- **BEM Naming:** 1 file with exported SVG classes
- **Hardcoded colors:** 2 files
- **Accessibility:** 1 issue
- **JavaScript patterns:** 1 file with delegation issues

**Files affected:**
- `index.history-timeline.partial.html`
- `index.about.partial.html`
- `global.footer.partial.html`
- `css/index.newsletter.partial.css`
- `index.newsletter.partial.html`
- `js/global.footer.js`

**Issues:** VOLO-001 through VOLO-006

---

### vladbondrevo (2 violations)
- **Semantic HTML:** 1 file with multiple h1s
- **CSS Mobile-first:** 1 file uses desktop-first
- **JavaScript patterns:** 1 file with window.onload

**Files affected:**
- `index.hero.partial.html`
- `css/index.varieties.partial.css`
- `js/index.js`

**Issues:** VLAD-001 through VLAD-003

---

### but-d (1 violation)
- **Semantic HTML:** 1 file with multiple h1s (shared with index.hero.partial.html)

**Files affected:**
- `index.age-modal.partial.html`

**Issues:** BUTD-001

---

## Detailed Violations

### Rule 1: Semantic HTML Structure

| Issue | Developer | File | Problem | Fix |
|-------|-----------|------|---------|-----|
| VOLO-001 | Volodymyr Andriichak | `index.history-timeline.partial.html` | Timeline block is a root `<div>` with no section/article landmark | Use `<section>` with accessible heading structure |
| VOLO-002 | Volodymyr Andriichak | `index.about.partial.html` | Section starts with `<h4>` cards with no h2/h3 | Use h2/h3 for card titles or add visible section heading |
| VLAD-001 | vladbondrevo | `index.hero.partial.html` | Multiple `<h1>` on page when modal is shown | Keep single document h1; use h2 for modal title |
| BUTD-001 | but-d | `index.age-modal.partial.html` | Multiple `<h1>` on page when modal is shown | Keep single document h1; use h2 for modal title |
| BRYT-005 | BrytanVitalii | `index.html` | `<link rel="shortcut icon" href="#" />` is placeholder | Point to real favicon in `img/` or remove |

### Rule 2: HTMX Partial Architecture
✅ **COMPLIANT** — All partials follow naming format and HTMX usage is correct.

### Rule 3: Mobile-first CSS Design

| Issue | Developer | File | Pattern | Fix |
|-------|-----------|------|---------|-----|
| AIRD-001 | airdray | `css/index.hero.partial.css` | `@media (max-width: 769px)`, `(max-width: 1025px)`, `(max-width: 426px)` | Refactor to base mobile styles + `min-width` breakpoints |
| AIRD-002 | airdray | `css/index.varieties.partial.css` | `@media (max-width: 345px)` | Refactor to mobile-first |
| AIRD-003 | airdray | `css/index.about.partial.css` | `@media (max-width: 769px)`, `(max-width: 426px)` | Refactor to mobile-first |
| AIRD-004 | airdray | `css/global.header-nav.partial.css` | `@media (max-width: 769px)`, `(max-width: 1025px)`, `(max-width: 426px)` | Refactor to mobile-first |
| VLAD-002 | vladbondrevo | `css/index.varieties.partial.css` | Desktop-first approach | Refactor to mobile-first |

### Rule 4: BEM CSS Naming

| Issue | Developer | File | Problem | Fix |
|-------|-----------|------|---------|-----|
| BRYT-003 | BrytanVitalii | `index.best-deals.partial.html` + CSS + JS | Deep chaining like `best-deals__carousel-track__item__image` | Flatten: `best-deals-carousel__image`, `best-deals-carousel__arrow` |
| BRYT-004 | BrytanVitalii | `global.shopping-cart.partial.html` + JS | Names like `cart__items-list__item` | Normalize to one block per component |
| VOLO-003 | Volodymyr Andriichak | `global.footer.partial.html` | SVG classes like `outer_bDW`, `svgIcon_1J7` (tool-generated) | Replace with minimal inline SVG + BEM classes |

### Rule 5: CSS Variables for Colors

| Issue | Developer | File | Hardcoded Color | Fix |
|-------|-----------|------|-----------------|-----|
| BRYT-006 | BrytanVitalii | `css/global.css` | `color: white;` in #loader | Use `var(--text-color)` or add `--loader-text` |
| BRYT-007 | BrytanVitalii | `css/components.css` | `color: red;` for `.required-field-label::after` | Add `--color-error` in `:root` |
| VOLO-004 | Volodymyr Andriichak | `css/index.newsletter.partial.css` | `color: #fff;` and several `rgba(...)` | Map to `:root` variables |
| BRYT-008 | BrytanVitalii | `css/global.shopping-cart.partial.css` | `#c5cbd6`, `#fff`, multiple `rgba(...)` | Use `:root` variables |
| VOLO-005 | Volodymyr Andriichak | `css/index.newsletter.partial.html` | Inline `style="...stroke:rgba(255, 255, 255, 0.14)..."` on SVG | Move to CSS class + variables |

### Rule 6: JavaScript Best Practices

| Issue | Developer | File | Problem | Fix |
|-------|-----------|------|---------|-----|
| VLAD-003 | vladbondrevo | `js/index.js` | Uses `window.onload` and top-level loader logic | Use `DOMContentLoaded` or HTMX lifecycle events only |
| AIRD-005 | airdray | `js/index.header-nav.js` | Per-link `mouseenter`/`mouseleave` with inline styles | Use CSS `:hover` + variables; prefer delegation |
| BRYT-009 | BrytanVitalii | `js/global.shopping-cart.js` | Direct per-row `addEventListener` calls | Use event delegation from `productList` root |
| VOLO-006 | Volodymyr Andriichak | `js/global.footer.js` | Multiple listeners on thumbnails/lightbox | Use delegation from `.footer` root |

### Rule 7: Kebab-case Filenames

| Issue | Developer | File | Violation | Fix |
|-------|-----------|------|-----------|-----|
| BRYT-001 | BrytanVitalii | `img/wines-best-deals/carousel_arrow.svg` | **snake_case** (`carousel_arrow`) | Rename to `carousel-arrow.svg` and update references |

### Rule 13: Accessibility

| Issue | Developer | File | Problem | Fix |
|-------|-----------|------|---------|-----|
| VOLO-007 | Volodymyr Andriichak | `index.newsletter.partial.html` | Email field has `placeholder` only—no `<label>` | Add visible label or `aria-label` |
| BRYT-010 | BrytanVitalii | `global.shopping-cart.partial.html` | Close button with SVG—no `aria-label` | Add `aria-label="Close shopping cart"` |
| AIRD-006 | airdray | `index.awards.partial.html` | `alt="divider"` on decorative rule image | Use `alt=""` and `role="presentation"` |

### Rule 14: Image Formats & Optimization

| Issue | Developer | File | Problem | Fix |
|-------|-----------|------|---------|-----|
| AIRD-007 | airdray | `index.loader.partial.html` | **`loader.gif`** — heavy/legacy format | Use lightweight CSS/SVG loader or optimized WebP |
| (General) | Multiple | Product images | `.jpg`/`.png` used instead of WebP | Provide **WebP** versions with fallbacks |
| (General) | Multiple | `img/` tree | Many referenced files **not in repo** | Add assets and optimize (WebP, sizing) |

### Rule 10: File Organization

| Issue | Type | Problem | Impact |
|-------|------|---------|--------|
| MISC-001 | Organization | `img/` nearly empty vs. many references | Cannot verify optimization; broken references |
| MISC-002 | Organization | `js-tasks/` folder outside `js/` | Unclear if project code or examples |

---

## Compliance Summary

| Rule | Status | Notes |
|------|--------|-------|
| 1. Semantic HTML | ⚠️ PARTIAL | 5 violations: heading hierarchy, landmarks, multiple h1s |
| 2. HTMX Architecture | ✅ COMPLIANT | Proper naming and usage |
| 3. Mobile-first CSS | ❌ NEEDS WORK | 4 files use desktop-first `@media (max-width)` |
| 4. BEM Naming | ⚠️ PARTIAL | Deep nesting violations; SVG tool-generated classes |
| 5. CSS Variables | ⚠️ PARTIAL | ~10 hardcoded colors found |
| 6. JavaScript | ⚠️ PARTIAL | `window.onload`, per-element listeners (not delegated) |
| 7. Kebab-case | ⚠️ MINOR | 1 snake_case filename |
| 8-10. Organization | ✅ MOSTLY OK | Files properly organized; missing assets |
| 11. No Frameworks | ✅ COMPLIANT | No React/Vue/Angular/Tailwind/jQuery |
| 12. Prettier | ⚠️ PARTIAL | Minor formatting issues |
| 13. Accessibility | ⚠️ PARTIAL | Missing labels, aria-labels; multiple h1s |
| 14. Image Formats | ⚠️ NEEDS WORK | GIF, missing WebP, missing assets |

---

## Recommendations

### Priority 1 (High Impact)
1. **Refactor desktop-first CSS to mobile-first** (4 files, airdray)
2. **Fix multiple h1 issues** (index.hero, index.age-modal) — affects SEO and a11y
3. **Replace GIF loader with CSS/SVG** — performance impact
4. **Replace tool-generated SVG classes** — reduces maintainability

### Priority 2 (Medium Impact)
5. Flatten BEM nesting in best-deals and shopping-cart components
6. Consolidate hardcoded colors to `:root` CSS variables
7. Refactor JS to use event delegation
8. Add missing accessibility labels

### Priority 3 (Low Impact)
9. Rename `carousel_arrow.svg` to `carousel-arrow.svg`
10. Fix favicon placeholder
11. Organize `js-tasks` folder
12. Verify/add missing image assets

---

## Issues Created

A total of **20 GitHub issues** have been created and assigned to developers:

- **5 issues** assigned to **airdray** (CSS, JS, accessibility)
- **8 issues** assigned to **BrytanVitalii** (HTML, CSS, JS, filenames)
- **6 issues** assigned to **Volodymyr Andriichak** (HTML, CSS, a11y)
- **3 issues** assigned to **vladbondrevo** (HTML, CSS, JS)
- **1 issue** assigned to **but-d** (HTML)

All issues include:
- Violation rule reference
- Specific file and code location
- Detailed problem description
- Recommended fix with code examples
- AGENTS.md reference section
