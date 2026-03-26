# Code Review Issues Index

**Code Review Date:** 2026-03-26  
**Total Issues Created:** 10  
**Branch:** cursor/code-review-issues-a67e

---

## GitHub Issues Created

| Issue # | Title | Category | Priority | Status |
|---------|-------|----------|----------|--------|
| [#237](https://github.com/koldovsky/4963-team-01/issues/237) | File Naming Violations (Non-kebab-case) | File Naming | HIGH | OPEN |
| [#238](https://github.com/koldovsky/4963-team-01/issues/238) | CSS BEM Naming Violations | CSS Architecture | HIGH | OPEN |
| [#239](https://github.com/koldovsky/4963-team-01/issues/239) | Hardcoded Colors Instead of CSS Variables | CSS Variables | HIGH | OPEN |
| [#240](https://github.com/koldovsky/4963-team-01/issues/240) | Mobile-first Responsive Design Violations | CSS Responsive | HIGH | OPEN |
| [#241](https://github.com/koldovsky/4963-team-01/issues/241) | Code Formatting (Indentation Should Be 2 Spaces) | Code Formatting | MEDIUM | OPEN |
| [#242](https://github.com/koldovsky/4963-team-01/issues/242) | HTML Semantic Structure Violations | HTML Semantics | MEDIUM | OPEN |
| [#243](https://github.com/koldovsky/4963-team-01/issues/243) | HTML Attribute Casing (viewBox Should Be Lowercase) | HTML Formatting | LOW | OPEN |
| [#244](https://github.com/koldovsky/4963-team-01/issues/244) | JavaScript Global Variables and Scope Issues | JavaScript | HIGH | OPEN |
| [#245](https://github.com/koldovsky/4963-team-01/issues/245) | Excessive JavaScript DOM Manipulation | JavaScript | MEDIUM | OPEN |
| [#246](https://github.com/koldovsky/4963-team-01/issues/246) | Project Structure Violations (js-tasks Location) | Structure | MEDIUM | OPEN |

---

## Documentation Files

- **CODE_REVIEW_REPORT.md** - Comprehensive detailed audit (250+ lines)
- **CODE_REVIEW_EXECUTION_SUMMARY.md** - Executive summary with statistics
- **CODE_REVIEW_ISSUES_INDEX.md** - This file

---

## Issues by Author

### but-d (dimacpoint@gmail.com)
- #237 (File Naming)
- #238 (CSS BEM)
- #239 (Colors)
- #240 (Mobile-first)
- #241 (Indentation)
- #244 (Global Variables)
- #245 (DOM Manipulation)

### BrytanVitalii (brytanvitalii08@gmail.com)
- #237 (File Naming)
- #244 (Global Variables)
- #245 (DOM Manipulation)
- #246 (Structure)

### Volodymyr Andriichak (andriychak@gmail.com)
- #238 (CSS BEM)
- #241 (Indentation)
- #243 (Attribute Casing)
- #244 (Global Variables)
- #245 (DOM Manipulation)

### airdray (belous50409@gmail.com)
- #238 (CSS BEM)
- #239 (Colors)
- #240 (Mobile-first)
- #241 (Indentation)

### vladbondrevo (pertosel1901@gmail.com)
- #238 (CSS BEM)
- #239 (Colors)
- #240 (Mobile-first)
- #241 (Indentation)

### Andrii Oliinyk (oland1979)
- #238 (CSS BEM)
- #239 (Colors)
- #240 (Mobile-first)

### Vyacheslav Koldovskyy (koldovsky@koldovsky.com)
- #237 (File Naming)
- #243 (Attribute Casing)
- #246 (Structure)

### Ivan Butryn (Ivanbutryn@gmail.com)
- #238 (CSS BEM)
- #243 (Attribute Casing)

---

## Issues by Priority

### HIGH Priority (Requires Immediate Attention)
- #237 - File Naming Violations
- #238 - CSS BEM Naming Violations
- #239 - Hardcoded Colors Instead of CSS Variables
- #240 - Mobile-first Responsive Design Violations
- #244 - JavaScript Global Variables and Scope Issues

### MEDIUM Priority (Important, Should Address)
- #241 - Code Formatting (Indentation)
- #242 - HTML Semantic Structure Violations
- #245 - Excessive JavaScript DOM Manipulation
- #246 - Project Structure Violations

### LOW Priority (Nice to Have)
- #243 - HTML Attribute Casing

---

## AGENTS.md Rules Violated

### Architecture & Structure
- Project Overview - No frameworks (compliant ✓)
- Project Structure - js-tasks folder outside js/ (#246)
- File Naming Rules - Non-kebab-case files (#237)
- HTMX Partial Rules - Compliant ✓

### CSS
- CSS Architecture (BEM) - Multiple violations (#238)
- CSS Variables - Hardcoded colors (#239)
- Responsive Design (Mobile-first) - Using max-width (#240)
- Code Formatting (Indentation) - 4-space instead of 2-space (#241)

### HTML
- Semantic HTML - Missing section/main tags (#242)
- Accessibility - Missing labels/alt attributes (#242)
- Code Formatting (Lowercase attributes) - viewBox instead of viewbox (#243)

### JavaScript
- Minimal JavaScript - Excessive DOM manipulation (#245)
- Global variables - window.onload, etc. (#244)
- Global scope - js-tasks functions (#237)

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Issues | 10 |
| HIGH Priority | 5 |
| MEDIUM Priority | 4 |
| LOW Priority | 1 |
| Unique Authors Assigned | 8 |
| Files Affected (Primary) | 25+ |
| Total Violations Found | 50+ |

---

## Recommended Resolution Order

1. **#244** - Fix JavaScript global variables and duplicate loading (blocks other work)
2. **#238** - Fix CSS BEM naming (affects multiple files)
3. **#239** - Extract CSS color variables (needed for consistency)
4. **#240** - Convert media queries to mobile-first
5. **#237** - Rename files to kebab-case
6. **#246** - Reorganize js-tasks folder
7. **#241** - Fix indentation to 2 spaces
8. **#242** - Add semantic HTML tags
9. **#243** - Fix attribute casing (lowest priority)
10. **#245** - Refactor excessive DOM manipulation

---

*Generated: 2026-03-26*  
*Repository: koldovsky/4963-team-01*  
*Branch: cursor/code-review-issues-a67e*
