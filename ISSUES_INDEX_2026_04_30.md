# Code Review Issues Index
**Audit Date:** 2026-04-30  
**Standard:** AGENTS.md Compliance  
**Total Issues Created:** 9  
**Status:** ✅ Complete

---

## Quick Navigation

### Critical Issues (HIGH Priority)
- **#702** - Desktop-First Media Queries Violations
  - 11 `@media (max-width: ...)` violations across 4 CSS files
  - Violates mobile-first requirement
  - https://github.com/koldovsky/4963-team-01/issues/702

### Major Issues (MEDIUM-HIGH Priority)
- **#703** - BEM Naming and Generic Component Names
  - 6 major violations: carousel, awards, varieties, nav naming
  - Impacts code maintainability
  - https://github.com/koldovsky/4963-team-01/issues/703

### Medium Priority Issues
- **#704** - Hardcoded Colors Not Using CSS Variables
  - 12+ hardcoded color violations
  - https://github.com/koldovsky/4963-team-01/issues/704

- **#705** - CSS Nesting vs Flat BEM Architecture
  - 5 files using Sass-style nesting
  - https://github.com/koldovsky/4963-team-01/issues/705

- **#708** - Semantic HTML Violations
  - FAQ accordion using divs instead of details/summary
  - Missing main landmark in underage.html
  - https://github.com/koldovsky/4963-team-01/issues/708

- **#710** - Missing or Broken Assets
  - loader.gif and background images not found
  - https://github.com/koldovsky/4963-team-01/issues/710

### Low Priority Issues
- **#706** - JavaScript Globals and Event Listener Complexity
  - Module-level variables, per-element listeners
  - https://github.com/koldovsky/4963-team-01/issues/706

- **#707** - File Naming Inconsistencies
  - tasks01.js should be tasks-01.js, etc.
  - https://github.com/koldovsky/4963-team-01/issues/707

- **#709** - Unnecessary Narrative Comments
  - Cleanup of obvious comments
  - https://github.com/koldovsky/4963-team-01/issues/709

---

## Summary by File Type

### CSS Violations (5 issues)
- Issue #702: Desktop-first media queries
- Issue #703: BEM naming (awards, varieties)
- Issue #704: Hardcoded colors
- Issue #705: CSS nesting
- Issue #708: Semantic HTML (CSS-related)

### JavaScript Violations (2 issues)
- Issue #706: Globals and event listeners
- Issue #707: File naming

### HTML Violations (2 issues)
- Issue #703: BEM naming (HTML)
- Issue #708: Semantic HTML

### Assets (1 issue)
- Issue #710: Missing assets

---

## Summary by Affected Component

### Best Deals Section
- Issue #702 (CSS - max-width queries)
- Issue #703 (BEM - carousel naming)
- Issue #705 (CSS - nesting)

### Header Navigation
- Issue #702 (CSS - max-width queries)
- Issue #703 (BEM - nv block naming)
- Issue #706 (JS - event listeners)

### Varieties Section
- Issue #703 (BEM - redwines/whitewines naming)

### Awards Section
- Issue #703 (BEM - award-item naming)
- Issue #705 (CSS - nesting)

### FAQ Section
- Issue #708 (Semantic HTML - use details/summary)

### General/Multiple
- Issue #704 (Hardcoded colors)
- Issue #706 (JS globals)
- Issue #709 (Comments)

---

## Remediation Status Tracker

| Issue | Status | Assigned To | Priority | ETA |
|-------|--------|-------------|----------|-----|
| #702  | OPEN   | vladbondrevo, airdray | HIGH | - |
| #703  | OPEN   | BrytanVitalii, oland1979, airdray | HIGH | - |
| #704  | OPEN   | Multiple | MEDIUM | - |
| #705  | OPEN   | Multiple | MEDIUM | - |
| #706  | OPEN   | Multiple | LOW-MEDIUM | - |
| #707  | OPEN   | - | LOW | - |
| #708  | OPEN   | Multiple | MEDIUM | - |
| #709  | OPEN   | Multiple | LOW | - |
| #710  | OPEN   | Multiple | MEDIUM | - |

---

## Related Documentation

- **Detailed Findings:** `CODE_REVIEW_FINDINGS_2026_04_30.md`
- **Summary Report:** `CODE_REVIEW_SUMMARY_2026_04_30.md`
- **Standards:** `AGENTS.md`
- **Branch:** `cursor/code-review-issues-0f96`

---

## Issue Details

### Issue #702: Desktop-First Media Queries Violations
```
Files: css/index.varieties.partial.css, css/index.hero.partial.css, 
        css/global.header-nav.partial.css, css/index.about.partial.css
Count: 11 violations
Type: Responsive Design (CSS)
Severity: HIGH
```

### Issue #703: BEM Naming and Generic Component Names
```
Files: 7 HTML/CSS/JS files
Issues: 6 major violations (carousel, awards, varieties, nav, icons, buttons)
Type: BEM Methodology
Severity: MEDIUM-HIGH
```

### Issue #704: Hardcoded Colors Not Using CSS Variables
```
Files: 10+ CSS locations
Count: 12+ violations
Type: CSS Architecture
Severity: MEDIUM
```

### Issue #705: CSS Nesting vs Flat BEM Architecture
```
Files: css/components.css, css/index.newsletter.partial.css, 
        css/global.footer.partial.css, css/index.best-deals.partial.css, 
        css/underage-main-content.css
Count: 5 files
Type: CSS Architecture
Severity: MEDIUM
```

### Issue #706: JavaScript Globals and Event Listener Complexity
```
Files: js/index.js, js/index.header-nav.js, js/index.craft-wines.js, 
        js/index.best-deals.js, js/global.shopping-cart.js, 
        js/global.footer.js, js/index.varieties-animation.js, 
        js/index.awards-reveal.js
Type: JavaScript Best Practices
Severity: LOW-MEDIUM
```

### Issue #707: File Naming Inconsistencies
```
Files: js-tasks/tasks01.js, js-tasks/tasks02.js, js-tasks/tasks03.js
Type: File Naming Convention
Severity: LOW
```

### Issue #708: Semantic HTML Violations
```
Files: index.faq.partial.html, underage.html
Issues: FAQ accordion (divs vs details/summary), missing main landmark
Type: Semantic HTML
Severity: MEDIUM
```

### Issue #709: Unnecessary Narrative Comments
```
Files: index.html, js/index.best-deals.js, js/global.shopping-cart.js, css/components.css
Count: Multiple locations
Type: Code Hygiene
Severity: LOW
```

### Issue #710: Missing or Broken Assets
```
References: img/loader.gif, img/wines-about-cards/*.jpg
Type: Asset Management
Severity: MEDIUM (affects functionality)
```

---

## How to Use This Index

1. **For Developers:** Check your assigned issues and review acceptance criteria
2. **For Leads:** Use priority levels to manage remediation timeline
3. **For Tracking:** Update status in the table above
4. **For Validation:** Run tests after each fix

---

Generated: 2026-04-30 15:09:13 UTC
