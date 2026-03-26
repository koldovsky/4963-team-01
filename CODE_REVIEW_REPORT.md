# Code Review Report - AGENTS.md Compliance Audit

**Date:** 2026-03-26  
**Review Type:** Automated Code Review according to AGENTS.md standards

---

## Executive Summary

This report documents **AGENTS.md compliance violations** found across the codebase. The violations are categorized by type and severity, with file paths, specific details, and affected authors identified.

### Violation Counts by Category

- **File Naming:** 4 violations
- **CSS BEM/Naming:** 8+ violations
- **CSS Hardcoded Colors:** 5+ files
- **CSS Mobile-first Responsive Design:** 6+ files with `max-width` queries
- **CSS Formatting (indentation):** 3+ files
- **HTML Semantic Structure:** 4 violations
- **HTML Attribute Casing:** 4+ files with `viewBox`
- **JavaScript Global Variables:** 3+ violations
- **JavaScript Excessive DOM Manipulation:** 2+ files
- **Duplicate Script Loading:** 1 violation
- **File Organization:** 1 violation (`js-tasks/` outside `js/`)

---

## Detailed Violations by Category

### 1. File Naming Violations (Non-kebab-case)

**Rule:** AGENTS.md § File Naming Rules — "All files must use kebab-case"

| File | Violation | Authors |
|------|-----------|---------|
| `/workspace/js-tasks/tasks01.js` | Uses digits without hyphen; should be `tasks-01.js` | BrytanVitalii, Vyacheslav Koldovskyy |
| `/workspace/js-tasks/tasks02.js` | Same as above | BrytanVitalii, Vyacheslav Koldovskyy |
| `/workspace/js-tasks/tasks03.js` | Same as above | BrytanVitalii, Vyacheslav Koldovskyy |
| `/workspace/img/wines-best-deals/carousel_arrow.svg` | Uses underscore (snake_case); should be `carousel-arrow.svg` | Unknown (image file) |

---

### 2. CSS Architecture Violations

#### 2.1 BEM Naming & Generic Component Names

**Rule:** AGENTS.md § CSS Architecture & Component Naming

| File | Issue | Authors | Details |
|------|-------|---------|---------|
| `/workspace/css/components.css` | `.button--primary`, `.button--secondary` without `.button` block | but-d, oland1979 | Lines 11–51; modifiers orphaned |
| `/workspace/css/index.awards.partial.css` | Non-BEM classes: `.awards-header`, `.award-item`, `.award-col-1`, etc. | Andrii Oliinyk, but-d | Lines 9–100+; hyphen stacks instead of `awards__element` |
| `/workspace/index.awards.partial.html` | Matching non-BEM markup | Same authors | Throughout file |
| `/workspace/index.about.partial.html` | Separate blocks `about-card`, `event-card`, `addictives-card` instead of modifiers | vladbondrevo, but-d | Lines 3–17 |
| `/workspace/css/index.about.partial.css` | Non-BEM naming for variants | airdray, but-d, vladbondrevo | Lines 12–31 |
| `/workspace/index.craft-wines.partial.html` | `craft-wines-menu` vs unclear namespace | Unknown | Lines 8–9 |
| `/workspace/global.header-nav.partial.html` | Block name `nv` is too short/opaque | Ivan Butryn, Vyacheslav Koldovskyy, others | Lines 1–19 |
| `/workspace/index.varieties.partial.html` | `redwines__title`, `whitewines__title` not under `varieties__` | vladbondrevo, Volodymyr Andriichak | Lines 9, 15 |
| `/workspace/css/index.varieties.partial.css` | Same CSS naming issue | Same | Lines 60–87 |
| `/workspace/css/index.best-deals.partial.css` | Generic `.active` without namespace | but-d, BrytanVitalii | Line 135 |
| `/workspace/global.footer.partial.html` | SVG classes with hashes and obfuscated names (e.g. `si69a94b6c558f1ecb38478fa6522f77295f474bc496bbf32239f243c11772702580841`, `svgIcon_1J7`) | Volodymyr Andriichak, others | Lines 18–47 |

#### 2.2 Hardcoded Colors (Should Use CSS Variables)

**Rule:** AGENTS.md § CSS Variables — "Avoid hardcoded colors when variables exist"

| File | Details | Authors |
|------|---------|---------|
| `/workspace/css/age-modal.partial.css` | `rgba(38, 30, 28, 0.6)` (line 4), `rgba(0, 0, 0, 0.65)` (line 19), `#fff` (line 30) | airdray, but-d, vladbondrevo |
| `/workspace/css/global.header-nav.partial.css` | `rgba(0, 0, 0, 0.5)` (line 5) | airdray, but-d, others |
| `/workspace/css/index.wine-categories.partial.css` | Gradient stops with `rgba(0, 0, 0, …)` (lines 36–39) | but-d |
| `/workspace/css/index.awards.partial.css` | `color: #FFFFFF` (lines 48, 93) | Andrii Oliinyk, but-d |
| `/workspace/css/index.about.partial.css` | Fallback `rgb(38, 30, 28)` in backgrounds (lines 22, 26, 30) | airdray, but-d, vladbondrevo |
| `/workspace/global.footer.partial.html` | Hardcoded `stroke="orange"` on SVGs (lines 18, 31, 44, 53) | Volodymyr Andriichak |
| `/workspace/index.newsletter.partial.html` | Inline SVG `style="fill:none;stroke:rgba(255, 255, 255, 0.14);…"` (lines 17–19) | Unknown |

#### 2.3 Mobile-first Responsive Design Violations

**Rule:** AGENTS.md § Responsive Design — "Use mobile-first CSS" (avoid `max-width` media queries)

| File | Issues | Authors |
|------|--------|---------|
| `/workspace/css/index.varieties.partial.css` | `@media (max-width: 345px)` (line 31) | vladbondrevo, others |
| `/workspace/css/index.hero.partial.css` | `@media (max-width: …)` (lines 76, 107, 116) | airdray, but-d |
| `/workspace/css/global.header-nav.partial.css` | `@media (max-width: …)` (lines 65, 183, 189) | airdray, but-d, others |
| `/workspace/css/index.about.partial.css` | `@media (min-width: 769px) and (max-width: 1025px)` (line 103) | airdray, but-d, vladbondrevo |
| `/workspace/css/index.awards.partial.css` | `@media (max-width: …)` (line 133) | Andrii Oliinyk, but-d |
| `/workspace/css/index.faq.partial.css` | `@media (max-width: …)` (line 132) | but-d |

#### 2.4 Code Formatting (Indentation - Should Use 2 Spaces)

**Rule:** AGENTS.md § Code Formatting — "2 space indentation"

| File | Issue | Authors |
|------|-------|---------|
| `/workspace/css/global.footer.partial.css` | Uses 4 spaces throughout (lines 1–28) | Volodymyr Andriichak |
| `/workspace/css/index.about.partial.css` | Mixed: 4 spaces in nested rules (lines 33–35) | airdray, but-d, vladbondrevo |
| `/workspace/js/global.footer.js` | Uses 4 spaces throughout | Volodymyr Andriichak |

---

### 3. HTML Semantic & Accessibility Violations

**Rule:** AGENTS.md § Accessibility & Semantic HTML

| File | Issue | Authors | Details |
|------|-------|---------|---------|
| `/workspace/index.history.partial.html` | Root is `<div class="history">` instead of `<section>` | Unknown | Line 1 |
| `/workspace/index.history-timeline.partial.html` | Root is `<div class="history-timeline">` instead of `<section>` | Unknown | Line 1 |
| `/workspace/underage.html` | Missing `<main>` wrapper; goes straight to `div.underage__container` | Unknown | Line 17 |
| `/workspace/index.newsletter.partial.html` | Email input field (line 11) has `placeholder` but no `<label>` or `aria-label` | Unknown | Line 11 |

#### 3.1 HTML Attribute Casing (Should Be Lowercase)

**Rule:** AGENTS.md § Code Formatting — "lowercase HTML attributes"

| File | Violation | Authors |
|------|-----------|---------|
| `/workspace/index.history.partial.html` | `viewBox` (lines 26, 49) | Unknown |
| `/workspace/index.best-deals.partial.html` | `viewBox` (lines 79, 94) | Unknown |
| `/workspace/global.footer.partial.html` | `viewBox` (lines 18, 31, 44, 53) | Volodymyr Andriichak |
| `/workspace/global.header-nav.partial.html` | `viewBox` (lines 46, 62, 78) | Ivan Butryn, Vyacheslav Koldovskyy, others |

---

### 4. JavaScript Violations

#### 4.1 Global Variables / Global Scope Attachment

**Rule:** AGENTS.md § JavaScript Guidelines — "avoid global variables"

| File | Issue | Authors | Details |
|------|-------|---------|---------|
| `/workspace/js/index.js` | `window.onload = function () { … }` (lines 17–24) | but-d, Volodymyr Andriichak, BrytanVitalii | Global lifecycle hook |
| `/workspace/js/index.best-deals.js` | `window.addEventListener("resize", …)` (line 132) | but-d, BrytanVitalii | Global resize listener |
| `/workspace/js-tasks/tasks01.js`, `tasks02.js`, `tasks03.js` | Top-level function declarations that become globals if used in non-module context | BrytanVitalii, Vyacheslav Koldovskyy | Lines vary |

#### 4.2 Excessive DOM Manipulation

**Rule:** AGENTS.md § JavaScript Guidelines — "Avoid … unnecessary DOM manipulation"

| File | Issue | Authors | Details |
|------|-------|---------|---------|
| `/workspace/js/global.footer.js` | Heavy inline style changes (24–48, 52–79) for lightbox animations | Volodymyr Andriichak | Extensive `element.style.*` assignments |
| `/workspace/js/index.best-deals.js` | Heavy node cloning, `track.style.*` transforms/transitions | but-d, BrytanVitalii | Carousel implementation |

#### 4.3 Duplicate Script Loading

**Rule:** AGENTS.md § Project Structure & Minimal JavaScript — ensure clean loading

| File | Issue | Impact |
|------|-------|--------|
| `/workspace/index.html` | `<script src="js/index.js" type="module">` (line 19) AND `<script src="js/index.js">` (line 147) | **Double execution risk**; script loads twice |

---

### 5. Project Structure Violations

**Rule:** AGENTS.md § Project Structure — "JavaScript files must be placed in js/"

| Path | Issue | Authors |
|------|-------|---------|
| `/workspace/js-tasks/` | JavaScript exercises placed outside `js/` folder | BrytanVitalii, Vyacheslav Koldovskyy |

---

### 6. CSS Partial File Naming

**Minor Inconsistency (not a rule violation, but worth noting):**

- Most index partials have corresponding CSS: `index.*.partial.css`
- `age-modal.partial.css` is named without `index.` prefix (all others follow `index.<name>.partial.css` pattern)
- **Recommendation:** Rename `css/age-modal.partial.css` → `css/index.age-modal.partial.css` for consistency

---

## Recommendations

### Priority: HIGH

1. **Fix duplicate `index.js` loading** in `/workspace/index.html` (line 147)
2. **Fix BEM naming** in `index.awards.partial.css`, `index.about.partial.css`, and HTML counterparts
3. **Replace hardcoded colors** with CSS variables from `:root`
4. **Convert `max-width` media queries to `min-width`** for mobile-first approach

### Priority: MEDIUM

5. Fix indentation to 2 spaces (CSS and JS files)
6. Fix HTML attribute casing (`viewBox` → `viewbox`)
7. Add semantic tags (`<section>`, `<main>`, `<label>`)
8. Rename `js-tasks/` files to use kebab-case (`tasks-01.js`, etc.)
9. Move or reorganize `js-tasks/` to `js/` folder

### Priority: LOW

10. Simplify footer SVG classes (remove obfuscated names)
11. Rename `carousel_arrow.svg` → `carousel-arrow.svg`
12. Rename `age-modal.partial.css` → `index.age-modal.partial.css`

---

## Files Requiring Action

- `/workspace/index.html` — Duplicate script
- `/workspace/css/index.awards.partial.css` — BEM, colors
- `/workspace/css/index.about.partial.css` — BEM, colors, indentation
- `/workspace/css/age-modal.partial.css` — Colors
- `/workspace/css/global.header-nav.partial.css` — Mobile-first, indentation
- `/workspace/css/index.hero.partial.css` — Mobile-first
- `/workspace/css/index.best-deals.partial.css` — BEM (generic `.active`), mobile-first
- `/workspace/css/index.varieties.partial.css` — BEM, mobile-first
- `/workspace/css/components.css` — BEM (orphaned modifiers)
- `/workspace/css/global.footer.partial.css` — Colors, indentation
- `/workspace/css/index.wine-categories.partial.css` — Colors
- `/workspace/css/index.faq.partial.css` — Mobile-first
- `/workspace/global.footer.partial.html` — SVG classes, colors, attribute casing
- `/workspace/global.header-nav.partial.html` — BEM naming, attribute casing
- `/workspace/index.awards.partial.html` — BEM naming
- `/workspace/index.about.partial.html` — BEM naming
- `/workspace/index.history.partial.html` — Semantic HTML, attribute casing
- `/workspace/index.history-timeline.partial.html` — Semantic HTML
- `/workspace/index.varieties.partial.html` — BEM naming, attribute casing
- `/workspace/index.newsletter.partial.html` — Accessibility (label), inline styles
- `/workspace/index.best-deals.partial.html` — Attribute casing
- `/workspace/underage.html` — Semantic HTML
- `/workspace/js/index.js` — Global variables, duplicate loading
- `/workspace/js/index.best-deals.js` — Global variables, DOM manipulation
- `/workspace/js/global.footer.js` — Global scope, DOM manipulation, indentation
- `/workspace/js-tasks/tasks01.js`, `tasks02.js`, `tasks03.js` — File naming, organization
- `/workspace/img/wines-best-deals/carousel_arrow.svg` — File naming

---

## Conclusion

The codebase contains **numerous violations** of AGENTS.md standards. The violations span:

- **Naming conventions** (kebab-case, BEM methodology)
- **CSS practices** (color variables, mobile-first responsive design, indentation)
- **HTML semantics** (missing `<section>`, `<main>`, labels, attribute casing)
- **JavaScript patterns** (global variables, excessive DOM manipulation)
- **Project structure** (file organization)

**Estimated effort to fix:** Medium (requires systematic updates across 25+ files, but mostly straightforward mechanical fixes)

**Recommended approach:** Create separate issues per category or per author for easier tracking and assignment.

---

*Report generated by automated code review on 2026-03-26*
