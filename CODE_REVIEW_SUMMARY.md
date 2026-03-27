# Code Review Summary - cursor/code-review-issues-947f

**Reviewed against:** AGENTS.md architectural standards  
**Review Date:** 2026-03-27  
**Branch:** cursor/code-review-issues-947f  

## Overview
Code review identified **9 major categories** of AGENTS.md violations across multiple files and authors. All violations have been documented in GitHub issues (#253-#261).

## Issues Created

### Critical Issues (Bugs/Architecture)

1. **Issue #253: Duplicate js/index.js script tag** 
   - File: `index.html` (Author: Volodymyr Andriichak)
   - Script loaded twice (lines 21 & 147)
   - Risk: duplicate event listeners, const redeclaration errors
   - AGENTS.md violation: minimal, non-redundant JavaScript

2. **Issue #254: js-tasks/ global functions & identifier collision**
   - Files: `js-tasks/tasks01.js`, `tasks02.js`, `tasks03.js` (Author: BrytanVitalii)
   - Top-level function declarations pollute global scope
   - tasks02.js: `var min` + `function min` identifier collision
   - AGENTS.md violation: minimal and modular JavaScript, avoid globals

3. **Issue #257: BEM violations in best-deals component**
   - Files: `index.best-deals.partial.html`, CSS, JS (Author: BrytanVitalii)
   - Deep element nesting (element-of-element chains)
   - Generic `.active` modifier (should be namespaced)
   - Generic "carousel" component name (should be domain-specific)
   - AGENTS.md violation: BEM methodology, component naming

### Design System Issues

4. **Issue #255: Hardcoded colors (6 files, 6 authors)**
   - Authors: Andrii Oliinyk, Volodymyr Andriichak, airdray, OlesiaKonior, but-d
   - `rgba()`, `#fff`, `rgb()` literals instead of CSS variables
   - Affects: `global.css`, `index.newsletter.partial.css`, `index.awards.partial.css`, `index.wine-categories.partial.css`, `index.about.partial.css`, `index.discover-our-wines.partial.css`
   - AGENTS.md violation: all colors in `:root`, avoid hardcoded values

5. **Issue #258: ID-based styling for #loader**
   - File: `css/global.css` (Author: Andrii Oliinyk)
   - Uses `#loader` ID selector instead of BEM block
   - AGENTS.md violation: BEM methodology required

### Responsive Design Issues

6. **Issue #256: Desktop-first media queries (5 files, 3 authors)**
   - Authors: airdray (3 files), Andrii Oliinyk, but-d (2 files)
   - Affects: `index.hero.partial.css`, `global.header-nav.partial.css`, `index.about.partial.css`, `index.awards.partial.css`, `index.faq.partial.css`
   - Uses `@media (max-width: …)` instead of mobile-first `@media (min-width: …)`
   - AGENTS.md violation: mobile-first responsive design

### File Naming & Assets

7. **Issue #259: Snake_case filename**
   - File: `img/wines-best-deals/carousel_arrow.svg`
   - Should be kebab-case: `carousel-arrow.svg`
   - AGENTS.md violation: all files must use kebab-case

8. **Issue #260: Image format optimization**
   - Multiple authors
   - Many JPG/PNG files should be WebP for performance
   - Affected: product images (cabernet.jpg, etc.), backgrounds (cheers.jpg, etc.), PNG icons
   - Large files: `img/loader.gif` (4.4MB), `img/cheers.jpg` (188KB), `img/wine-categories-discount.png` (211KB)
   - AGENTS.md violation: prefer WebP/SVG, optimize images

### Code Quality

9. **Issue #261: Excessive imperative DOM & nested setTimeout**
   - File: `js/global.footer.js` (Author: Volodymyr Andriichak)
   - Complex animation sequences with nested `setTimeout` chains
   - Null-safety: `lightbox.querySelector()` runs if lightbox is null
   - AGENTS.md violation: minimal and modular JavaScript

## Violations Summary by Author

| Author | Issues | Violation Types |
|--------|--------|-----------------|
| **BrytanVitalii** | #254, #257 | Global functions, BEM violations, generic naming |
| **Volodymyr Andriichak** | #253, #255*, #261 | Duplicate scripts, hardcoded colors, complex DOM |
| **Andrii Oliinyk** | #255*, #256*, #258, #260* | Hardcoded colors, media queries, ID styling, images |
| **airdray** | #255*, #256* | Hardcoded colors, desktop-first media queries |
| **but-d** | #256*, #260* | Media queries, image formats |
| **OlesiaKonior** | #255*, #260* | Hardcoded colors, image formats |

\* Shared issues with multiple authors

## AGENTS.md Rules Violated

1. ✗ **JavaScript Guidelines** — global functions, excessive DOM manipulation, nested timeouts
2. ✗ **CSS Architecture (BEM)** — deep nesting, generic modifiers, ID styling
3. ✗ **CSS Variables** — hardcoded colors instead of `:root` variables
4. ✗ **Responsive Design** — desktop-first instead of mobile-first
5. ✗ **File Naming** — snake_case instead of kebab-case
6. ✗ **Component Naming** — generic terms ("carousel") instead of domain-specific
7. ✗ **Image Optimization** — large JPG/PNG instead of WebP

## Next Steps

- [ ] Authors should review assigned issues
- [ ] Fix duplicate script tag (Issue #253) — highest priority
- [ ] Refactor js-tasks or move to non-production folder (Issue #254)
- [ ] Convert images to WebP (Issue #260)
- [ ] Refactor best-deals BEM structure (Issue #257)
- [ ] Centralize colors to CSS variables (Issue #255)
- [ ] Convert to mobile-first media queries (Issue #256)
- [ ] Fix remaining naming violations (Issues #258, #259)
- [ ] Simplify footer JS animations (Issue #261)

---
**Generated by:** Code Review Automation  
**Branch:** cursor/code-review-issues-947f  
**Reviewed Files:** 43 changed files (1,668 insertions, 421 deletions)
