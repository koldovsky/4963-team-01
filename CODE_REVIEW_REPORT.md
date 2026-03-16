# Code Review Report - Cursor Code Review Issues Branch
**Date:** 2026-03-16  
**Branch:** cursor/code-review-issues-d779  
**Reviewer:** Cursor Code Review Agent  

## Executive Summary
This code review identified **49 open issues** related to violations of AGENTS.md standards. The violations span across CSS architecture, naming conventions, image optimization, accessibility, and HTML structure.

---

## Critical Issues by Category

### 1. CSS Architecture Violations - SCSS Nested Syntax (Forbidden)

**Issue Count:** 4 critical issues  
**Problem:** Using SCSS nested syntax with `&` operator, which requires a build system/preprocessor. AGENTS.md strictly forbids build systems, bundlers, and preprocessors.

#### Affected Files:
1. **css/index.best-deals.partial.css** (Issue #28)
   - Author: **BrytanVitalii** (brytanvitalii08@gmail.com)
   - Lines: 10-116 use nested selectors
   - Example: `.best-deals { .best-deals__title { ... } }`
   - Must be converted to flat CSS classes

2. **css/index.varieties.partial.css** (Issue #29)
   - Author: **vladbondrevo** (pertosel1901@gmail.com)
   - Nested selectors violate plain CSS requirement
   - Action: Flatten all nested rules

3. **css/index.newsletter.partial.css** (Issue #36)
   - Author: **Volodymyr Andriychak** (33000518+Andriychak@users.noreply.github.com)
   - Contains nested selectors
   - Action: Convert to flat CSS

4. **css/components.css** (Issue #37)
   - Author: **BrytanVitalii** (brytanvitalii08@gmail.com)
   - Lines: 37-50 use SCSS syntax with `&` operator
   - Example: `.button--primary { &:hover { ... } }`
   - Must be rewritten as separate selectors

**AGENTS.md Rule Violated:**
```
Forbidden Patterns:
- React, Vue, Angular
- Tailwind
- jQuery
- CSS frameworks
- build systems
- bundlers
```

---

### 2. BEM Naming Convention Violations

#### Issue #34 & #45: Non-Semantic Header Navigation Classes
- **Author:** airdray (belous50409@gmail.com)
- **File:** css/global.header-nav.partial.css, global.header-nav.partial.html
- **Violation:** Using `.nv` abbreviation instead of semantic `.header` namespace
- **Classes Used:** `.nv`, `.nv__container`, `.nv__menu-toggle`, `.nv__burger`, etc.
- **Correct BEM Pattern:** Should be `.header__nav`, `.header__nav-container`, etc.

**AGENTS.md Rule:**
```
Avoid generic class names.
Bad: .carousel, .slider, .tabs, .accordion
Good: carousel-clients, slider-products, tabs-pricing, accordion-faq
Each component should have a unique namespace.
```

---

### 3. Image Optimization Violations

#### Issue #47: Non-WebP Image Formats
**Problem:** Using PNG and JPG instead of preferred WebP format (9 files identified)

**Files:**
- img/awards-divider.png
- img/awards-subtitle.png
- img/background-varieties-partial.png
- img/discount-pic-for-faq-section.png
- img/fine-wines-1956.png
- img/grapes-pic-for-faq-section.png
- img/orange-wine-fund-1992.png
- img/truck-for-faq-section.png
- img/wine-corporation-2016.png

**AGENTS.md Rule:**
```
Performance Guidelines:
Preferred image formats:
- webp
- svg

Avoid heavy images but in general PNG and JPG image formats are allowed:
- large jpg
- large png
```

---

### 4. Accessibility Violations

#### Issue #30: Missing Alt Text in Best-Deals Section
- **Author:** BrytanVitalii (brytanvitalii08@gmail.com)
- **File:** index.best-deals.partial.html
- **Violation:** Images missing descriptive alt text
- **Action:** Add meaningful alt text to all images

#### Issue #31: Missing Alt Text in Varieties Section
- **Author:** vladbondrevo (pertosel1901@gmail.com)
- **File:** index.varieties.partial.html
- **Violation:** Images missing alt attributes
- **Action:** Add descriptive alt text

#### Issue #39: Missing Alt Text in Varieties Images
- **Author:** vladbondrevo (pertosel1901@gmail.com)
- Similar to Issue #31

**AGENTS.md Rule:**
```
Accessibility:
Always include:
- alt attributes
- semantic HTML
- readable color contrast

Example:
<img src="img/products/red-wine.webp" alt="Bottle of red wine" />
```

---

### 5. Missing CSS Files

#### Issue #40: Missing CSS for Craft-Wines Partial
- **Author:** Ivan Butryn (Ivanbutryn@gmail.com)
- **File:** index.craft-wines.partial.css (missing)
- **Action:** Create the CSS file or link existing one

#### Issue #48: Missing CSS Files (history, wine-categories)
- **File:** index.history.partial.css, index.wine-categories.partial.css (missing or incomplete)
- **Action:** Create or complete CSS files

---

### 6. Other Violations

#### Issue #35: Auto-Generated SVG Classes
- **Problem:** Using auto-generated SVG IDs like `#a-1772702253376`
- **Violation:** Non-semantic, breaks BEM naming conventions
- **Action:** Use meaningful IDs or data attributes

#### Issue #33: Inline Styles in SVG Elements
- **Problem:** SVG elements contain inline styles
- **Action:** Convert to CSS classes following BEM pattern

#### Issue #32: Debug Comments in Production
- **Problem:** Comments like `/* outline: 1px solid red; */` left in CSS
- **Action:** Remove all debug/test comments before deployment

---

## Violation Summary by Author

### BrytanVitalii (brytanvitalii08@gmail.com) - 5 Issues
- Issue #28: Nested selectors in best-deals CSS
- Issue #30: Missing alt text in best-deals
- Issue #37: SCSS syntax in components.css
- Issue #43: Image format optimization in best-deals
- Issue #44: Non-BEM classes

### vladbondrevo (pertosel1901@gmail.com) - 3 Issues
- Issue #29: Nested selectors in varieties CSS
- Issue #31: Missing alt text in varieties
- Issue #39: Missing alt text in varieties (duplicate)

### Volodymyr Andriychak (33000518+Andriychak@users.noreply.github.com) - 2 Issues
- Issue #36: Nested selectors in newsletter CSS
- Issue #49: CSS footer styling issues

### airdray / AirDray1 (belous50409@gmail.com) - 2 Issues
- Issue #34: BEM violation in header navigation
- Issue #45: BEM naming violations

### Ivan Butryn (Ivanbutryn@gmail.com) - 1 Issue
- Issue #40: Missing CSS file for craft-wines

### inFERRNOO (irinasapeluk3676788@gmail.com) - Multiple
- Issue #46: Generic utility classes in FAQ

---

## Required Actions

### Immediate (Critical)
1. **Remove SCSS nested syntax** - Convert all nested CSS to flat rules
2. **Fix BEM naming** - Replace `.nv` with `.header__nav` pattern
3. **Add alt text** - Accessibility compliance

### High Priority
4. **Optimize images** - Convert PNG/JPG to WebP format
5. **Create missing CSS files** - Complete CSS imports
6. **Clean up debug code** - Remove commented-out code

### Medium Priority
7. **Fix SVG IDs** - Use semantic IDs or remove auto-generated ones
8. **Move inline styles** - Convert SVG inline styles to CSS classes

---

## Testing Checklist

- [ ] No SCSS syntax in CSS files
- [ ] All CSS uses flat BEM pattern
- [ ] All img tags have alt attributes
- [ ] All images in WebP format
- [ ] No commented-out debug code
- [ ] All CSS files imported in index.css
- [ ] Header navigation uses `.header__nav` pattern
- [ ] SVG elements use CSS classes, not inline styles
- [ ] No generic class names like `.carousel`, `.slider`

---

## References
- AGENTS.md - Project development standards
- BEM Methodology - http://getbem.com/
- WebP Format - https://developers.google.com/speed/webp
- Accessibility Guidelines - WCAG 2.1

---

**Status:** Open Issues Require Resolution  
**Next Review:** Upon issue resolution and PR submission
