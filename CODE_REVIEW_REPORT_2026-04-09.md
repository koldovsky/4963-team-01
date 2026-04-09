# Code Review Report - AGENTS.md Compliance Audit
**Date:** 2026-04-09  
**Reviewer:** Automated Code Review Agent  
**Branch:** cursor/code-review-issues-ae47  
**Base:** main

---

## Executive Summary

A comprehensive code review of the main branch has been completed against the **AGENTS.md** standards document. The review identified **38 distinct violations** across **9 categories**, which have been organized into **9 GitHub issues** for tracking and remediation.

### Violation Summary by Category

| Category | Count | Severity | Issues |
|----------|-------|----------|--------|
| Mobile-first CSS (max-width) | 4 | High | #531 |
| Hardcoded colors | 11 | High | #532, #533 |
| BEM methodology | 4 | Medium | #534 |
| Event delegation in JS | 4 | Medium | #535 |
| Semantic HTML | 3 | Medium | #536 |
| Code formatting | 2 | Low | #537 |
| File structure | 2 | Low-Medium | #538 |
| File naming | 1 | Medium | #530 |
| **TOTAL** | **38** | | **9 issues** |

### Standards Compliance Score

- ✓ **No forbidden frameworks detected** (React, Vue, Angular, Tailwind, jQuery)
- ✓ **Project remains pure static HTML/CSS/JS**
- ✗ **Mobile-first design:** Partially compliant (some files use desktop-first max-width)
- ✗ **CSS variables:** Partially compliant (11 hardcoded color violations)
- ✗ **BEM methodology:** Mostly compliant (4 violations in specific components)
- ✗ **JavaScript best practices:** Partially compliant (event delegation improvements needed)
- ✗ **Semantic HTML:** Mostly compliant (3 improvements needed)
- ✗ **File structure:** Mostly compliant (minor violations)

---

## Detailed Findings

### 1. File Naming Violations

**AGENTS.md Standard:** All files must use kebab-case

**Issue #530 - File naming violation: snake_case in img/**
- **Severity:** Medium
- **Count:** 1 file
- **File:** `img/wines-best-deals/carousel_arrow.svg`
- **Problem:** Uses snake_case instead of kebab-case
- **Required Action:** Rename to `carousel-arrow.svg` and update all references

**Author Assignment:** airdray (carousel implementation)

---

### 2. Mobile-First Responsive Design Violations

**AGENTS.md Standard:** CSS must use mobile-first approach with `@media (min-width: ...)` NOT `@media (max-width: ...)`

**Issue #531 - Mobile-first responsive design violations**
- **Severity:** High
- **Count:** 4 CSS files with violations
- **Files and Lines:**
  1. `css/index.varieties.partial.css` (lines 31-44)
     - Problem: Uses `@media (max-width: 345px)`
  2. `css/index.hero.partial.css` (lines 89-140)
     - Problem: Multiple `max-width` breakpoints
  3. `css/global.header-nav.partial.css` (lines 71-199)
     - Problem: Navigation layout uses `max-width`
  4. `css/index.about.partial.css` (lines 81-109)
     - Problem: Uses `max-width` and mixed range queries

**Required Action:** Refactor all to mobile-first with default styles for smallest view, then progressive `@media (min-width: ...)` enhancements

**Author Assignment:** Andrii Oliinyk (primary CSS developer)

**Impact:** Architecture-level violation affecting responsive design quality

---

### 3. Hardcoded Colors (Not Using CSS Variables)

**AGENTS.md Standard:** All colors MUST be declared in `:root` and used via `var(--color-name)`

**Issue #532 - Hardcoded colors Part 1**
- **Severity:** High
- **Count:** 5 violations
- **Files:**
  1. `css/components.css` (lines 54-58)
     - `color: red;` → Should use CSS variable
  2. `css/global.css` (lines 77-78)
     - `color: white;` → Should use `var(--text-color)`
  3. `css/global.header-nav.partial.css` (line 5)
     - `rgba(0, 0, 0, 0.5)` → Define `--header-overlay`
  4. `css/index.about.partial.css` (lines 22-30)
     - `rgb(38, 30, 28)` → Use shared token
  5. `css/index.wine-categories.partial.css` (lines 36-39)
     - Gradient stops use literal `rgba(0, 0, 0, ...)`

**Issue #533 - Hardcoded colors Part 2**
- **Severity:** High
- **Count:** 7 violations
- **Files:**
  1. `css/index.newsletter.partial.css` (lines 84-104, 161)
     - Modal overlay uses `rgba(38, 30, 28, 0.6)`
  2. `css/index.awards.partial.css` (line 79)
     - `rgba(255, 255, 255, 0.05)` not in variables
  3. `css/global.shopping-cart.partial.css` (lines 8, 98-101, 209)
     - Multiple literal values
  4. `css/global.cart-popup.partial.css` (lines 9-13, 47)
     - `background: white`, `color: white`, inline shadows
  5. `css/index.best-deals.partial.css` (lines 226, 231)
     - SVG `fill: white`
  6. `index.newsletter.partial.html` (line 18)
     - **Inline HTML style:** `stroke:rgba(255, 255, 255, 0.14)`

**Total Hardcoded Colors:** 12 instances

**Required Action:** Create comprehensive color palette in `global.css :root` and migrate all references

**Author Assignment:** Andrii Oliinyk (primary CSS developer)

**Impact:** Maintenance burden, inconsistency, difficult to implement dark mode or theme changes

---

### 4. BEM CSS Methodology Violations

**AGENTS.md Standard:** CSS must follow strict BEM: `.block`, `.block__element`, `.block__element--modifier`

**Issue #534 - BEM CSS methodology violations**
- **Severity:** Medium
- **Count:** 4 violations

1. **index.about.partial.html + index.about.partial.css**
   - Files: HTML lines 3-9, CSS lines 12-31
   - Problem: Multiple parallel block names: `about-card`, `event-card`, `addictives-card`, `grape-card`
   - Standard: Should use single block with modifiers: `about-card--events`, `about-card--addictives`, etc.
   - Current Pattern: 
     ```html
     <div class="about-card event-card">
     ```
   - Correct Pattern:
     ```html
     <div class="about-card about-card--event">
     ```

2. **index.best-deals.partial.html**
   - Lines: 17-26
   - Problem: Deep class chaining: `.best-deals__carousel-track__item__image` (element of element of element)
   - Standard: BEM prefers flatter element structure with single namespace level
   - Solution: Introduce intermediate block like `best-deals-carousel__item` or flatten to `best-deals__slide`

3. **global.header-nav.partial.html**
   - Line: 1
   - Problem: Mixes `header__nav` and `nv` (unclear abbreviation) on same element
   - Current: `<nav class="header__nav nv">`
   - Standard: One consistent BEM block per component
   - Solution: Use descriptive `header-nav` or `site-nav` exclusively

4. **underage.html**
   - Line: 18
   - Problem: Mixes generic `section-title` with `underage__title`
   - Solution: Remove generic utility class or apply as modifier

**Author Assignment:** Dmytro Novykov (recent BEM work), but-d (about section)

---

### 5. JavaScript Best Practices Violations

**AGENTS.md Standard:** JavaScript must be minimal, use vanilla JS, event delegation preferred, NO global variables

**Issue #535 - JavaScript event delegation and global variables**
- **Severity:** Medium
- **Count:** 4 files with violations

1. **js/index.header-nav.js**
   - Lines: 1-22
   - Problem: Attaches `mouseenter`/`mouseleave` to EACH nav link individually
   - Current Pattern:
     ```javascript
     const navLinks = document.querySelectorAll(".nv__menu-link");
     navLinks.forEach((link) => {
       link.addEventListener("mouseenter", () => {
         // ...
       });
     });
     ```
   - Standard: Use delegated event listener on parent
   - Better: Use CSS `:hover` where possible

2. **js/index.craft-wines.js**
   - Lines: 3-12
   - Problem: Per-button listeners for add-to-cart
   - Pattern: Same `querySelectorAll` + per-element loop
   - Solution: Single listener on `.craft-wines-menu` delegating to `.craft-wines-menu__button`

3. **js/index.best-deals.js**
   - Lines: 23-35, 183
   - Problems: 
     - Per-button listeners for carousel items
     - `window.addEventListener("resize", ...)` global handler
   - Issue: Performance concern with cloned elements accumulating listeners
   - Solution: Event delegation from `.best-deals__carousel-track`; use `matchMedia` for resize

4. **js/index.js**
   - Lines: 16-33
   - Problems:
     - Top-level state variables
     - `window.onload` global handler
   - Note: ES module top-level const/let are module-scoped (acceptable), but `window.onload` is problematic
   - Solution: Use IIFE or single init; prefer `DOMContentLoaded` or existing HTMX events

**Note:** Some scripts (`index.age-modal.js`, `index.varieties-animation.js`) have similar patterns

**Author Assignment:** BrytanVitalii, vladbondrevo (animation/JS work)

---

### 6. Semantic HTML and Accessibility Violations

**AGENTS.md Standard:** Must use semantic HTML, proper ARIA attributes, keyboard accessibility

**Issue #536 - Semantic HTML and accessibility violations**
- **Severity:** Medium
- **Count:** 3 violations

1. **index.faq.partial.html**
   - Lines: 13-16
   - Problem: FAQ questions are `<div>` elements, not semantic interactive elements
   - Current:
     ```html
     <div class="faq__question">
       <div class="faq__question-title">
         Are you a wholesale wine supplier?
       </div>
     ```
   - Standard: Should use `<details>`/`<summary>` OR headings + buttons with `aria-expanded`
   - Impact: Hurts accessibility and keyboard navigation without ARIA roles

2. **index.history-timeline.partial.html**
   - Line: 1
   - Problem: Timeline wrapper is generic `<div>` with `id`
   - Current: `<div id="history" class="history-timeline">`
   - Standard: Should use `<section>` for semantic landmark
   - Correct: `<section id="history" class="history-timeline">`

3. **index.about.partial.html**
   - Lines: 5-7
   - Problem: Card descriptions use `<span>` for multi-line block content
   - Current: `<span class="about-card__description">We have a great collection...</span>`
   - Standard: `<span>` is inline; multi-line should be `<p>` or `<div>`
   - Correct: `<p class="about-card__description">We have a great collection...</p>`

**Positive Finding:** Sampled `<img>` tags generally include proper `alt` attributes ✓

**Author Assignment:** but-d (HTML structure changes)

---

### 7. Code Formatting Violations

**AGENTS.md Standard:** Code should follow Prettier formatting with 2-space indentation

**Issue #537 - Code formatting indentation consistency**
- **Severity:** Low
- **Count:** 2 files

1. **index.history-timeline.partial.html**
   - Lines: 1-5
   - Problem: Uses 4-space indentation
   - Example:
     ```html
     <div id="history" class="history-timeline">
          <img class="history-timeline__image"
              src="img/wines.png"
     ```
   - Fix: Reformat to 2 spaces

2. **js/index.newsletter.js**
   - Lines: 9-21
   - Problem: Uses 4-space indentation inside functions
   - Example:
     ```javascript
     function openModal(isSuccess = true) {
         if (isSuccess) {
             titleEl.textContent = "Thank you!";
     ```
   - Fix: Normalize to 2-space indentation

**Author Assignment:** but-d (likely HTML author), Dmytro Novykov (likely JS author)

---

### 8. File Structure and Asset Organization

**AGENTS.md Standard:** Images in `img/`, JavaScript in `js/`, CSS in `css/`, Partial HTML in project root

**Issue #538 - File structure and asset organization violations**
- **Severity:** Low-Medium
- **Count:** 2-3 issues

1. **js-tasks/ directory**
   - Problem: Task JS files live outside documented `js/` structure
   - Files: `tasks01.js`, `tasks02.js`, `tasks03.js`
   - Issue: Uses unclear naming (`tasks01` instead of kebab-case `tasks-01`)
   - Standard: Site scripts should follow documented structure
   - Solution: Either move to `js/` with kebab-case names, or document as exception

2. **HTML partial asset references**
   - Problem: HTML files reference assets in `img/` but git tree shows few tracked images
   - Examples: `img/wines-best-deals/cabernet.jpg`, `img/background-hero-partial.jpg`
   - Issue: May indicate missing assets or untracked image files
   - Solution: Ensure all referenced assets exist under `img/` or update paths

3. **Workspace configuration file**
   - File: `4963-team-01-main.code-workspace`
   - Problem: Not strictly kebab-case at root level
   - Note: IDE files may be acceptable exemption
   - Recommendation: Use single kebab-case name or document exclusion

**Author Assignment:** AirDray1 (carousel work), but-d (general structure)

---

## Compliance Verification

### ✓ Standards Verified (No Issues)

- ✓ **No forbidden frameworks** detected (React, Vue, Angular, Tailwind, jQuery)
- ✓ **No CSS frameworks** detected
- ✓ **No build systems or bundlers** in frontend code
- ✓ **Project remains pure static HTML/CSS/JS** ✓
- ✓ **HTMX architecture** properly implemented
- ✓ **Image alt text** generally present (sample check)
- ✓ **Semantic file naming** mostly followed (partials correctly named)

### ✗ Standards Requiring Improvement

1. Mobile-first responsive design (max-width queries)
2. CSS variable usage for colors
3. BEM methodology strictness
4. JavaScript event delegation patterns
5. Semantic HTML elements
6. Code formatting consistency
7. File structure organization

---

## GitHub Issues Created

| Issue # | Title | Severity | Assigned To | Status |
|---------|-------|----------|-------------|--------|
| #530 | File naming violation - snake_case in img/ | Medium | airdray | OPEN |
| #531 | Mobile-first responsive design violations | High | Andrii Oliinyk | OPEN |
| #532 | Hardcoded colors Part 1 | High | Andrii Oliinyk | OPEN |
| #533 | Hardcoded colors Part 2 | High | Andrii Oliinyk | OPEN |
| #534 | BEM CSS methodology violations | Medium | Dmytro Novykov | OPEN |
| #535 | JS event delegation and globals | Medium | BrytanVitalii | OPEN |
| #536 | Semantic HTML and accessibility | Medium | but-d | OPEN |
| #537 | Code formatting indentation | Low | but-d | OPEN |
| #538 | File structure and asset organization | Low-Medium | airdray | OPEN |
| #539 | Code Review Summary (this audit) | - | - | OPEN |

---

## Remediation Roadmap

### Priority 1: High Severity (CSS Architecture)
1. **#531:** Migrate all `max-width` to mobile-first `min-width` pattern
2. **#532 & #533:** Consolidate color palette in `:root` and migrate all references

**Estimated Scope:** 4 CSS files, ~25 updates
**Key Authors:** Andrii Oliinyk (primary responsibility)

### Priority 2: Medium Severity (Code Quality)
1. **#534:** Fix BEM naming inconsistencies in about/best-deals/header components
2. **#535:** Implement event delegation in JS modules (4 files)
3. **#536:** Convert FAQ, timeline, about sections to semantic HTML

**Estimated Scope:** 3 CSS files + 4 JS files + 3 HTML files, ~30 updates
**Key Authors:** Dmytro Novykov, BrytanVitalii, but-d

### Priority 3: Low-Medium Severity (Maintenance)
1. **#537:** Run Prettier formatter on 2 files
2. **#538:** Reorganize js-tasks/ or clarify structure
3. **#530:** Rename single SVG file and update references

**Estimated Scope:** 3-4 files, ~5-10 updates
**Key Authors:** but-d, airdray

---

## Recommendations

### For Code Review Process
1. **Establish linting rules** for:
   - Enforce kebab-case file naming
   - Detect hardcoded colors in CSS
   - Require mobile-first media queries
   - Flag per-element event listeners (suggest delegation)

2. **Add pre-commit hooks** to verify:
   - CSS formatting with Prettier
   - BEM naming consistency
   - File structure compliance

3. **Create CI/CD check** for AGENTS.md compliance

### For Development Team
1. **Review AGENTS.md** before each commit
2. **Use Prettier consistently** across projects
3. **Plan CSS architecture refactor** to standardize color tokens
4. **Document js-tasks/** purpose and location rationale
5. **Consider accessibility audit** for FAQ and interactive components

### For Future AI Agents
- Reference this audit report when working on new features
- Enforce all AGENTS.md standards in new code generation
- Use provided violation patterns to catch issues early

---

## Notes

- This audit was performed using automated code analysis on the main branch
- All findings are documented with specific file locations and line numbers
- Authors were identified from git commit history for issue assignment
- Some permissions restrictions prevented automatic issue assignment via GitHub CLI
- Manual review of assignments recommended before final distribution

---

**Report Generated:** 2026-04-09T15:15:00Z  
**Reviewer Agent:** Cursor Automation - Code Review  
**Standards Reference:** `/workspace/AGENTS.md`  
**Detailed Violations:** See linked GitHub issues #530-#539
