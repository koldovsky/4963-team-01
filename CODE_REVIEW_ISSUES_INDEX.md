# AGENTS.md Code Review - Issues Index

**Audit Date:** 2026-05-02  
**Total Issues Created:** 9  
**Severity Breakdown:** 3 High | 4 Medium | 2 Low  

---

## Quick Reference

| Issue # | Title | Severity | Component | Status |
|---------|-------|----------|-----------|--------|
| #717 | File naming - carousel_arrow.svg uses snake_case | Low | File naming | OPEN |
| #718 | CSS uses SCSS nesting syntax instead of vanilla CSS | Medium | CSS Architecture | OPEN |
| #719 | JavaScript files placed outside js/ directory | Medium | Project Structure | OPEN |
| #720 | CSS uses desktop-first media queries instead of mobile-first | High | CSS Architecture | OPEN |
| #721 | Hardcoded colors not using CSS variables | High | CSS Architecture | OPEN |
| #722 | Weak semantic HTML structure | Medium | HTML/Semantics | OPEN |
| #723 | CSS class naming violates BEM methodology | High | CSS Architecture | OPEN |
| #724 | Inline styles in HTML files | Low | Code Organization | OPEN |
| #725 | Missing image files referenced in project | Medium | Assets | OPEN |

---

## Issues by Severity

### High Severity (3)
1. **#720** - CSS uses desktop-first media queries instead of mobile-first
   - **Impact:** Violates core design principle
   - **Affected Files:** 4+ CSS files
   - **Fix Complexity:** High
   - **Link:** [Issue #720](https://github.com/koldovsky/4963-team-01/issues/720)

2. **#721** - Hardcoded colors not using CSS variables
   - **Impact:** Affects maintainability and breaks CSS standards
   - **Affected Files:** 9+ CSS files
   - **Fix Complexity:** High
   - **Link:** [Issue #721](https://github.com/koldovsky/4963-team-01/issues/721)

3. **#723** - CSS class naming violates BEM methodology
   - **Impact:** Architectural breach
   - **Affected Files:** Multiple CSS files and partials
   - **Fix Complexity:** High
   - **Link:** [Issue #723](https://github.com/koldovsky/4963-team-01/issues/723)

### Medium Severity (4)
1. **#718** - CSS uses SCSS nesting syntax instead of vanilla CSS
   - **Impact:** Not compliant with vanilla CSS requirement
   - **Affected Files:** 3 CSS files
   - **Fix Complexity:** Medium
   - **Link:** [Issue #718](https://github.com/koldovsky/4963-team-01/issues/718)

2. **#719** - JavaScript files placed outside js/ directory
   - **Impact:** Violates project structure guidelines
   - **Affected Files:** js-tasks/ directory
   - **Fix Complexity:** Low
   - **Link:** [Issue #719](https://github.com/koldovsky/4963-team-01/issues/719)

3. **#722** - Weak semantic HTML structure
   - **Impact:** Reduces accessibility and semantic meaning
   - **Affected Files:** 4 HTML files
   - **Fix Complexity:** Medium
   - **Link:** [Issue #722](https://github.com/koldovsky/4963-team-01/issues/722)

4. **#725** - Missing image files referenced in project
   - **Impact:** Broken image references affect UX
   - **Affected Files:** Multiple (cross-cutting)
   - **Fix Complexity:** Medium
   - **Link:** [Issue #725](https://github.com/koldovsky/4963-team-01/issues/725)

### Low Severity (2)
1. **#717** - File naming - carousel_arrow.svg uses snake_case
   - **Impact:** Naming convention violation
   - **Affected Files:** 1 file
   - **Fix Complexity:** Low
   - **Link:** [Issue #717](https://github.com/koldovsky/4963-team-01/issues/717)

2. **#724** - Inline styles in HTML files
   - **Impact:** Code organization best practice
   - **Affected Files:** 2 HTML files
   - **Fix Complexity:** Low
   - **Link:** [Issue #724](https://github.com/koldovsky/4963-team-01/issues/724)

---

## Issues by Component

### CSS Architecture (4 issues)
- **#718** - SCSS nesting syntax
- **#720** - Desktop-first media queries
- **#721** - Hardcoded colors
- **#723** - BEM naming violations

### HTML & Semantics (2 issues)
- **#722** - Semantic HTML
- **#724** - Inline styles

### Project Structure (3 issues)
- **#717** - File naming
- **#719** - JavaScript directory
- **#725** - Missing assets

---

## Fix Priority Roadmap

### Phase 1: Critical (Highest Priority)
**Target:** Week 1
- [ ] #720 - Fix media queries (desktop-first → mobile-first)
- [ ] #721 - Add CSS variables for colors
- [ ] #723 - Standardize BEM class naming

**Estimated Effort:** 30-40 hours combined

### Phase 2: Important (Medium Priority)
**Target:** Week 2
- [ ] #718 - Convert SCSS nesting to vanilla CSS
- [ ] #722 - Improve semantic HTML
- [ ] #725 - Add missing images or remove references
- [ ] #719 - Move JS files to correct directory

**Estimated Effort:** 15-20 hours combined

### Phase 3: Nice to Have (Lower Priority)
**Target:** Week 3
- [ ] #717 - Fix file naming
- [ ] #724 - Remove inline styles

**Estimated Effort:** 2-3 hours combined

---

## Code Review Standards

The following AGENTS.md principles were checked:

| Principle | Current Status | Issue |
|-----------|----------------|-------|
| Semantic HTML | ⚠️ Partial | #722, #724 |
| HTMX Architecture | ✅ Good | — |
| Mobile-first CSS | ❌ Failed | #720 |
| BEM CSS Naming | ❌ Failed | #723 |
| CSS Variables | ❌ Failed | #721 |
| Vanilla CSS | ⚠️ Partial | #718 |
| Kebab-case Files | ⚠️ Partial | #717 |
| JS in `js/` | ⚠️ Partial | #719 |
| Images in `img/` | ⚠️ Partial | #725 |
| Minimal JS | ✅ Good | — |

---

## How to Work on Issues

### For Developers
1. Check assigned issues
2. Review issue description and required fixes
3. Read AGENTS.md for guidelines
4. Create feature branch from main
5. Make fixes according to requirements
6. Test your changes
7. Create PR and reference the issue
8. Link PR in issue comments

### For Reviewers
1. Review PR against AGENTS.md requirements
2. Verify all affected files are fixed
3. Check for no regressions
4. Approve or request changes
5. Close issue when PR is merged

---

## Additional Resources

- **AGENTS.md:** Full coding standards and guidelines
- **CODE_REVIEW_2026_05_02.md:** Detailed code review report
- **GitHub Issues:** Full details and discussion for each issue

---

**Generated:** 2026-05-02  
**Review Agent:** Cursor Code Review (v1.0)  
**Status:** All issues created and ready for assignment  
