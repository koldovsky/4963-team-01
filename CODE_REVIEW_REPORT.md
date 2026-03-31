# Code Review Report - AGENTS.md Compliance

**Date**: 2026-03-31  
**Branch**: `cursor/code-review-issues-ff65`  
**Reviewer**: Automated Code Review Agent  
**Review Scope**: All changes from main branch

---

## Summary

This automated code review analyzed the project against AGENTS.md standards for a static HTML/CSS/JS/HTMX website. The review identified **7 major issue categories** with a mix of critical, major, and minor violations.

### Issue Summary
- **Critical Issues**: 0 (potential missing image assets)
- **Major Issues**: 28+ violations
- **Minor Issues**: 15+ violations

---

## Issues Created

The following GitHub issues have been created and assigned to code authors:

### 1. File Naming Violations
- **Issue #397**: `carousel_arrow.svg` uses snake_case instead of kebab-case
- **Issue #403**: Task files lack proper kebab-case naming (tasks01, tasks02, tasks03)
- **Assignee**: oland1979

### 2. Hardcoded Colors (CRITICAL)
- **Issue #400**: 12+ CSS files contain hardcoded colors instead of CSS variables
  - Affects: `age-modal.partial.css`, `newsletter.partial.css`, `header-nav.partial.css`, `cart-popup.partial.css`, `shopping-cart.partial.css`, `awards.partial.css`, `about.partial.css`, `wine-categories.partial.css`, `components.css`, `global.css`, `best-deals.partial.css`
  - Inline SVG style in `index.newsletter.partial.html`
  - **Severity**: Major
  - **Assignee**: oland1979

### 3. BEM CSS Violations
- **Issue #398**: Awards section classes don't follow BEM methodology
  - Uses: `.awards-header`, `.award-item`, `.award-col-1` instead of `.awards__header`, `.awards__item`, etc.
  - **Severity**: Major
  - **Assignee**: oland1979

- **Issue #404**: `components.css` uses standalone modifiers without base blocks
  - Uses: `.button--primary` without `.button` base class
  - **Severity**: Major
  - **Assignee**: oland1979

### 4. Mobile-First Design Violations
- **Issue #399**: Multiple CSS files use desktop-first `max-width` media queries
  - Affects: `hero.partial.css`, `header-nav.partial.css`, `about.partial.css`, `varieties.partial.css`, `faq.partial.css`
  - **Severity**: Major
  - **Assignee**: oland1979

### 5. Project Structure Issues
- **Issue #401**: `js-tasks/` folder violates project structure
  - Files should be in `js/` folder or removed entirely
  - **Severity**: Major
  - **Assignee**: BrytanVitalii

### 6. Image Format Issues
- **Issue #402**: Non-optimized image formats used
  - Heavy JPG/PNG files instead of WebP
  - GIF loader instead of SVG/WebP
  - Possible missing assets
  - **Severity**: Major
  - **Assignee**: oland1979

### 7. Code Formatting Issues
- **Issue #405**: Inconsistent indentation and missing Prettier configuration
  - `products.js` uses 4-space instead of 2-space
  - No `.prettierrc` file for enforcement
  - **Severity**: Minor
  - **Assignee**: oland1979

### 8. Inline Styles Issue
- **Issue #406**: Inline SVG style in HTML markup
  - `index.newsletter.partial.html` contains inline styles
  - Should be moved to CSS with BEM classes
  - **Severity**: Major
  - **Assignee**: oland1979

---

## Detailed Violation Analysis

### 1. File Naming (Kebab-Case Required)

**AGENTS.md Rule**: Lines 92-117
- ✅ Correct: `about-us.html`, `global.header-nav.partial.html`
- ❌ Violations Found:
  - `img/wines-best-deals/carousel_arrow.svg` (snake_case)
  - `js-tasks/tasks01.js`, `tasks02.js`, `tasks03.js` (digit concatenation)

**Severity**: Major/Minor

---

### 2. Hardcoded Colors (CSS Variables Required)

**AGENTS.md Rule**: Lines 237-260
- ✅ `:root` variables exist in `global.css`
- ❌ Hardcoded colors found in 12+ CSS files:

| File | Violations | Count |
|------|-----------|-------|
| `age-modal.partial.css` | rgba, #fff colors | 3+ |
| `index.newsletter.partial.css` | rgba, #fff colors | 3+ |
| `global.header-nav.partial.css` | rgba(0,0,0,0.5) | 1+ |
| `global.cart-popup.partial.css` | white, rgba | 3+ |
| `global.shopping-cart.partial.css` | rgba, #fff, #c5cbd6 | 5+ |
| `index.awards.partial.css` | rgba(255,255,255,0.05) | 1+ |
| `index.about.partial.css` | rgb(38,30,28) | 1+ |
| `index.wine-categories.partial.css` | gradient rgba | 2+ |
| `components.css` | color: red | 1+ |
| `global.css` | color: white | 1+ |
| `index.best-deals.partial.css` | fill: white | 1+ |
| `index.newsletter.partial.html` | Inline style rgba | 1 |

**Severity**: Major (28+ violations)

**Impact**: Inconsistent theming, harder to maintain color scheme, violates AGENTS.md requirements

---

### 3. BEM CSS Architecture

**AGENTS.md Rule**: Lines 201-233
- ✅ Good BEM usage: `newsletter__*`, `footer__*`, `hero__*`
- ❌ BEM violations found:

**Awards Section**:
```
❌ .awards-header
❌ .awards-label
❌ .award-item
❌ .award-col-1
❌ .container
```

Should be:
```
✅ .awards
✅ .awards__header
✅ .awards__label
✅ .awards__item
✅ .awards__item--col-1
✅ .awards__container
```

**Components CSS**:
```
❌ .button--primary (without .button base)
❌ .button--secondary (without .button base)
```

Should include:
```
✅ .button
✅ .button--primary
✅ .button--secondary
```

**Severity**: Major

---

### 4. Mobile-First Responsive Design

**AGENTS.md Rule**: Lines 264-282
- ❌ Desktop-first breakpoints found in 5+ files:

| File | Violation |
|------|-----------|
| `index.hero.partial.css` | @media (max-width: …) |
| `global.header-nav.partial.css` | @media (max-width: …) |
| `index.about.partial.css` | @media (max-width: …) |
| `index.varieties.partial.css` | @media (max-width: 345px) |
| `index.faq.partial.css` | @media (max-width: 1222px) |

Current (Incorrect):
```css
.element { padding: 40px; }
@media (max-width: 768px) {
  .element { padding: 20px; }
}
```

Expected (Mobile-First):
```css
.element { padding: 20px; }
@media (min-width: 768px) {
  .element { padding: 40px; }
}
```

**Severity**: Major

---

### 5. Project Structure

**AGENTS.md Rule**: Lines 57-88
- ✅ Correct: Images in `img/`, CSS in `css/`, partials at root
- ❌ Issues:
  - `js-tasks/` folder exists outside `js/` - violates structure
  - Contains Codewars-style exercises not related to site
  - Should be moved to `js/` or removed entirely

**Severity**: Major

---

### 6. Image Optimization & Formats

**AGENTS.md Rule**: Lines 357-375
- ✅ WebP and SVG formats preferred
- ❌ Issues:
  - Many JPG/PNG files instead of WebP
  - `loader.gif` instead of SVG/WebP
  - Possible missing image assets (references in HTML/CSS don't exist in img/)

**Severity**: Major (performance impact)

---

### 7. Code Formatting

**AGENTS.md Rule**: Lines 379-395
- ❌ Issues:
  - No `.prettierrc` file for enforcement
  - Inconsistent indentation (4-space in `products.js` instead of 2-space)
  - No Prettier integration

**Severity**: Minor

---

### 8. Inline Styles

**AGENTS.md Rule**: Lines 201-233 (CSS Architecture)
- ❌ Issue in `index.newsletter.partial.html`:
  - Contains inline style on SVG path element
  - Uses hardcoded color (`rgba(255, 255, 255, 0.14)`)

Current:
```html
<path style="stroke:rgba(255, 255, 255, 0.14)" ... />
```

Expected:
```html
<path class="newsletter__svg-path" ... />
```

```css
.newsletter__svg-path {
  stroke: var(--stroke-light);
}
```

**Severity**: Major

---

## Compliance Summary

| Category | Status | Issues |
|----------|--------|--------|
| File Naming | ❌ FAIL | 2 violations |
| HTML Structure | ✅ PASS | Minor issues only |
| CSS Architecture (BEM) | ❌ FAIL | 2 major areas |
| CSS Variables/Colors | ❌ FAIL | 28+ violations |
| Mobile-First Design | ❌ FAIL | 5 files |
| Project Structure | ❌ FAIL | 1 major issue |
| Image Optimization | ⚠️ WARNING | Preference violations |
| Code Formatting | ⚠️ WARNING | Inconsistent |
| Forbidden Patterns | ✅ PASS | None found |
| Accessibility | ✅ PASS | Good |

**Overall Compliance**: 40% - Multiple critical violations found

---

## Recommended Priority

### 🔴 Critical (Fix First)
1. **Hardcoded Colors** (#400) - 28+ files affected
2. **Mobile-First Design** (#399) - 5+ files affected
3. **BEM Violations** (#398, #404) - Breaking architecture

### 🟠 High Priority
4. **Project Structure** (#401) - `js-tasks/` cleanup
5. **File Naming** (#397, #403) - Consistency issue
6. **Inline Styles** (#406) - Moving to CSS

### 🟡 Medium Priority
7. **Image Optimization** (#402) - Performance
8. **Code Formatting** (#405) - Developer experience

---

## Authors and Assignments

| Author | Email | Issues Assigned |
|--------|-------|-----------------|
| oland1979 | oland1979@gmail.com | #397, #398, #399, #400, #402, #404, #405, #406 |
| BrytanVitalii | brytanvitalii08@gmail.com | #401, #403 |
| Volodymyr Andriichak | andriychak@gmail.com | #406 (inline styles) |

---

## Next Steps

1. ✅ **GitHub Issues Created**: 9 issues created with detailed descriptions
2. ⏳ **Author Review**: Assigned developers should review their assigned issues
3. ⏳ **Fix Implementation**: Developers implement fixes based on issue requirements
4. ⏳ **Re-review**: Automated code review can be re-run after fixes

---

## AGENTS.md Reference

All violations are based on strict compliance with `/workspace/AGENTS.md` which defines:
- File naming requirements (kebab-case only)
- HTML/HTMX architecture
- BEM CSS methodology
- Mobile-first responsive design
- CSS variable requirements
- Project structure guidelines
- Code formatting with Prettier
- Forbidden patterns (React, Vue, Angular, Tailwind, etc.)

---

**Report Generated**: 2026-03-31 15:01 UTC  
**Status**: ✅ Code Review Complete - Issues Created
