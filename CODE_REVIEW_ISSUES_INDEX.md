# Code Review Issues Index
**Code Review Date:** April 19, 2026  
**Automation:** Scheduled Code Review via Cron  
**Branch:** cursor/code-review-issues-75de

---

## Quick Links to Issues

All issues created based on AGENTS.md compliance audit.

### Critical Issues (1)

| Issue | Title | Files | Authors |
|-------|-------|-------|---------|
| [#632](https://github.com/koldovsky/4963-team-01/issues/632) | Image File Naming Violation - carousel_arrow.svg | img/wines-best-deals/ | @oland1979, @BrytanVitalii |

### High Severity (2)

| Issue | Title | Files | Authors |
|-------|-------|-------|---------|
| [#631](https://github.com/koldovsky/4963-team-01/issues/631) | CSS Hardcoded Colors - Should Use :root Variables | 8 CSS files | Multiple |
| [#633](https://github.com/koldovsky/4963-team-01/issues/633) | CSS Media Queries Use max-width - Should Be Mobile-First | 4 CSS files | @airdray |

### Medium Severity (5)

| Issue | Title | Files | Authors |
|-------|-------|-------|---------|
| [#630](https://github.com/koldovsky/4963-team-01/issues/630) | CSS BEM Naming Not Followed Consistently | 8 CSS files | Multiple |
| [#636](https://github.com/koldovsky/4963-team-01/issues/636) | Undefined CSS Variable Reference | css/index.awards.partial.css | @oland1979 |
| [#635](https://github.com/koldovsky/4963-team-01/issues/635) | JavaScript Should Use Event Delegation | 3 JS files | Multiple |
| [#637](https://github.com/koldovsky/4963-team-01/issues/637) | Event Listener Removal Not Working Correctly | js/index.best-deals.js | Multiple |
| [#638](https://github.com/koldovsky/4963-team-01/issues/638) | JavaScript DOM Manipulation Can Be Optimized | js/global.shopping-cart.js | @BrytanVitalii |

### Low Severity (2)

| Issue | Title | Files | Authors |
|-------|-------|-------|---------|
| [#634](https://github.com/koldovsky/4963-team-01/issues/634) | Remove console.log/console.error from Production Code | js/global.shopping-cart.js | @BrytanVitalii |
| [#639](https://github.com/koldovsky/4963-team-01/issues/639) | Generic CSS Filename - components.css Naming Issue | css/components.css | @oland1979 |

---

## Issues by File

### CSS Files

**css/global.header-nav.partial.css**
- #631: Hardcoded colors (line 5)
- #633: Desktop-first media queries (lines 71, 189, 195)
- #630: BEM naming issues

**css/global.shopping-cart.partial.css**
- #631: Hardcoded colors (lines 8, 98, 99, 101, 209)
- #630: BEM naming and organization

**css/global.cart-popup.partial.css**
- #631: Hardcoded colors (lines 9, 47)
- #631: Box shadow rgba values (lines 12-13)

**css/index.awards.partial.css**
- #631: Hardcoded colors (line 79)
- #630: BEM naming issues (multiple)
- #636: Undefined variable --color-border-soft (line 70)

**css/index.best-deals.partial.css**
- #631: SVG fill colors (lines 226, 231)
- #630: Deep BEM chains

**css/index.hero.partial.css**
- #633: Desktop-first media queries (lines 89, 120, 129)
- #630: BEM element naming issues

**css/index.newsletter.partial.css**
- #631: Hardcoded colors and rgba (lines 84, 94, 104, 161)
- #633: Desktop-first approach

**css/index.about.partial.css**
- #631: RGB color values (lines 22, 26, 30)
- #633: Media queries (lines 81, 94)
- #630: Card naming (.about-card, .event-card, etc.)

**css/index.wine-categories.partial.css**
- #631: Linear gradient colors (lines 36-39)
- #630: Discount naming inconsistencies

**css/index.varieties.partial.css**
- #633: Media query (line 31)
- #630: Redwines/whitewines namespace issues

**css/components.css**
- #631: Hardcoded red color (line 57)
- #639: Generic filename

---

### JavaScript Files

**js/index.best-deals.js**
- #635: Event delegation not used (buttons, dots)
- #637: removeEventListener bug (lines 129-131)

**js/index.craft-wines.js**
- #635: No event delegation (menu buttons)

**js/index.header-nav.js**
- #635: No event delegation (nav links, socials)

**js/global.shopping-cart.js**
- #634: console.error statement (line 35)
- #638: Heavy DOM manipulation (lines 80-87)
- #635: Per-item event listeners (lines 111-152)

**js/global.footer.js**
- Multiple inline style manipulations (low priority)

**js/index.faq.js**
- Inline style manipulation (low priority)

---

### Asset Files

**img/wines-best-deals/carousel_arrow.svg**
- #632: Snake case filename (rename to carousel-arrow.svg)

---

## AGENTS.md Rules Affected

### Rule: File Naming (Kebab-Case)
- **Violations:** 1
- **Issues:** #632
- **Impact:** Critical

### Rule: CSS Variables
- **Violations:** 19 hardcoded colors
- **Issues:** #631, #636
- **Impact:** High

### Rule: Mobile-First Responsive Design
- **Violations:** 10+ max-width media queries
- **Issues:** #633
- **Impact:** High

### Rule: BEM CSS Methodology
- **Violations:** 50+ class names
- **Issues:** #630
- **Impact:** Medium

### Rule: Minimal JavaScript
- **Violations:** Multiple patterns
- **Issues:** #634, #635, #637, #638
- **Impact:** Medium

### Rule: Event Delegation
- **Violations:** 3 files
- **Issues:** #635, #637
- **Impact:** Medium

---

## Remediation Timeline

### Immediate (This Week)
- Issue #632: Rename image file
- **Effort:** < 1 hour

### Short Term (Next Sprint)
- Issue #631: Consolidate CSS colors
- Issue #633: Mobile-first refactoring
- **Effort:** 8-16 hours

### Medium Term (2-4 Weeks)
- Issue #630: BEM naming standardization
- Issue #635: Event delegation refactoring
- Issue #637: Fix listener removal
- Issue #638: Optimize cart DOM
- Issue #636: Define missing variables
- **Effort:** 20-30 hours

### Long Term (Polish)
- Issue #634: Remove console statements
- Issue #639: Rename/reorganize CSS
- **Effort:** 2-4 hours

---

## Code Review Artifacts

### Documentation
1. **CODE_REVIEW_REPORT_2026-04-19.md** - Comprehensive violation report
2. **CODE_REVIEW_EXECUTION_SUMMARY.md** - Execution summary and remediation plan
3. **CODE_REVIEW_ISSUES_INDEX.md** - This file

### Branch
- **Branch:** cursor/code-review-issues-75de
- **Base:** main
- **Commits:** 2 (report + summary)

---

## How to Use This Index

1. **For Developers:** Find your assignments by searching for your username
2. **For Leads:** Review the timeline to plan sprint work
3. **For QA:** Use the rules section to verify fixes against AGENTS.md
4. **For Tracking:** Use the file section to track changes by component

---

## Statistics

| Metric | Count |
|--------|-------|
| Total Issues | 10 |
| Critical | 1 |
| High | 2 |
| Medium | 5 |
| Low | 2 |
| CSS Files | 10 |
| JS Files | 6 |
| Asset Files | 1 |
| Total Files Affected | 17 |
| Total Violations | 100+ |

---

## Next Actions

1. **Team Review** - Review all issues and remediation plans
2. **Sprint Planning** - Assign issues to sprints
3. **Development** - Create PRs for each issue
4. **Testing** - Verify AGENTS.md compliance
5. **Merge** - Consolidate fixes to main branch
6. **Audit** - Run code review again to verify

---

## References

- AGENTS.md - Project standards and guidelines
- GitHub Issues - Detailed violation documentation
- Branch - cursor/code-review-issues-75de with full documentation

---

*This code review was automated and executed on 2026-04-19 at 15:00 UTC.*

