# Code Review Report - AGENTS.md Compliance Audit
**Date:** April 19, 2026  
**Status:** Complete  
**Review Scope:** All HTML, CSS, and JavaScript files against AGENTS.md standards

---

## Executive Summary

This comprehensive code review identified **multiple violations** of AGENTS.md standards across the codebase:

- **19 hardcoded color violations** (should use CSS variables)
- **4 files with desktop-first media queries** (should use mobile-first)
- **Multiple BEM/naming inconsistencies** across CSS files
- **1 critical file naming violation** (snake_case in image file)
- **JavaScript improvements needed** for event delegation and console statements

---

## Critical Issues (Must Fix)

### Issue 1: Snake Case in Image Filename
**File:** `img/wines-best-deals/carousel_arrow.svg`  
**Violation:** Uses `_` (snake_case) instead of kebab-case  
**AGENTS.md Rule:** "All files must use **kebab-case**. Do not use: camelCase, PascalCase, snake_case"  
**Authors:** oland1979, BrytanVitalii  
**Fix:** Rename to `carousel-arrow.svg`  
**Priority:** HIGH

---

## Major Issues (Code Quality)

### Issue 2: Hardcoded Colors Outside :root
**Violation Count:** 19 instances  
**AGENTS.md Rule:** "All colors must be declared inside `:root`"

**Affected Files:**
- `css/global.css` - line 78: `color: white;`
- `css/global.header-nav.partial.css` - line 5: `background: rgba(0, 0, 0, 0.5);`
- `css/global.cart-popup.partial.css` - lines 9, 47: `background: white;`, `color: white;`
- `css/global.shopping-cart.partial.css` - multiple hardcoded colors
- `css/index.newsletter.partial.css` - multiple rgba values
- `css/index.wine-categories.partial.css` - gradient colors
- `css/index.awards.partial.css` - hover state color
- `css/index.best-deals.partial.css` - svg fill colors
- `css/components.css` - line 57: `color: red;`

**Authors:** oland1979, BrytanVitalii, airdray, others  
**Fix:** Move all color values to `:root` CSS variables and reference with `var(--color-name)`  
**Priority:** HIGH

---

### Issue 3: Desktop-First Media Queries
**Violation Count:** 4 files with 10+ desktop-first `@media (max-width)` rules  
**AGENTS.md Rule:** "Use **mobile-first CSS**. Use `@media (min-width: ...)`. Avoid desktop-first media queries."

**Affected Files:**
- `css/index.hero.partial.css` - lines 89, 120, 129
- `css/global.header-nav.partial.css` - lines 71, 189, 195
- `css/index.about.partial.css` - lines 81, 94
- `css/index.varieties.partial.css` - line 31

**Authors:** airdray, others  
**Fix:** Refactor base styles to mobile defaults, then use `@media (min-width: ...)` for larger screens  
**Priority:** HIGH

---

### Issue 4: BEM Naming Inconsistencies
**Violation Count:** Multiple files with non-BEM class names

**Examples:**
- `css/index.awards.partial.css`: Uses hyphen-separated elements (`.awards-header`) instead of BEM (`.awards__header`)
- `css/index.about.partial.css`: `.about-card`, `.event-card` not namespaced under `.about`
- `css/index.best-deals.partial.css`: Deep `__` chains like `.best-deals__carousel-track__item__button`
- `css/global.shopping-cart.partial.css`: Mixed `-` and `__` usage

**AGENTS.md Rule:** BEM pattern `.block`, `.block__element`, `.block__element--modifier`  
**Authors:** Multiple  
**Fix:** Standardize all class names to follow BEM methodology  
**Priority:** MEDIUM

---

### Issue 5: Generic Component Names
**File:** `css/components.css`  
**Violation:** Generic name for shared stylesheet  
**AGENTS.md Rule:** "Avoid generic class names like `.carousel`, `.slider`, `.tabs`, `.accordion`"  
**Fix:** Consider renaming to a more specific project name or organizing into per-component files  
**Priority:** LOW

---

### Issue 6: Undefined CSS Variable
**File:** `css/index.awards.partial.css` - line 70  
**Violation:** Uses `var(--color-border-soft)` but variable not defined in `:root`  
**AGENTS.md Rule:** "All colors must be declared inside `:root`"  
**Fix:** Define `--color-border-soft` in `:root` or replace with existing variable  
**Priority:** MEDIUM

---

### Issue 7: JavaScript Console Statements
**File:** `js/global.shopping-cart.js` - line 35  
**Violation:** `console.error()` left in production code  
**AGENTS.md Rule:** (Implicit in "minimal JavaScript")  
**Fix:** Remove or replace with silent error handling  
**Priority:** LOW

---

### Issue 8: Event Delegation Improvements
**Files:** 
- `js/index.best-deals.js` - multiple button listeners
- `js/index.craft-wines.js` - menu button listeners
- `js/index.header-nav.js` - nav link listeners

**Violation:** Multiple `addEventListener` calls instead of single delegated listener  
**AGENTS.md Rule:** "prefer event delegation"  
**Fix:** Consolidate to single delegated event listeners  
**Priority:** MEDIUM

---

### Issue 9: Ineffective Event Listener Removal
**File:** `js/index.best-deals.js` - lines 129-131  
**Violation:** `removeEventListener` passes new function reference, so removal never works  
**AGENTS.md Rule:** "minimal JavaScript"  
**Fix:** Use stored function references or switch to delegation  
**Priority:** MEDIUM

---

### Issue 10: Heavy DOM Manipulation
**File:** `js/global.shopping-cart.js` - lines 80-87  
**Violation:** Full `innerHTML` rebuild of entire cart on every update  
**Fix:** Implement targeted updates or delegated event pattern  
**Priority:** LOW

---

## Minor Issues (Code Style)

### Issue 11: Inline Styles in JavaScript
**Files:**
- `js/index.js` - loader opacity/display
- `js/global.footer.js` - many inline style manipulations
- `js/index.faq.js` - inline `max-height`
- `js/index.header-nav.js` - color and background styles

**Violation:** Direct style manipulation instead of class-based CSS  
**AGENTS.md Rule:** Prefer CSS classes and BEM methodology  
**Fix:** Move styles to CSS and toggle classes  
**Priority:** LOW

---

## Author Assignment Summary

| Author | Issues | Primary Focus |
|--------|--------|--------|
| oland1979 | #1 (carousel_arrow.svg), #2, #4 | Image naming, CSS structure |
| BrytanVitalii | #1, #2, #8 | CSS variables, shopping cart |
| airdray | #2, #3, #4 | Header nav, media queries |
| Volodymyr Andriichak | #2, #3 | Color variables, CSS updates |
| Dmytro Novykov | #4, #11 | BEM naming, footer |
| vladbondrevo | #2 | CSS varieties |

---

## Recommendations

### Phase 1: Critical (Do First)
1. Rename `carousel_arrow.svg` to `carousel-arrow.svg`
2. Create CSS variable system and consolidate hardcoded colors
3. Fix desktop-first media queries

### Phase 2: Quality (Do Second)
1. Standardize BEM naming across all CSS files
2. Improve event delegation in JavaScript
3. Define missing CSS variables

### Phase 3: Polish (Do Last)
1. Move inline styles to CSS classes
2. Remove console statements
3. Optimize DOM manipulation patterns

---

## Files That Need Review

### CSS Files (Priority Order)
1. `css/global.header-nav.partial.css` - colors, media queries
2. `css/global.shopping-cart.partial.css` - colors, BEM naming
3. `css/index.awards.partial.css` - BEM naming, undefined variables
4. `css/index.best-deals.partial.css` - deep BEM chains
5. `css/index.hero.partial.css` - media queries
6. `css/global.cart-popup.partial.css` - hardcoded colors
7. `css/index.newsletter.partial.css` - hardcoded colors, media queries
8. `css/index.wine-categories.partial.css` - gradients, naming
9. `css/index.about.partial.css` - media queries, naming
10. `css/components.css` - generic naming, hardcoded colors

### JavaScript Files (Priority Order)
1. `js/global.shopping-cart.js` - event delegation, console, DOM manipulation
2. `js/index.best-deals.js` - event delegation, listener removal
3. `js/index.craft-wines.js` - event delegation
4. `js/index.header-nav.js` - event delegation, inline styles
5. `js/global.footer.js` - inline styles
6. `js/index.faq.js` - inline styles

### Image Files
1. `img/wines-best-deals/carousel_arrow.svg` - rename to `carousel-arrow.svg`

---

## Next Steps

1. Assign each issue to respective authors
2. Create GitHub Issues for each violation
3. Set priority levels for fixes
4. Track resolution and verify AGENTS.md compliance

