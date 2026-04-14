# Code Review: AGENTS.md Compliance Audit
**Date**: 2026-04-14  
**Branch**: cursor/code-review-issues-7e0e  
**Reviewer**: Automated Code Review Agent

## Violations Found

### 1. VIOLATION: Desktop-First Media Queries (Should Be Mobile-First)
**AGENTS.md Section**: Responsive Design  
**Severity**: HIGH  
**Files Affected**:
- `css/index.hero.partial.css` - Lines with @media (max-width: 769px), @media (max-width: 1025px), @media (max-width: 426px)
- `css/global.header-nav.partial.css` - Lines with @media (max-width: 769px), @media (max-width: 1025px), @media (max-width: 426px)
- `css/index.varieties.partial.css` - Line 31: @media (max-width: 345px)
- `css/index.about.partial.css` - Lines with @media (max-width: 769px), @media (max-width: 426px), @media (min-width: 769px) and (max-width: 1025px)

**Rule Violated**:
```
Use **mobile-first CSS**.

Example:
.products {
  padding: 20px;
}

@media (min-width: 768px) {
  .products {
    padding: 40px;
  }
}

Avoid desktop-first media queries.
```

**Authors** (from git history):
- airdray (belous50409@gmail.com) - css/global.header-nav.partial.css
- vladbondrevo (pertosel1901@gmail.com) - css/index.varieties.partial.css
- oland1979 (oland1979@gmail.com) - css/index.hero.partial.css, css/index.about.partial.css

---

### 2. VIOLATION: Nested CSS Selectors (Not BEM Compliant)
**AGENTS.md Section**: CSS Architecture  
**Severity**: MEDIUM  
**Files Affected**:
- `css/index.newsletter.partial.css` - Multiple nested selectors (lines 4-177)
- `css/index.varieties.partial.css` - Multiple nested selectors (lines 14-117)

**Issue**: The CSS uses SCSS-like nested syntax which violates the vanilla CSS approach.

**Authors**:
- Volodymyr Andriichak (andriychak@gmail.com) - css/index.newsletter.partial.css
- vladbondrevo (pertosel1901@gmail.com) - css/index.varieties.partial.css

---

### 3. VIOLATION: Hardcoded Colors Instead of CSS Variables
**AGENTS.md Section**: CSS Variables  
**Severity**: MEDIUM  
**Files Affected**:
- `css/index.newsletter.partial.css` - Line 84: rgba(38, 30, 28, 0.6), Line 94: rgba(0, 0, 0, 0.65)
- `css/index.faq.partial.css` - Possible hardcoded values

**Rule Violated**:
```
All colors must be declared inside `:root`.
Avoid hardcoded colors when variables exist.
```

**Authors**:
- Volodymyr Andriichak (andriychak@gmail.com) - css/index.newsletter.partial.css

---

### 4. VIOLATION: Missing Space After CSS Class Selector
**AGENTS.md Section**: Code Formatting  
**Severity**: LOW  
**Files Affected**:
- `css/index.faq.partial.css` - Line 83: `.faq__question-body{` (missing space before {)

**Authors**:
- Dmytro Novykov (dimacpoint@gmail.com) - Commit 11deb5b

---

### 5. VIOLATION: Generic Alt Attributes (Accessibility)
**AGENTS.md Section**: Accessibility  
**Severity**: MEDIUM  
**Files Affected**:
- `index.faq.partial.html` - Line 9: `alt="Fine illustration"` - too generic

**Rule Violated**:
```
Always include:
* alt attributes
* semantic HTML
* readable color contrast

Example:
<img src="img/products/red-wine.webp" alt="Bottle of red wine" />
```

**Authors**:
- Dmytro Novykov (dimacpoint@gmail.com) - Commit 11deb5b

---

### 6. VIOLATION: Event Listeners Not Using Event Delegation
**AGENTS.md Section**: JavaScript Guidelines  
**Severity**: MEDIUM  
**Files Affected**:
- `js/index.craft-wines.js` - Lines 5-12: Individual click listeners on each button

**Rule Violated**:
```
JavaScript should be **minimal and modular**.
Rules:
* use vanilla JavaScript
* avoid large libraries
* avoid global variables
* prefer event delegation
```

**Authors**:
- Ivan Butryn (Ivanbutryn@gmail.com) - Commit 712b903

---

## Summary

| Category | Count | Severity |
|----------|-------|----------|
| Desktop-First Media Queries | 4+ files | HIGH |
| Nested CSS Selectors | 2 files | MEDIUM |
| Hardcoded Colors | 1 file | MEDIUM |
| Formatting Issues | 1 instance | LOW |
| Accessibility Issues | 1+ instances | MEDIUM |
| Event Delegation | 1 file | MEDIUM |

**Total Unique Issues to Create**: 6

---

## Authors Requiring Issue Assignment

1. **Volodymyr Andriichak** (andriychak@gmail.com)
   - Nested CSS selectors in newsletter partial
   - Hardcoded colors

2. **vladbondrevo** (pertosel1901@gmail.com)
   - Desktop-first media queries in varieties partial
   - Nested CSS selectors in varieties partial

3. **airdray** (belous50409@gmail.com)
   - Desktop-first media queries in header-nav partial

4. **oland1979** (oland1979@gmail.com)
   - Desktop-first media queries in hero and about partials

5. **Dmytro Novykov** (dimacpoint@gmail.com)
   - Missing space in FAQ CSS
   - Generic alt attributes

6. **Ivan Butryn** (Ivanbutryn@gmail.com)
   - Event delegation not used in craft-wines.js

