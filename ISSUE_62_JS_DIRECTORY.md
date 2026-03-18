# Issue #62: Incorrect JavaScript Directory - Using js-tasks Instead of js

**Type:** Code Standard Violation  
**Severity:** MEDIUM  
**Status:** Open

## Summary

JavaScript files are placed in `js-tasks/` directory instead of `js/` directory as required by AGENTS.md.

## Rule Violated

From AGENTS.md:
> "Project Structure - Rules:
> * All images must be placed in `img/`
> * JavaScript files must be placed in `js/`
> * CSS must be placed in `css/`
> * Partial HTML files should be stored in the project root or `partials/`"

## Affected Files

1. `js-tasks/age-modal.js`
   - Author: but-d (dimacpoint@gmail.com)
   - Should be: `js/age-modal.js`

2. `js-tasks/tasks01.js`
   - Author: BrytanVitalii (brytanvitalii08@gmail.com)
   - Should be: `js/tasks01.js`

## Current References

- `index.age-modal.partial.html` (line 33) references: `<script src="js-tasks/age-modal.js"></script>`

Should be: `<script src="js/age-modal.js"></script>`

## Required Fix

1. Create `js/` directory in project root
2. Move `js-tasks/age-modal.js` to `js/age-modal.js`
3. Move `js-tasks/tasks01.js` to `js/tasks01.js`
4. Update reference in `index.age-modal.partial.html`
5. Delete `js-tasks/` directory once files are moved

## Files to Update

- index.age-modal.partial.html (line 33)
- Any other HTML files referencing js-tasks/

## Primary Contributors

- but-d (age-modal.js)
- BrytanVitalii (tasks01.js)

## Notes

This is a directory structure violation. The `js-tasks/` directory is typically used for learning purposes or temporary code, not for production JavaScript files.
