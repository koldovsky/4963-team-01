# Issue: Non-Semantic HTML Structure

**Type:** Semantic HTML Violation  
**Severity:** LOW  
**AGENTS.md Rule:** "semantic HTML structure"  
**Branch:** cursor/code-review-issues-302c

## Summary

Three HTML partial files use generic `<div>` elements instead of semantic `<section>` elements for major content sections, reducing HTML semantic meaning and accessibility.

## Violations Found

### 1. Craft Wines Section - Uses <div> Instead of <section>
- **File:** `index.craft-wines.partial.html` (Line 1)
- **Author:** Ivan Butryn
- **Current Code:**
  ```html
  <div class="craft-wines">
  ```
- **Issue:** Generic `<div>` used for a major section
- **Fix:** Change to `<section class="craft-wines">`

### 2. History Section - Uses <div> Instead of <section>
- **File:** `index.history.partial.html` (Line 1)
- **Author:** Ivan Butryn
- **Current Code:**
  ```html
  <div class="history">
  ```
- **Issue:** Generic `<div>` used for a major section
- **Fix:** Change to `<section class="history">`

### 3. History Timeline Section - Uses <div> Instead of <section>
- **File:** `index.history-timeline.partial.html` (Line 1)
- **Author:** TBD
- **Current Code:**
  ```html
  <div class="history-timeline">
  ```
- **Issue:** Generic `<div>` used for a major section
- **Fix:** Change to `<section class="history-timeline">`

## AGENTS.md Reference

From AGENTS.md - Core Development Principles:

> "1. Semantic HTML structure"

And from the project overview, the architecture uses semantic HTML with HTMX partials for composing pages.

## Semantic HTML Explanation

**Semantic Elements Provide:**
1. **Better Accessibility:** Screen readers understand page structure
2. **Better SEO:** Search engines can identify page sections
3. **Improved Maintainability:** Developers understand content purpose
4. **Better HTML Document Outline:** Proper heading hierarchy

**When to Use `<section>`:**
- Major thematic grouping of content
- Content that has a natural heading
- Part of the main content area of the page

**When to Use `<div>`:**
- For styling purposes only
- When no semantic meaning applies
- For layout containers

## Current Project Pattern

Looking at other partials in the project, they correctly use `<section>`:
- Most other index partials use `<section>` as the root element
- This creates consistency across the codebase

## Required Actions

- [ ] Change `<div class="craft-wines">` to `<section class="craft-wines">` in `index.craft-wines.partial.html`
- [ ] Change `<div class="history">` to `<section class="history">` in `index.history.partial.html`
- [ ] Change `<div class="history-timeline">` to `<section class="history-timeline">` in `index.history-timeline.partial.html`
- [ ] Review other HTML files for consistency

## Files to Update

- `/workspace/index.craft-wines.partial.html`
- `/workspace/index.history.partial.html`
- `/workspace/index.history-timeline.partial.html`

---

**Assigned to:** Ivan Butryn  
**Priority:** LOW  
**Created:** 2026-03-15
