# GitHub Issues Created - Code Review Summary

**Review Date:** March 28, 2026
**Repository:** koldovsky/4963-team-01
**Trigger:** Push to main branch with commits from BrytanVitalii and Andrii Oliinyk

## Issues Created

### Critical Issues (5) - Assigned to BrytanVitalii

1. **Issue #352: ES6 Module Import Usage Not Supported**
   - File: `js/global.shopping-cart.js`
   - Problem: Uses ES6 imports without bundler configuration
   - Fix: Convert to vanilla JavaScript patterns
   - https://github.com/koldovsky/4963-team-01/issues/352

2. **Issue #353: Incomplete/Non-functional Code Merged to Main**
   - File: `js/global.shopping-cart.js`
   - Problem: Code marked "DO NOT USE - NOT FULLY IMPLEMENTED"
   - Fix: Complete implementation or move to feature branch
   - https://github.com/koldovsky/4963-team-01/issues/353

3. **Issue #354: Logic Error in Shopping Cart updateCartUI()**
   - File: `js/global.shopping-cart.js` (lines 33-35)
   - Problem: Variable type mismatch (named productID but contains objects)
   - Fix: Update forEach to use product directly, not getProductById(productID)
   - https://github.com/koldovsky/4963-team-01/issues/354

4. **Issue #355: Missing Event Listeners in Shopping Cart**
   - File: `js/global.shopping-cart.js`
   - Problem: UI created but no click handlers for buttons
   - Fix: Add event delegation for remove, increment, decrement, close buttons
   - https://github.com/koldovsky/4963-team-01/issues/355

5. **Issue #357: Missing Null Checks on DOM Queries**
   - File: `js/global.shopping-cart.js` (lines 27-28)
   - Problem: No validation before using DOM elements
   - Fix: Add defensive null checks before element usage
   - https://github.com/koldovsky/4963-team-01/issues/357

### Medium Issues (2) - Assigned to BrytanVitalii

6. **Issue #356: Mixed CSS Naming Convention (BEM Violation)**
   - Files: `global.shopping-cart.partial.html`, `css/global.shopping-cart.partial.css`
   - Problem: Inconsistent BEM naming patterns
   - Fix: Standardize to single BEM approach (flat or nested consistently)
   - https://github.com/koldovsky/4963-team-01/issues/356

7. **Issue #358: Duplicate CSS Rules in Shopping Cart Stylesheet**
   - File: `css/global.shopping-cart.partial.css` (lines 163, 181, 185)
   - Problem: `.cart__form-wrapper` defined 3 times
   - Fix: Consolidate into single CSS rule
   - https://github.com/koldovsky/4963-team-01/issues/358

### Low Priority Issues (4)

8. **Issue #359: Partial HTML Files Not in Dedicated Directory**
   - Files: `global.cart-popup.partial.html`, `global.shopping-cart.partial.html`
   - Assigned: BrytanVitalii
   - Problem: Partial files stored in project root instead of `partials/`
   - Fix: Move to `partials/` directory and update HTMX paths
   - https://github.com/koldovsky/4963-team-01/issues/359

9. **Issue #360: Excessive and Non-functional Comments**
   - File: `js/global.shopping-cart.js`
   - Assigned: BrytanVitalii
   - Problem: "DO NOT USE" warnings, excessive JSDoc
   - Fix: Remove warnings, simplify comments
   - https://github.com/koldovsky/4963-team-01/issues/360

10. **Issue #361: Excessive Commit History (Awards Section)**
    - Files: `js/index.awards-reveal.js`, `css/index.awards.partial.css`
    - Assigned: oland1979
    - Problem: 12 separate commits updating same files
    - Fix: Use feature branches and squash commits before merging
    - https://github.com/koldovsky/4963-team-01/issues/361

11. **Issue #362: Complex HTML Structure in Shopping Cart Partial**
    - File: `global.shopping-cart.partial.html`
    - Assigned: BrytanVitalii
    - Problem: Deeply nested template structure (80+ lines)
    - Fix: Consider simplification (optional improvement)
    - https://github.com/koldovsky/4963-team-01/issues/362

---

## Summary Statistics

### By Author
- **BrytanVitalii (Test version of global.shopping-cart.js):** 10 issues
  - 5 Critical
  - 2 Medium
  - 3 Low
  
- **Andrii Oliinyk (Awards section):** 1 issue
  - 1 Low (process-related)

### By Severity
- **Critical:** 5 issues (must fix before production use)
- **Medium:** 2 issues (should fix)
- **Low:** 4 issues (nice to fix, optional improvements)

---

## Blocking Issues

The following issues **block production use** of the shopping cart feature:

1. ✋ Issue #352 - ES6 modules will cause runtime errors
2. ✋ Issue #353 - Code explicitly marked as non-functional
3. ✋ Issue #354 - Logic error will cause cart to malfunction
4. ✋ Issue #355 - No functionality for user interaction
5. ✋ Issue #357 - Null reference errors likely in certain conditions

**Recommendation:** The shopping cart feature should be moved back to a development branch until these critical issues are resolved.

---

## Related Documentation

- **AGENTS.md:** Project coding standards and rules
- **CODE_REVIEW_REPORT.md:** Detailed analysis of each violation
- **This file:** Summary of GitHub issues created

---

## Next Steps

1. Review each GitHub issue with detailed descriptions
2. Assign issues to developers for fixes
3. Move blocking items to active sprint
4. Consider moving incomplete features to feature branches until ready
5. Re-review once fixes are implemented
