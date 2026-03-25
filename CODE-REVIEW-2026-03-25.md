# Code Review Report
**Date**: March 25, 2026  
**Commit**: 9be572121347ce695f9636ae723e60feb527c833  
**Author**: airdray (belous50409@gmail.com)  
**Branch**: main  
**Title**: "add Loader"

## Summary
This commit introduces a loader component to the project. The review identifies several **critical violations** of the AGENTS.md standards.

---

## Violations Found

### 1. ❌ CRITICAL: Oversized Image Asset (Performance Violation)
**Rule**: AGENTS.md - Performance Guidelines (lines 357-375)  
**Status**: FAILED

**Issue**:
- **File**: `img/loader.gif`
- **Size**: 4.3 MB
- **Rule**: "Preferred image formats: webp, svg. Avoid heavy images but in general PNG and JPG image formats are allowed: large jpg, large png. **Images should be optimized.**"

**Problem**: A 4.3 MB GIF file is extremely large and violates performance guidelines. This will significantly impact page load times.

**Recommendation**: 
- Convert to WebP format with optimized compression
- Or convert to SVG for a loading animation
- Or reduce GIF frame count and size
- Maximum acceptable size: ~200-500 KB for an animation asset

---

### 2. ❌ CRITICAL: Non-Semantic HTML for Loader Partial
**Rule**: AGENTS.md - HTML Architecture & Semantic HTML (lines 120-160, 341-353)  
**Status**: FAILED

**Issue**:
- **File**: `index.loader.partial.html`
- **Element**: Uses generic `<div id="loader">` instead of semantic HTML
- **Rule**: "Always include: alt attributes, semantic HTML, readable color contrast"

**Current code**:
```html
<div id="loader">
    <img src="img/loader.gif" alt="loader" width="200px" height="200px">
    <h4>Loading...</h4>
</div>
```

**Problems**:
- `<div>` is not semantic; should use `<section>` or other semantic HTML
- `<h4>` is not a proper heading hierarchy
- Should use proper semantic structure

---

### 3. ❌ CSS: Non-BEM Naming Violation
**Rule**: AGENTS.md - CSS Architecture (lines 200-233)  
**Status**: FAILED

**Issue**:
- **File**: `css/global.css`
- **Selector**: `#loader { ... }`
- **Rule**: "CSS must follow **BEM methodology**. Pattern: `.block`, `.block__element`, `.block__element--modifier`"

**Current code** (lines 36-54 in global.css):
```css
#loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 2rem;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease;
}
```

**Problems**:
- Uses ID selector `#loader` instead of class `.loader`
- Does not follow BEM naming convention
- ID selectors have high specificity and are discouraged in component design

**Recommendation**: 
- Rename to `.loader` (class)
- Use `.loader__spinner`, `.loader__text`, etc. for child elements

---

### 4. ❌ JavaScript: Global Variable & Non-Modular Code
**Rule**: AGENTS.md - JavaScript Guidelines (lines 312-337)  
**Status**: FAILED

**Issue**:
- **File**: `js/index.js`
- **Lines**: 15-22 (added code)
- **Rule**: "JavaScript should be **minimal and modular**. Rules: use vanilla JavaScript, **avoid global variables**, prefer event delegation. Avoid: jQuery, large frameworks, **unnecessary DOM manipulation**"

**Current code**:
```javascript
window.onload = function() {
    setTimeout(() => {
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 1000);
    }, 2500);
};
```

**Problems**:
- Assigns to `window.onload`, which is a global handler (can conflict with other code)
- Multiple nested `setTimeout` calls (callback hell)
- Direct DOM manipulation using `getElementById` twice
- No error handling if element doesn't exist
- Magic numbers (2500ms, 1000ms) should be configurable constants

**Recommendation**:
- Use event delegation or module pattern
- Consider using CSS animations instead
- Make timing configurable
- Add error handling

---

### 5. ⚠️ Code Formatting: Indentation Inconsistency
**Rule**: AGENTS.md - Code Formatting (lines 379-395)  
**Status**: PARTIALLY FAILED

**Issue**:
- **File**: `index.loader.partial.html`
- **Rule**: "Code should follow **Prettier formatting**. Rules: 2 space indentation, lowercase HTML attributes, consistent nesting"

**Current code**:
```html
<div id="loader">
    <img src="img/loader.gif" alt="loader" width="200px" height="200px">
    <h4>Loading...</h4>
</div>
```

**Problem**: Uses 4-space indentation instead of 2-space indentation

---

## Summary of Violations

| Issue | Type | Severity | File(s) |
|-------|------|----------|---------|
| 4.3 MB GIF file (oversized) | Performance | CRITICAL | `img/loader.gif` |
| Non-semantic HTML | HTML Architecture | CRITICAL | `index.loader.partial.html` |
| Non-BEM CSS naming | CSS Architecture | CRITICAL | `css/global.css` |
| Global `window.onload` | JavaScript | CRITICAL | `js/index.js` |
| 4-space indentation | Formatting | MINOR | `index.loader.partial.html` |

---

## Recommendations for Author

1. **Convert loader image** to WebP or SVG format and optimize to <500 KB
2. **Refactor HTML** to use semantic elements and proper heading hierarchy
3. **Convert CSS** to use BEM naming with class selectors
4. **Refactor JavaScript** to avoid global handlers and use a module pattern
5. **Fix indentation** to 2 spaces as per Prettier standards

**Author**: @AirDray1  
**Email**: belous50409@gmail.com
