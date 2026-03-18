# Issue #60: SCSS Nesting Syntax - Violates AGENTS.md (Plain CSS Requirement)

**Type:** Code Standard Violation  
**Severity:** HIGH  
**Status:** Open

## Summary

The codebase extensively uses SCSS nesting syntax in CSS files, which violates the AGENTS.md requirement for plain vanilla CSS without frameworks or preprocessing.

## Rule Violated

From AGENTS.md:
> "This project is a **static frontend website** built with: HTML, CSS, Vanilla JavaScript, HTMX."
> "Do **not introduce frameworks** unless explicitly requested."

SCSS is a CSS preprocessor/framework that requires compilation. Plain CSS files should be used instead.

## Affected Files (14 total)

1. css/age-modal.partial.css
2. css/components.css
3. css/global.footer.partial.css
4. css/global.header-nav.partial.css
5. css/index.about.partial.css
6. css/index.best-deals.partial.css
7. css/index.craft-wines.partial.css
8. css/index.faq.partial.css
9. css/index.hero.partial.css
10. css/index.history.partial.css
11. css/index.history-timeline.partial.css
12. css/index.newsletter.partial.css
13. css/index.varieties.partial.css
14. css/underage-main-content.css

## Example Issue

In `css/index.best-deals.partial.css` (lines 2-15):

```css
.best-deals {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 24px;

  .best-deals__title {  /* ❌ SCSS nesting - invalid in plain CSS */
    font-family: var(--font-family-title);
    font-weight: var(--font-weight);
    color: var(--accent-color);
    font-size: 14px;
  }
  
  .best-deals__subtitle {  /* ❌ SCSS nesting */
    /* ... */
  }
}
```

## Required Fix

Convert all SCSS nesting to plain CSS BEM selectors:

```css
.best-deals {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 24px;
}

.best-deals__title {
  font-family: var(--font-family-title);
  font-weight: var(--font-weight);
  color: var(--accent-color);
  font-size: 14px;
}

.best-deals__subtitle {
  /* ... */
}
```

## Primary Contributors

- BrytanVitalii (css/index.best-deals.partial.css, css/components.css)
- Volodymyr Andriichak (css/global.footer.partial.css, css/index.newsletter.partial.css)
- but-d (css/age-modal.partial.css)
- Other contributors

## Solution

1. Remove SCSS nesting from all CSS files
2. Flatten to BEM selectors (already following BEM naming convention)
3. All files remain in `css/` directory
4. No build process needed - plain CSS only
5. Add CSS linter to prevent future SCSS syntax

## Notes

This is a widespread violation affecting the entire CSS codebase. The BEM naming convention is correctly applied, but the SCSS nesting syntax is not compatible with plain CSS requirements.
