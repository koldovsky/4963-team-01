# AGENTS.md Code Review Report
**Date**: 2026-04-06  
**Review Scope**: Full codebase compliance with AGENTS.md standards

---

## Summary
This code review examined the project against AGENTS.md standards. The codebase demonstrates good understanding of the architecture but contains several AGENTS.md compliance violations that need to be addressed.

---

## Violations Found

### 1. BEM Naming Violations

#### Issue #509: Non-Standard BEM Classes in CSS - craft-wines component
**File(s)**: `css/index.craft-wines.partial.css`, `index.craft-wines.partial.html`  
**Severity**: MEDIUM  
**Standards Violated**: AGENTS.md - CSS Architecture (BEM Methodology)  

**Details**: 
- Uses `craft-wines-menu` instead of `craft-wines__menu`
- Uses `craft-wines-menu__item` instead of `craft-wines__menu-item`
- Uses `craft-wines-menu__image` instead of `craft-wines__menu-image`

**Current Code**:
```css
.craft-wines-menu { ... }
.craft-wines-menu__item { ... }
.craft-wines-menu__image { ... }
```

**Should Be**:
```css
.craft-wines__menu { ... }
.craft-wines__menu-item { ... }
.craft-wines__menu-image { ... }
```

**Author**: Ivan Butryn (Ivanbutryn@gmail.com)  
**Related Commits**: 712b903, fe9bc8e  
**Action Required**: Rename CSS classes to follow proper BEM structure

---

#### Issue #510: Non-Standard BEM Classes in varieties component
**File(s)**: `css/index.varieties.partial.css`, `index.varieties.partial.html`  
**Severity**: MEDIUM  
**Standards Violated**: AGENTS.md - CSS Architecture (BEM Methodology)  

**Details**:
- Uses `redwines__title` in `index.varieties.partial.css` (line 60)
- Uses `whitewines__title` in `index.varieties.partial.css` (line 81)
- These are inconsistent with the parent block `varieties`
- Should follow BEM structure: `varieties__reds-title` and `varieties__whites-title`

**Current Code**:
```css
.redwines__title { ... }
.whitewines__title { ... }
```

**Should Be**:
```css
.varieties__reds-title { ... }
.varieties__whites-title { ... }
```

**Author**: Vladyslav Bondarenko (pertosel1901@gmail.com)  
**Related Commits**: d0a8e18, ea74f25  
**Action Required**: Rename CSS classes and corresponding HTML classes to follow BEM structure

---

### 2. Non-Semantic Icon Classes

#### Issue #511: Bootstrap Icon Classes used in Header Navigation
**File(s)**: `css/global.header-nav.partial.css`, `global.header-nav.partial.html`  
**Severity**: LOW  
**Standards Violated**: AGENTS.md - Component Naming (should use unique namespaces)  

**Details**:
- Uses Bootstrap icon classes: `bi-facebook`, `bi-instagram`, `bi-youtube` (lines 59-68)
- These are generic Bootstrap classes and violate the "unique namespace" principle
- Should use component-specific naming like `nv__social-icon-facebook`

**Current Code**:
```css
.bi-facebook { margin: 5.7px; }
.bi-instagram { margin: 6.5px; }
.bi-youtube { margin: 6px; }
```

**Should Be**:
```css
.nv__social-icon { margin: 6px; /* adjusted */ }
```

**Author**: Andrii (airdray, belous50409@gmail.com)  
**Related Commits**: f9b8427  
**Action Required**: Replace Bootstrap icon classes with component-specific naming

---

### 3. Desktop-First Media Queries (Not Mobile-First)

#### Issue #512: Desktop-First Media Queries in Multiple CSS Files
**File(s)**: 
- `css/index.varieties.partial.css` (line 31: `@media (max-width: 345px)`)
- `css/global.header-nav.partial.css` (line 71: `@media (max-width: 769px)`)
- `css/index.hero.partial.css` (contains `@media (max-width: ...)`)
- `css/index.about.partial.css` (contains `@media (max-width: ...)`)

**Severity**: MEDIUM  
**Standards Violated**: AGENTS.md - Responsive Design (mobile-first approach)  

**Details**:
- AGENTS.md explicitly states: "Use mobile-first CSS"
- Current approach uses `@media (max-width: ...)` which is desktop-first
- Should use `@media (min-width: ...)` for mobile-first approach

**Example from varieties.partial.css**:
```css
/* Current (WRONG - Desktop-first) */
@media (max-width: 345px) {
  .varieties__title { font-size: 14px; }
}

/* Should be (Mobile-first) */
@media (min-width: 345px) {
  .varieties__title { font-size: 27px; } /* desktop size */
}
```

**Authors**: 
- Vladyslav Bondarenko (pertosel1901@gmail.com)
- Andrii (airdray, belous50409@gmail.com)

**Action Required**: Refactor CSS to mobile-first approach using `min-width` media queries

---

### 4. Unnecessary JavaScript Task Files

#### Issue #513: Non-Production Code in Repository
**File(s)**: `js-tasks/tasks01.js`, `js-tasks/tasks02.js`, `js-tasks/tasks03.js`  
**Severity**: LOW  
**Standards Violated**: AGENTS.md - Project Structure (should only contain production code)  

**Details**:
- `js-tasks/` folder contains practice exercises from CodeWars
- These files are not part of the product and should not be in the repository
- Violates the principle of keeping the codebase clean and focused

**Example content (tasks01.js)**:
```javascript
// 18.03.2026
// Задача: https://www.codewars.com/kata/55f73be6e12baaa5900000d4
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
```

**Authors**: 
- Vyacheslav Koldovskyy (koldovsky@koldovsky.com) - Initial creation
- Dmytro Novykov (dimacpoint@gmail.com) - Additional setup
- Vitalii Brytan (brytanvitalii08@gmail.com) - Content additions

**Action Required**: Remove `js-tasks/` folder entirely or add to `.gitignore` if needed for local development

---

### 5. CSS Indentation Inconsistency

#### Issue #514: Inconsistent Spacing in CSS (4-space indentation instead of 2-space)
**File(s)**: `css/index.craft-wines.partial.css`  
**Severity**: LOW  
**Standards Violated**: AGENTS.md - Code Formatting (2 space indentation)  

**Details**:
- Uses 4-space indentation instead of 2-space as specified in AGENTS.md
- Prettier formatting expects 2-space indentation

**Example (lines 2-6)**:
```css
.craft-wines {
    display: flex;           /* 4 spaces instead of 2 */
    flex-direction: column;  /* 4 spaces instead of 2 */
    justify-content: center;
    align-content: center;
    padding: 90px 0px;
}
```

**Author**: Ivan Butryn (Ivanbutryn@gmail.com)  
**Action Required**: Reformat file to use 2-space indentation

---

### 6. Code Quality in JavaScript

#### Issue #515: Inline Styling in JavaScript
**File(s)**: `js/index.header-nav.js`  
**Severity**: LOW  
**Standards Violated**: AGENTS.md - JavaScript Guidelines (minimize DOM manipulation)  

**Details**:
- Line 15-20 uses inline styles directly on elements
- Should use CSS classes instead for better maintainability
- While the approach is functional, it violates the principle of separating styling from logic

**Current Code**:
```javascript
social.addEventListener("mouseenter", () => {
  social.style.color = "var(--copyright-background-color)";
  social.style.backgroundColor = "var(--accent-color)";
});
```

**Better Approach**:
```javascript
social.addEventListener("mouseenter", () => {
  social.classList.add("nv__social-link--hover");
});
```

**Author**: Andrii (airdray, belous50409@gmail.com)  
**Action Required**: Use CSS classes instead of inline styles

---

### 7. Animation Class Inconsistency

#### Issue #516: Mixed Animation Class Naming in varieties component
**File(s)**: `js/index.varieties-animation.js`, `css/index.varieties.partial.css`  
**Severity**: LOW  
**Standards Violated**: AGENTS.md - BEM Methodology (consistent naming)  

**Details**:
- Animation classes `varieties__fade-in` and `varieties__fade-in--visible` are correct
- However, selector in JavaScript includes unrelated classes: `redwines__title` and `whitewines__title`
- These should be updated to use the corrected class names after Issue #510 is fixed

**Current Line 6 in varieties-animation.js**:
```javascript
'.varieties__title, .varieties__subtitle, .varieties__illustration, .varieties__description, .redwines__title, .whitewines__title, .varieties ul li'
```

**Author**: Vladyslav Bondarenko (pertosel1901@gmail.com)  
**Action Required**: Update selector after fixing class names in Issue #510

---

## Statistics

| Category | Count |
|----------|-------|
| Total Issues Found | 7 |
| Critical | 0 |
| Medium | 3 |
| Low | 4 |
| Files Affected | 8 |
| Authors Involved | 6 |

---

## Compliance Checklist

✅ Semantic HTML structure  
✅ HTMX partial architecture  
❌ Mobile-first responsive design (Issue #512)  
❌ BEM CSS naming methodology (Issues #509, #510)  
✅ Minimal JavaScript  
✅ Predictable file structure  
✅ Semantic file naming (kebab-case)  
✅ Simple Git workflow  

---

## Recommendations

1. **High Priority**: Fix BEM naming violations (Issues #509, #510)
2. **High Priority**: Convert CSS to mobile-first approach (Issue #512)
3. **Medium Priority**: Remove non-production code (Issue #513)
4. **Low Priority**: Code formatting and style improvements (Issues #514, #515, #516)

---

## Next Steps

1. Create GitHub issues for each violation
2. Assign issues to respective code authors
3. Track resolution through pull requests
4. Re-run code review after fixes are applied

