# Code Review Report - AGENTS.md Compliance

**Date:** 2026-04-05  
**Reviewed By:** Automated Code Review Agent  
**Repository:** https://github.com/koldovsky/4963-team-01  

---

## Executive Summary

A comprehensive code review was conducted according to the **AGENTS.md** standards and guidelines. **6 GitHub issues** were created and assigned to respective code authors for violations found.

### Key Findings:

- ✅ **No React, Vue, Angular, Tailwind, jQuery, or build systems found** - Project correctly uses vanilla HTML/CSS/JS
- ✅ **HTMX partial architecture correctly implemented** in index.html
- ✅ **No console.log statements** left in production code
- ❌ **Mobile-first CSS violations** - Uses `max-width` instead of `min-width` media queries
- ❌ **BEM naming inconsistencies** - Awards section not properly namespaced
- ❌ **Hardcoded colors** used instead of CSS variables in multiple files
- ❌ **File naming violations** - Snake_case used in image files
- ❌ **Semantic HTML issues** - FAQ uses div instead of semantic controls

---

## Violations by Category

### 1. CSS Media Queries (Desktop-First Anti-pattern)

| Issue | File | Lines | Author | Severity |
|-------|------|-------|--------|----------|
| #509 | `css/index.hero.partial.css` | 89, 120, 129 | airdray (belous50409@gmail.com) | High |
| #510 | `css/global.header-nav.partial.css` | 71, 189, 195 | airdray (belous50409@gmail.com) | High |

**Problem:** Uses `@media (max-width: ...)` which is desktop-first. Should use `@media (min-width: ...)` for mobile-first approach.

**Reference:** AGENTS.md - Responsive Design section

---

### 2. BEM CSS Naming

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #511 | `css/index.awards.partial.css` + `index.awards.partial.html` | oland1979 (oland1979@gmail.com) | High |

**Problem:** Classes like `.awards-header`, `.award-item`, `.award-col-1` don't follow consistent BEM pattern. Should use `awards__*` namespace.

**Reference:** AGENTS.md - CSS Architecture (BEM)

---

### 3. CSS Variables

| Issue | File | Lines | Author | Severity |
|-------|------|-------|--------|----------|
| #512 | `css/index.awards.partial.css` | ~70 | oland1979 (oland1979@gmail.com) | Medium |

**Problem:** References undefined variable `--color-border-soft` not defined in `:root`.

**Reference:** AGENTS.md - CSS Variables section

**Other hardcoded colors found in:**
- `css/components.css` - `color: red` (line 57)
- `css/global.css` - `color: white` (line 78)
- `css/global.cart-popup.partial.css` - `background: white`, hardcoded rgba
- `css/global.header-nav.partial.css` - hardcoded rgba(0,0,0,0.5)
- `css/global.shopping-cart.partial.css` - multiple hardcoded colors
- `css/index.about.partial.css` - fallback rgb(38, 30, 28)
- `css/index.newsletter.partial.css` - hardcoded rgba and #fff
- `css/index.wine-categories.partial.css` - gradient with literal rgba
- `css/index.best-deals.partial.css` - hardcoded SVG fill: white

---

### 4. File Naming

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #513 | `img/wines-best-deals/carousel_arrow.svg` | BrytanVitalii (brytanvitalii08@gmail.com) | Low |

**Problem:** Uses snake_case (`carousel_arrow`) instead of kebab-case (`carousel-arrow`).

**Reference:** AGENTS.md - File Naming Rules

---

### 5. Semantic HTML

| Issue | File | Lines | Author | Severity |
|-------|------|-------|--------|----------|
| #514 | `index.faq.partial.html` | 13-67 | but-d / oland1979 (dimacpoint@gmail.com / oland1979@gmail.com) | Medium |

**Problem:** FAQ accordion uses generic `<div>` elements instead of semantic HTML like `<details>/<summary>` or proper `<button>` + ARIA.

**Reference:** AGENTS.md - Accessibility & Semantic HTML

---

## GitHub Issues Created

### Issue #509: [CSS] Mobile-first: max-width media queries in hero section
- **Assigned to:** AirDray1 (airdray)
- **Status:** OPEN
- **Labels:** AGENTS.md

### Issue #510: [CSS] Mobile-first: max-width media queries in header navigation
- **Assigned to:** AirDray1 (airdray)
- **Status:** OPEN
- **Labels:** AGENTS.md

### Issue #511: [CSS] BEM violation: awards section class names
- **Assigned to:** oland1979
- **Status:** OPEN
- **Labels:** AGENTS.md, BEM

### Issue #512: [CSS] Undefined CSS variable: --color-border-soft
- **Assigned to:** oland1979
- **Status:** OPEN
- **Labels:** AGENTS.md, bug

### Issue #513: [Naming] File naming violation: snake_case image asset
- **Assigned to:** BrytanVitalii
- **Status:** OPEN
- **Labels:** AGENTS.md

### Issue #514: [HTML] Non-semantic structure in FAQ section
- **Assigned to:** but-d
- **Status:** OPEN
- **Labels:** AGENTS.md, a11y

---

## What Passed Review ✅

- ✅ **No forbidden frameworks** - No React, Vue, Angular, Tailwind
- ✅ **No jQuery** - All vanilla JavaScript
- ✅ **HTMX architecture** - Properly implemented with data-hx-* attributes
- ✅ **Partial naming** - Correct pattern: `[page].[component].partial.html`
- ✅ **Main HTML files** - Use kebab-case (index.html, underage.html)
- ✅ **CSS/JS directory structure** - Files properly placed
- ✅ **Console.log cleanup** - No stray console statements in main code
- ✅ **HTMX loading strategy** - Correctly loads sections on page load

---

## Recommendations for Future Development

1. **Enforce mobile-first CSS** in all new styles
2. **Strict BEM checking** - Use naming conventions consistently
3. **CSS variable usage** - Extract all hardcoded colors to `:root`
4. **File naming validation** - Use kebab-case exclusively
5. **Semantic HTML** - Prefer semantic elements over generic divs
6. **Code review process** - Implement AGENTS.md checks in PR reviews

---

## Next Steps

All identified issues have been created in GitHub and assigned to their respective authors. Authors should:

1. Review assigned issues
2. Plan fixes according to AGENTS.md guidelines
3. Create PRs to address violations
4. Request code review before merging

---

## Files Reviewed

**Total files scanned:** 51 (HTML, CSS, JS)

**Files with violations:** 14
- `css/index.hero.partial.css`
- `css/global.header-nav.partial.css`
- `css/index.awards.partial.css`
- `index.awards.partial.html`
- `img/wines-best-deals/carousel_arrow.svg`
- `index.faq.partial.html`
- Plus additional files with hardcoded colors (see CSS Variables section)

---

## Review Methodology

- Reviewed against **AGENTS.md** specifications
- Checked CSS for BEM compliance, mobile-first patterns, and variable usage
- Verified HTML for semantic markup and accessibility
- Analyzed JavaScript for forbidden patterns (jQuery, global variables, console statements)
- Verified file naming conventions (kebab-case)
- Confirmed framework restrictions (no React, Vue, Angular, Tailwind, etc.)

---

**Report Generated:** 2026-04-05T15:01:30Z  
**Review Status:** Complete - 6 issues created and assigned
