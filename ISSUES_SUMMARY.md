# Code Review Issues Summary

**Review Date:** March 30, 2026  
**Reviewed Commit:** 0ef64a8 - "fix class names in faq"  
**Author:** but-d (dimacpoint@gmail.com)

---

## Issue Assignments

### Issue #1: BEM CSS Naming Violation - Double Underscore Nesting
- **Author:** but-d
- **Severity:** 🔴 High
- **Component:** FAQ Section CSS & HTML
- **Files Affected:**
  - css/index.faq.partial.css (Line 90)
  - index.faq.partial.html (Lines 18, 29, 40, 51, 62)
  - js/index.faq.js (Lines 5, 7, 11, 13)

**Description:**  
The class name `.faq__question__answer` violates BEM methodology by using double underscores for element nesting, which is not allowed in BEM. The correct pattern should be `.faq__answer` as per AGENTS.md standards.

**Expected Changes:**
- Replace `.faq__question__answer` with `.faq__answer` in all files
- Update JavaScript selectors accordingly
- Update CSS class definition

**Complexity:** Low (find-and-replace operation)

---

### Issue #2: Code Formatting - Whitespace Error in JavaScript
- **Author:** but-d
- **Severity:** 🟡 Low
- **Component:** FAQ JavaScript functionality
- **File Affected:**
  - js/index.faq.js (Line 12)

**Description:**  
Extra whitespace before `nextElementSibling` property accessor violates code formatting standards outlined in AGENTS.md.

**Current:** `faqItemHeader. nextElementSibling`  
**Expected:** `faqItemHeader.nextElementSibling`

**Complexity:** Trivial (single character fix)

---

## Architecture Compliance Check

✅ Project follows HTMX partial architecture  
✅ Semantic HTML structure is maintained  
✅ Mobile-first responsive design observed  
❌ BEM CSS naming methodology - **VIOLATIONS FOUND**  
✅ Minimal JavaScript approach maintained  
✅ Kebab-case file naming followed  
✅ Images placed in correct directories  

---

## Detailed Findings

### BEM Violation Details

**AGENTS.md Requirements:**
```
CSS must follow BEM methodology.

Pattern:
.block
.block__element
.block__element--modifier
```

**Current Implementation Issue:**
```
.faq__question__answer  ❌ (double underscore)
Should be:
.faq__answer            ✓ (single element)
```

### Commit History Context

This commit was part of a series of FAQ refactoring attempts:
1. Commit 95aaf23: `.faq__question--body-answer` (incorrect modifier usage)
2. Commit 1ae8098: `.faq__answer` (correct - single element)
3. Commit 0ef64a8: `.faq__question__answer` (regressed - double underscore)

This suggests the developer should re-read BEM methodology guidelines.

---

## Recommended Actions

1. **Fix BEM Violation** (Priority: High)
   - [ ] Review AGENTS.md BEM section
   - [ ] Replace `.faq__question__answer` with `.faq__answer`
   - [ ] Update HTML class attributes (5 instances)
   - [ ] Update CSS class selector (1 instance)
   - [ ] Update JavaScript (no changes needed, as it doesn't use this class)
   - [ ] Test accordion functionality

2. **Fix Whitespace** (Priority: Low)
   - [ ] Remove space before `.nextElementSibling`
   - [ ] Run formatter/linter if available

3. **Knowledge Base** (Priority: Medium)
   - [ ] Share BEM reference materials with developer
   - [ ] Consider adding pre-commit linting for CSS class names

---

## Files for Review

- [CODE_REVIEW_0ef64a8.md](./CODE_REVIEW_0ef64a8.md) - Detailed technical review

---

## Contact

**To:** but-d (dimacpoint@gmail.com)  
**Subject:** Code Review Issues - FAQ Section Refactoring (Commit 0ef64a8)

Please address the identified issues, particularly the BEM CSS violations, before this code can be merged into main.
