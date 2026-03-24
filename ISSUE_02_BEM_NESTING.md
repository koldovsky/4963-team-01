# Code Issue #2: BEM Naming - Excessive Nesting Depth

**Severity:** Medium  
**Category:** CSS Architecture  
**Status:** Ready for Review & Discussion  
**Assigned to:** Vitalii Brytan (team member #3)

## Location
- **File:** `index.best-deals.partial.html` and `css/index.best-deals.partial.css`
- **Examples:** 
  - HTML lines 16-42 (carousel items)
  - CSS: Throughout the file (`.best-deals__carousel-items__item__*` classes)

## Description
The BEM naming convention is being used with excessive nesting depth (4+ levels). While technically valid BEM, this violates the principle of maintainability and readability emphasized in AGENTS.md.

## Current Pattern
```css
.best-deals__carousel-items__item__button
.best-deals__carousel-items__item__image
.best-deals__carousel-items__item__name
.best-deals__carousel-items__item__price
```

```html
<article class="best-deals__carousel-items__item">
  <img class="best-deals__carousel-items__item__image" ... />
  <h3 class="best-deals__carousel-items__item__name">Cabernet</h3>
  <p class="best-deals__carousel-items__item__price">17,00 USD</p>
  <button class="best-deals__carousel-items__item__button button--primary">
    Add to Cart
  </button>
</article>
```

## Recommended Refactoring Option 1: Simplified Naming
```css
.best-deals__item-button
.best-deals__item-image
.best-deals__item-name
.best-deals__item-price
```

```html
<article class="best-deals__item">
  <img class="best-deals__item-image" ... />
  <h3 class="best-deals__item-name">Cabernet</h3>
  <p class="best-deals__item-price">17,00 USD</p>
  <button class="best-deals__item-button button--primary">
    Add to Cart
  </button>
</article>
```

## Recommended Refactoring Option 2: Separate Block
Create a scoped carousel-item component:
```css
.carousel-item__button
.carousel-item__image
.carousel-item__name
.carousel-item__price
```

```html
<article class="carousel-item best-deals__carousel-items__item">
  <img class="carousel-item__image" ... />
  <h3 class="carousel-item__name">Cabernet</h3>
  <p class="carousel-item__price">17,00 USD</p>
  <button class="carousel-item__button button--primary">
    Add to Cart
  </button>
</article>
```

## Why This Matters
- **AGENTS.md Compliance:** Section "Component Naming" states: "Each component should have a **unique namespace**." Very deep nesting makes namespaces confusing.
- **Readability:** Class names like `.best-deals__carousel-items__item__button` are hard to read and remember.
- **Maintainability:** Long class names make CSS files harder to maintain and refactor.
- **BEM Best Practices:** BEM recommends keeping nesting to 2-3 levels for optimal clarity.

## Impact Analysis
- **Files to Change:** `index.best-deals.partial.html` (1 file) and `css/index.best-deals.partial.css` (1 file)
- **Scope:** Limited to the best-deals carousel component
- **Breaking Changes:** None if classes are updated consistently in both HTML and CSS

## Verification Steps
1. Update CSS file with new class names
2. Update HTML file to use new class names
3. Test carousel functionality in browser
4. Verify styling applies correctly
5. Run Prettier to ensure formatting consistency

## Related Issues
- This is a design/architecture review issue
- See CODE_REVIEW_REPORT.md for context

## Notes
This is presented for discussion and prioritization. It's a refactoring task that improves code quality without changing functionality.
