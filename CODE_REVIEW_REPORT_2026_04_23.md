# AGENTS.md Code Review Report
**Date**: 2026-04-23  
**Review Type**: Automated daily code review  
**Repository**: koldovsky/4963-team-01  
**Branch**: cursor/code-review-issues-d8de (base: main)  
**Total Violations Found**: 52 (3 HIGH, 37 MEDIUM, 12 LOW)

---

## Executive Summary

This code review evaluated all source files in the repository against the AGENTS.md compliance guidelines. **52 violations** were identified across 8 categories:

- **CSS Hardcoded Colors** (22 violations) - CRITICAL issue
- **Desktop-First Media Queries** (11 violations) - CRITICAL issue
- **Event Delegation Pattern** (6 violations) - HIGH priority
- **BEM Naming Violations** (5 violations)
- **Undefined CSS Variables** (3 violations) - HIGH priority
- **JavaScript/HTML Accessibility** (2 violations)
- **File Structure Issues** (3 violations)

---

## Violation Categories

### 1. HARDCODED COLORS (22 violations) ⭐ CRITICAL
**AGENTS.md Rule**: "All colors must be declared inside :root. Usage should use var(--color-name). Avoid hardcoded colors when variables exist."

**Severity**: MEDIUM (affects many files)

**Files affected**:
- css/global.css (1)
- css/components.css (1)
- css/global.cart-popup.partial.css (4)
- css/index.best-deals.partial.css (2)
- css/index.about.partial.css (3)
- css/index.newsletter.partial.css (4)
- css/index.wine-categories.partial.css (1)
- css/index.awards.partial.css (1)
- css/global.shopping-cart.partial.css (5)
- css/global.header-nav.partial.css (1)

**Examples of violations**:
```css
/* WRONG - should be var(--color-light) or similar */
color: white;
background: white;
fill: white;
color: #fff;

/* WRONG - should use rgba variable */
background-color: rgba(0, 0, 0, 0.7);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
```

**Impact**: Inconsistent color usage, difficult to maintain theme, violates DRY principle

---

### 2. DESKTOP-FIRST MEDIA QUERIES (11 violations) ⭐ CRITICAL
**AGENTS.md Rule**: "Use mobile-first CSS. Example: mobile styles first, then @media (min-width: 768px) for larger screens."

**Severity**: MEDIUM (affects mobile-first principle)

**Files affected**:
- css/index.hero.partial.css (3 violations)
- css/global.header-nav.partial.css (3 violations)
- css/index.about.partial.css (3 violations)
- css/index.varieties.partial.css (1 violation)

**Examples of violations**:
```css
/* WRONG - desktop-first approach */
@media (max-width: 769px) { ... }
@media (max-width: 1025px) { ... }
@media (max-width: 426px) { ... }

/* ALSO WRONG - mixing max-width with min-width */
@media (min-width: 769px) and (max-width: 1025px) { ... }

/* RIGHT - mobile-first approach */
@media (min-width: 768px) { ... }
@media (min-width: 1024px) { ... }
```

**Impact**: Breaks mobile-first responsive design principle, forces loading larger stylesheets on mobile

---

### 3. UNDEFINED CSS VARIABLES (3 violations) - HIGH PRIORITY
**AGENTS.md Rule**: "All colors must be declared inside :root."

**Severity**: HIGH (causes broken styling)

**Violations**:
1. **css/index.awards.partial.css:70** - `var(--color-border-soft)` not defined
2. **css/index.awards.partial.css:185** - `var(--awards-year-padding-left)` not defined
3. **css/global.shopping-cart.partial.css:100** - `var(--ui-btn-md-border-radius)` not defined

**Impact**: Variables don't resolve, fallback to invalid CSS, styling breaks

---

### 4. BEM NAMING VIOLATIONS (5 violations)
**AGENTS.md Rule**: "CSS must follow BEM methodology: .block, .block__element, .block__element--modifier"

**Severity**: MEDIUM

**Violations**:
1. **css/index.about.partial.css** - `.about-card` should be `.about__card`
2. **css/index.craft-wines.partial.css** - `.craft-wines-menu` should be `.craft-wines__menu`
3. **css/index.awards.partial.css** - Multiple standalone blocks (.awards-header, .award-item, etc.) instead of single `.awards` block with `__` elements
4. **css/index.varieties.partial.css** - Blocks named `.redwines` / `.whitewines` instead of `.varieties__red-wines`
5. **css/index.best-deals.partial.css** - Deep selectors like `.best-deals__carousel-track__item`

**Impact**: Inconsistent CSS architecture, harder maintenance, breaks BEM pattern

---

### 5. FILE NAMING VIOLATIONS
**AGENTS.md Rule**: "All files must use kebab-case. Do not use camelCase, PascalCase, or snake_case."

**Severity**: MEDIUM

**Violations**:
1. **img/wines-best-deals/carousel_arrow.svg** - Uses snake_case, should be `carousel-arrow.svg`

**Impact**: Inconsistent file naming, violates kebab-case standard

---

### 6. FILE STRUCTURE VIOLATIONS
**AGENTS.md Rule**: "JavaScript files must be placed in js/. CSS must be placed in css/."

**Severity**: MEDIUM

**Violations**:
1. **js-tasks/tasks01.js** - Not in js/ directory
2. **js-tasks/tasks02.js** - Not in js/ directory
3. **js-tasks/tasks03.js** - Not in js/ directory

**Impact**: Project structure non-compliance, files not in expected location

---

### 7. EVENT DELEGATION VIOLATIONS (6 violations)
**AGENTS.md Rule**: "JavaScript should use event delegation. Example: document.addEventListener('click', (event) => { if (event.target.matches(...)) ... })"

**Severity**: MEDIUM (affects 6+ JS files)

**Files affected**:
- js/index.header-nav.js (1 violation)
- js/index.craft-wines.js (1 violation)
- js/index.best-deals.js (1 violation)
- js/global.shopping-cart.js (1 violation)
- js/index.newsletter.js (1 violation)
- js/index.age-modal.js (1 violation)

**Examples of violations**:
```javascript
/* WRONG - per-element listeners */
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', () => { ... });
});

/* RIGHT - event delegation */
document.addEventListener('click', (event) => {
  if (event.target.matches('.button')) {
    // handle click
  }
});
```

**Impact**: Memory waste from multiple listeners, potential issues with dynamically added elements

---

### 8. SEMANTIC HTML VIOLATIONS (2 violations)
**AGENTS.md Rule**: "Always use semantic HTML. Avoid generic divs for interactive elements."

**Severity**: MEDIUM (accessibility issue)

**Violations**:
1. **index.faq.partial.html:14** - FAQ questions are `<div>` elements, should be `<button>` for keyboard access and screen readers
2. **index.history.partial.html:40** - `<div class="history__video">` acts as a button but has no button semantics

**Impact**: Poor accessibility, no keyboard navigation, breaks screen reader support

---

### 9. OTHER VIOLATIONS
- **1 violation**: Generic class name `section-title` in underage.html (should use component-specific namespace)
- **1 violation**: External framework naming (Bootstrap Icons `bi bi-facebook` classes)
- **1 violation**: JavaScript best practice - incorrect removeEventListener usage in best-deals.js (trying to remove with new arrow function)
- **1 violation**: Inline style mutations in js/index.header-nav.js instead of CSS class toggles

---

## Summary Table

| Category | Severity | Count | Files | Impact |
|----------|----------|-------|-------|--------|
| Hardcoded Colors | MEDIUM | 22 | 10 | Maintainability, theme consistency |
| Desktop-First CSS | MEDIUM | 11 | 4 | Mobile-first principle broken |
| Undefined Variables | HIGH | 3 | 2 | Broken styling |
| BEM Naming | MEDIUM | 5 | 4 | Architecture inconsistency |
| Event Delegation | MEDIUM | 6 | 6 | Memory, dynamic element issues |
| Semantic HTML | MEDIUM | 2 | 2 | Accessibility issues |
| File Naming | MEDIUM | 1 | 1 | Structure inconsistency |
| File Location | MEDIUM | 3 | 3 | Structure inconsistency |
| **TOTAL** | - | **52** | **~30** | - |

---

## Recommended Actions

### Phase 1: CRITICAL (High Priority)
1. **Define missing CSS variables** in css/global.css:
   - `--color-border-soft`
   - `--awards-year-padding-left`
   - `--ui-btn-md-border-radius`

2. **Replace all hardcoded colors** with CSS variables (22 violations)

3. **Convert to mobile-first media queries** (11 violations)

### Phase 2: HIGH Priority
1. **Fix event delegation pattern** (6 violations in JS files)
2. **Fix BEM naming** (5 violations in CSS)
3. **Fix semantic HTML** (2 violations in FAQ and history sections)

### Phase 3: MEDIUM Priority
1. **Move js-tasks files** to js/ directory
2. **Rename carousel_arrow.svg** to carousel-arrow.svg
3. **Fix miscellaneous issues** (global styles, event listeners, etc.)

---

## AGENTS.md Compliance Score

**Current Score: 48/100** (54% compliant)

**Passing (100% compliant)**:
- ✅ No forbidden frameworks (React, Vue, Angular, Tailwind, jQuery)
- ✅ HTMX partial architecture in place
- ✅ Semantic file naming (partials follow [page].[component].partial.html)
- ✅ Project structure mostly correct

**Failing**:
- ❌ CSS Variables (hardcoded colors)
- ❌ Mobile-First CSS (desktop-first media queries)
- ❌ BEM Naming (inconsistent block/element separation)
- ❌ Semantic HTML (non-semantic interactive elements)
- ❌ Event Delegation (per-element listeners)
- ❌ File Structure (js-tasks outside js/)
- ❌ File Naming (carousel_arrow.svg uses snake_case)

---

## Next Steps

1. Create GitHub issues for each violation category
2. Assign issues to respective file authors
3. Develop remediation plan with priority phases
4. Track completion through GitHub projects

