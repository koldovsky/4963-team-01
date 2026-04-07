# GitHub Issue Assignment Guide

This document provides manual assignment guidance for code review issues identified in CODE_REVIEW_REPORT.md.

## Quick Assignment Reference

### Issue #522
- **Title:** Animation Class Selector: References Non-Standard Class Names
- **Assign to:** @vladbondrevo
- **Files:** `js/index.varieties-animation.js`
- **Fix:** Update class selectors to reference proper BEM names

### Issue #521
- **Title:** Code Quality: Inline Styling in JavaScript Should Use CSS Classes
- **Assign to:** @but-d
- **Files:** `js/index.faq.js`
- **Fix:** Replace `style.maxHeight` with CSS class toggles

### Issue #520
- **Title:** Code Formatting: Incorrect Indentation in craft-wines CSS
- **Assign to:** @BrytanVitalii
- **Files:** `css/index.craft-wines.partial.css`
- **Fix:** Change indentation from 4 spaces to 2 spaces

### Issue #519
- **Title:** Non-Production Code: js-tasks Folder Should Be Removed
- **Assign to:** @koldovsky (owner)
- **Files:** `/workspace/js-tasks/*`
- **Fix:** Remove practice files from production repository

### Issue #518
- **Title:** Mobile-First CSS Not Implemented: Uses max-width Instead of min-width
- **Assign to:** @AirDray1
- **Files:** `css/global.header-nav.partial.css` + 7 other files
- **Fix:** Convert all `@media (max-width: ...)` to `@media (min-width: ...)`

### Issue #517
- **Title:** Non-Semantic Icon Classes: Bootstrap Classes in Header Navigation
- **Assign to:** @AirDray1
- **Files:** `css/global.header-nav.partial.css`, `global.header-nav.partial.html`
- **Fix:** Remove Bootstrap icon classes and replace with BEM naming

### Issue #516
- **Title:** BEM Naming Violation: redwines and whitewines Classes in varieties
- **Assign to:** @vladbondrevo
- **Files:** `css/index.varieties.partial.css`
- **Fix:** Rename to BEM format (e.g., `.varieties__wine--red`)

### Issue #515
- **Title:** BEM Naming Violation: craft-wines Component Classes
- **Assign to:** @IvanButryn
- **Files:** `css/index.craft-wines.partial.css`, `js/index.craft-wines.js`
- **Fix:** Use BEM naming pattern (e.g., `.craft-wines__button`)

### Issue #514
- **Title:** HTML: FAQ section uses non-semantic div elements
- **Assign to:** @but-d
- **Files:** `index.faq.partial.html`, `js/index.faq.js`
- **Fix:** Replace div-based accordion with `<details>/<summary>` or `<button>` elements

### Issue #513
- **Title:** Naming: Image file uses snake_case instead of kebab-case
- **Assign to:** Image file owner (TBD)
- **Files:** Check `img/` directory for non-kebab-case files
- **Fix:** Rename any snake_case or camelCase image files to kebab-case

### Issue #512
- **Title:** CSS: Undefined variable --color-border-soft
- **Assign to:** @oland1979
- **Files:** `css/global.css`, `css/index.awards.partial.css`
- **Fix:** Define `--color-border-soft` in `:root` of global.css

### Issue #511
- **Title:** CSS: BEM naming violations in awards section
- **Assign to:** @oland1979
- **Files:** `css/index.awards.partial.css`
- **Fix:** Rename `.award-col-1`, `.award-name`, etc. to BEM format

### Issue #510
- **Title:** CSS: Desktop-first media queries in global header nav
- **Assign to:** @AirDray1
- **Files:** `css/global.header-nav.partial.css`
- **Fix:** Convert max-width media queries to min-width

### Issue #509
- **Title:** CSS: Desktop-first media queries in hero section
- **Assign to:** Multiple (hero section owner)
- **Files:** `css/index.hero.partial.css`
- **Fix:** Convert max-width media queries to min-width

### Issue #508
- **Title:** Hardcoded Colors - Should Use CSS Variables
- **Assign to:** @BrytanVitalii, @oland1979
- **Files:** `css/components.css`, `css/global.css`, multiple others
- **Fix:** Replace all hex/rgb/rgba with CSS variables

### Issue #507
- **Title:** CRITICAL - Missing Image Assets in img/ Directory
- **Assign to:** TBD (investigate referenced images)
- **Files:** Check HTML/CSS for broken image references
- **Fix:** Add missing images or fix references

### Issue #506
- **Title:** History Timeline - Legacy SVG Attributes
- **Assign to:** HTML maintainer
- **Files:** `index.history.partial.html`
- **Fix:** Remove legacy SVG attributes (`enable-background`, `xml:space`)

### Issue #505
- **Title:** About Section - Weak HTML Heading
- **Assign to:** HTML maintainer
- **Files:** `index.about.partial.html`
- **Fix:** Improve semantic heading hierarchy

### Issue #504
- **Title:** Inline SVG Styling - Hardcoded Colors
- **Assign to:** SVG maintainer
- **Files:** `global.footer.partial.html`, `global.shopping-cart.partial.html`
- **Fix:** Remove inline styles, use CSS variables

### Issue #503
- **Title:** Clean Up - Empty style="" Attributes
- **Assign to:** @BrytanVitalii
- **Files:** `global.shopping-cart.partial.html`
- **Fix:** Remove empty `style=""` attributes

### Issue #502
- **Title:** Hardcoded Colors in Wine Categories & Awards
- **Assign to:** @oland1979
- **Files:** `css/index.wine-categories.partial.css`, `css/index.awards.partial.css`
- **Fix:** Use CSS variables instead of raw rgba values

### Issue #501
- **Title:** Newsletter - Hardcoded RGBA Colors
- **Assign to:** @inFERRNOO
- **Files:** `css/index.newsletter.partial.css`
- **Fix:** Replace rgba values with CSS variables

### Issue #500
- **Title:** Mixed Mobile/Desktop-First in Varieties
- **Assign to:** @vladbondrevo
- **Files:** `css/index.varieties.partial.css`
- **Fix:** Use consistent mobile-first approach throughout

### Issue #499
- **Title:** BEM Anti-pattern - Deep Chaining in Carousel
- **Assign to:** Carousel owner
- **Files:** `css/index.best-deals.partial.css`
- **Fix:** Avoid deep element chains (`.best-deals__carousel-track__item__image`), use simpler BEM

### Issue #498
- **Title:** Accessibility Issues - Interactive Elements
- **Assign to:** @BrytanVitalii
- **Files:** `global.cart-popup.partial.html`, `index.faq.partial.html`
- **Fix:** Add `aria-label` to buttons without visible text

### Issue #497
- **Title:** Global Footer SVG Non-BEM Classes
- **Assign to:** Footer owner
- **Files:** `global.footer.partial.html`, `css/global.footer.partial.css`
- **Fix:** Replace non-BEM SVG classes (e.g., `insta-mask-logo-hover_19f`) with BEM

### Issue #496
- **Title:** Desktop-First Media Queries in Multiple Files
- **Assign to:** @AirDray1
- **Files:** Multiple CSS files
- **Fix:** Standardize all media queries to mobile-first pattern

### Issue #495
- **Title:** FAQ Inline Style Max-Height
- **Assign to:** @but-d
- **Files:** `js/index.faq.js`
- **Fix:** Use CSS class toggles instead of inline style manipulation

### Issue #494
- **Title:** Missing Semicolon in JavaScript
- **Assign to:** TBD (JS maintainer)
- **Files:** Various JS files
- **Fix:** Add missing semicolons, ensure consistent Prettier formatting

### Issue #493
- **Title:** Code Formatting - JS File Indentation
- **Assign to:** @IvanButryn
- **Files:** `js/products.js`
- **Fix:** Change indentation from 4 spaces to 2 spaces

---

## Manual Assignment Steps

1. Go to each issue link: `https://github.com/koldovsky/4963-team-01/issues/[ISSUE_NUMBER]`
2. Click "Assignees" in the right sidebar
3. Search for and select the username from this guide
4. Click outside to save

## Summary by Author

### @vladbondrevo
- #522, #516, #500

### @but-d
- #521, #514, #495

### @BrytanVitalii
- #520, #508, #503, #498

### @IvanButryn
- #515, #493

### @AirDray1
- #518, #517, #510, #496

### @oland1979
- #512, #511, #502

### @inFERRNOO
- #501

### TBD / Multiple Contributors
- #519, #509, #507, #506, #505, #504, #497, #499, #494, #513
