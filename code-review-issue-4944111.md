# Code Review Issue: Hardcoded Font Families in CSS Variables

**Commit:** `4944111fa43ed54a1e56b657e4dcff4c0ae22f0d`
**Author:** Andrii Oliinyk (@oland1979)
**File:** `css/index.awards.partial.css`
**Severity:** Medium - Violation of AGENTS.md CSS Variables Rule

## Violation Summary

The commit replaces CSS variables with hardcoded font family values, which violates the **CSS Variables** section of AGENTS.md.

### AGENTS.md Requirement (Section: CSS Variables)

> All colors must be declared inside `:root`.
> 
> Usage:
> ```css
> .button {
>   background-color: var(--color-primary);
> }
> ```
> 
> **Avoid hardcoded colors when variables exist.**

While this section primarily refers to colors, the general principle extends to **avoid hardcoding values when variables exist** for consistency and maintainability.

## Changes Made

**Line 89** - `.award-name` class:
```css
/* Before */
font-family: var(--font-family) !important;

/* After */
font-family: 'Rubik', sans-serif !important;
```

**Line 101** - `.award-year` class:
```css
/* Before */
font-family: var(--font-family-secondary) !important;

/* After */
font-family: 'Prata', serif !important;
```

## Issue

1. **Breaks maintainability**: Font family values are now hardcoded instead of using CSS variables defined in `css/global.css`:
   - `--font-family: "Rubik", italic` (defined at line 14 in global.css)
   - `--font-family-secondary: "Prata", normal` (defined at line 16 in global.css)

2. **Inconsistent with project standards**: AGENTS.md emphasizes using CSS variables for all reusable values to maintain consistency across the project.

3. **Future maintenance risk**: If font definitions need to change globally, this hardcoded version will be missed.

## Recommendation

Replace hardcoded font family values with their corresponding CSS variables:

- Line 89: `font-family: var(--font-family) !important;`
- Line 101: `font-family: var(--font-family-secondary) !important;`

## AGENTS.md Rules Violated

- **CSS Variables** (Lines 237-260): "All colors must be declared inside `:root`... Avoid hardcoded colors when variables exist."
- **Core Development Principles** (Line 6): "Semantic file naming" and maintainability emphasis

## References

- AGENTS.md: CSS Variables section (lines 237-260)
- File: css/global.css (lines 13-34) - where variables are defined
- File: css/index.awards.partial.css (lines 1-143) - where the violation occurs
