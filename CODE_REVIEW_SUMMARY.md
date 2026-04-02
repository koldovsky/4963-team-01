# Code Review Summary - 2026-04-02

## Overview
Comprehensive code review of the repository against AGENTS.md standards. Review covers the recent push to `main` branch (commit 3abbeb8) and a full codebase audit.

---

## Review Trigger
- **Commit**: 3abbeb8 "Added scroll-behavior: smooth; to root"
- **Author**: BrytanVitalii (brytanvitalii08@gmail.com)
- **Date**: 2026-04-02 15:58:35
- **Files Changed**: css/global.css

---

## Recent Commit Analysis (3abbeb8)

### Issue: CSS Property in :root Selector
**Severity**: Minor  
**File**: `css/global.css`  
**Finding**: `scroll-behavior: smooth;` was moved from `body` selector to `:root` selector.

**Problem**:
- According to AGENTS.md CSS Variables section, `:root` should only contain CSS custom properties (variables)
- `scroll-behavior` is a regular CSS property and should not be mixed with custom property declarations
- This violates semantic CSS organization principles

**Solution**: Move `scroll-behavior: smooth;` back to the `body` selector

**AGENTS.md Reference**: Section "CSS Variables"

---

## Comprehensive Codebase Review

### Summary of Major Issues Found

| Category | Count | Severity | Status |
|----------|-------|----------|--------|
| BEM Naming | 6 components | Major | ⚠️ Issues Created |
| Hardcoded Colors | 5+ files | Major | ⚠️ Issues Created |
| Mobile-first CSS | 4+ files | Major | ⚠️ Issues Created |
| Semantic HTML | 2 components | Major | ⚠️ Issues Created |
| Project Structure | 1 issue | Major | ⚠️ Issues Created |
| Accessibility | Multiple | Major | ⚠️ Issues Created |
| File Naming | 1 file | Minor | ⚠️ Issues Created |

---

## Detailed Findings

### 1. CSS/BEM Violations (Major)

#### Files Affected:
- `index.awards.partial.html` / `css/index.awards.partial.css`
- `index.about.partial.html`
- `global.header-nav.partial.html`
- `index.discover-our-wines.partial.html`
- `index.craft-wines.partial.html` + CSS
- Multiple partials

#### Issue:
Classes do not follow consistent BEM methodology:
- `awards-header`, `award-item`, `award-col-1` (not BEM)
- `event-card`, `addictives-card`, `grape-card` (separate classes instead of modifiers)
- `header__nav` + `nv__*` (mixed namespaces)
- `craft-wines-menu` as separate block instead of `craft-wines__menu`

#### AGENTS.md Requirement:
```
Pattern: .block, .block__element, .block__element--modifier
Example: .header, .header__nav, .header__menu, .header__menu-item
```

#### Impact:
- Affects 6+ components
- Makes CSS maintainability difficult
- Violates core architecture principle

---

### 2. Hardcoded Colors (Major)

#### Files Affected:
- `css/index.awards.partial.css`
- `css/index.newsletter.partial.css`
- `css/global.shopping-cart.partial.css`
- `css/global.cart-popup.partial.css`
- `css/global.header-nav.partial.css`
- `css/index.about.partial.css`
- `css/components.css`
- `css/global.css` (#loader)
- And others

#### Issue:
Hardcoded colors like `#fff`, `white`, `red`, `rgb(38, 30, 28)`, `rgba(255, 255, 255, 0.05)` throughout CSS files instead of using CSS custom properties.

#### Example:
```css
/* Wrong */
background-color: rgba(255, 255, 255, 0.05);
color: #fff;

/* Should be */
background-color: var(--custom-color-name);
color: var(--text-color);
```

#### AGENTS.md Requirement:
"All colors must be declared inside `:root`. Avoid hardcoded colors when variables exist."

#### Impact:
- Design system inconsistent across 5+ files
- Hard to maintain color scheme changes
- Violates design token principles

---

### 3. Mobile-first Responsive Design (Major)

#### Files Affected:
- `css/global.header-nav.partial.css`
- `css/index.hero.partial.css`
- `css/index.about.partial.css`
- `css/index.varieties.partial.css`
- `css/index.faq.partial.css`

#### Issue:
Uses desktop-first `@media (max-width: ...)` pattern instead of mobile-first `@media (min-width: ...)`

#### Example:
```css
/* Wrong - desktop-first */
.header {
  padding: 20px;
}
@media (max-width: 768px) {
  .header {
    padding: 10px;
  }
}

/* Right - mobile-first */
.header {
  padding: 10px;
}
@media (min-width: 768px) {
  .header {
    padding: 20px;
  }
}
```

#### AGENTS.md Requirement:
"Use **mobile-first CSS**. Avoid desktop-first media queries."

#### Impact:
- 4+ files need refactoring
- Not aligned with modern responsive design practices

---

### 4. Semantic HTML - FAQ Section (Major)

#### Files Affected:
- `index.faq.partial.html`
- `js/index.faq.js`

#### Issue:
FAQ questions implemented as `<div>` elements instead of semantic HTML elements like `<button>`, `<details>`, or proper ARIA controls.

#### Current Implementation:
```html
<div class="accordion-faq__question">Question text</div>
<div class="accordion-faq__answer">Answer text</div>
```

#### Recommended:
```html
<details class="accordion-faq">
  <summary class="accordion-faq__question">Question text</summary>
  <div class="accordion-faq__answer">Answer text</div>
</details>
```

#### AGENTS.md Requirement:
"Always include: alt attributes, semantic HTML, readable color contrast"

#### Impact:
- Affects accessibility for screen reader users
- Keyboard navigation not available
- Violates semantic HTML principles

---

### 5. Project Structure Violation (Major)

#### Issue:
JavaScript files in `js-tasks/` directory instead of required `js/` directory.

#### Files:
- `js-tasks/tasks01.js`
- `js-tasks/tasks02.js`
- `js-tasks/tasks03.js`

#### AGENTS.md Requirement:
"JavaScript files must be placed in `js/`"

#### Solution:
Move all JS files from `js-tasks/` to `js/`, or document them as non-production code.

---

### 6. Accessibility Issues (Major)

#### Problems Found:

1. **Generic Alt Text**
   - Repeated `alt="Fine illustration"` across multiple components
   - `alt="divider"` lacks context
   - `alt="Logo"` too generic

2. **Missing Form Labels**
   - Email fields use placeholder-only, no associated `<label>` elements
   - Example: Newsletter input field in `index.newsletter.partial.html`

3. **SVG Accessibility**
   - Decorative SVGs lack `aria-hidden="true"`
   - No `aria-label` on functional SVGs (e.g., social media icons)

4. **Interactive Elements**
   - FAQ rows as `<div>` elements lack semantic meaning for assistive technology
   - No proper ARIA attributes

#### Files Affected:
- `index.age-modal.partial.html`
- `index.special-wines.partial.html`
- `index.discover-our-wines.partial.html`
- `underage.html`
- `index.awards.partial.html`
- `global.header-nav.partial.html`
- `index.newsletter.partial.html`
- `index.faq.partial.html`

#### AGENTS.md Requirement:
"Always include: alt attributes, semantic HTML, readable color contrast"

---

### 7. File Naming Violation (Minor)

#### Issue:
File `img/wines-best-deals/carousel_arrow.svg` uses underscore (`snake_case`) instead of kebab-case.

#### Should be:
`img/wines-best-deals/carousel-arrow.svg`

#### AGENTS.md Requirement:
"All files must use **kebab-case**. Do not use: camelCase, PascalCase, snake_case"

---

## GitHub Issues Created

| # | Title | Severity | Assignee |
|---|-------|----------|----------|
| 455 | CSS: Move scroll-behavior back to body selector | Minor | BrytanVitalii |
| 456 | CSS/BEM: Fix inconsistent BEM naming in awards section | Major | oland1979 |
| 457 | CSS: Replace hardcoded colors with :root variables | Major | (unassigned) |
| 458 | CSS: Refactor desktop-first breakpoints to mobile-first | Major | (unassigned) |
| 459 | HTML: Refactor FAQ section to use semantic elements | Major | (unassigned) |
| 460 | Project structure: Move js-tasks files to js/ directory | Major | BrytanVitalii |
| 461 | File naming: Fix underscore in carousel-arrow.svg | Minor | (unassigned) |
| 462 | Accessibility: Improve alt text descriptions and add missing labels | Major | (unassigned) |

---

## Recommendations - Priority Order

### Phase 1: Critical (Affects Core Architecture)
1. **BEM Naming Consistency** - Fix CSS selectors across 6 components
2. **Hardcoded Colors** - Extract to `:root` variables
3. **Semantic HTML** - Refactor FAQ and other interactive components
4. **Mobile-first CSS** - Rewrite responsive breakpoints

### Phase 2: Important (Affects Accessibility & Structure)
5. **Accessibility Improvements** - Add proper alt text, labels, ARIA attributes
6. **Project Structure** - Move files to correct directories
7. **File Naming** - Fix snake_case to kebab-case

### Phase 3: Polish (Minor Issues)
8. **Recent Commit Fix** - Move scroll-behavior from :root to body

---

## AGENTS.md Sections Referenced

- **CSS Architecture**: BEM methodology requirements
- **CSS Variables**: Color declarations in :root
- **Responsive Design**: Mobile-first approach
- **Component Naming**: Unique namespaces for blocks
- **Accessibility**: Alt attributes, semantic HTML, color contrast
- **File Naming Rules**: Kebab-case requirement
- **Project Structure**: File organization
- **When Editing Existing Code**: Preserve structure and naming

---

## Summary

The codebase has several violations of AGENTS.md standards, with the most significant being:
- **BEM CSS inconsistency** across multiple components
- **Hardcoded colors** not using design tokens
- **Desktop-first CSS** instead of mobile-first
- **Non-semantic HTML** in FAQ and other sections
- **Accessibility gaps** in alt text and form labels

The recent commit (3abbeb8) has a minor violation regarding CSS property placement in `:root`.

**Total Issues Created**: 8  
**Major Violations**: 6  
**Minor Violations**: 2

All issues have been created and assigned to relevant team members or left unassigned for team distribution.

---

*Code Review Date*: 2026-04-02  
*Reviewer*: Automated Code Review Agent  
*Standard*: AGENTS.md
