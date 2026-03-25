# Code Review Report: Commit e1d83f06483dca539a60d96a446e7cfbb191473d

**Commit Message**: added global footer lightbox functionality
**Author**: Volodymyr Andriichak
**Date**: Wed Mar 25 16:06:39 2026 +0200

## Summary
This commit extracts inline footer lightbox JavaScript into a separate module file (`js/global.footer.js`). While this follows good practice for code organization, the implementation violates 2 critical AGENTS.md standards.

## Issues Found

### ❌ Issue #1: Global Variables (CRITICAL)
**File**: `js/global.footer.js`
**Lines**: 1-9
**Severity**: CRITICAL

The code declares 8 variables in global scope:
- `lightbox`
- `image`
- `nextImage`
- `prevBtn`
- `nextBtn`
- `thumbnails`
- `currentIndex`
- `isAnimating`

**AGENTS.md Violation**:
```
# JavaScript Guidelines
JavaScript should be **minimal and modular**.

Rules:
* use vanilla JavaScript
* avoid large libraries
* avoid global variables          ← VIOLATED
* prefer event delegation
```

**Why it's a problem**:
- Global variables can be overwritten by other scripts
- Causes namespace pollution
- Makes the code harder to maintain and test
- Can cause unexpected behavior with other global scripts

**GitHub Issue**: #225

### ❌ Issue #2: Missing Null Safety Check (CRITICAL)
**File**: `js/global.footer.js`
**Lines**: 1-6
**Severity**: CRITICAL

The code queries child elements without checking if the parent element exists:

```javascript
const lightbox = document.querySelector('.footer__lightbox');
const image = lightbox.querySelector('.footer__lightbox-image--current');  // Potential null reference error
```

**Why it's a problem**:
- If `lightbox` is null (e.g., if the partial hasn't loaded yet), calling `.querySelector()` will throw `TypeError: Cannot read property 'querySelector' of null`
- This crashes the script, breaking other functionality

**The original code (in HTML) had proper null checking**:
```javascript
const lightbox = document.querySelector('.footer__lightbox');
if (!lightbox) return;  // This check was removed!
```

**GitHub Issue**: #226

## Recommendations

1. **Encapsulate the module in an IIFE** to avoid global variables
2. **Add null safety checks** for all DOM query operations
3. **Follow the pattern from the original code** which had proper defensive checks

## Files Changed
- ✅ `global.footer.partial.html` - Removed inline script (GOOD)
- ❌ `js/global.footer.js` - Created with code standard violations (BAD)
- ✅ `js/index.js` - Added import statement (GOOD)

## Standards Compliance
- ❌ AGENTS.md - JavaScript Guidelines: avoid global variables
- ✅ AGENTS.md - File Naming: global.footer.js uses correct kebab-case
- ✅ AGENTS.md - File Location: correctly placed in js/ directory
- ✅ AGENTS.md - Project Structure: follows expected structure
