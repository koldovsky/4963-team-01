# Code Review - Assignment Summary

**Review Date:** 2026-03-15  
**Total Violations:** 22  
**Total Authors with Violations:** 6

---

## Violations by Author

### 1. Ivan Butryn
**Files Modified:** 3 HTML partials  
**Violations:** 9

| Issue | Count | Severity |
|-------|-------|----------|
| Missing CSS files (craft-wines, history) | 2 | HIGH |
| Image format optimization (PNG/JPG) | 6 | LOW |
| Non-semantic HTML (<div> instead of <section>) | 2 | LOW |

**Assigned Issues:**
- ISSUE_01: Missing CSS files for craft-wines and history partials
- ISSUE_05: Image format optimization (craft-wines and history PNG/JPG)
- ISSUE_06: Semantic HTML in craft-wines and history partials

---

### 2. vladbondrevo
**Files Modified:** 2 CSS/HTML files  
**Violations:** 8

| Issue | Count | Severity |
|-------|-------|----------|
| Hardcoded colors in about cards | 3 | MEDIUM |
| Desktop-first media queries | 1 | MEDIUM |
| BEM naming violations in about cards | 4 | MEDIUM |

**Assigned Issues:**
- ISSUE_02: Hardcoded colors in about cards CSS
- ISSUE_03: Desktop-first media query in about section
- ISSUE_04: BEM naming violations in about cards (HTML and CSS)

---

### 3. Olesia Konior
**Files Modified:** 1 HTML partial  
**Violations:** 1

| Issue | Count | Severity |
|-------|-------|----------|
| Missing CSS file (wine-categories) | 1 | HIGH |

**Assigned Issues:**
- ISSUE_01: Missing CSS file for wine-categories partial

---

### 4. Britan Vitalii
**Files Modified:** 2 CSS/HTML files  
**Violations:** 2

| Issue | Count | Severity |
|-------|-------|----------|
| Empty CSS file (footer) | 1 | HIGH |
| Hardcoded colors in footer SVGs | 1 | MEDIUM |

**Assigned Issues:**
- ISSUE_01: Empty footer CSS file
- ISSUE_02: Hardcoded stroke colors in footer SVGs

---

### 5. airdray
**Files Modified:** 2 CSS files  
**Violations:** 2

| Issue | Count | Severity |
|-------|-------|----------|
| Desktop-first media queries | 2 | MEDIUM |

**Assigned Issues:**
- ISSUE_03: Desktop-first media queries in hero and header navigation

---

### 6. Unknown Authors (Need Investigation)
**Violations:** 2

| Issue | Count | Severity |
|-------|-------|----------|
| Hardcoded color in FAQ section | 1 | MEDIUM |
| Image format optimization (FAQ icons) | 4 | LOW |
| Non-semantic HTML in history-timeline | 1 | LOW |
| Image format in history-timeline | 1 | LOW |

**Assigned Issues:**
- ISSUE_02: Hardcoded color in FAQ questions
- ISSUE_05: Image format optimization (FAQ icons and history-timeline)
- ISSUE_06: Semantic HTML in history-timeline

---

## Issue Summary Table

| Issue ID | Category | Severity | Assigned To | Files |
|----------|----------|----------|-------------|-------|
| ISSUE_01 | Missing CSS Files | HIGH | Ivan Butryn, Olesia Konior, Britan Vitalii | 4 files |
| ISSUE_02 | Hardcoded Colors | MEDIUM | vladbondrevo, Britan Vitalii | 3 files |
| ISSUE_03 | Desktop-First Media Queries | MEDIUM | airdray, vladbondrevo | 4 files |
| ISSUE_04 | BEM Naming Violations | MEDIUM | vladbondrevo | 2 files |
| ISSUE_05 | Image Format Optimization | LOW | Ivan Butryn, Unknown | 5 files |
| ISSUE_06 | Semantic HTML | LOW | Ivan Butryn, Unknown | 3 files |

---

## Violations by Severity

### HIGH (4 violations)
- Missing CSS file: `css/index.craft-wines.partial.css`
- Missing CSS file: `css/index.history.partial.css`
- Missing CSS file: `css/index.wine-categories.partial.css`
- Empty CSS file: `css/global.footer.partial.css`

**Action:** Critical - Must be created/populated

### MEDIUM (8 violations)
- 3 × Hardcoded colors in CSS
- 4 × Desktop-first media queries
- 3 × BEM naming violations
- 4 × Hardcoded SVG stroke colors

**Action:** Important - Should be fixed soon

### LOW (10 violations)
- 14 × Image format optimization (PNG/JPG → WebP)
- 3 × Non-semantic HTML (<div> → <section>)

**Action:** Nice to have - Can be done incrementally

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Violations | 22 |
| Critical Issues (HIGH) | 4 |
| Important Issues (MEDIUM) | 8 |
| Nice-to-Have Issues (LOW) | 10 |
| Files with Violations | 15 |
| Authors with Violations | 6 |
| Issues Created | 6 |

---

## Next Steps

1. **Notify authors** of their assigned violations
2. **Prioritize HIGH severity** issues (missing CSS files)
3. **Address MEDIUM severity** issues (CSS standards compliance)
4. **Schedule LOW severity** items (performance optimization)
5. **Follow up** after fixes are implemented

---

## Files Analyzed

### HTML Files (13)
- index.html
- index.hero.partial.html
- index.about.partial.html
- index.best-deals.partial.html
- index.history-timeline.partial.html
- index.varieties.partial.html
- index.craft-wines.partial.html ❌
- index.history.partial.html ❌
- index.wine-categories.partial.html ❌
- index.questions-and-answers.partial.html
- index.newsletter.partial.html
- global.header-nav.partial.html
- global.footer.partial.html ❌

### CSS Files (11)
- css/global.css
- css/index.css
- css/components.css
- css/global.header-nav.partial.css ❌
- css/index.hero.partial.css ❌
- css/index.about.partial.css ❌
- css/index.best-deals.partial.css
- css/index.history-timeline.partial.css
- css/index.varieties.partial.css ❌
- css/index.questions-and-answers.partial.css ❌
- css/global.footer.partial.css ❌

❌ = Has violations

---

**Code Review Completed:** 2026-03-15
