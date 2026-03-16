# Code Review Issue Assignments by Author
**Generated:** 2026-03-16  
**Branch:** cursor/code-review-issues-d779  

This document maps all 49 code review issues to their respective authors for assignment.

---

## Assignment Summary

| Author | GitHub Username | Issues | Count |
|--------|-----------------|--------|-------|
| Volodymyr Andriichak | Andriychak | #36, #49 | 2 |
| Ivan Butryn | IvanButryn | #40, #41 | 2 |
| Andrii Oliinyk | oland1979 | (indirect) | - |
| Vyacheslav Koldovskyy | koldovsky | (documentation) | - |
| airdray / AirDray1 | AirDray1 | #34, #45 | 2 |
| but-d | but-d | #26, #27 (AGENTS.md) | - |
| vladbondrevo | vladbondrevo | #29, #31, #39 | 3 |
| inFERRNOO | inFERRNOO | #46 | 1 |
| OlesiaKonior | OlesiaKonior | (partial) | - |
| BrytanVitalii | BrytanVitalii | #28, #30, #37, #43, #44 | 5 |

---

## Detailed Issue-to-Author Mapping

### 🔴 CRITICAL: SCSS Nested Syntax Issues (Requires Build System - Forbidden)

#### BrytanVitalii (bryant.vitalii08@gmail.com)
- **Issue #28**: CSS Violation: Nested selectors in index.best-deals.partial.css
  - File: `css/index.best-deals.partial.css` (lines 10-116)
  - Problem: Uses nested SCSS syntax instead of flat CSS
  - Example: `.best-deals { .best-deals__title { ... } }`
  - Required Action: Convert to flat CSS with individual class selectors
  - Severity: 🔴 CRITICAL

- **Issue #37**: CSS Violation: SCSS nested syntax in components.css
  - File: `css/components.css` (lines 37-50)
  - Problem: Uses `&:hover` SCSS syntax
  - Required Action: Convert to `.button--primary:hover { ... }`
  - Severity: 🔴 CRITICAL

#### vladbondrevo (pertosel1901@gmail.com)
- **Issue #29**: CSS Violation: Nested selectors in index.varieties.partial.css
  - Problem: SCSS nested selectors
  - Required Action: Flatten to plain CSS
  - Severity: 🔴 CRITICAL

#### Volodymyr Andriychak (33000518+Andriychak@users.noreply.github.com)
- **Issue #36**: CSS Violation: Nested selectors in index.newsletter.partial.css
  - Problem: SCSS nested selectors
  - Required Action: Convert to plain CSS
  - Severity: 🔴 CRITICAL

---

### 🟠 BEM Naming Violations

#### AirDray1 (belous50409@gmail.com)
- **Issue #34**: BEM Violation: Non-compliant class names in header navigation CSS
  - Files: `css/global.header-nav.partial.css`, `global.header-nav.partial.html`
  - Problem: Using `.nv` instead of semantic `.header__nav`
  - Current: `.nv`, `.nv__container`, `.nv__menu`, `.nv__burger`
  - Required: `.header__nav`, `.header__nav-container`, `.header__nav-menu`, etc.
  - Severity: 🟠 HIGH

- **Issue #45**: CSS: BEM naming violations in header navigation
  - Related to Issue #34
  - Severity: 🟠 HIGH

---

### 🟡 Accessibility Violations

#### BrytanVitalii (bryant.vitalii08@gmail.com)
- **Issue #30**: Accessibility Violation: Missing alt text for images in best-deals section
  - File: `index.best-deals.partial.html`
  - Problem: Images lack descriptive alt attributes
  - Required Action: Add alt text to all images
  - Example: `alt="Bottle of Cabernet red wine"`
  - Severity: 🟡 MEDIUM

- **Issue #43**: Image Optimization: JPG images in best-deals section should be WebP
  - Files: `img/wines-best-deals/*.jpg`
  - Problem: Using JPG instead of WebP format
  - Required Action: Convert to WebP format
  - Severity: 🟡 MEDIUM

- **Issue #44**: CSS: Multiple non-BEM classes on single elements in about section
  - Problem: Non-standard class naming
  - Severity: 🟡 MEDIUM

#### vladbondrevo (pertosel1901@gmail.com)
- **Issue #31**: Accessibility Violation: Missing alt text for illustration in varieties section
  - File: `index.varieties.partial.html`
  - Problem: Missing alt text
  - Severity: 🟡 MEDIUM

- **Issue #39**: Accessibility: Missing alt text for images in varieties section
  - Duplicate of Issue #31
  - Severity: 🟡 MEDIUM

---

### 🟢 Missing Files & Infrastructure

#### Ivan Butryn (Ivanbutryn@gmail.com)
- **Issue #40**: CSS: Missing CSS file for craft-wines partial
  - File: `css/index.craft-wines.partial.css` (missing or incomplete)
  - Required Action: Create CSS file or link existing
  - Severity: 🟢 MEDIUM

- **Issue #41**: Image Optimization: JPG images in craft-wines section should be WebP
  - Problem: Image format optimization
  - Severity: 🟢 MEDIUM

#### Volodymyr Andriychak (33000518+Andriychak@users.noreply.github.com)
- **Issue #49**: CSS: Empty footer CSS file needs styling
  - File: `css/global.footer.partial.css`
  - Problem: CSS file exists but needs implementation
  - Severity: 🟢 MEDIUM

---

### 📋 General Code Quality Issues

#### inFERRNOO (irinasapeluk3676788@gmail.com)
- **Issue #46**: CSS: Generic utility classes in FAQ section
  - Problem: Using generic class names
  - Severity: 🟡 MEDIUM

---

### 📄 Documentation Issues (AGENTS.md)

#### but-d (dimacpoint@gmail.com)
- **Issue #26**: AGENTS.md: Broken markdown syntax - unclosed bracket on line 1
  - Severity: 🟡 MEDIUM

- **Issue #27**: AGENTS.md: Broken markdown link at end of file
  - Severity: 🟡 MEDIUM

---

### 🖼️ Image Optimization (Bulk Issue)

#### Multiple Authors
- **Issue #47**: Image Optimization: PNG and JPG images should use WebP format
  - Files (9 total):
    - img/awards-divider.png
    - img/awards-subtitle.png
    - img/background-varieties-partial.png
    - img/discount-pic-for-faq-section.png
    - img/fine-wines-1956.png
    - img/grapes-pic-for-faq-section.png
    - img/orange-wine-fund-1992.png
    - img/truck-for-faq-section.png
    - img/wine-corporation-2016.png
  - Required Action: Convert all to WebP format
  - Severity: 🟡 MEDIUM

---

## Issue Resolution Priority

### Phase 1 (Immediate - Blocking):
1. Issue #28 (BrytanVitalii): Fix SCSS in best-deals CSS
2. Issue #29 (vladbondrevo): Fix SCSS in varieties CSS
3. Issue #36 (Andriychak): Fix SCSS in newsletter CSS
4. Issue #37 (BrytanVitalii): Fix SCSS in components CSS

### Phase 2 (High Priority):
5. Issue #34 (AirDray1): Fix BEM naming in header navigation
6. Issue #45 (AirDray1): Fix BEM naming (related to #34)

### Phase 3 (Medium Priority):
7. Issue #30 (BrytanVitalii): Add alt text to best-deals images
8. Issue #31 (vladbondrevo): Add alt text to varieties images
9. Issue #39 (vladbondrevo): Add alt text (duplicate of #31)
10. Issue #40 (IvanButryn): Create CSS for craft-wines
11. Issue #43 (BrytanVitalii): Optimize best-deals images to WebP
12. Issue #47: Convert all PNG/JPG images to WebP

### Phase 4 (Documentation):
13. Issue #26 (but-d): Fix AGENTS.md markdown syntax
14. Issue #27 (but-d): Fix AGENTS.md markdown link

---

## GitHub CLI Assignment Commands

(Note: Direct assignment via CLI may require elevated permissions)

```bash
# For manual assignment or pull request creation:
gh issue edit 28 --add-assignee BrytanVitalii
gh issue edit 29 --add-assignee vladbondrevo
gh issue edit 30 --add-assignee BrytanVitalii
gh issue edit 31 --add-assignee vladbondrevo
gh issue edit 34 --add-assignee AirDray1
gh issue edit 36 --add-assignee Andriychak
gh issue edit 37 --add-assignee BrytanVitalii
gh issue edit 39 --add-assignee vladbondrevo
gh issue edit 40 --add-assignee IvanButryn
gh issue edit 43 --add-assignee BrytanVitalii
gh issue edit 45 --add-assignee AirDray1
gh issue edit 46 --add-assignee inFERRNOO
gh issue edit 49 --add-assignee Andriychak
```

---

## Violation Statistics

| Category | Count | Critical | High | Medium |
|----------|-------|----------|------|--------|
| SCSS Nested Syntax | 4 | 4 | - | - |
| BEM Naming | 5 | - | 2 | 3 |
| Accessibility | 3 | - | - | 3 |
| Image Optimization | 11 | - | - | 11 |
| Missing Files | 3 | - | - | 3 |
| Documentation | 2 | - | - | 2 |
| Code Quality | 4 | - | - | 4 |
| SVG/HTML | 2 | - | - | 2 |
| **TOTAL** | **49** | **4** | **2** | **43** |

---

## Next Steps

1. ✅ Issues created in GitHub
2. 🔄 Issues awaiting assignment to authors
3. ⏳ Authors to review and resolve issues
4. 📝 Update related pull requests with fixes
5. 🔍 Re-review after fixes applied
6. ✔️ Merge when all violations resolved

---

**Document Status:** Ready for Distribution  
**Last Updated:** 2026-03-16  
**Automation:** Cursor Code Review Agent
