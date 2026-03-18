# Code Review Findings - 2026-03-18

According to AGENTS.md standards, the following violations have been identified:

## Critical Issues

### Issue 1: SCSS Nesting Syntax in CSS Files (VIOLATION OF AGENTS.MD)
**Severity:** HIGH  
**Rule Violated:** "This project is a **static frontend website** built with: HTML, CSS, Vanilla JavaScript, HTMX. Do **not introduce frameworks** unless explicitly requested."

The entire codebase is using SCSS nesting syntax instead of plain CSS. This violates the project requirement for vanilla CSS only.

**Affected Files (14 files):**
- css/age-modal.partial.css
- css/components.css
- css/global.footer.partial.css
- css/global.header-nav.partial.css
- css/index.about.partial.css
- css/index.best-deals.partial.css
- css/index.craft-wines.partial.css
- css/index.faq.partial.css
- css/index.hero.partial.css
- css/index.history.partial.css
- css/index.history-timeline.partial.css
- css/index.newsletter.partial.css
- css/index.varieties.partial.css
- css/underage-main-content.css

**Example:** In css/index.best-deals.partial.css:
```css
.best-deals {
  display: flex;
  
  .best-deals__title {  /* <-- SCSS nesting, not valid CSS */
    font-family: var(--font-family-title);
  }
}
```

Should be:
```css
.best-deals {
  display: flex;
}

.best-deals__title {
  font-family: var(--font-family-title);
}
```

**Primary Contributors:**
- BrytanVitalii (css/index.best-deals.partial.css)
- Volodymyr Andriichak (css/global.footer.partial.css, css/index.newsletter.partial.css)
- but-d (css/age-modal.partial.css)
- And others

---

### Issue 2: File Naming Violation - Snake_case Instead of Kebab-case
**Severity:** MEDIUM  
**Rule Violated:** "All files must use **kebab-case**. Do not use: camelCase, PascalCase, snake_case"

**Affected File:**
- `img/wines-best-deals/carousel_arrow.svg` (should be `carousel-arrow.svg`)

**Author:** BrytanVitalii

---

### Issue 3: Incorrect JavaScript Directory Structure
**Severity:** MEDIUM  
**Rule Violated:** "JavaScript files must be placed in `js/`"

**Current State:**
- JavaScript files are in `js-tasks/` directory
- Should be in `js/` directory

**Affected Files:**
- js-tasks/age-modal.js
- js-tasks/tasks01.js

**Authors:**
- but-d (age-modal.js)
- BrytanVitalii (tasks01.js)

---

### Issue 4: Task/Practice Code in Production
**Severity:** MEDIUM  
**Rule Violated:** Production codebase should not contain practice/task code

**Affected File:**
- `js-tasks/tasks01.js` - Contains CodeWars task solutions

This file contains practice code from CodeWars that should not be in production and should be in a separate branch/directory for learning.

**Author:** BrytanVitalii

---

### Issue 5: Inline JavaScript in HTML Partial
**Severity:** LOW  
**Rule Violated:** "JavaScript should be **minimal and modular**"

**Affected File:**
- `index.age-modal.partial.html` (line 33): `<script src="js-tasks/age-modal.js"></script>`

While having the script tag is acceptable, the directory structure (js-tasks/) is incorrect. Should be `<script src="js/age-modal.js"></script>`

---

## Summary

**Total Issues Found:** 5 major categories  
**Files Affected:** 19+ files  
**Primary Violators:** 
1. BrytanVitalii - 5 violations
2. Volodymyr Andriichak - 2 violations  
3. but-d - 3 violations

**Critical:** 1 (SCSS usage - affects 14 files)  
**High:** 0  
**Medium:** 3  
**Low:** 1

---

## Recommendations

1. Convert all SCSS nesting to plain CSS BEM
2. Rename `carousel_arrow.svg` to `carousel-arrow.svg`
3. Move JavaScript files from `js-tasks/` to `js/`
4. Remove task/practice code from production (js-tasks/tasks01.js)
5. Implement CSS linter to catch SCSS syntax
6. Add pre-commit hooks for file naming validation
