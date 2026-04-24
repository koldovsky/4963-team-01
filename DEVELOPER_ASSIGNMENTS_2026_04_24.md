# Code Review Issues - Developer Assignment
## 2026-04-24 Daily Review Cycle

---

## Assignment Matrix

### Critical Issues - Start Immediately

#### Issue #654: Replace max-width media queries
**Severity**: CRITICAL  
**Assigned To**: airdray (primary) + team  
**Files**: 4 CSS files, 8 violations  
**Effort**: 2-3 hours  
**Priority**: 🔴 HIGHEST

**Assigned Files**:
- `css/index.about.partial.css` - airdray
- `css/global.header-nav.partial.css` - airdray
- `css/index.hero.partial.css` - airdray
- `css/index.varieties.partial.css` - airdray

**Action**: Replace `@media (max-width: ...)` with `@media (min-width: ...)` throughout these files

---

#### Issue #655: Move hardcoded colors to CSS variables
**Severity**: CRITICAL  
**Assigned To**: Multiple developers  
**Files**: 11 CSS files, 20+ violations  
**Effort**: 3-4 hours  
**Priority**: 🔴 HIGHEST

**Developer Assignments**:
1. **airdray**: 
   - `css/global.header-nav.partial.css` (1 violation)
   - `css/index.about.partial.css` (3 violations)

2. **vladbondrevo**:
   - `css/global.shopping-cart.partial.css` (5 violations)
   - `css/index.newsletter.partial.css` (4 violations)

3. **BrytanVitalii**:
   - `css/index.best-deals.partial.css` (2 violations)
   - `css/components.css` (1 violation)

4. **Dmytro Novykov**:
   - `css/index.newsletter.partial.css` (review newsletter colors)

5. **Team**:
   - `css/index.wine-categories.partial.css` (4 violations)
   - `css/index.awards.partial.css` (1 violation)
   - `css/global.cart-popup.partial.css` (2 violations)
   - `css/global.css` (1 violation)
   - `css/global.footer.partial.css` (4 violations)

**Action**: Add all colors to `:root` variables in `css/global.css`, replace hardcoded values with `var()` references

---

### Medium Priority - This Week

#### Issue #656: Refactor BEM naming - awards section
**Severity**: MEDIUM  
**Assigned To**: oland1979 (awards author) + Andrii Oliinyk  
**Files**: Awards HTML/CSS  
**Effort**: 2 hours  
**Priority**: 🟠 HIGH

**Responsibilities**:
- **oland1979**: Lead refactoring of `css/index.awards.partial.css` to strict BEM pattern
- **Andrii Oliinyk**: Refactor HTML structure in `index.awards.partial.html`, update class names

**Additional**: Remove generic `.button` and `.container` utility classes

**Action**: Rename all awards classes from `.awards-header`, `.award-item` to `awards__header`, `awards__item` pattern

---

#### Issue #657: Make FAQ accordion accessible
**Severity**: MEDIUM  
**Assigned To**: Novykov Dmytro  
**Files**: `index.faq.partial.html`, `js/index.faq.js`  
**Effort**: 1 hour  
**Priority**: 🟠 HIGH

**Action**: Replace FAQ question divs with proper `<button>` elements, ensure keyboard accessibility

---

#### Issue #658: Refactor JavaScript to use event delegation
**Severity**: MEDIUM  
**Assigned To**: BrytanVitalii  
**Files**: `js/index.header-nav.js`, `js/index.craft-wines.js`  
**Effort**: 1.5 hours  
**Priority**: 🟠 HIGH

**Action**: Refactor per-element listeners to delegated listeners on parent containers

---

### Low Priority - Next 2 Weeks

#### Issue #659: Clean up SVG class names
**Severity**: LOW  
**Assigned To**: Brytan Vitalii  
**Files**: `global.cart-popup.partial.html`  
**Effort**: 30 minutes  

---

#### Issue #660: Improve alt text
**Severity**: LOW  
**Assigned To**: Bilous Andrii  
**Files**: 
- `global.header-nav.partial.html` - header logo
- `index.awards.partial.html` - awards divider
- `index.loader.partial.html` - loader animation  
**Effort**: 30 minutes

---

#### Issue #661: Fix varieties BEM naming
**Severity**: LOW  
**Assigned To**: Andrii Oliinyk  
**Files**: `index.varieties.partial.html`  
**Effort**: 30 minutes

---

#### Issue #662: Organize partials folder
**Severity**: LOW  
**Assigned To**: Volodymyr Andriichak  
**Files**: All 20+ partials  
**Effort**: 1 hour

**Action**: Create `partials/` directory, move all `.partial.html` files, update HTMX paths

---

#### Issue #663: Remove js-tasks folder
**Severity**: LOW  
**Assigned To**: Volodymyr Andriichak  
**Files**: `js-tasks/`  
**Effort**: 15 minutes

**Action**: Remove `js-tasks/` folder or document purpose

---

## Developer Workload Summary

| Developer | Issues | Files | Hours | Priority |
|-----------|--------|-------|-------|----------|
| airdray | #654, #655 | 4 CSS | 4-5 | 🔴 CRITICAL |
| vladbondrevo | #655 | 2 CSS | 2 | 🔴 CRITICAL |
| BrytanVitalii | #655, #658, #659 | 3 CSS, 2 JS | 2.5 | 🔴🟠 |
| oland1979 | #656 | Awards CSS | 1.5 | 🟠 HIGH |
| Andrii Oliinyk | #656, #660, #661 | Awards HTML, images, varieties | 1.5 | 🟠🟡 |
| Dmytro Novykov | #655, #657 | Newsletter CSS, FAQ HTML/JS | 1.5 | 🟠🟠 |
| Volodymyr Andriichak | #662, #663 | Partials, js-tasks | 1 | 🟡 |

**Total Workload**: 13.5-15 hours across 7 developers

---

## Remediation Checklist

### Phase 1: Critical (Complete by EOD 2026-04-25)

- [ ] #654 - Media queries converted to mobile-first
- [ ] #655 - All colors moved to CSS variables

**Quality Gate**: Run code review again to verify

### Phase 2: Medium (Complete by EOD 2026-04-26)

- [ ] #656 - Awards section refactored to BEM
- [ ] #657 - FAQ accessibility improved
- [ ] #658 - Event delegation implemented

**Quality Gate**: Run code review again to verify

### Phase 3: Low (Complete by 2026-04-30)

- [ ] #659 - SVG classes cleaned up
- [ ] #660 - Alt text improved
- [ ] #661 - Varieties BEM fixed
- [ ] #662 - Partials organized
- [ ] #663 - js-tasks removed

**Quality Gate**: Final compliance review

---

## Issue Resolution Guidelines

### Before Starting Work
1. Read the GitHub issue carefully
2. Review AGENTS.md rule referenced
3. Check the "before/after" code examples
4. Ask in comments if unclear

### While Working
1. Create a new local branch: `git checkout -b fix/issue-XXX`
2. Make changes following guidelines
3. Test thoroughly (media queries, CSS rendering, etc.)
4. Check browser DevTools for console errors

### Before Submitting PR
1. Verify all file changes are intentional
2. Run through the specific checklist in each issue
3. Add comments referencing AGENTS.md
4. Request code review before merge

### After PR Review
1. Address feedback promptly
2. Re-test after changes
3. Merge when approved
4. Close the GitHub issue

---

## Communication Protocol

### For Issue Clarification
- Comment on the GitHub issue
- Reference specific files/lines
- Ask for examples if needed

### For Blocked Progress
- Post in team channel
- Mention @lead-developer
- Link to related issue

### For PR Submission
- Title: "Fix #XXX - Issue description"
- Description: Reference issue and AGENTS.md rule
- Checklist: Include verification steps

---

## Success Criteria

Each issue is resolved when:

✅ All violations in that issue are fixed  
✅ Code follows AGENTS.md standard  
✅ No new violations introduced  
✅ Code review passes on re-check  
✅ Tests pass (if applicable)  
✅ PR is merged to main

---

## Timeline Summary

```
2026-04-24 [TODAY]
│
├─ 15:02 - Code review completed ✓
├─ 15:15 - 10 GitHub issues created (#654-#663) ✓
├─ 15:30 - Developers notified via GitHub
│
2026-04-25 [TOMORROW]
│
├─ Start: Critical issues (#654, #655)
├─ End: Should be fixed and merged
│
2026-04-26 [NEXT DAY]
│
├─ Start: Medium issues (#656-#658)
├─ End: Should be in review
│
2026-04-27-28
│
├─ Complete: Low priority issues
│
2026-04-29-30
│
├─ Final review and verification
├─ Generate compliance report
```

---

## Resources

**AGENTS.md**: Project coding standards  
**GitHub Issues**: #654-#663 with detailed guidance  
**Code Examples**: Provided in each issue  
**Slack**: #development channel for questions

---

## Success Metrics

After all issues resolved:

- **Compliance Score**: 95+/100 (from current 66/100)
- **Open Issues**: 0 from this review cycle
- **Code Quality**: All AGENTS.md rules followed
- **Next Review**: Baseline for future reviews

---

**Prepared**: 2026-04-24 15:02 UTC  
**For Team**: Development team at koldovsky/4963-team-01  
**Next Update**: 2026-04-25 15:00 UTC
