# Code Review Report - AGENTS.md Compliance

**Date:** April 11, 2026  
**Reviewer:** Cursor Code Review Agent  
**Branch:** cursor/code-review-issues-974a  
**Repository:** koldovsky/4963-team-01

## Executive Summary

Comprehensive code review of the project against AGENTS.md standards identified **10 major violation categories** affecting 25+ files across CSS, JavaScript, and HTML. Issues have been created and assigned to respective code authors via GitHub Issues.

## Violations Identified

### 1. **SCSS Syntax in Plain CSS Files** (HIGH PRIORITY)
- **Severity:** High
- **Files:** 7 CSS files
- **Issue:** CSS files using SCSS nesting syntax (`&:`, `&::after`, nested blocks) which is not valid CSS3
- **Impact:** Browser incompatibility, requires build system
- **Assigned:** BrytanVitalii (#541)

### 2. **Hardcoded Colors Not Using CSS Variables** (HIGH PRIORITY)
- **Severity:** High
- **Files:** 9 CSS files
- **Issue:** Hardcoded `rgb()` and `rgba()` values instead of CSS variables
- **Impact:** Difficult to maintain, violates color management rules
- **Also:** Undefined variable `--color-border-soft` in index.awards.partial.css
- **Assigned:** Andriychak (#542)

### 3. **Desktop-First Instead of Mobile-First Layout** (MEDIUM PRIORITY)
- **Severity:** Medium
- **Files:** 3+ CSS files
- **Issue:** Using `@media (max-width)` as primary responsive strategy
- **Impact:** Violates AGENTS.md mobile-first requirement
- **Assigned:** BrytanVitalii (#543)

### 4. **Global Variables and Missing Error Handling** (HIGH PRIORITY)
- **Severity:** High
- **Files:** 8+ JS files
- **Issue:** Module-level mutable state, missing null guards, no try/catch
- **Impact:** Runtime errors, memory leaks, maintenance issues
- **Assigned:** vladbondrevo (#544)

### 5. **Event Listener Bug - Cannot Remove Listeners** (HIGH PRIORITY)
- **Severity:** High
- **File:** js/index.best-deals.js (Lines 129-131)
- **Issue:** Using anonymous functions in removeEventListener causes memory leak
- **Impact:** Event handlers accumulate, causing multiple triggers and memory leaks
- **Assigned:** BrytanVitalii (#545)

### 6. **Non-Semantic HTML and Incorrect BEM Naming** (HIGH PRIORITY)
- **Severity:** High
- **Files:** 5+ HTML partials
- **Issue:** FAQ uses div instead of semantic elements, incorrect BEM class names (nv instead of header__nav)
- **Impact:** Accessibility issues, maintenance, poor semantics
- **Assigned:** AirDray1 (#546)

### 7. **File Naming Convention Violations** (LOW PRIORITY)
- **Severity:** Low
- **File:** img/wines-best-deals/carousel_arrow.svg
- **Issue:** Uses snake_case instead of kebab-case
- **Impact:** Inconsistent with naming standards
- **Assigned:** IvanButryn (#547)

### 8. **Unnecessary Heavy DOM Manipulation** (MEDIUM PRIORITY)
- **Severity:** Medium
- **Files:** 5 JS files
- **Issue:** Rebuilding entire lists, using inline styles instead of CSS classes
- **Impact:** Performance degradation, violates minimal JavaScript principle
- **Assigned:** vladbondrevo (#548)

### 9. **Architecture Issues** (MEDIUM PRIORITY)
- **Severity:** Medium
- **Issues:**
  - Duplicate font imports (HTTP requests doubled)
  - Instructional comments in production HTML
  - Incorrect file placement (js-tasks outside js/)
- **Assigned:** koldovsky (#549)

### 10. **Accessibility: Icon-Only Links** (MEDIUM PRIORITY)
- **Severity:** Medium
- **File:** global.header-nav.partial.html
- **Issue:** Social media links have no accessible names
- **Impact:** Screen reader issues, WCAG compliance
- **Assigned:** AirDray1 (#550)

## AGENTS.md Sections Violated

1. **CSS Architecture** - SCSS syntax, hardcoded colors, desktop-first
2. **Responsive Design** - Mobile-first requirement
3. **JavaScript Guidelines** - Global variables, error handling
4. **Semantic HTML** - Non-semantic elements for interactive components
5. **Component Naming** - Non-BEM, generic names, poor namespacing
6. **File Naming** - Non-kebab-case filenames
7. **Accessibility** - Missing accessible names for icon-only links
8. **Performance** - Duplicate font imports, heavy DOM manipulation
9. **Forbidden Patterns** - No build systems (SCSS violation)
10. **Project Structure** - Incorrect file placement

## GitHub Issues Created

| Issue | Title | Severity | Assignee | Status |
|-------|-------|----------|----------|--------|
| #541 | CSS: Remove SCSS Nesting Syntax | HIGH | BrytanVitalii | Open |
| #542 | CSS: Hardcoded Colors Not Using Variables | HIGH | Andriychak | Open |
| #543 | CSS: Desktop-First Instead of Mobile-First | MEDIUM | BrytanVitalii | Open |
| #544 | JS: Global Variables and Missing Error Handling | HIGH | vladbondrevo | Open |
| #545 | JS: Carousel Event Listener Bug | HIGH | BrytanVitalii | Open |
| #546 | HTML/CSS: Semantic Issues and Class Naming | HIGH | AirDray1 | Open |
| #547 | File Naming: Non-Kebab-Case Assets | LOW | IvanButryn | Open |
| #548 | JS: Unnecessary Heavy DOM Manipulation | MEDIUM | vladbondrevo | Open |
| #549 | Architecture: Duplicate Imports and Organization | MEDIUM | koldovsky | Open |
| #550 | Accessibility: Icon-Only Links Need Names | MEDIUM | AirDray1 | Open |

## Key Findings Summary

### Critical Issues (Must Fix)
1. SCSS syntax in CSS files - Browser incompatibility
2. Global variables in JS - Runtime errors and memory leaks
3. Event listener bugs - Memory leaks from accumulated handlers
4. Non-semantic HTML - Accessibility violations
5. Hardcoded colors - Maintenance nightmare

### Important Issues (Should Fix)
1. Desktop-first layout - Violates mobile-first principle
2. Heavy DOM manipulation - Performance issues
3. Missing error handling - Crashes on missing elements

### Nice-to-Have (Can Schedule)
1. File naming conventions
2. Font import optimization
3. Code organization improvements

## Next Steps

1. **Review Issues** - Assigned developers should review their issues
2. **Fix High Priority** - Address critical issues first
3. **Testing** - Ensure fixes don't break functionality
4. **Validation** - Run through AGENTS.md compliance checklist again
5. **Follow-up Review** - Second review after fixes applied

---

**Report Generated:** April 11, 2026  
**Automation ID:** f6e29a42-d230-4060-a079-3db342ef77c5
