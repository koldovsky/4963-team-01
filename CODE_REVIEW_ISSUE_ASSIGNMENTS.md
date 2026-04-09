# Code Review Issues - Assignment Summary

## Overview
Code review completed for AGENTS.md compliance. **9 GitHub issues created** with assignments to team members based on commit history.

---

## Issue Assignments by Developer

### Andrii Oliinyk
**Primary responsibility:** CSS architecture and variables
**Issues assigned:**
- **#531** - Mobile-first responsive design violations (HIGH)
  - 4 CSS files using `max-width` instead of mobile-first `min-width`
  - Files: `index.varieties.partial.css`, `index.hero.partial.css`, `global.header-nav.partial.css`, `index.about.partial.css`
  
- **#532** - Hardcoded colors Part 1 (HIGH)
  - 5 violations across: `components.css`, `global.css`, `global.header-nav.partial.css`, `index.about.partial.css`, `index.wine-categories.partial.css`
  
- **#533** - Hardcoded colors Part 2 (HIGH)
  - 7 violations across: `index.newsletter.partial.css`, `index.awards.partial.css`, `global.shopping-cart.partial.css`, `global.cart-popup.partial.css`, `index.best-deals.partial.css`, HTML inline style

**Impact:** Affects CSS architecture, color token standardization
**Status:** OPEN - Ready for review

---

### Dmytro Novykov & but-d (BEM Compliance)
**Primary responsibility:** BEM methodology fixes
**Issue assigned:**
- **#534** - BEM CSS methodology violations (MEDIUM)
  - 4 components with BEM violations:
    1. `index.about.partial.html/css` - Multiple block names instead of modifiers
    2. `index.best-deals.partial.html` - Deep class chaining
    3. `global.header-nav.partial.html` - Mixed `header__nav` and `nv` blocks
    4. `underage.html` - Generic `section-title` mixin

**Status:** OPEN - Ready for review

---

### BrytanVitalii
**Primary responsibility:** JavaScript best practices
**Issue assigned:**
- **#535** - JavaScript event delegation and globals (MEDIUM)
  - 4 files with violations:
    1. `js/index.header-nav.js` - Per-element listeners instead of delegation
    2. `js/index.craft-wines.js` - Per-button listeners for add-to-cart
    3. `js/index.best-deals.js` - Multiple per-element handlers + global resize listener
    4. `js/index.js` - Top-level state + `window.onload` global handler

**Impact:** Performance, event listener efficiency
**Status:** OPEN - Ready for review

---

### but-d
**Primary responsibility:** HTML semantics, formatting
**Issues assigned:**
- **#536** - Semantic HTML and accessibility violations (MEDIUM)
  - 3 components need semantic fixes:
    1. `index.faq.partial.html` - `<div>` elements should be `<details>`/`<summary>` or buttons
    2. `index.history-timeline.partial.html` - Generic `<div>` should be `<section>`
    3. `index.about.partial.html` - `<span>` blocks should be `<p>`

- **#537** - Code formatting indentation consistency (LOW)
  - 2 files with 4-space indentation (should be 2-space):
    1. `index.history-timeline.partial.html`
    2. `js/index.newsletter.js`

**Status:** OPEN - Ready for review

---

### AirDray1
**Primary responsibility:** File naming, carousel assets
**Issues assigned:**
- **#530** - File naming violation: snake_case in img/ (MEDIUM)
  - 1 file: `img/wines-best-deals/carousel_arrow.svg`
  - Problem: Uses `carousel_arrow` (snake_case), should be `carousel-arrow` (kebab-case)

- **#538** - File structure and asset organization (LOW-MEDIUM)
  - 3 sub-issues:
    1. `js-tasks/` directory structure (should clarify or move to `js/`)
    2. HTML references to missing/untracked image assets
    3. Root-level `.code-workspace` file naming

**Status:** OPEN - Ready for review

---

## Summary Statistics

### By Severity
| Severity | Count | Issues |
|----------|-------|--------|
| HIGH | 3 | #531, #532, #533 |
| MEDIUM | 5 | #530, #534, #535, #536, #538 |
| LOW | 1 | #537 |

### By Category
| Category | Issues | Primary Focus |
|----------|--------|---|
| CSS Architecture | 3 | #531, #532, #533 |
| BEM Compliance | 1 | #534 |
| JavaScript | 1 | #535 |
| HTML/Semantics | 1 | #536 |
| Code Formatting | 1 | #537 |
| File Structure | 2 | #530, #538 |

### Total Violations Found: 38
- Mobile-first CSS: 4
- Hardcoded colors: 11
- BEM methodology: 4
- Event delegation: 4
- Semantic HTML: 3
- Code formatting: 2
- File naming: 2
- File structure: 2
- **Other:** 0 (No forbidden frameworks detected ✓)

---

## GitHub Issues Links

### High Priority (Architecture)
1. [#531 - Mobile-first responsive design violations](https://github.com/koldovsky/4963-team-01/issues/531) → @Andrii Oliinyk
2. [#532 - Hardcoded colors Part 1](https://github.com/koldovsky/4963-team-01/issues/532) → @Andrii Oliinyk
3. [#533 - Hardcoded colors Part 2](https://github.com/koldovsky/4963-team-01/issues/533) → @Andrii Oliinyk

### Medium Priority (Code Quality)
4. [#534 - BEM CSS methodology violations](https://github.com/koldovsky/4963-team-01/issues/534) → @Dmytro Novykov, @but-d
5. [#535 - JavaScript event delegation and globals](https://github.com/koldovsky/4963-team-01/issues/535) → @BrytanVitalii
6. [#536 - Semantic HTML and accessibility violations](https://github.com/koldovsky/4963-team-01/issues/536) → @but-d
7. [#530 - File naming violation](https://github.com/koldovsky/4963-team-01/issues/530) → @AirDray1

### Low Priority (Maintenance)
8. [#537 - Code formatting indentation consistency](https://github.com/koldovsky/4963-team-01/issues/537) → @but-d
9. [#538 - File structure and asset organization](https://github.com/koldovsky/4963-team-01/issues/538) → @AirDray1

### Summary
10. [#539 - Code Review Summary](https://github.com/koldovsky/4963-team-01/issues/539) - Overview of all findings

---

## Process Notes

### Issue Creation
- All 10 issues (9 violation issues + 1 summary) created via GitHub CLI
- Issues include detailed descriptions with:
  - Specific file paths and line numbers
  - Current code snippets
  - Required actions
  - AGENTS.md standard references

### Assignments
- Attempted via GitHub CLI with available permissions
- Manual assignment recommended by repository maintainers
- Assignments based on:
  - Git commit history
  - Component ownership patterns
  - Relevant expertise areas

### Standards Reference
- All violations checked against `/workspace/AGENTS.md`
- Comprehensive report generated: `CODE_REVIEW_REPORT_2026-04-09.md`
- Report includes detailed remediation roadmap

---

## Next Steps

### For Team Leads
1. Review assignment accuracy
2. Manually reassign if needed (GitHub web interface)
3. Add any additional context or labels

### For Assigned Developers
1. Review corresponding GitHub issue(s)
2. Plan remediation using provided code examples
3. Create topic branches for fixes
4. Submit PRs when ready for merge review

### For Repository Maintenance
1. Consider adding pre-commit hooks for:
   - AGENTS.md compliance checking
   - Kebab-case file naming validation
   - Mobile-first CSS media query patterns
   - BEM naming consistency
   
2. Setup CI/CD checks for:
   - Prettier formatting enforcement
   - Color variable usage validation
   - Event delegation pattern verification

---

**Generated:** 2026-04-09  
**Report File:** `/workspace/CODE_REVIEW_REPORT_2026-04-09.md`  
**All Issues:** #530-#539 (OPEN status)
