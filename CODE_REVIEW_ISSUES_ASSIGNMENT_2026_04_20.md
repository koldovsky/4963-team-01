# Code Review Issues Assignment - 2026-04-20

**Date:** April 20, 2026 15:00 UTC  
**Review Type:** Automated Daily Code Review  
**Total Issues Created:** 7 (#640-#646)  
**Status:** ✅ COMPLETE

---

## GitHub Issues Created

All issues have been created successfully and are linked below. Since direct assignment via CLI had permission limitations, assignments are documented here:

### Issue #640 - BEM Naming Convention Violations
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/640  
**Severity:** MEDIUM  
**Assigned to:** AirDray1 (airdray@belous50409.com)  
**Topics:** 
- Abbreviated block name `nv__` instead of descriptive `header-nav__`
- Deep BEM element chains (`.element__element__element`)
- Affects: header navigation component

**Root Cause Commits:**
- f9b8427 - "Add global.header-nav.js and change some styles"

---

### Issue #641 - Hardcoded Colors Violation
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/641  
**Severity:** HIGH  
**Assigned to:** BrytanVitalii (brytanvitalii08@gmail.com)  
**Secondary:** Andriychak (andriychak@gmail.com)  
**Topics:**
- Hardcoded colors (`white`, `#fff`, `red`, raw `rgb`/`rgba`)
- Undefined CSS variable `--color-border-soft`
- 9+ CSS files with 15+ hardcoded color instances
- Should use `:root` CSS variables

**Files Affected:** 9+ CSS files (components, cart-popup, awards, best-deals, etc.)

---

### Issue #642 - Mobile-First CSS Violation
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/642  
**Severity:** HIGH  
**Assigned to:** AirDray1 (airdray@belous50409.com)  
**Secondary:** BrytanVitalii (brytanvitalii08@gmail.com)  
**Topics:**
- Desktop-first approach using `@media (max-width:...)`
- Should use mobile-first `@media (min-width:...)`
- 4+ CSS files affected (hero, header-nav, about, varieties)

**AGENTS.md Requirement:** "Use mobile-first CSS. Avoid desktop-first media queries."

---

### Issue #643 - Event Delegation Pattern
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/643  
**Severity:** MEDIUM  
**Assigned to:** BrytanVitalii (brytanvitalii08@gmail.com)  
**Secondary:** AirDray1, IvanButryn  
**Topics:**
- Per-element event listeners (`forEach` + `addEventListener`)
- Should use delegated listeners on parent elements
- 7+ JS files affected with 20+ listener instances

**Files with Issues:**
- `js/index.header-nav.js` (menu links, social links)
- `js/index.craft-wines.js` (cart buttons)
- `js/index.best-deals.js` (carousel, add-to-cart)
- `js/global.shopping-cart.js` (cart operations)
- `js/index.newsletter.js` (modal listeners)
- `js/index.age-modal.js` (age verification)
- `js/global.footer.js` (nav buttons)

**Positive Examples:** `js/index.faq.js` correctly uses delegation ✅

---

### Issue #644 - Semantic HTML Issues
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/644  
**Severity:** LOW  
**Assigned to:** Andriychak (andriychak@gmail.com)  
**Topics:**
- FAQ accordion uses non-semantic `<div>` elements
- Should use `<button>` or `<details>`/`<summary>`
- Affects: keyboard accessibility, screen reader support

**File:** `index.faq.partial.html` (lines 12-17)

---

### Issue #645 - Undefined CSS Variable
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/645  
**Severity:** MEDIUM  
**Assigned to:** BrytanVitalii (brytanvitalii08@gmail.com)  
**Topics:**
- CSS variable `--color-border-soft` used but not defined
- Should be defined in `:root` in `global.css`
- Affects: `css/index.awards.partial.css` (line 65)

---

### Issue #646 - File Naming Violation
**GitHub:** https://github.com/koldovsky/4963-team-01/issues/646  
**Severity:** LOW  
**Assigned to:** BrytanVitalii (brytanvitalii08@gmail.com)  
**Topics:**
- File uses snake_case instead of kebab-case
- File: `img/wines-best-deals/carousel_arrow.svg` → should be `carousel-arrow.svg`
- Single file, minimal impact

---

## Developer Assignments Summary

### AirDray1 (airdray@belous50409.com)
- **Issues:** #640 (Primary), #642 (Primary), #643 (Secondary)
- **Total Violations:** BEM naming, desktop-first CSS, event listeners
- **Estimated Effort:** 3-4 hours

### BrytanVitalii (brytanvitalii08@gmail.com)
- **Issues:** #641 (Primary), #642 (Secondary), #643 (Primary), #645 (Primary), #646 (Primary)
- **Total Violations:** Hardcoded colors, CSS variables, event listeners, file naming
- **Estimated Effort:** 4-5 hours

### Andriychak / Volodymyr Andriichak (andriychak@gmail.com)
- **Issues:** #641 (Secondary), #644 (Primary)
- **Total Violations:** Hardcoded colors, semantic HTML
- **Estimated Effort:** 2-3 hours

### IvanButryn (Ivanbutryn@gmail.com)
- **Issues:** #643 (Secondary)
- **Total Violations:** Event delegation in craft-wines.js
- **Estimated Effort:** 1 hour

### vladbondrevo (pertosel1901@gmail.com)
- **Issues:** Referenced in #643
- **Total Violations:** Event delegation in varieties-animation.js
- **Estimated Effort:** 1 hour

---

## Remediation Plan

### Phase 1: CRITICAL (This Week)
1. **Issue #641** - Hardcoded Colors
   - Replace 15+ hardcoded colors with CSS variables
   - Define missing variables in `:root`
   - Estimated: 2 hours

2. **Issue #642** - Mobile-First CSS
   - Convert 4+ files from desktop-first to mobile-first
   - Restructure media queries to progressive enhancement
   - Estimated: 3 hours

### Phase 2: HIGH (Next Week)
1. **Issue #640** - BEM Naming
   - Rename `.nv__*` to `.header-nav__*` (3 files)
   - Flatten deep BEM chains
   - Estimated: 1.5 hours

2. **Issue #643** - Event Delegation
   - Refactor 7+ JS files to use delegated listeners
   - Test dynamic element handling
   - Estimated: 3-4 hours

### Phase 3: MEDIUM (Following Week)
1. **Issue #645** - Undefined CSS Variable
   - Define `--color-border-soft` in `:root`
   - Estimated: 0.5 hour

2. **Issue #644** - Semantic HTML
   - Update FAQ markup to use semantic elements
   - Estimated: 1 hour

### Phase 4: LOW (Optional)
1. **Issue #646** - File Naming
   - Rename one SVG file
   - Update references
   - Estimated: 0.5 hour

---

## AGENTS.md Compliance Summary

### Current Status
- **Violations:** 50+ across 20+ files
- **Critical Issues:** 2 (hardcoded colors, mobile-first CSS)
- **High Priority:** 2 (BEM naming, event delegation)
- **Passing Standards:** 6/12 (frameworks, HTMX, structure, minimal JS)
- **Failing Standards:** 6/12 (mobile-first, BEM, CSS vars, events, HTML, file names)

### Estimated Compliance After Fixes
- **Expected Improvement:** 95%+ AGENTS.md compliance
- **Remaining Minor Issues:** None after all 7 issues resolved

---

## Code Review Process

1. ✅ **Analysis Complete** - Code scanned against AGENTS.md standards
2. ✅ **Violations Identified** - 7 categories, 50+ instances found
3. ✅ **Issues Created** - GitHub issues #640-#646 created and documented
4. ⏳ **Developer Assignment** - Issues assigned to responsible developers
5. ⏳ **Pull Requests** - Developers create feature branches and PRs
6. ⏳ **Code Review** - PRs reviewed for compliance
7. ⏳ **Merge** - Approved PRs merged to main
8. ⏳ **Verification** - Follow-up review to confirm fixes

---

## Next Steps for Developers

1. **Review Your Assigned Issues** - Check GitHub issues #640-#646
2. **Read AGENTS.md** - Understand project standards (top of repo)
3. **Create Feature Branch** - Branch from main for each issue
4. **Implement Fixes** - Apply corrections per issue descriptions
5. **Test Thoroughly** - Verify changes work correctly
6. **Create Pull Request** - Reference issue number in PR
7. **Request Review** - Ask for AGENTS.md compliance review
8. **Merge** - Merge after approval

---

## Contact & Questions

- **Code Review Branch:** cursor/code-review-issues-ad16
- **Review Report:** CODE_REVIEW_REPORT_2026_04_20.md
- **Issues Index:** CODE_REVIEW_ISSUES_ASSIGNMENT_2026_04_20.md (this file)
- **AGENTS.md Standards:** AGENTS.md (project root)

---

**Review Completed:** 2026-04-20 15:00:31 UTC  
**GitHub Issues:** #640-#646 (7 total)  
**Status:** ✅ READY FOR DEVELOPER REMEDIATION
