# Issue #63: Practice/Task Code in Production Codebase

**Type:** Code Quality Violation  
**Severity:** MEDIUM  
**Status:** Open  
**Assigned To:** BrytanVitalii (brytanvitalii08@gmail.com)

## Summary

The file `js-tasks/tasks01.js` contains CodeWars practice/task solutions which should not be in production code.

## Rule Violated

From AGENTS.md:
> "AI-generated code must follow these principles:
> 1. Semantic HTML structure
> 2. HTMX partial architecture
> 3. Mobile-first responsive design
> 4. BEM CSS naming methodology
> 5. Minimal JavaScript
> 6. Predictable file structure
> 7. Semantic file naming
> 8. Simple Git workflow"

Production codebases should contain functional, project-specific code only. Practice code from coding challenge platforms (CodeWars) should be in separate branches or learning repositories.

## Affected File

**`js-tasks/tasks01.js`**

Current contents:
```javascript
// Задача: https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Задача: https://www.codewars.com/kata/55685cd7ad70877c23000102

function makeNegative(num) {
  return -Math.abs(num);
}

// Задача: https://www.codewars.com/kata/563a631f7cbbc236cf0000c2

function move(position, roll) {
  return position + roll * 2;
}

// ... and more CodeWars solutions
```

## Issues

1. File is named `tasks01.js` - not semantic (should describe actual purpose)
2. Contains only practice code unrelated to the wine store project
3. Not used in the production website
4. Mixed language comments (Ukrainian)
5. Is in `js-tasks/` directory (which also violates Issue #62)

## Required Fix

Option A (Recommended): Delete the file
- This file appears to be unused and serves no purpose in the wine store project
- It's practice code that should be in a separate learning repository

Option B (Alternative): Move to separate branch
- If this code is meant to be retained for training purposes, move to a `learning/` or `practice/` branch
- Keep production main branch clean

## Author

- BrytanVitalii (brytanvitalii08@gmail.com)
- Commit: be1de2114726a7611c4abe6013f6c183e9e9903e
- "Filled tasks01.js"

## Notes

This appears to be homework or practice code added to the production repository. Best practice is to maintain separate repositories or branches for learning materials.
