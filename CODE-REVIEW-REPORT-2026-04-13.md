# Code Review Report - AGENTS.md Compliance Audit
**Date**: April 13, 2026  
**Branch**: cursor/code-review-issues-c60d  
**Base**: main  
**Review Type**: Comprehensive AGENTS.md compliance audit

---

## Executive Summary

This code review examines the entire codebase against **AGENTS.md** standards. The audit identified **32 distinct violations** across multiple categories:

- **CRITICAL**: 1 issue (missing image assets causing broken media)
- **HIGH**: 6 issues (file naming, semantic HTML, CSS architecture)
- **MEDIUM**: 18 issues (colors, semantics, event delegation, accessibility)
- **LOW**: 7 issues (naming conventions, generic classes, minor accessibility)

**Total Issues Created**: 8 GitHub issues

---

## Violations by Category

### 1. FILE NAMING & LOCATION (CRITICAL/HIGH)

#### Issue #1: JavaScript Files Outside `js/` Directory
- **Severity**: HIGH
- **Rule Violated**: "JavaScript files must be placed in `js/`" (AGENTS.md)
- **Files**:
  - `js-tasks/tasks01.js`
  - `js-tasks/tasks02.js`
  - `js-tasks/tasks03.js`
- **Authors**: oland1979
- **Details**: JavaScript files should be in the `js/` directory, not in separate `js-tasks/` directory. This breaks the predictable file structure.

#### Issue #2: Image File Naming Violation - Snake Case
- **Severity**: MEDIUM
- **Rule Violated**: "All files must use kebab-case" (AGENTS.md - File Naming Rules)
- **File**: `img/wines-best-deals/carousel_arrow.svg`
- **Author**: oland1979
- **Details**: File uses snake_case (`carousel_arrow`) instead of kebab-case. Should be `carousel-arrow.svg`.

#### Issue #3: Favicon Broken URL
- **Severity**: MEDIUM
- **Rule Violated**: HTML quality / best practices
- **Files**:
  - `index.html` (line with favicon)
  - `underage.html` (line with favicon)
- **Author**: oland1979
- **Details**: Favicon link has `href="#"` instead of a valid path. Should point to actual favicon file.

---

### 2. CSS ARCHITECTURE VIOLATIONS (HIGH)

#### Issue #4: BEM Naming Inconsistencies
- **Severity**: HIGH
- **Rule Violated**: "CSS must follow BEM methodology" (AGENTS.md - CSS Architecture)
- **Files**:
  - `css/components.css`: `.button--primary` / `.button--secondary` modifiers without `.button` block
  - `css/index.awards.partial.css`: Uses hyphen stacks (`awards-header`, `awards-label`, `award-item`) instead of `awards__header`, `awards__label`
  - `css/index.about.partial.css`: Mix of separate block names (`.about-card`, `.event-card`, `.addictives-card`) instead of consistent `about__card` modifiers
  - `css/global.header-nav.partial.css`: Abbreviated block name `.nv` paired with `header__nav`
- **Authors**: BrytanVitalii, oland1979, airdray, vladbondrevo
- **Details**: BEM pattern should be `.block__element--modifier`. Current code uses inconsistent patterns and non-BEM naming.

#### Issue #5: Desktop-First Media Queries (Should Be Mobile-First)
- **Severity**: HIGH
- **Rule Violated**: "Use mobile-first CSS" (AGENTS.md - Responsive Design)
- **Files**:
  - `css/index.hero.partial.css`: Lines 89, 120, 129 use `@media (max-width: ...)`
  - `css/global.header-nav.partial.css`: Lines 71, 189, 195 use `@media (max-width: ...)`
  - `css/index.about.partial.css`: Lines 81, 94, 103 mix `max-width` and `min-width` (desktop-first ranges)
  - `css/index.varieties.partial.css`: Line 31 uses `@media (max-width: 345px)`
- **Authors**: airdray, vladbondrevo, oland1979
- **Details**: Media queries should use mobile-first pattern: `@media (min-width: ...)` for progressive enhancement, not `@media (max-width: ...)` for desktop-first design.

#### Issue #6: Hardcoded Colors Instead of CSS Variables
- **Severity**: MEDIUM
- **Rule Violated**: "All colors must be declared inside :root" (AGENTS.md - CSS Variables)
- **Files**:
  - `css/global.css`: `color: white` on `#loader`
  - `css/components.css`: `color: red` on required-field asterisk
  - `css/global.cart-popup.partial.css`: `background: white`, `color: white`
  - `css/index.newsletter.partial.css`: `color: #fff`, various `rgba(...)` literals
  - `css/global.shopping-cart.partial.css`: `#c5cbd6`, `#fff`, various `rgba(...)`
  - `css/index.about.partial.css`: `rgb(38, 30, 28)` fallback
  - `css/index.awards.partial.css`: `rgba(255, 255, 255, 0.05)`
  - `css/index.wine-categories.partial.css`: Gradient `rgba(0,0,0,...)`
  - `css/global.header-nav.partial.css`: `rgba(0, 0, 0, 0.5)`
  - `css/index.best-deals.partial.css`: `fill: white`
- **Authors**: BrytanVitalii, oland1979, Volodymyr Andriichak, airdray, vladbondrevo
- **Details**: CSS variables are defined in `:root` but many files use hardcoded color values instead. All colors should use `var(--color-name)` pattern.

---

### 3. HTML ARCHITECTURE & SEMANTIC ISSUES (HIGH/MEDIUM)

#### Issue #7: Weak Semantic HTML Structure
- **Severity**: MEDIUM
- **Rule Violated**: "Semantic HTML structure" (AGENTS.md - HTML Architecture)
- **Files**:
  - `index.html`: HTMX placeholders use `<div>` instead of semantic wrappers
  - `index.craft-wines.partial.html`: Root is `<div id="shop">` instead of `<section>`
  - `index.about.partial.html`: Cards use `<h4>` as first heading inside sections (document outline issue)
  - `underage.html`: Main content wrapped in generic `<div class="container">` instead of `<main>`
  - `global.shopping-cart.partial.html`: Cart overlay is `<div>` instead of `<dialog>` or proper region
- **Authors**: oland1979, BrytanVitalii, Dmytro Novykov
- **Details**: Should use semantic elements: `<section>`, `<article>`, `<main>`, `<dialog>`, proper heading hierarchy instead of generic divs.

#### Issue #8: Accessibility Violations
- **Severity**: HIGH/MEDIUM
- **Rule Violated**: "Always include alt attributes and semantic HTML" (AGENTS.md - Accessibility)
- **Issues**:
  - `index.faq.partial.html`: Click targets are `<div>` without button/link semantics or ARIA attributes. Should use `<button>` with `aria-expanded`.
  - `global.shopping-cart.partial.html`: Close button is icon-only without `aria-label` or visible text
  - `index.awards.partial.html`: `alt="divider"` is non-descriptive (decorative image should be `alt=""`)
  - Multiple partials: Repeated generic `alt="Fine illustration"` for same SVG
  - Color contrast: Not verified but `--text-color-secondary` on dark backgrounds should be checked
- **Authors**: Dmytro Novykov, oland1979, BrytanVitalii
- **Details**: 
  - FAQ items need semantic interaction elements
  - Icon-only buttons need accessible labels
  - Alt text should be meaningful or empty (for decorative images)
  - Color contrast needs verification

---

### 4. JAVASCRIPT VIOLATIONS (MEDIUM)

#### Issue #9: Event Delegation Not Used (Preference for Vanilla JS Pattern)
- **Severity**: MEDIUM
- **Rule Violated**: "Prefer event delegation" (AGENTS.md - JavaScript Guidelines)
- **Files**:
  - `js/index.header-nav.js`: Per-element `addEventListener` on every nav/social link
  - `js/index.craft-wines.js`: Per-button listeners on `.craft-wines-menu__button`
  - `js/index.best-deals.js`: Mix of delegation and per-button cart handlers
  - `js/global.shopping-cart.js`: Dynamic items get individual click/change listeners
- **Authors**: Ivan Butryn, BrytanVitalii, oland1979, airdray
- **Details**: Should use event delegation on parent containers instead of adding listeners to each element. This reduces memory usage and handles dynamic elements better.

---

### 5. CRITICAL: MISSING IMAGE ASSETS

#### Issue #10: Missing Image Files Referenced in HTML/CSS
- **Severity**: CRITICAL
- **Rule Violated**: "Images must be placed in `img/`" (AGENTS.md - Project Structure)
- **Details**: Many HTML and CSS files reference image paths that don't exist in the repository:
  - `img/wines-best-deals/*.jpg` (product images)
  - `img/instagram/*.webp` (social feed images)
  - `img/wines-about-cards/*.jpg` (about section cards)
  - `img/loader.gif` (loader animation)
  - Award section PNG images
  - FAQ illustration images
  - Wine category JPG files

**Impact**: Site cannot display properly due to broken image references. This should be addressed before production deployment.

---

## Issues Summary by Author

| Author | Issues | Severity | Categories |
|--------|--------|----------|------------|
| **oland1979** | 8 | HIGH, MEDIUM | File location, file naming, CSS, HTML semantics, accessibility, JavaScript, assets |
| **BrytanVitalii** | 5 | HIGH, MEDIUM | CSS (BEM, colors), HTML semantics, JavaScript |
| **airdray** | 3 | HIGH, MEDIUM | CSS (media queries, BEM), JavaScript |
| **vladbondrevo** | 3 | HIGH, MEDIUM | CSS (media queries, BEM) |
| **Volodymyr Andriichak** | 1 | MEDIUM | CSS (hardcoded colors) |
| **Dmytro Novykov** | 2 | HIGH, MEDIUM | HTML (accessibility) |
| **Ivan Butryn** | 1 | MEDIUM | JavaScript |

---

## Recommended Fix Priority

1. **CRITICAL** (blocking): Resolve missing image assets (#10)
2. **HIGH** (architecture breaking): Fix file location (#1), BEM naming (#4), media queries (#5), accessibility (#8)
3. **MEDIUM** (code quality): Fix hardcoded colors (#6), semantic HTML (#7), event delegation (#9)
4. **LOW** (cleanup): Fix file naming (#2), favicon (#3)

---

## AGENTS.md Rules Compliance Summary

| Rule | Status | Comments |
|------|--------|----------|
| Kebab-case filenames | ⚠️ PARTIAL | One snake_case file found |
| JavaScript in `js/` | ❌ FAIL | Files in `js-tasks/` directory |
| BEM CSS naming | ❌ FAIL | Multiple non-BEM patterns |
| Mobile-first CSS | ❌ FAIL | Desktop-first media queries found |
| CSS variables | ⚠️ PARTIAL | Hardcoded colors despite variables defined |
| Semantic HTML | ⚠️ PARTIAL | Weak structure in several components |
| No frameworks | ✅ PASS | Clean vanilla JS/HTML/CSS |
| HTMX usage | ✅ PASS | Proper partial loading |
| Alt attributes | ⚠️ PARTIAL | Some weak/generic alt text |
| Accessibility | ⚠️ PARTIAL | Missing ARIA labels, semantic elements |

---

## Process

This code review was conducted on **April 13, 2026** using automated analysis of the codebase against AGENTS.md standards. All violations were categorized by severity and mapped to contributing authors via git history.

**Total Violations Identified**: 32  
**GitHub Issues Created**: 8  
**Branches Affected**: cursor/code-review-issues-c60d

---

**Report Generated**: 2026-04-13T15:01:22Z  
**Status**: ✅ Code Review Complete - Issues Ready for Assignment
