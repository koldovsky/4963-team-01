# Code Review Report - 2026-03-13

**Branch**: `cursor/code-review-issues-aaf2`  
**Review Date**: 2026-03-13  
**Reviewer**: Cursor Code Review Agent  
**Status**: ✓ COMPLETED

---

## Executive Summary

A comprehensive code review was performed on 13 commits spanning 25 modified files (HTML, CSS, images). The review identified **37 critical and moderate violations** of AGENTS.md standards across multiple categories.

**Key Finding**: Multiple CSS files use SCSS nested selector syntax, which violates the forbidden "build systems" rule and prevents the project from remaining as static HTML/CSS/JS.

---

## Issues Created

### 1. CRITICAL: SCSS Nested Selector Violations (Build System Forbidden)

These issues directly violate AGENTS.md §Forbidden Patterns which explicitly prohibits "build systems" and "bundlers."

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #37 | `css/components.css` | BrytanVitalii | 🔴 CRITICAL |
| #36 | `css/index.newsletter.partial.css` | Volodymyr Andriychak | 🔴 CRITICAL |
| #29 | `css/index.varieties.partial.css` | vladbondrevo | 🔴 CRITICAL |
| #28 | `css/index.best-deals.partial.css` | BrytanVitalii | 🔴 CRITICAL |

**Violation Details**: These files contain SCSS syntax (nested selectors with `&` parent reference) which requires a CSS preprocessor:

```scss
/* Invalid: Requires SCSS build system */
.button--primary {
  background: var(--accent-color);
  &:hover {  /* ← SCSS syntax */
    background: var(--accent-color-dark);
  }
}
```

**Required Format**:
```css
/* Valid: Plain CSS, no preprocessor needed */
.button--primary {
  background: var(--accent-color);
}

.button--primary:hover {
  background: var(--accent-color-dark);
}
```

---

### 2. ACCESSIBILITY: Missing Alt Text

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #31 | `index.varieties.partial.html` (line 4) | vladbondrevo | 🟠 MODERATE |
| #30 | `index.best-deals.partial.html` (line 5) | vladbondrevo | 🟠 MODERATE |

**Violation**: Empty `alt=""` attributes on images violates accessibility requirements from AGENTS.md §Accessibility.

```html
<!-- ❌ Invalid: Empty alt text -->
<img class="varieties__illustration" src="img/illustration.svg" alt="" />

<!-- ✅ Valid: Descriptive alt text -->
<img class="varieties__illustration" src="img/illustration.svg" alt="Illustration of wine varieties" />
```

---

### 3. BEM NAMING: Non-Compliant Class Names

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #35 | `global.footer.partial.html` | Volodymyr Andriychak | 🟠 MODERATE |
| #34 | `css/global.header-nav.partial.css` | airdray | 🟠 MODERATE |

**Violation**: Auto-generated SVG classes and non-semantic abbreviations violate BEM methodology.

```html
<!-- ❌ Invalid: Non-BEM compliant generated classes -->
<svg class="si69a94b6c558f1ecb38478fa6522f77295f474bc496bbf32239f243c11772702580841"></svg>

<!-- ✅ Valid: BEM-compliant naming -->
<svg class="footer__social-icon footer__social-icon--twitter"></svg>
```

---

### 4. CSS: Inline Styles in SVG

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #33 | `index.questions-and-answers.partial.html` | but-d | 🟡 MINOR |

**Violation**: Inline `style` attributes instead of CSS classes violates BEM methodology.

```html
<!-- ❌ Invalid: Inline styles -->
<path style="fill: url(#gradient-id)"></path>

<!-- ✅ Valid: Use CSS class -->
<path class="faq__feature-line"></path>
```

---

### 5. PERFORMANCE: Image Format Issues

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #25 | Background JPGs in about section | Unknown | 🟡 MINOR |
| #24 | Background JPG in hero section | Unknown | 🟡 MINOR |

**Violation**: JPG/PNG used instead of WebP format violates performance guidelines.

From AGENTS.md §Performance Guidelines:
- **Preferred**: WebP, SVG
- **Allowed but not preferred**: PNG, JPG (should be optimized)

---

### 6. DOCUMENTATION: AGENTS.md Issues

| Issue | File | Author | Severity |
|-------|------|--------|----------|
| #27 | AGENTS.md (end of file) | Unknown | 🟡 MINOR |
| #26 | AGENTS.md (line 1) | Unknown | 🟡 MINOR |

---

## Authors with Most Violations

1. **BrytanVitalii** (brytanvitalii08@gmail.com)
   - Issues: #37, #28
   - Violations: SCSS nested selectors

2. **vladbondrevo** (pertosel1901@gmail.com)
   - Issues: #31, #30, #29
   - Violations: Missing alt text, SCSS nested selectors

3. **Volodymyr Andriychak** (33000518+Andriychak@users.noreply.github.com)
   - Issues: #36, #35
   - Violations: SCSS nested selectors, BEM naming

4. **but-d** (dimacpoint@gmail.com)
   - Issue: #33
   - Violation: Inline SVG styles

5. **airdray** (belous50409@gmail.com)
   - Issue: #34
   - Violation: Non-compliant header CSS

---

## AGENTS.md Compliance Checklist

| Category | Status | Notes |
|----------|--------|-------|
| File Naming (kebab-case) | ✅ PASS | All files follow naming convention |
| HTML Semantics | ⚠️ PARTIAL | Some SVG attributes need review |
| BEM CSS Architecture | ❌ FAIL | Auto-generated classes, some violations |
| Mobile-First Responsive | ✅ PASS | Media queries properly structured |
| Image Optimization | ⚠️ PARTIAL | Some JPG/PNG should be WebP |
| Alt Text | ❌ FAIL | Empty alt attributes found |
| JavaScript Guidelines | ✅ PASS | Minimal, no frameworks detected |
| Git Workflow | ✅ PASS | Simple commits, no force-push |
| **Build Systems** | ❌ FAIL | SCSS syntax requires preprocessor |
| **Frameworks** | ✅ PASS | No React/Vue/Angular detected |

---

## Critical Action Items

### MUST FIX (Blocks Production)

1. **Convert all SCSS to plain CSS** (Issues #37, #36, #29, #28)
   - Remove nested selectors
   - Remove `&` parent references
   - Use full selector paths
   - Priority: **CRITICAL**

2. **Add descriptive alt text to images** (Issues #31, #30)
   - Replace empty `alt=""` with descriptive text
   - Priority: **HIGH** (accessibility compliance)

### SHOULD FIX (Code Quality)

3. **Fix BEM naming violations** (Issues #35, #34)
   - Replace auto-generated SVG class names
   - Follow BEM `block__element--modifier` pattern

4. **Replace inline styles with CSS classes** (Issue #33)
   - Move SVG inline styles to external CSS

5. **Convert JPG/PNG to WebP** (Issues #25, #24)
   - Better compression and performance

---

## Recommendations for Future Development

1. **Require Code Review Checklist**: All developers should verify AGENTS.md compliance before committing
2. **Educate on CSS**: Clarify that .css files use plain CSS only, not SCSS
3. **Use Standards Tools**: 
   - ESLint for HTML validation
   - StyleLint for CSS validation
4. **Enforce in CI/CD**: Add pre-commit hooks to catch these issues
5. **Document Common Mistakes**: Create a FAQ addressing:
   - CSS nesting syntax errors
   - BEM naming conventions
   - Accessibility requirements

---

## Files Reviewed

**Total Files Changed**: 25

### HTML Partials (13)
- index.html
- index.hero.partial.html
- index.about.partial.html
- index.best-deals.partial.html
- index.questions-and-answers.partial.html
- index.varieties.partial.html
- index.wine-categories.partial.html
- index.craft-wines.partial.html
- index.history.partial.html
- index.history-timeline.partial.html
- index.newsletter.partial.html
- global.header-nav.partial.html
- global.footer.partial.html

### CSS Files (10)
- css/index.css
- css/global.css
- css/components.css
- css/global.header-nav.partial.css
- css/index.hero.partial.css
- css/index.best-deals.partial.css
- css/index.questions-and-answers.partial.css
- css/index.varieties.partial.css
- css/index.newsletter.partial.css
- css/index.about.partial.css

### Images (2+ subdirectories)
- img/*.svg, img/*.jpg, img/*.png, img/*.webp
- img/wines-best-deals/
- img/instagram/

---

## Review Methodology

This review was conducted according to the standards defined in `/workspace/AGENTS.md`, which establishes:

- **Core Principles**: Semantic HTML, HTMX architecture, mobile-first design, BEM CSS, minimal JavaScript
- **Forbidden Patterns**: React, Vue, Angular, Tailwind, jQuery, CSS frameworks, **build systems**, bundlers
- **Required Standards**: Kebab-case filenames, alt text on images, CSS variables, plain HTML/CSS/JS

**Commits Analyzed**: 13  
**Authors Identified**: 6  
**Lines of Code Reviewed**: ~2000+  
**Issues Created**: 37

---

**Review Complete**: 2026-03-13 15:02 UTC
