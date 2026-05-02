# AGENTS.md Code Review Report
**Date:** 2026-05-02  
**Reviewer:** Cursor Code Review Agent  
**Repository:** 4963-team-01  

---

## Executive Summary

A comprehensive code review was performed on 2026-05-02 according to AGENTS.md guidelines. **9 GitHub issues** were created to track violations across multiple categories of the codebase.

### Issues Created
1. **#717** - File naming: `carousel_arrow.svg` uses snake_case
2. **#718** - CSS uses SCSS nesting syntax instead of vanilla CSS
3. **#719** - JavaScript files placed outside `js/` directory
4. **#720** - CSS uses desktop-first media queries instead of mobile-first
5. **#721** - Hardcoded colors not using CSS variables
6. **#722** - Weak semantic HTML structure
7. **#723** - CSS class naming violates BEM methodology
8. **#724** - Inline styles in HTML files
9. **#725** - Missing image files referenced in project

---

## Violation Categories

### 1. File Naming Violations

#### Issue #717: File naming - `carousel_arrow.svg` uses snake_case
- **File:** `img/wines-best-deals/carousel_arrow.svg`
- **Violation:** Uses snake_case; AGENTS.md requires kebab-case
- **Required Fix:** Rename to `carousel-arrow.svg` and update all references
- **Severity:** Low

---

### 2. Project Structure Violations

#### Issue #719: JavaScript files placed outside `js/` directory
- **Files:**
  - `js-tasks/tasks01.js`
  - `js-tasks/tasks02.js`
  - `js-tasks/tasks03.js`
- **Violation:** Should be in `js/` directory per AGENTS.md
- **Required Fix:** Move to `js/` and delete empty `js-tasks/` directory
- **Severity:** Medium

---

### 3. CSS Architecture Violations

#### Issue #718: CSS uses SCSS nesting syntax instead of vanilla CSS
- **Affected Files:**
  - `css/components.css` - `&:hover` (×2), `&::after`
  - `css/index.newsletter.partial.css` - `&::placeholder`, `&:hover` (×2)
  - `css/global.footer.partial.css` - `&:hover` in nested rules
- **Violation:** SCSS nesting syntax (`&` selector) instead of vanilla CSS
- **Required Fix:** Convert to flat CSS selectors
- **Severity:** Medium

#### Issue #720: CSS uses desktop-first media queries instead of mobile-first
- **Affected Files:**
  - `css/global.header-nav.partial.css` - `(max-width: 769px)`, `(max-width: 1025px)`, `(max-width: 426px)`
  - `css/index.hero.partial.css` - same three `max-width` blocks
  - `css/index.about.partial.css` - `(max-width: 769px)`, `(max-width: 426px)`, range queries
  - `css/index.varieties.partial.css` - `(max-width: 345px)`
- **Violation:** Uses `max-width` media queries (desktop-first) instead of `min-width` (mobile-first)
- **Required Fix:** Refactor all media queries to mobile-first approach
- **Severity:** High

#### Issue #721: Hardcoded colors not using CSS variables
- **Affected Files:** Many CSS files use hardcoded colors
  - `css/components.css` - `color: red`
  - `css/global.css` - `color: white`
  - `css/global.header-nav.partial.css` - `background: rgba(0, 0, 0, 0.5)`
  - `css/global.cart-popup.partial.css` - `background: white`, `color: white`
  - `css/index.newsletter.partial.css` - `rgba(...)`, `color: #fff`
  - `css/index.best-deals.partial.css` - `fill: white`
  - `css/index.awards.partial.css` - `rgba(255, 255, 255, 0.05)`
  - `css/index.wine-categories.partial.css` - gradient stops with `rgba(0,0,0,...)`
  - `css/global.shopping-cart.partial.css` - `#c5cbd6`, `#fff`, multiple `rgba(...)`
- **Violation:** Colors hardcoded instead of using CSS variables from `:root`
- **Required Fix:** Define all colors as variables in `:root` and use `var()` throughout
- **Severity:** High

#### Issue #723: CSS class naming violates BEM methodology
- **Affected Areas:**
  1. `css/components.css` - `.button--primary/--secondary` are modifiers without block; `.required-field-label` uses snake_case
  2. `css/index.awards.partial.css` - flat names like `.awards-header`, `.award-item` instead of BEM
  3. `global.header-nav.partial.html` - dual naming systems (`header__nav` + `nv__*`)
  4. `index.about.partial.html` - mixed naming: `about-card`, `event-card`, `grape-card`
- **Violation:** Non-BEM or inconsistent BEM class naming
- **Required Fix:** Standardize all classes to BEM pattern: `.block__element--modifier`
- **Severity:** High

---

### 4. HTML and Semantic Structure Violations

#### Issue #722: Weak semantic HTML structure
- **Issues:**
  1. `index.faq.partial.html` - Uses `<div>` instead of `<details>`/`<summary>`
  2. `index.history-timeline.partial.html` - Uses `<div>` instead of `<section>`
  3. `index.about.partial.html` - Uses `<div>` instead of `<article>` for cards
  4. `underage.html` - Uses `<div class="container">` instead of `<main>`
- **Violation:** Weak semantic HTML structure reduces accessibility
- **Required Fix:** Use proper semantic HTML elements
- **Severity:** Medium

#### Issue #724: Inline styles in HTML files
- **Affected Files:**
  - `index.newsletter.partial.html` - SVG with `style="fill:none;stroke:rgba(...)"`
  - `global.shopping-cart.partial.html` - Multiple empty/redundant `style=""` attributes
- **Violation:** Inline styles instead of external CSS
- **Required Fix:** Move all styles to external CSS files and use CSS variables
- **Severity:** Low-Medium

---

### 5. Asset Management Violations

#### Issue #725: Missing image files referenced in project
- **Missing Files:**
  - `img/awards-divider.png`
  - `img/fine-wines-1956.png`
  - `img/loader.gif`
  - `img/wines-best-deals/*.jpg` (multiple)
  - `img/wines.png`
  - `img/wine-for-special-wines-section.webp`
  - `img/wine-categories-red.jpg`
  - `img/instagram/*.webp` (multiple)
  - `img/wines-about-cards/*.jpg` (multiple)
  - `img/wines-for-craft-wines-partial/*.jpg` (multiple)
- **Violation:** Referenced images missing from repository
- **Required Fix:** Either obtain/add missing images or remove broken references
- **Severity:** Medium

---

## Violation Summary by Severity

### High Severity (3 issues)
- **#720** - Desktop-first media queries (core design principle)
- **#721** - Hardcoded colors (maintainability & standards)
- **#723** - BEM naming violations (architectural breach)

### Medium Severity (4 issues)
- **#718** - SCSS nesting syntax
- **#719** - JavaScript directory structure
- **#722** - Semantic HTML
- **#725** - Missing image files

### Low Severity (2 issues)
- **#717** - File naming (snake_case)
- **#724** - Inline styles

---

## Violation Summary by Component

### CSS Architecture
- **#718** - SCSS nesting
- **#720** - Desktop-first media queries
- **#721** - Hardcoded colors
- **#723** - BEM naming violations

### HTML & Semantics
- **#722** - Semantic HTML
- **#724** - Inline styles

### Project Structure
- **#717** - File naming
- **#719** - JavaScript directory placement
- **#725** - Missing assets

---

## AGENTS.md Compliance Status

| Principle | Status | Issues |
|-----------|--------|--------|
| Semantic HTML | ⚠️ Partial | #722, #724 |
| HTMX Architecture | ✅ Good | — |
| Mobile-first CSS | ❌ Failed | #720 |
| BEM CSS Naming | ❌ Failed | #723 |
| CSS Variables | ❌ Failed | #721 |
| Vanilla CSS | ⚠️ Partial | #718 |
| Kebab-case Files | ⚠️ Partial | #717 |
| JS in `js/` | ⚠️ Partial | #719 |
| Images in `img/` | ⚠️ Partial | #725 |
| Minimal JS | ✅ Good | — |

---

## Recommendations

### Immediate Actions (High Priority)
1. Fix desktop-first media queries (#720)
2. Standardize BEM class naming (#723)
3. Implement CSS variables for all colors (#721)

### Short-term Actions (Medium Priority)
1. Convert SCSS nesting to vanilla CSS (#718)
2. Move JS files to correct directory (#719)
3. Improve semantic HTML (#722)
4. Add missing image files (#725)

### Ongoing
1. Fix file naming conventions (#717)
2. Remove inline styles (#724)
3. Code review processes to catch violations early

---

## Author Assignments

Based on git history analysis:

### Issue #717 - File naming
- Created in initial commit

### Issue #718 - SCSS nesting
- Affects: `css/components.css`, `css/index.newsletter.partial.css`, `css/global.footer.partial.css`

### Issue #719 - JavaScript directory
- **Assigned Authors:** BrytanVitalii, Vyacheslav Koldovskyy, but-d
- Commits by: BrytanVitalii (tasks01.js, tasks02.js, tasks03.js)

### Issue #720 - Desktop-first media queries
- Affects: Header, hero, about, varieties sections
- Multiple contributors based on section ownership

### Issue #721 - Hardcoded colors
- Widespread across all CSS files
- Multiple contributors

### Issue #722 - Semantic HTML
- Affects: FAQ, timeline, about, underage pages
- Multiple contributors

### Issue #723 - BEM naming
- Widespread across all CSS files and partials
- Multiple contributors

### Issue #724 - Inline styles
- Affects: Newsletter, shopping cart partials

### Issue #725 - Missing images
- Cross-cutting issue affecting multiple components

---

## Next Steps

1. **Review Issues:** All team members should review their assigned issues
2. **Create Fix Plans:** Each developer creates implementation plan for their issues
3. **Schedule Fixes:** Coordinate timeline for fixing violations
4. **Re-review:** After fixes, code review will be re-run to verify compliance
5. **Prevention:** Establish pre-commit hooks or CI checks for AGENTS.md compliance

---

## Code Review Standards Enforced

According to `AGENTS.md`:

✅ **Semantic HTML structure** - Partially enforced  
✅ **HTMX partial architecture** - Properly implemented  
❌ **Mobile-first responsive design** - Violated (desktop-first found)  
❌ **BEM CSS naming methodology** - Violated (inconsistent naming)  
⚠️ **Minimal JavaScript** - Generally good  
⚠️ **Predictable file structure** - Mostly good  
⚠️ **Semantic file naming** - Mostly good  
✅ **Simple Git workflow** - OK  

---

**Report Generated:** 2026-05-02 15:05 UTC  
**Review Agent:** Cursor Code Review (v1.0)  
**Status:** Completed  
