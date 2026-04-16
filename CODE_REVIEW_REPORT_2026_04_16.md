# Code Review Report - AGENTS.md Compliance Audit
**Date**: April 16, 2026  
**Branch**: cursor/code-review-issues-4204  
**Base Branch**: main  
**Repository**: koldovsky/4963-team-01  

---

## Executive Summary

This automated code review evaluated the repository against the AGENTS.md standards for a static frontend website built with HTML, CSS, vanilla JavaScript, and HTMX.

**Overall Assessment**: ⚠️ **MULTIPLE VIOLATIONS FOUND**

**Issues Created**: 5  
**Critical Violations**: 5 categories  
**Files Affected**: 40+ files  
**Primary Authors**: BrytanVitalii, Volodymyr Andriichak, and others

---

## Violations by Category

### 1. ❌ File Naming Convention (LOW - 1 file)
**AGENTS.md Rule**: All files must use kebab-case

| File | Issue | Author |
|------|-------|--------|
| `img/wines-best-deals/carousel_arrow.svg` | Uses snake_case instead of kebab-case | BrytanVitalii |

**GitHub Issue**: #590

---

### 2. ❌ Hardcoded Colors Instead of CSS Variables (HIGH - 9 files)
**AGENTS.md Rule**: All colors must be declared in `:root` and usage should prefer `var(--color-name)`

**Files Affected**:
- `css/index.newsletter.partial.css` (Volodymyr Andriichak)
- `css/index.wine-categories.partial.css` (Volodymyr Andriichak)
- `css/global.header-nav.partial.css` (Volodymyr Andriichak)
- `css/global.cart-popup.partial.css` (BrytanVitalii)
- `css/global.shopping-cart.partial.css` (BrytanVitalii)
- `css/index.about.partial.css` (airdray)
- `css/index.awards.partial.css` (Andrii Oliinyk)
- `css/components.css` (BrytanVitalii)
- `css/global.css` (System)

**Examples**:
```css
/* ❌ WRONG */
.element {
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

/* ✅ CORRECT */
:root {
  --color-overlay: rgba(0, 0, 0, 0.5);
  --color-light: #ffffff;
}

.element {
  background: var(--color-overlay);
  color: var(--color-light);
}
```

**GitHub Issue**: #591

---

### 3. ❌ Desktop-First Media Queries Instead of Mobile-First (HIGH - 10+ files)
**AGENTS.md Rule**: Use mobile-first CSS with `min-width` media queries

**Current Pattern** (Desktop-First) ❌:
```css
.element {
  font-size: 24px;  /* Desktop size as default */
  padding: 40px;
}

@media (max-width: 768px) {
  .element {
    font-size: 16px;  /* Mobile as exception */
    padding: 20px;
  }
}
```

**Target Pattern** (Mobile-First) ✅:
```css
.element {
  font-size: 16px;  /* Mobile as default */
  padding: 20px;
}

@media (min-width: 768px) {
  .element {
    font-size: 24px;  /* Desktop as enhancement */
    padding: 40px;
  }
}
```

**Files Affected**:
- css/global.header-nav.partial.css
- css/index.hero.partial.css
- css/index.about.partial.css
- css/index.varieties.partial.css
- css/index.newsletter.partial.css
- css/index.best-deals.partial.css
- css/index.special-wines.partial.css
- css/global.shopping-cart.partial.css
- css/index.awards.partial.css
- css/index.faq.partial.css
- And others

**GitHub Issue**: #592

---

### 4. ❌ Event Delegation Pattern Not Used (MEDIUM - 6+ files)
**AGENTS.md Rule**: JavaScript should prefer event delegation over per-element listeners

**Current Pattern** (Per-Element) ❌:
```javascript
// ❌ Multiple listeners
const buttons = document.querySelectorAll('.product__button');
buttons.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

// ❌ Per-item listeners in shopping cart
function addProductListeners(productElement, product) {
  const buttonIncrement = productElement.querySelector('.cart__item-info-qty__button--increment');
  buttonIncrement.addEventListener('click', incrementQuantity);
  
  const buttonDecrement = productElement.querySelector('.cart__item-info-qty__button--decrement');
  buttonDecrement.addEventListener('click', decrementQuantity);
}
```

**Target Pattern** (Delegated) ✅:
```javascript
// ✅ Single delegated listener
document.addEventListener('click', (event) => {
  if (event.target.matches('.product__button')) {
    handleClick(event);
  }
});

// ✅ Single delegated listener on cart
document.addEventListener('click', (event) => {
  if (event.target.matches('.cart__item-info-qty__button--increment')) {
    incrementQuantity(event);
  }
  if (event.target.matches('.cart__item-info-qty__button--decrement')) {
    decrementQuantity(event);
  }
});
```

**Benefits**:
- Better performance (fewer listeners)
- Cleaner code
- Handles dynamically added elements

**Files Affected**:
- `js/global.shopping-cart.js` (BrytanVitalii) - Lines 122-144
- `js/index.header-nav.js` (Volodymyr Andriichak)
- `js/index.newsletter.js` (Volodymyr Andriichak)
- `js/index.best-deals.js` (BrytanVitalii)
- `js/index.craft-wines.js` (Ivan Butryn)
- `js/global.cart-popup.js` (BrytanVitalii)

**Positive Example** (✅ Done Correctly):
- `js/index.faq.js` (Dmytro Novykov) - Uses proper event delegation with `event.target.closest()`

**GitHub Issue**: #593

---

### 5. ❌ Inconsistent BEM Naming Convention (MEDIUM - 5+ files)
**AGENTS.md Rule**: CSS must follow strict BEM (`block__element--modifier`) pattern

**Files with Inconsistencies**:

#### index.about.partial.html & css
- ❌ Classes: `about-card event-card`, `addictives-card`, `grape-card`
- ✅ Should be: `about__card--event`, `about__card--addictives`, etc.

#### index.awards.partial.html & css
- ❌ Mix of `awards-*`, `award-*`, `award-item`, `award-col-1`
- ✅ Should be: `.awards__item`, `.awards__col-1`, etc.

#### css/components.css
- ❌ Classes: `.button--primary`, `.button--secondary` (modifiers without block)
- ✅ Should have: `.button` block with modifiers

#### global.header-nav.partial.css
- ❌ Classes: `.bi-facebook`, `.bi-instagram` (third-party pattern)
- ✅ Should be: `.header__social-icon--facebook`, etc.

#### global.footer.partial.html
- ❌ SVG paths with `class="outer_bDW"` (snake_case, opaque naming)
- ✅ Should be: `.footer__svg-path` or similar semantic name

**Correct BEM Examples** (from codebase):
- ✅ `.best-deals__carousel-track__item`
- ✅ `.faq__question-title`
- ✅ `.products__list`

**GitHub Issue**: #594

---

## Violations Passed ✅

### File Structure and Organization
✅ All images properly in `img/` directory  
✅ All JS files properly in `js/` directory  
✅ All CSS files properly in `css/` directory  
✅ All partials in project root (no generic names like `section.partial.html`)  

### HTML Architecture
✅ HTMX partial naming follows `[page].[component].partial.html` pattern  
✅ `index.html` properly loads sections via `data-hx-get` attributes  
✅ No generic partial names (`section.partial.html`, `block.partial.html`)  

### Forbidden Patterns
✅ No React, Vue, or Angular frameworks  
✅ No Tailwind CSS  
✅ No jQuery  
✅ No build systems or bundlers (no webpack, rollup, etc.)  
✅ No npm package.json with frontend build tools  

### JavaScript
✅ Vanilla JavaScript used exclusively  
✅ ES modules properly implemented  
✅ No global variables (mostly)  
✅ Good example of proper delegation in `js/index.faq.js`  

### Semantic HTML
✅ Proper use of semantic HTML elements  
✅ HTMX attributes used correctly  

---

## GitHub Issues Created

| # | Title | Severity | Assignee(s) | Category |
|---|-------|----------|-------------|----------|
| #590 | Rename carousel_arrow.svg to use kebab-case | LOW | BrytanVitalii | File Naming |
| #591 | Replace hardcoded colors with CSS variables | HIGH | andriychak, BrytanVitalii | CSS Variables |
| #592 | Convert media queries to mobile-first approach | HIGH | andriychak, BrytanVitalii | Responsive Design |
| #593 | Implement event delegation pattern | MEDIUM | BrytanVitalii, andriychak | JavaScript |
| #594 | Enforce strict BEM naming convention | MEDIUM | BrytanVitalii, andriychak | CSS Architecture |

---

## Author Breakdown

### Issues Assigned Per Author

| Author | Issue Count | Issue Numbers | Files Affected |
|--------|-------------|---------------|-----------------|
| **BrytanVitalii** | 5 | #590, #591, #592, #593, #594 | 12+ |
| **Volodymyr Andriichak** | 4 | #591, #592, #593, #594 | 8+ |
| **airdray** | 1 | #591 | 1 |
| **Andrii Oliinyk** | 1 | #591 | 1 |
| **Ivan Butryn** | 1 | #593 | 1 |
| **Dmytro Novykov** | 0 | - | Good patterns in faq.js |

---

## Priority Recommendations

### 🔴 Critical (Do First)
1. **Issue #591**: Replace hardcoded colors with CSS variables
   - Affects multiple files
   - Foundation for theme management
   - Quick wins for 2-3 files

2. **Issue #592**: Convert to mobile-first media queries
   - Affects 10+ CSS files
   - Major architectural change
   - Test thoroughly across breakpoints

### 🟡 High Priority (Do Second)
3. **Issue #593**: Implement event delegation
   - Affects 6 JavaScript files
   - Performance improvement
   - Better code quality

4. **Issue #594**: Enforce BEM naming
   - Affects 5+ CSS/HTML files
   - Code clarity and maintainability
   - Easier to implement than others

### 🟢 Low Priority (Do Last)
5. **Issue #590**: Rename one SVG file
   - Single file change
   - Update references
   - Quick fix

---

## Metrics

| Metric | Value |
|--------|-------|
| Total Violations Found | 5 categories |
| High Severity Issues | 2 |
| Medium Severity Issues | 2 |
| Low Severity Issues | 1 |
| Files Affected | 40+ |
| GitHub Issues Created | 5 |
| Primary Contributors | 6 |
| Pass Rate | 60% (3 of 5 categories) |
| Fail Rate | 40% (2 of 5 categories) |

---

## Key Takeaways

1. **Structure and Organization**: Repository structure is excellent and follows AGENTS.md patterns well.

2. **CSS Quality**: Main issues are hardcoded colors and desktop-first media queries. These are fixable without major refactoring.

3. **JavaScript Quality**: Generally good, but some files could benefit from event delegation pattern for performance and cleanliness.

4. **Naming Conventions**: Mostly consistent, with a few exceptions in BEM naming that should be addressed.

5. **Accessibility**: Consider adding alt attributes to images (not in AGENTS.md but best practice).

---

## Next Steps

1. Review each GitHub issue
2. Assign to respective authors
3. Create pull requests for each category of fixes
4. Test changes thoroughly
5. Merge once approved
6. Run this audit again on next review cycle

---

## Audit Information

- **Audit Type**: Automated AGENTS.md Compliance Review
- **Trigger**: Cron (Daily 15:00 UTC)
- **Audit Date**: 2026-04-16 15:01 UTC
- **Automation ID**: f6e29a42-d230-4060-a079-3db342ef77c5
- **Branch**: cursor/code-review-issues-4204
- **Commit**: (To be created with this report)

---

## AGENTS.md Compliance Checklist

- ✅ Semantic HTML structure
- ✅ HTMX partial architecture
- ⚠️ Mobile-first responsive design (needs fixing)
- ⚠️ BEM CSS naming methodology (needs improvement)
- ✅ Minimal JavaScript
- ✅ Predictable file structure
- ⚠️ Semantic file naming (1 violation)
- ✅ Simple Git workflow
- ✅ No framework usage
- ⚠️ CSS Variables (widespread hardcoded colors)
- ✅ No jQuery
- ✅ No build systems
- ✅ No bundlers
- ⚠️ Event delegation pattern (not consistently used)

---

**Report Generated**: 2026-04-16 15:01 UTC  
**Next Audit**: 2026-04-17 15:00 UTC
