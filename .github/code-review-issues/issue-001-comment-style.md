---
title: "Code Review: Improper Comment Style in index.awards-reveal.js"
author: "oland1979"
severity: "medium"
date: "2026-03-28"
commit: "4c173d6b2d209dd4d3201439b5fc3c6ec0dc70be"
---

# Issue: Non-Obvious Multi-Line Comment Violates AGENTS.md

## Problem

The file `js/index.awards-reveal.js` contains a multi-line comment that violates the project's code generation guidelines defined in AGENTS.md.

### Violating Code

```javascript
/* Unobserve stops execution after visibility trigger to maintain 
 low CPU usage on page scroll 
*/
observer.unobserve(entry.target);
```

## Rule Violation

**AGENTS.md Section**: "Do NOT add comments that just narrate what the code does"

The guideline explicitly states:
> "Avoid obvious, redundant comments like ... Comments should only explain non-obvious intent, trade-offs, or constraints that the code itself cannot convey."

## Why This Is Wrong

1. **Narrates code behavior**: The comment explains what `unobserve()` does, not why it's necessary
2. **Poor formatting**: Multi-line format inconsistent with project's Prettier formatting rules (2-space indentation)
3. **Verbose**: The behavior of `unobserve()` is self-evident from the method name and context
4. **Downgrade from original**: The code previously had a better comment that was removed

## Recommendation

**Option 1 (Preferred)**: Remove the comment entirely
```javascript
observer.unobserve(entry.target);
```

**Option 2**: Replace with single-line comment if explanation is necessary
```javascript
observer.unobserve(entry.target); // Prevent memory leaks
```

## Impact

- Violates AGENTS.md code generation rules
- Inconsistent with project standards
- Poor code maintainability

## Assigned To

@oland1979
