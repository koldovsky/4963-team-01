# Issue: Missing CSS Files for Partials

**Type:** Architecture Violation  
**Severity:** HIGH  
**AGENTS.md Rule:** "Each section should have **a dedicated partial**"  
**Branch:** cursor/code-review-issues-302c

## Summary

Three HTML partial files have missing corresponding CSS files, violating the AGENTS.md requirement that each partial should have a dedicated CSS file.

## Violations Found

### 1. Missing: `css/index.craft-wines.partial.css`
- **HTML File:** `index.craft-wines.partial.html`
- **Author:** Ivan Butryn
- **Impact:** Craft wines section has no styling defined in a separate CSS file
- **Expected File:** `/workspace/css/index.craft-wines.partial.css`

### 2. Missing: `css/index.history.partial.css`
- **HTML File:** `index.history.partial.html`
- **Author:** Ivan Butryn
- **Impact:** History section has no styling defined in a separate CSS file
- **Expected File:** `/workspace/css/index.history.partial.css`

### 3. Missing: `css/index.wine-categories.partial.css`
- **HTML File:** `index.wine-categories.partial.html`
- **Author:** Olesia Konior
- **Impact:** Wine categories section has no styling defined in a separate CSS file
- **Expected File:** `/workspace/css/index.wine-categories.partial.css`

### 4. Empty CSS File
- **CSS File:** `css/global.footer.partial.css`
- **Author:** Britan Vitalii
- **Impact:** Footer CSS file exists but is completely empty
- **Expected:** Should contain all footer styling

## AGENTS.md Reference

From AGENTS.md - HTMX Partial Rules:

> "Each page section should be implemented as a **separate partial**.
>
> Naming format:
> ```
> [page].[component].partial.html
> ```"

And from CSS Architecture section:

> "Each component should have a **unique namespace**."

## Required Actions

- [ ] Create `css/index.craft-wines.partial.css` and move/extract styles from any inline styles in the HTML
- [ ] Create `css/index.history.partial.css` and move/extract styles from any inline styles in the HTML  
- [ ] Create `css/index.wine-categories.partial.css` and move/extract styles from any inline styles in the HTML
- [ ] Populate `css/global.footer.partial.css` with footer styling following BEM methodology

## Files to Update

- `/workspace/index.craft-wines.partial.html`
- `/workspace/index.history.partial.html`
- `/workspace/index.wine-categories.partial.html`
- `/workspace/css/global.footer.partial.css`

---

**Assigned to:** Ivan Butryn, Olesia Konior, Britan Vitalii  
**Priority:** HIGH  
**Created:** 2026-03-15
