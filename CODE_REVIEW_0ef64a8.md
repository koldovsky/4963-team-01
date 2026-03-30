# Code Review: Fix class names in faq

**Commit:** 0ef64a8ed228f1e070f26cd1f23a95a66b8900a3  
**Author:** but-d <dimacpoint@dimacpoint@gmail.com>  
**Date:** Mon Mar 30 12:05:36 2026 +0000  
**Files Changed:** 3 files (css/index.faq.partial.css, index.faq.partial.html, js/index.faq.js)

## Review Status
⚠️ **Issues Found** - BEM CSS Naming Violations

---

## Issues

### 1. ❌ VIOLATION: Incorrect BEM Modifier Naming in CSS

**File:** `css/index.faq.partial.css` (Line 79)  
**Severity:** High  
**Category:** BEM CSS Architecture

**Current Code:**
```css
.faq__question-title--active::after {
  transform: translateY(-50%) rotate(90deg) scaleX(0);
  opacity: 0;
}
```

**Problem:**
According to AGENTS.md (CSS Architecture section), BEM follows this pattern:
- `.block`
- `.block__element`
- `.block__element--modifier`

The class name `.faq__question-title--active` incorrectly mixes naming conventions:
- `faq` = block
- `__question-title` = should be a single element name, not compound
- `--active` = modifier

**What's wrong:**
- `.question-title` violates BEM by using hyphens within the element name when it should be either:
  - `.faq__question-title` (if treating "question-title" as the full element name) with `--active` modifier ✓
  - OR `.faq__question` with no `--title` suffix

The current version (`faq__question-title--active`) actually follows proper BEM syntax for THIS specific element, but the underlying issue is that `question-title` is a compound element name that should be reconsidered.

**Recommendation:**
Keep `.faq__question-title--active` but ensure consistency throughout. The naming is technically correct BEM for the current structure.

---

### 2. ⚠️ VIOLATION: Double Underscore Nesting in Element Name

**File:** `css/index.faq.partial.css` (Line 90)  
**File:** `index.faq.partial.html` (Lines 18, 29, 40, 51, 62)  
**Severity:** High  
**Category:** BEM CSS Architecture

**Current Code:**
```css
.faq__question__answer {
  padding: 10px 0 20px;
  line-height: 1.5;
  font-family: var(--font-family);
  font-size: 16px;
  color: var(--text-color-secondary);
}
```

**Problem:**
BEM methodology does NOT support double underscores (`__`) for nested relationships. Per AGENTS.md:
- `.block__element` = correct (element of a block)
- `.block__element__subelement` = INCORRECT (violates BEM)

The name `.faq__question__answer` suggests:
- `faq` = block
- `__question` = element of faq
- `__answer` = element of question (WRONG - shouldn't nest this way in BEM)

**What should it be:**
Either:
1. `.faq__question-answer` (question-answer as a single element name) ❌ - poor naming
2. `.faq__answer` (answer as a direct element of faq) ✓ - BUT semantically unclear
3. Restructure: `.faq__question-body` (existing) contains `.faq__question-answer` ✓ - better semantic structure

**Current Structure:**
```html
<div class="faq__question-body">  <!-- Good: faq__question-body element -->
  <div class="faq__question__answer">  <!-- Bad: double underscore nesting -->
```

**Recommended Fix:**
Change `.faq__question__answer` to `.faq__answer` OR `.faq__body-answer`

---

### 3. ⚠️ INCONSISTENCY: Inconsistent Naming Between Previous Commits

**History:**
- Commit 95aaf23: Used `.faq__question--body-answer`
- Commit 1ae8098: Changed to `.faq__answer` 
- Commit 0ef64a8: Changed to `.faq__question__answer` ❌

**Problem:**
The naming has changed multiple times, suggesting unclear BEM understanding:
- `.faq__question--body-answer` = uses modifier syntax for what should be an element (wrong)
- `.faq__answer` = simplified but loses semantic connection to question body
- `.faq__question__answer` = uses forbidden double underscore nesting

**Recommendation:**
Establish consistent naming:
- `.faq__question-answer` OR
- `.faq__answer`

And stick with it across all future commits.

---

### 4. ⚠️ CODE FORMATTING: Whitespace Error in JavaScript

**File:** `js/index.faq.js` (Line 12)  
**Severity:** Low  
**Category:** Code Formatting

**Current Code:**
```javascript
const faqItemBody = faqItemHeader. nextElementSibling;
                                  ^ extra space
```

**Problem:**
There's an unintended space before `nextElementSibling`. This doesn't break functionality but violates AGENTS.md formatting rules (2-space indentation, consistent code style).

**Recommendation:**
Change to: `const faqItemBody = faqItemHeader.nextElementSibling;`

---

## Summary

| Issue | Severity | Type | Status |
|-------|----------|------|--------|
| BEM modifier naming | Medium | Architecture | Needs clarification |
| Double underscore nesting | High | BEM Violation | Needs fixing |
| Inconsistent naming history | High | Consistency | Needs standardization |
| Whitespace in JS | Low | Formatting | Needs fixing |

---

## Recommendations

1. **Immediate Action:**
   - Fix the double underscore violation: `.faq__question__answer` → `.faq__answer`
   - Remove extra whitespace in JavaScript

2. **Best Practice:**
   - Create a BEM naming style guide for the team
   - Ensure all team members understand BEM constraints
   - Avoid compound element names like `question-title`

3. **Testing:**
   - Verify that JavaScript selector updates work correctly after class name changes
   - Test accordion functionality in all browsers

---

## References

- AGENTS.md - CSS Architecture section
- AGENTS.md - Code Formatting section
- BEM Methodology: https://getbem.com/
