# Issue: Hardcoded Colors Not Using CSS Variables

**Type:** CSS Standards Violation  
**Severity:** MEDIUM  
**AGENTS.md Rule:** "All colors must be declared inside `:root`"  
**Branch:** cursor/code-review-issues-302c

## Summary

Multiple CSS files contain hardcoded colors that are not referencing CSS variables from `:root`, violating the AGENTS.md requirement for color standardization and maintainability.

## Violations Found

### 1. Hardcoded color in FAQ Questions
- **File:** `css/index.questions-and-answers.partial.css` (Line 40)
- **Author:** TBD
- **Code:** 
  ```css
  .faq__question { border-bottom: 1px solid #444; }
  ```
- **Issue:** Uses hardcoded hex color `#444` instead of CSS variable
- **Fix:** Use CSS variable like `var(--color-dark-gray)` or similar

### 2. Hardcoded RGB colors in About Cards (3 occurrences)
- **File:** `css/index.about.partial.css` (Lines 21, 25, 29)
- **Author:** vladbondrevo
- **Code:** 
  ```css
  .event-card { background: url(...) 51.81% 95.23% / cover no-repeat, rgb(38, 30, 28); }
  .addictives-card { background: url(...) 51.81% 95.23% / cover no-repeat, rgb(38, 30, 28); }
  .grape-card { background: url(...) 51.81% 95.23% / cover no-repeat, rgb(38, 30, 28); }
  ```
- **Issue:** Uses hardcoded RGB color `rgb(38, 30, 28)` in three places
- **Fix:** Define `--color-dark` in `:root` and use `var(--color-dark)`

### 3. Hardcoded Stroke Colors in Footer SVGs (4 occurrences)
- **File:** `global.footer.partial.html` (Lines 21, 41, 60, 79)
- **Author:** Britan Vitalii
- **Code:** 
  ```html
  <svg width="32" stroke="orange" viewBox="0 0 32 32">
  ```
- **Issue:** Inline `stroke="orange"` attribute instead of CSS variable
- **Fix:** Define color in `:root` and apply via CSS or data attributes

## AGENTS.md Reference

From AGENTS.md - CSS Variables section:

> "All colors must be declared inside `:root`.
>
> Example:
> ```css
> :root {
>  --color-primary: #7b1e3b;
>  --color-dark: #1a1a1a;
>  --color-light: #ffffff;
>  --color-gray: #f5f5f5;
> }
> ```
>
> Usage:
> ```css
> .button {
>  background-color: var(--color-primary);
> }
> ```
>
> Avoid hardcoded colors when variables exist."

## Current Color Variables

Check `css/global.css` for existing color variables and add missing ones.

## Required Actions

- [ ] Review `css/global.css` and ensure all colors are defined as CSS variables in `:root`
- [ ] Replace `#444` in `.faq__question` with appropriate CSS variable
- [ ] Replace `rgb(38, 30, 28)` in about cards with appropriate CSS variable from `:root`
- [ ] Add CSS class for footer SVG icons to apply color via CSS variable instead of inline attribute

## Files to Update

- `/workspace/css/index.questions-and-answers.partial.css`
- `/workspace/css/index.about.partial.css`
- `/workspace/css/global.footer.partial.css`
- `/workspace/global.footer.partial.html`
- `/workspace/css/global.css` (ensure variables are defined)

---

**Assigned to:** vladbondrevo, Britan Vitalii  
**Priority:** MEDIUM  
**Created:** 2026-03-15
