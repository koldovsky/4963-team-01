# Issue: Desktop-First Media Queries Instead of Mobile-First

**Type:** Responsive Design Violation  
**Severity:** MEDIUM  
**AGENTS.md Rule:** "Use **mobile-first CSS**"  
**Branch:** cursor/code-review-issues-302c

## Summary

Four CSS files use desktop-first media queries with `@media (max-width: ...)` instead of the required mobile-first approach with `@media (min-width: ...)`, violating AGENTS.md responsive design guidelines.

## Violations Found

### 1. Hero Section - Desktop-First Media Query
- **File:** `css/index.hero.partial.css` (Line 75)
- **Author:** airdray
- **Current Code:**
  ```css
  @media (max-width: 767px) { ... }
  ```
- **Issue:** Uses `max-width` (desktop-first approach)
- **Fix:** Convert to `@media (min-width: 768px) { ... }` (mobile-first approach)

### 2. Header Navigation - Desktop-First Media Query
- **File:** `css/global.header-nav.partial.css` (Line 65)
- **Author:** airdray
- **Current Code:**
  ```css
  @media (max-width: 767px) { ... }
  ```
- **Issue:** Uses `max-width` (desktop-first approach)
- **Fix:** Convert to `@media (min-width: 768px) { ... }` (mobile-first approach)

### 3. About Section - Desktop-First Media Query
- **File:** `css/index.about.partial.css` (Line 80)
- **Author:** vladbondrevo
- **Current Code:**
  ```css
  @media (max-width: 767px) { ... }
  ```
- **Issue:** Uses `max-width` (desktop-first approach)
- **Fix:** Convert to `@media (min-width: 768px) { ... }` (mobile-first approach)

### 4. Varieties Section - Desktop-First Media Query
- **File:** `css/index.varieties.partial.css` (Line 31)
- **Author:** TBD
- **Current Code:**
  ```css
  @media (max-width: 320px) { ... }
  ```
- **Issue:** Uses `max-width` (desktop-first approach)
- **Fix:** Convert to `@media (min-width: 321px) { ... }` (mobile-first approach)

## AGENTS.md Reference

From AGENTS.md - Responsive Design section:

> "Use **mobile-first CSS**.
>
> Example:
> ```css
> .products {
>  padding: 20px;
> }
>
> @media (min-width: 768px) {
>  .products {
>    padding: 40px;
>  }
> }
> ```
>
> Avoid desktop-first media queries."

## Mobile-First Approach Explanation

**Mobile-First (CORRECT):**
1. Define base styles for mobile devices
2. Use `@media (min-width: ...)` to add/override styles for larger screens
3. Mobile users get only necessary code
4. Better performance on mobile devices

**Desktop-First (INCORRECT):**
1. Define styles for desktop first
2. Use `@media (max-width: ...)` to override for smaller screens
3. Mobile devices receive unnecessary code
4. Less efficient for mobile users

## Required Actions

- [ ] Convert all `@media (max-width: 767px)` queries to `@media (min-width: 768px)`
- [ ] Convert all `@media (max-width: 320px)` queries to `@media (min-width: 321px)`
- [ ] Ensure all CSS files follow mobile-first approach consistently
- [ ] Review media query breakpoints to ensure consistency across the project

## Files to Update

- `/workspace/css/index.hero.partial.css`
- `/workspace/css/global.header-nav.partial.css`
- `/workspace/css/index.about.partial.css`
- `/workspace/css/index.varieties.partial.css`

---

**Assigned to:** airdray, vladbondrevo  
**Priority:** MEDIUM  
**Created:** 2026-03-15
