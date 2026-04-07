# AGENTS.md Code Review Report
**Date:** April 7, 2026  
**Automation:** Code review per AGENTS.md standards  
**Status:** 30 issues identified and mapped to authors

---

## Executive Summary

This comprehensive code review audited 60 files (21 HTML, 23 CSS, 16 JS) against AGENTS.md standards. The review identified **30 open GitHub issues** requiring fixes across multiple categories: BEM naming violations, CSS mobile-first implementation, accessibility issues, hardcoded colors, and JavaScript event delegation patterns.

**Key Findings:**
- ✓ File naming is compliant (kebab-case throughout)
- ✓ No forbidden frameworks (React, Vue, Tailwind, jQuery)
- ✗ **BEM violations** in awards, about cards, cart popup, footer SVG classes
- ✗ **Mobile-first not fully implemented** - multiple files use `@media (max-width:)` instead of `min-width`
- ✗ **CSS variables** not used consistently - hardcoded colors found in multiple files
- ✗ **Accessibility gaps** - FAQ accordion uses divs instead of semantic elements, buttons lack aria-labels
- ✗ **JavaScript patterns** - per-element listeners instead of event delegation in several files
- ✗ **Undefined CSS variables** - `--color-border-soft` referenced but not defined

---

## Issue Summary by Category

### 1. JavaScript Issues (6 issues)

| Issue | Title | Severity | Author |
|-------|-------|----------|--------|
| #522 | Animation Class Selector: References Non-Standard Class Names | Medium | vladbondrevo |
| #521 | Code Quality: Inline Styling in JavaScript Should Use CSS Classes | High | but-d (Dmytro Novykov) |
| #520 | Code Formatting: Incorrect Indentation in craft-wines CSS | Low | BrytanVitalii |
| #516 | BEM Naming Violation: redwines and whitewines Classes in varieties | High | vladbondrevo |
| #495 | AGENTS.md Review: FAQ Inline Style Max-Height | Medium | but-d (Dmytro Novykov) |
| #493 | AGENTS.md Review: Code Formatting - JS File Indentation | Low | IvanButryn |

**Primary Issues:**
- **#521, #495**: Inline style manipulation (`.style.maxHeight`) instead of CSS class toggling
- **#522, #516**: Non-BEM class references in JavaScript
- **#520, #493**: Inconsistent indentation (4 spaces instead of 2)

**Recommendation:** Refactor JS to use CSS class toggles and event delegation patterns.

---

### 2. CSS Issues (14 issues)

| Issue | Title | Severity | Author |
|-------|-------|----------|--------|
| #518 | Mobile-First CSS Not Implemented: Uses max-width Instead of min-width | Critical | AirDray1 |
| #517 | Non-Semantic Icon Classes: Bootstrap Classes in Header Navigation | High | AirDray1 |
| #515 | BEM Naming Violation: craft-wines Component Classes | High | IvanButryn |
| #512 | CSS: Undefined variable --color-border-soft | Critical | oland1979 |
| #511 | CSS: BEM naming violations in awards section | High | oland1979 |
| #510 | CSS: Desktop-first media queries in global header nav | High | AirDray1 |
| #509 | CSS: Desktop-first media queries in hero section | High | Multiple |
| #508 | Hardcoded Colors - Should Use CSS Variables | Critical | BrytanVitalii, oland1979 |
| #502 | Hardcoded Colors in Wine Categories & Awards | High | oland1979 |
| #503 | Clean Up - Empty style="" Attributes | Low | BrytanVitalii |
| #501 | Newsletter - Hardcoded RGBA Colors | High | inFERRNOO |
| #500 | Mixed Mobile/Desktop-First in Varieties | High | vladbondrevo |
| #499 | BEM Anti-pattern - Deep Chaining in Carousel | Medium | Multiple |
| #496 | Desktop-First Media Queries in Multiple Files | High | AirDray1 |

**Files with Most Violations:**
1. `css/global.header-nav.partial.css` - Bootstrap classes, max-width media queries, hardcoded overlay color
2. `css/index.awards.partial.css` - Undefined variable, non-BEM naming (`.award-col-1`, `.award-name`)
3. `css/components.css` - Hardcoded color for required asterisk, no base `.button` block

**Critical Issues:**
- **#512**: `--color-border-soft` is referenced in `index.awards.partial.css` but never defined in `:root`
- **#518**: Multiple files use `@media (max-width: ...)` violating mobile-first principle
- **#508**: Hardcoded colors throughout (hex, rgb, rgba) instead of CSS variables

---

### 3. HTML/Accessibility Issues (7 issues)

| Issue | Title | Severity | Author |
|-------|-------|----------|--------|
| #514 | HTML: FAQ section uses non-semantic div elements | High | but-d (Dmytro Novykov) |
| #498 | Accessibility Issues - Interactive Elements | High | BrytanVitalii |
| #506 | History Timeline - Legacy SVG Attributes | Medium | Multiple |
| #505 | About Section - Weak HTML Heading | Medium | Multiple |
| #504 | Inline SVG Styling - Hardcoded Colors | High | Multiple |
| #513 | Naming: Image file uses snake_case instead of kebab-case | Medium | TBD |
| #507 | CRITICAL - Missing Image Assets in img/ Directory | Critical | TBD |

**Accessibility Gaps:**
- **#514**: FAQ accordion uses `div.faq__question-title` instead of `<button>` or `<details>/<summary>`
- **#498**: Cart toggle button lacks `aria-label`, several `href="#"` links are non-functional
- Missing `<label>` elements for form inputs (newsletter email field)

---

### 4. Code Quality & Organization Issues (3 issues)

| Issue | Title | Severity | Author |
|-------|-------|----------|--------|
| #519 | Non-Production Code: js-tasks Folder Should Be Removed | Medium | Multiple |
| #497 | Global Footer SVG Non-BEM Classes | Medium | Multiple |
| #494 | Missing Semicolon in JavaScript | Low | Multiple |

---

## Detailed Issue Assignments

### High Priority Assignments

#### AirDray1 (AirDray1 / airdray)
- **#518**: Mobile-First CSS Not Implemented (`global.header-nav.partial.css`)
- **#517**: Non-Semantic Icon Classes - Bootstrap
- **#510**: Desktop-first media queries in header nav
- **#496**: Desktop-First Media Queries

**Recommended action:** Convert all `@media (max-width: ...)` to `@media (min-width: ...)` patterns in header nav CSS.

---

#### BrytanVitalii
- **#520**: Code Formatting - Indentation in craft-wines
- **#508**: Hardcoded Colors - CSS Variables
- **#503**: Empty style="" Attributes in shopping cart
- **#498**: Accessibility Issues - Interactive Elements

**Recommended action:** 
1. Add aria-labels to interactive buttons
2. Convert hardcoded colors to CSS variables
3. Fix indentation to 2 spaces

---

#### but-d (Dmytro Novykov)
- **#521**: Inline Styling in JavaScript (FAQ)
- **#514**: HTML - FAQ section non-semantic elements
- **#495**: FAQ Inline Style Max-Height

**Recommended action:** Refactor FAQ component to use:
- `<details>/<summary>` or `<button>` elements instead of divs
- CSS class toggles instead of inline `style.maxHeight` manipulation
- Event delegation instead of per-element listeners

---

#### IvanButryn
- **#515**: BEM Naming Violation in craft-wines
- **#493**: JS File Indentation in products.js

**Recommended action:**
1. Rename craft-wines classes to follow BEM (e.g., `.craft-wines__button` instead of `.craft-wines-button`)
2. Fix indentation to 2 spaces

---

#### oland1979
- **#512**: Undefined variable `--color-border-soft`
- **#511**: BEM naming violations in awards
- **#502**: Hardcoded Colors in awards section

**Recommended action:**
1. Define `--color-border-soft` in `:root` of `global.css`
2. Convert awards classes to proper BEM (e.g., `.awards__item` instead of `.award-item`)
3. Use CSS variables for all colors

---

#### vladbondrevo
- **#522**: Animation Class Selector - Non-Standard Class Names
- **#516**: BEM Naming - redwines/whitewines classes
- **#500**: Mixed Mobile/Desktop-First in varieties

**Recommended action:**
1. Update varieties animation to reference proper BEM class names
2. Rename `.redwines` and `.whitewines` to BEM format (e.g., `.varieties__wine--red`)
3. Convert media queries to mobile-first

---

#### inFERRNOO
- **#501**: Newsletter - Hardcoded RGBA Colors

**Recommended action:** Replace all hardcoded rgba values with CSS variables defined in `:root`.

---

## Files Requiring Fixes

### Critical Files
1. **css/global.header-nav.partial.css** - Bootstrap classes, max-width media queries, hardcoded colors
2. **css/index.awards.partial.css** - Undefined variables, non-BEM naming
3. **js/index.faq.js** - Inline style manipulation, non-semantic HTML
4. **css/components.css** - Hardcoded colors, missing base block

### High Priority Files
5. **css/components.css** - Mixed color definitions
6. **global.header-nav.partial.html** - Checkbox hack for mobile nav
7. **index.faq.partial.html** - Non-semantic accordion
8. **css/index.craft-wines.partial.css** - Non-BEM naming

### Medium Priority Files
9. **js/index.varieties-animation.js** - References non-BEM classes
10. **css/index.varieties.partial.css** - Mixed mobile/desktop-first
11. **global.shopping-cart.partial.html** - Empty style attributes
12. **global.footer.partial.html** - Non-BEM SVG classes
13. **css/index.newsletter.partial.css** - Hardcoded colors
14. **index.history.partial.html** - Legacy SVG attributes

---

## AGENTS.md Compliance Summary

| Category | Status | Notes |
|----------|--------|-------|
| File Naming (kebab-case) | ✓ PASS | All files use correct naming |
| HTML Structure | ⚠ PARTIAL | FAQ needs semantic refactoring |
| HTMX Partials | ✓ PASS | Naming format is correct |
| BEM CSS | ✗ FAIL | Multiple blocks violate BEM (awards, cart, footer) |
| CSS Variables | ✗ FAIL | 10+ instances of hardcoded colors |
| Mobile-First CSS | ✗ FAIL | Multiple files use `max-width` (desktop-first) |
| JavaScript Patterns | ⚠ PARTIAL | Some files use per-element listeners instead of delegation |
| Accessibility | ⚠ PARTIAL | Missing labels, aria-labels, semantic elements |
| Code Formatting | ⚠ PARTIAL | Mixed 2/4 space indentation |
| Forbidden Patterns | ✓ PASS | No React, Vue, Tailwind, jQuery detected |

---

## Recommended Fix Priority

### Phase 1 (Critical - Foundation)
1. Define missing CSS variables in `:root` (#512)
2. Convert hardcoded colors to variables (#508, #502, #501)
3. Fix undefined variable references

### Phase 2 (High - Functionality)
4. Convert media queries to mobile-first (#518, #510, #496)
5. Refactor FAQ to semantic HTML (#514, #521, #495)
6. Fix BEM naming violations (#511, #515, #516)

### Phase 3 (Medium - Polish)
7. Add accessibility attributes (#498)
8. Clean up empty attributes (#503)
9. Fix JavaScript indentation (#493, #520)
10. Remove legacy SVG attributes (#506)

### Phase 4 (Low - Maintenance)
11. Clean up js-tasks folder (#519)
12. Verify all image assets (#507, #513)
13. Update animation class references (#522)

---

## Git Authors Involved

- **Dmytro Novykov** (but-d, dimacpoint@gmail.com) - FAQ, CSS updates
- **BrytanVitalii** (brytanvitalii08@gmail.com) - Shopping cart, components
- **oland1979** (oland1979@gmail.com) - Awards section, components
- **AirDray1 / airdray** (belous50409@gmail.com) - Header navigation
- **IvanButryn** (Ivanbutryn@gmail.com) - Craft wines, products
- **vladbondrevo** (pertosel1901@gmail.com) - Varieties animation
- **inFERRNOO** (irinasapeluk3676788@gmail.com) - Newsletter

---

## Next Steps

1. **Assign issues to authors** via GitHub interface (automated assignment attempted but requires elevated permissions)
2. **Authors review** assigned issues in detail
3. **Create fix branches** per issue or group of related issues
4. **Submit pull requests** with fixes
5. **Re-run code review** to verify compliance

---

## Additional Notes

- Some issues affect multiple authors (e.g., media queries in 8+ CSS files)
- CSS variables issue (#512) is blocking other CSS improvements
- FAQ component (#514-#521) is interconnected - fix together
- Mobile-first implementation should be standardized across all CSS files

**Review conducted by:** Code Review Automation (cursor/code-review-issues-6ba1)  
**Standards reference:** AGENTS.md  
**Total files audited:** 60  
**Total issues:** 30  
**Compliance level:** ~60%
