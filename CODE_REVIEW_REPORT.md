# Code Review Report - AGENTS.md Compliance

**Review Date:** 2026-03-15  
**Reviewed Against:** AGENTS.md (Project Coding Standards)  
**Total Violations Found:** 22

---

## Summary of Violations by Category

| Category | Count | Severity |
|----------|-------|----------|
| Missing/Empty CSS Files | 4 | HIGH |
| CSS Variable Usage | 8 | MEDIUM |
| Responsive Design (max-width queries) | 4 | MEDIUM |
| Component Naming (BEM violations) | 3 | MEDIUM |
| Image Format (non-optimized) | 14 | LOW |
| Semantic HTML | 3 | LOW |
| **TOTAL** | **22** | - |

---

## Category 1: Missing/Empty CSS Files (4 violations)

### Issue 1.1: Missing CSS for craft-wines partial
- **File:** `index.craft-wines.partial.html`
- **Violation:** Partial HTML file has no corresponding CSS file
- **AGENTS.md Rule:** "Each section should have **a dedicated partial**"
- **Fix Required:** Create `css/index.craft-wines.partial.css`
- **Severity:** HIGH

### Issue 1.2: Missing CSS for history partial
- **File:** `index.history.partial.html`
- **Violation:** Partial HTML file has no corresponding CSS file
- **AGENTS.md Rule:** "Each section should have **a dedicated partial**"
- **Fix Required:** Create `css/index.history.partial.css`
- **Severity:** HIGH

### Issue 1.3: Missing CSS for wine-categories partial
- **File:** `index.wine-categories.partial.html`
- **Violation:** Partial HTML file has no corresponding CSS file
- **AGENTS.md Rule:** "Each section should have **a dedicated partial**"
- **Fix Required:** Create `css/index.wine-categories.partial.css`
- **Severity:** HIGH

### Issue 1.4: Empty CSS file for footer
- **File:** `css/global.footer.partial.css`
- **Violation:** CSS file exists but is completely empty
- **AGENTS.md Rule:** "Each section should have **a dedicated partial**"
- **Fix Required:** Populate with footer styles from `global.footer.partial.html`
- **Severity:** HIGH

---

## Category 2: CSS Variable Usage (8 violations)

### Issue 2.1: Hardcoded color in FAQ styles
- **File:** `css/index.questions-and-answers.partial.css` (Line 40)
- **Code:** `.faq__question { border-bottom: 1px solid #444; }`
- **Violation:** Hardcoded color `#444` instead of CSS variable
- **AGENTS.md Rule:** "All colors must be declared inside `:root`"
- **Fix Required:** Replace with `var(--color-dark-gray)` or similar variable
- **Severity:** MEDIUM

### Issue 2.2: Hardcoded colors in about cards (3 occurrences)
- **File:** `css/index.about.partial.css` (Lines 21, 25, 29)
- **Code:** `rgb(38, 30, 28)` used in `.event-card`, `.addictives-card`, `.grape-card`
- **Violation:** Hardcoded RGB color instead of CSS variable
- **AGENTS.md Rule:** "All colors must be declared inside `:root`"
- **Fix Required:** Replace with `var(--color-dark)` or similar variable
- **Severity:** MEDIUM

### Issue 2.3: Hardcoded stroke colors in footer SVGs
- **File:** `global.footer.partial.html` (Lines 21, 41, 60, 79)
- **Code:** `<svg width="32" stroke="orange" viewBox="0 0 32 32">`
- **Violation:** Inline `stroke="orange"` instead of CSS variable
- **AGENTS.md Rule:** "All colors must be declared inside `:root` and use CSS variables"
- **Fix Required:** Define color in CSS and apply via CSS class or data attribute
- **Severity:** MEDIUM

---

## Category 3: Responsive Design (4 violations)

### Issue 3.1: Desktop-first media query in hero section
- **File:** `css/index.hero.partial.css` (Line 75)
- **Code:** `@media (max-width: 767px) { ... }`
- **Violation:** Desktop-first approach instead of mobile-first
- **AGENTS.md Rule:** "Use **mobile-first CSS**" with `min-width` not `max-width`
- **Fix Required:** Convert to mobile-first: `@media (min-width: 768px) { ... }`
- **Severity:** MEDIUM

### Issue 3.2: Desktop-first media query in header navigation
- **File:** `css/global.header-nav.partial.css` (Line 65)
- **Code:** `@media (max-width: 767px) { ... }`
- **Violation:** Desktop-first approach instead of mobile-first
- **AGENTS.md Rule:** "Use **mobile-first CSS**" with `min-width` not `max-width`
- **Fix Required:** Convert to mobile-first: `@media (min-width: 768px) { ... }`
- **Severity:** MEDIUM

### Issue 3.3: Desktop-first media query in about section
- **File:** `css/index.about.partial.css` (Line 80)
- **Code:** `@media (max-width: 767px) { ... }`
- **Violation:** Desktop-first approach instead of mobile-first
- **AGENTS.md Rule:** "Use **mobile-first CSS**" with `min-width` not `max-width`
- **Fix Required:** Convert to mobile-first: `@media (min-width: 768px) { ... }`
- **Severity:** MEDIUM

### Issue 3.4: Desktop-first media query in varieties section
- **File:** `css/index.varieties.partial.css` (Line 31)
- **Code:** `@media (max-width: 320px) { ... }`
- **Violation:** Desktop-first approach instead of mobile-first
- **AGENTS.md Rule:** "Use **mobile-first CSS**" with `min-width` not `max-width`
- **Fix Required:** Convert to mobile-first: `@media (min-width: 321px) { ... }`
- **Severity:** MEDIUM

---

## Category 4: Component Naming (3 violations)

### Issue 4.1: Improper BEM naming in about cards
- **File:** `index.about.partial.html` (Lines 3, 10, 17)
- **Code:** `<div class="about-card event-card">`, `<div class="about-card addictives-card">`, `<div class="about-card grape-card">`
- **Violation:** Modifier classes lack proper BEM syntax (`--modifier`)
- **AGENTS.md Rule:** "Each component should have a **unique namespace**" and use BEM: `.block__element--modifier`
- **Fix Required:** Rename to `.about-card--event`, `.about-card--addictives`, `.about-card--grape`
- **Severity:** MEDIUM

### Issue 4.2: Improper CSS class naming in about styles
- **File:** `css/index.about.partial.css` (Lines 20, 24, 28)
- **Code:** `.event-card`, `.addictives-card`, `.grape-card`
- **Violation:** Generic names without proper BEM modifier syntax
- **AGENTS.md Rule:** "BEM Pattern: `.block__element--modifier`"
- **Fix Required:** Rename to `.about-card--event`, `.about-card--addictives`, `.about-card--grape`
- **Severity:** MEDIUM

### Issue 4.3: Unclear namespace abbreviation in navigation
- **File:** `global.header-nav.partial.html` (Line 1)
- **Code:** `<nav class="header__nav nv">`
- **Violation:** Abbreviated namespace `nv` is unclear and non-descriptive
- **AGENTS.md Rule:** "Avoid generic class names" and use clear namespace identifiers
- **Fix Required:** Remove or rename `nv` to a more descriptive identifier
- **Severity:** MEDIUM

---

## Category 5: Image Format (14 violations)

These are lower priority but should be addressed for performance optimization:

### Issue 5.1: PNG format for history timeline
- **File:** `index.history-timeline.partial.html` (Line 3)
- **Code:** `src="img/wines.png"`
- **Violation:** PNG format instead of optimized webp
- **AGENTS.md Rule:** "Preferred image formats: webp, svg"
- **Fix Required:** Convert to webp format

### Issue 5.2: PNG format for history background
- **File:** `index.history.partial.html` (Line 4)
- **Code:** `src="img/background-history-partial.png"`
- **Violation:** PNG format instead of optimized webp
- **AGENTS.md Rule:** "Preferred image formats: webp, svg"
- **Fix Required:** Convert to webp format

### Issue 5.3-5.6: JPG format for craft wines (4 images)
- **File:** `index.craft-wines.partial.html` (Lines 11, 21, 31, 41)
- **Code:** `src="img/wines-for-craft-wines-partial/*.jpg"`
- **Violation:** JPG format instead of optimized webp
- **AGENTS.md Rule:** "Preferred image formats: webp, svg"
- **Fix Required:** Convert all JPGs to webp format

### Issue 5.7-5.10: JPG format for best deals (4 images)
- **File:** `index.best-deals.partial.html` (Lines 19, 33, 47, 61)
- **Code:** `src="img/wines-best-deals/*.jpg"`
- **Violation:** JPG format instead of optimized webp
- **AGENTS.md Rule:** "Preferred image formats: webp, svg"
- **Fix Required:** Convert all JPGs to webp format

### Issue 5.11-5.14: PNG format for FAQ icons (4 images)
- **File:** `index.questions-and-answers.partial.html` (Lines 73, 95, 117, 139)
- **Code:** `src="img/*-for-faq-section.png"`
- **Violation:** PNG format instead of optimized webp or svg
- **AGENTS.md Rule:** "Preferred image formats: webp, svg"
- **Fix Required:** Convert all PNGs to webp or svg format (SVG preferred for icons)

---

## Category 6: Semantic HTML (3 violations)

### Issue 6.1: Generic div instead of section in craft wines
- **File:** `index.craft-wines.partial.html` (Line 1)
- **Code:** `<div class="craft-wines">`
- **Violation:** Using generic `<div>` instead of semantic `<section>`
- **AGENTS.md Rule:** "semantic HTML structure"
- **Fix Required:** Change to `<section class="craft-wines">`
- **Severity:** LOW

### Issue 6.2: Generic div instead of section in history
- **File:** `index.history.partial.html` (Line 1)
- **Code:** `<div class="history">`
- **Violation:** Using generic `<div>` instead of semantic `<section>`
- **AGENTS.md Rule:** "semantic HTML structure"
- **Fix Required:** Change to `<section class="history">`
- **Severity:** LOW

### Issue 6.3: Generic div instead of section in history timeline
- **File:** `index.history-timeline.partial.html` (Line 1)
- **Code:** `<div class="history-timeline">`
- **Violation:** Using generic `<div>` instead of semantic `<section>`
- **AGENTS.md Rule:** "semantic HTML structure"
- **Fix Required:** Change to `<section class="history-timeline">`
- **Severity:** LOW

---

## Recommendations for Fixes (Priority Order)

### Priority 1 (HIGH - Architectural Issues)
1. Create missing CSS files for craft-wines, history, and wine-categories partials
2. Populate empty footer CSS file with proper styles

### Priority 2 (MEDIUM - Standards Compliance)
3. Convert all `@media (max-width: ...)` queries to mobile-first `@media (min-width: ...)`
4. Replace all hardcoded colors with CSS variables from `:root`
5. Fix BEM naming violations in about card components
6. Remove/rename unclear namespace abbreviations (e.g., `nv`)

### Priority 3 (LOW - Performance Optimization)
7. Convert all PNG and JPG images to webp format for better performance

### Priority 4 (LOW - Semantic Improvements)
8. Replace generic `<div>` tags with semantic `<section>` tags in appropriate partials

---

## Files Requiring Changes

### High Priority
- [ ] Create `css/index.craft-wines.partial.css`
- [ ] Create `css/index.history.partial.css`
- [ ] Create `css/index.wine-categories.partial.css`
- [ ] Populate `css/global.footer.partial.css`

### Medium Priority
- [ ] `css/index.hero.partial.css` - Fix media queries
- [ ] `css/global.header-nav.partial.css` - Fix media queries
- [ ] `css/index.about.partial.css` - Fix media queries, colors, and BEM names
- [ ] `css/index.varieties.partial.css` - Fix media queries
- [ ] `css/index.questions-and-answers.partial.css` - Fix hardcoded colors
- [ ] `index.about.partial.html` - Fix BEM class names
- [ ] `global.header-nav.partial.html` - Fix namespace abbreviation
- [ ] `global.footer.partial.html` - Fix SVG stroke colors
- [ ] `css/global.css` - Ensure all color variables defined
- [ ] `index.craft-wines.partial.html` - Fix semantic HTML
- [ ] `index.history.partial.html` - Fix semantic HTML
- [ ] `index.history-timeline.partial.html` - Fix semantic HTML

### Low Priority (Image Optimization)
- [ ] Convert all images to webp format (14 images total)

---

## Review Checklist

- [x] File naming conventions (kebab-case, partial naming pattern)
- [x] CSS architecture (BEM methodology)
- [x] CSS variables usage
- [x] Responsive design approach (mobile-first)
- [x] Semantic HTML structure
- [x] HTMX partial architecture
- [x] Accessibility features
- [x] Performance guidelines (image formats)
- [x] Forbidden patterns check
- [x] Component naming conventions

---

## Notes

- The project overall follows AGENTS.md guidelines well with good file organization and partial structure
- Most violations are fixable formatting and consistency issues
- No forbidden frameworks (React, Vue, Angular, Tailwind, jQuery) detected
- Team has good understanding of BEM and HTMX architecture
- Main issues are in CSS variable usage, media query approach, and some missing CSS files
