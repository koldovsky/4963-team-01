# Code Review: Update index.awards.partial.css (Commit 39ba9aa)

**Commit SHA:** 39ba9aa827bb1f1d2d2e55b32274bc53a921746c  
**Author:** Andrii Oliinyk (@oland1979)  
**Date:** Sat Mar 21 20:34:07 2026 +0200  
**File Changed:** `css/index.awards.partial.css`

---

## Review Summary

This commit makes CSS layout changes to the `.award-col-2`, `.award-name`, and `.award-year` classes. The changes improve the responsive layout structure but introduce **two violations** of the project standards defined in AGENTS.md.

---

## Issues Found

### 🔴 CRITICAL ISSUE 1: Desktop-First Media Query Pattern Violation

**Location:** Lines 124-141 (media query)  
**Severity:** High  
**Standard:** AGENTS.md - "Responsive Design" section

**Problem:**
The media query at line 124 uses a **desktop-first** approach:
```css
@media (max-width: 991px) { ... }
```

According to AGENTS.md, the project **must use mobile-first CSS**:
> "Use **mobile-first CSS**."
> 
> "Avoid desktop-first media queries."

**Current Pattern (Incorrect):**
- Base styles apply to desktop
- `@media (max-width: ...)` overrides for smaller screens

**Required Pattern (Mobile-first):**
- Base styles apply to mobile (smallest screen)
- `@media (min-width: ...)` adds styles for larger screens

**Recommendation:**
Refactor the media query to use `min-width` breakpoints:
```css
/* Mobile-first base styles */
.award-item {
  flex-direction: column;
  text-align: center;
  gap: 20px;
}

.award-col-2 {
  flex: 1;
  width: 100%;
  justify-content: center;
  gap: 15px;
}

/* Tablet and larger */
@media (min-width: 992px) {
  .award-item {
    flex-direction: row;
    text-align: left;
    gap: 40px;
  }

  .award-col-2 {
    flex: 0 0 400px;
    justify-content: flex-start;
  }
}
```

---

### 🟡 MODERATE ISSUE 2: Hardcoded Values Instead of CSS Variables

**Location:** Lines 79, 83, 98-99  
**Severity:** Medium  
**Standard:** AGENTS.md - "CSS Variables" section

**Problem:**
The changes introduce hardcoded pixel values that should be CSS variables:

```css
/* Line 79 */
.award-col-2 {
  flex: 0 0 400px;  /* ❌ Hardcoded value */
}

/* Line 83 */
.award-col-2 {
  gap: 20px;  /* ❌ Hardcoded value */
}

/* Line 98 */
.award-year {
  flex: 0 0 80px;  /* ❌ Hardcoded value */
}
```

According to AGENTS.md CSS Variables section:
> "All colors must be declared inside `:root`."
> "Avoid hardcoded colors when variables exist."

While this guidance mentions colors specifically, the principle should extend to design tokens like spacing and sizing values for consistency and maintainability.

**Recommendation:**
Define design tokens in `:root` and use them:
```css
:root {
  --spacing-small: 20px;
  --spacing-medium: 40px;
  --width-award-col-2: 400px;
  --width-award-year: 80px;
}

.award-col-2 {
  flex: 0 0 var(--width-award-col-2);
  gap: var(--spacing-small);
}

.award-year {
  flex: 0 0 var(--width-award-year);
}
```

---

## Changes Analysis

### What Changed (Lines changed):

**Before:**
```css
.award-col-2 {
  flex: 0 0 auto;           /* flexible width */
  min-width: 320px;         /* minimum width constraint */
}

.award-name {
  flex: none;               /* no flex */
}

.award-year {
  margin-left: 0;           /* margin reset */
}
```

**After:**
```css
.award-col-2 {
  flex: 0 0 400px;          /* fixed 400px width */
  /* min-width removed */
}

.award-name {
  flex: 1;                  /* flex-grow: 1 */
  /* flex: none removed */
}

.award-year {
  flex: 0 0 80px;           /* fixed 80px width */
  text-align: left;         /* new property */
  /* margin-left removed */
}
```

### Functional Impact:

✅ **Positive:** The changes create a more predictable flex layout:
- `.award-col-2` now has a fixed width (400px)
- `.award-name` can grow within available space
- `.award-year` has fixed width (80px) and left alignment

⚠️ **Risk:** No verification that this matches the intended visual design across all breakpoints.

---

## Recommendation Summary

| Issue | Priority | Action | Effort |
|-------|----------|--------|--------|
| Media query not mobile-first | HIGH | Refactor to use `@media (min-width: ...)` | 1-2 files |
| Hardcoded values | MEDIUM | Add CSS variables for design tokens | Minor |

---

## Testing Checklist

- [ ] Verify layout on mobile (< 768px)
- [ ] Verify layout on tablet (768px - 991px)
- [ ] Verify layout on desktop (≥ 992px)
- [ ] Verify responsive behavior matches design intent
- [ ] Verify no visual regressions

---

## Conclusion

The commit improves the flex layout structure but needs corrections to align with project standards:

1. **Convert to mobile-first responsive design** (REQUIRED)
2. **Extract hardcoded values to CSS variables** (RECOMMENDED)

These changes maintain the spirit of the layout improvements while ensuring compliance with AGENTS.md standards.
