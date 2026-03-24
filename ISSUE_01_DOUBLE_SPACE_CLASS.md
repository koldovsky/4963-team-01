# Code Issue #1: Double Space in Class Attribute

**Severity:** Medium  
**Category:** Code Formatting  
**Status:** Ready for Fix  
**Assigned to:** but-d (Dmytro Novykov)

## Location
- **File:** `index.age-modal.partial.html`
- **Line:** 21
- **Component:** Age Modal Button

## Description
There is an extra space between two class names in the button element, which violates Prettier formatting standards and the AGENTS.md guideline for consistent code formatting.

## Current Code
```html
<button class="age-modal__button  button--primary" id="ageYes">
  Yes, I'm 21+
</button>
```

## Expected Code
```html
<button class="age-modal__button button--primary" id="ageYes">
  Yes, I'm 21+
</button>
```

## Why This Matters
- **Prettier Compliance:** The project is using Prettier for code formatting. Double spaces between classes violate Prettier standards.
- **Code Quality:** Inconsistent formatting reduces code readability and maintainability.
- **AGENTS.md Violation:** Section "Code Formatting" specifies: "Code should follow **Prettier formatting**."

## Fix
Remove the extra space between class names. This is a one-character fix.

## Verification
After fix, run Prettier on the file:
```bash
npx prettier --write index.age-modal.partial.html
```

## Related Issues
- See CODE_REVIEW_REPORT.md for context
