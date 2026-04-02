# Code Review Report - AGENTS.md Compliance Audit
**Date**: 2026-04-02  
**Reviewer**: Automated Code Review Agent  
**Branch**: cursor/code-review-issues-5b65

## Summary
Automated code review identified **9 major issues** and **multiple minor issues** violating AGENTS.md standards. All violations have been documented in GitHub issues.

---

## Issues Created

### Critical Issues (1)
- **#452**: Incomplete image directory references - Many HTML/CSS files reference missing assets

### Major Issues (7)
- **#446**: BrytanVitalii - Non-BEM CSS selectors and hardcoded colors
- **#447**: but-d - Non-strict BEM naming in FAQ component
- **#448**: Mobile-first CSS using max-width media queries (airdray, vladbondrevo)
- **#449**: File naming convention (snake_case filename)
- **#450**: Hardcoded colors in CSS files (oland1979, OlesiaKonior, Volodymyr Andriichak)
- **#451**: Non-strict BEM CSS naming in shopping cart and best deals (BrytanVitalii)

### Minor Issues (1)
- **#453**: JavaScript file placement outside js/ directory
- **#454**: Weak accessibility alt text

---

## Violations by Category

### 1. BEM Architecture Violations (Major)
**Affected Files**:
- `index.best-deals.partial.html` - Lines 17-26
- `css/index.best-deals.partial.css` - Lines 32, 52-72, 80-123
- `index.faq.partial.html` - Line 18
- `css/index.faq.partial.css` - Line 89
- `global.shopping-cart.partial.html` - Lines 49-92
- `css/global.shopping-cart.partial.css` - Lines 80-125

**Issue**: Non-strict BEM with nested `__` selectors (e.g., `.cart__items-list__item`)
**Standard**: `.block`, `.block__element`, `.block__element--modifier` (max 2 segments)
**Severity**: MAJOR

---

### 2. Hardcoded Colors Outside :root (Major)
**Affected Files**:
- `css/index.awards.partial.css` (Line 79)
- `css/global.header-nav.partial.css` (Line 5)
- `css/global.cart-popup.partial.css` (Lines 9-13, 47)
- `css/index.newsletter.partial.css` (Lines 84-105, 115, 161)
- `css/index.wine-categories.partial.css` (Lines 36-39)
- `css/global.shopping-cart.partial.css` (Lines 8, 98-101, 209)
- `css/components.css` (Line 57)
- `css/global.css` (Line 78)

**Issue**: Colors hardcoded instead of using CSS variables
**Standard**: All colors in `:root` CSS variables
**Severity**: MAJOR

---

### 3. Mobile-First CSS Violations (Major)
**Affected Files**:
- `css/index.varieties.partial.css` (Line 31)
- `css/index.hero.partial.css` (Lines 89, 120, 129)
- `css/global.header-nav.partial.css` (Lines 71, 189, 195)
- `css/index.about.partial.css` (Lines 81, 94)

**Issue**: Using `@media (max-width)` instead of `@media (min-width)`
**Standard**: Mobile-first CSS with `min-width` media queries
**Severity**: MAJOR

---

### 4. File Naming Violations (Major)
**File**: `img/wines-best-deals/carousel_arrow.svg`
**Issue**: Uses snake_case instead of kebab-case
**Standard**: All files must use kebab-case
**Severity**: MAJOR

---

### 5. Missing Asset References (Critical)
**Referenced but Missing**:
- `img/wines-best-deals/*.jpg`
- `img/awards-divider.png`
- `img/fine-wines-1956.png`
- `img/instagram/*`
- `img/loader.gif`
- `img/wines.png`
- `img/wines-about-cards/*.jpg`

**Issue**: HTML/CSS files reference images that don't exist
**Severity**: CRITICAL

---

### 6. File Structure Violations (Minor)
**Files**: `js-tasks/tasks01.js`, `js-tasks/tasks02.js`, `js-tasks/tasks03.js`
**Issue**: JavaScript files outside `js/` directory
**Standard**: All JS files in `js/` directory
**Severity**: MINOR (likely practice files)

---

### 7. Accessibility Violations (Minor)
**Files**:
- `index.awards.partial.html` (Line 6) - `alt="divider"`
- `index.loader.partial.html` (Line 2) - `alt="loader"`

**Issue**: Generic or weak alt text
**Standard**: Descriptive alt text for meaningful images
**Severity**: MINOR

---

## Authors with Violations

| Author | Issues | Severity |
|--------|--------|----------|
| BrytanVitalii | #446, #451 | Major |
| but-d | #447 | Major |
| airdray | #448 | Major |
| vladbondrevo | #448 | Major |
| oland1979 | #450 | Major |
| OlesiaKonior | #450 | Major |
| Volodymyr Andriichak | #450 | Major |
| (General) | #449, #452, #453, #454 | Critical, Major, Minor |

---

## Required Actions

### Priority 1 (Critical)
1. Add all missing image files to `img/` directory
2. Update references in HTML/CSS to existing files

### Priority 2 (Major)
1. Refactor all hardcoded colors to CSS variables in `:root`
2. Fix all `@media (max-width)` to `@media (min-width)`
3. Refactor BEM selectors to strict 2-level structure
4. Rename `carousel_arrow.svg` to `carousel-arrow.svg`

### Priority 3 (Minor)
1. Move `js-tasks/` files to `js/` or document their purpose
2. Improve alt text for images
3. Audit remaining accessibility issues

---

## AGENTS.md References
- **File Naming**: Section "File Naming Rules" - All files must use kebab-case
- **File Structure**: Section "Project Structure"
- **CSS Architecture**: Section "CSS Architecture" - BEM methodology
- **CSS Variables**: Section "CSS Variables" - All colors in :root
- **Responsive Design**: Section "Responsive Design" - Mobile-first with min-width
- **Accessibility**: Section "Accessibility" - Alt attributes, semantic HTML

---

## Next Steps
1. Authors should address assigned issues
2. Create PRs with fixes for each issue category
3. Run HTMLProofer validation before merging
4. Update this report when fixes are complete

---

*Report generated by Automated Code Review Agent*
