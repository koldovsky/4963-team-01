# Issue #61: File Naming Convention Violation - Snake_case Instead of Kebab-case

**Type:** Code Standard Violation  
**Severity:** MEDIUM  
**Status:** Open  
**Assigned To:** BrytanVitalii (brytanvitalii08@gmail.com)

## Summary

Image file `carousel_arrow.svg` uses snake_case naming convention instead of kebab-case as required by AGENTS.md.

## Rule Violated

From AGENTS.md:
> "All files must use **kebab-case**."
> 
> "Correct:
> - about-us.html
> - index.products-list.partial.html
> - global.header-nav.partial.html
> 
> Do not use: camelCase, PascalCase, snake_case"

## Affected File

- `img/wines-best-deals/carousel_arrow.svg` ❌ (snake_case)

Should be renamed to:
- `img/wines-best-deals/carousel-arrow.svg` ✓ (kebab-case)

## Author

- BrytanVitalii (bryant_vitalii08@gmail.com)
- Commit: ed15bd8d32923e39444c0c3ecd2777b1beba0c58
- "Added button utility-classes to 'components.css', changed best-deals partial to Mobile-First, setup :root font as --font-family"

## Required Fix

1. Rename file from `carousel_arrow.svg` to `carousel-arrow.svg`
2. Update any references in HTML/CSS to use the new filename
3. Add to `.gitignore` if needed to prevent future snake_case files

## Files to Update

- Search for `carousel_arrow` in:
  - HTML files
  - CSS files
  - JavaScript files

Current status: The file appears to be newly added and may not have references yet if it's only in the file list.

## Notes

This is a simple rename operation. Ensure all links/references are updated consistently across the codebase.
