# Code Issue #3: Mixed Language Comment in HTML

**Severity:** Low  
**Category:** Code Quality / Consistency  
**Status:** Ready for Fix  
**Assigned to:** Dmytro Novykov (Novykov Dmytro)

## Location
- **File:** `index.discover-our-wines.partial.html`
- **Line:** 15
- **Component:** Discover Our Wines Section

## Description
A comment is written in Ukrainian in an English codebase, which reduces code consistency and accessibility for team members who may not speak Ukrainian.

## Current Code
```html
<!-- Треба додати id для .craft-wines -->
<a class="discover__button button--primary" href="#">Buy Wines</a>
<a class="discover__button button--secondary" href="#faq">Learn More</a>
```

## Expected Code
```html
<!-- TODO: Add id to .craft-wines section -->
<a class="discover__button button--primary" href="#">Buy Wines</a>
<a class="discover__button button--secondary" href="#faq">Learn More</a>
```

## Translation
Ukrainian: "Треба додати id для .craft-wines"  
English: "Need to add id to .craft-wines" or "TODO: Add id to .craft-wines section"

## Why This Matters
- **Code Quality:** Comments should be in the same language as the codebase (English).
- **Team Accessibility:** Not all team members may speak Ukrainian, making this comment inaccessible.
- **AGENTS.md Spirit:** While not explicitly mentioned, the project guidelines emphasize "clarity and maintainability."
- **Industry Standard:** Code comments are typically written in English for international collaboration.

## Fix
Replace the Ukrainian comment with an English equivalent. Options:

### Option 1: Simple TODO Comment
```html
<!-- TODO: Add id to .craft-wines section -->
```

### Option 2: Descriptive Comment
```html
<!-- Add id attribute to improve link navigation from #faq section -->
```

### Option 3: Link to Related Component
```html
<!-- TODO: Add id="craft-wines" to the craft-wines section for anchor navigation -->
```

## Related Issues
- See CODE_REVIEW_REPORT.md for context

## Notes
This is a minor improvement that enhances code consistency across the team.
