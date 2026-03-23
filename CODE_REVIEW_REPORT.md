# Code Review Report

**Date**: March 23, 2026  
**Reviewed Against**: AGENTS.md  
**Commit**: 690caf80407f70c30788e5a412f3b727eb5847a5  
**Author**: BrytanVitalii  
**GitHub Issue**: #184

---

## Summary

Code review was performed on the file added in commit `690caf8` according to the project's AGENTS.md standards. Three violations were found:

1. **Incorrect directory location** (HIGH)
2. **File naming convention violation** (HIGH)
3. **Loose equality operator usage** (MEDIUM)

---

## Detailed Findings

### File: js-tasks/tasks03.js

#### Issue 1: Incorrect Directory Location
- **Standard**: AGENTS.md - Project Structure
- **Rule**: JavaScript files must be placed in `js/` directory
- **Finding**: File is located in `js-tasks/` directory instead of `js/`
- **Impact**: Violates project structure conventions
- **Severity**: 🔴 HIGH

#### Issue 2: File Naming Convention Violation
- **Standard**: AGENTS.md - File Naming Rules
- **Rule**: All files must use **kebab-case** (e.g., `about-us.html`, `products-list.js`)
- **Finding**: Filename `tasks03.js` does not follow kebab-case convention
- **Expected**: `tasks-03.js`
- **Impact**: Inconsistent with project naming standards
- **Severity**: 🔴 HIGH

#### Issue 3: Loose Equality Operator
- **Standard**: JavaScript best practices
- **Rule**: Use strict equality (`===`) instead of loose equality (`==`)
- **Location**: Lines 15-16
- **Code**:
  ```javascript
  if(key.length == 5) result.push(key);
  if(value.length == 5) result.push(value);
  ```
- **Expected**:
  ```javascript
  if(key.length === 5) result.push(key);
  if(value.length === 5) result.push(value);
  ```
- **Impact**: Potential type coercion bugs
- **Severity**: 🟡 MEDIUM

---

## Required Actions

**Assigned to**: BrytanVitalii

### Priority 1 (High Severity)
- [ ] Move file from `js-tasks/tasks03.js` to `js/tasks-03.js`
- [ ] Rename file to use kebab-case format

### Priority 2 (Medium Severity)
- [ ] Replace all `==` operators with `===` for strict comparison

---

## GitHub Issue

Issue #184 has been created with detailed information and assigned to the author for correction.

**Issue URL**: https://github.com/koldovsky/4963-team-01/issues/184
