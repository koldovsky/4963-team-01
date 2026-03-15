# Issue: Non-Optimized Image Formats

**Type:** Performance Optimization  
**Severity:** LOW  
**AGENTS.md Rule:** "Preferred image formats: webp, svg"  
**Branch:** cursor/code-review-issues-302c

## Summary

Multiple images use non-optimized formats (PNG and JPG) instead of the preferred webp format, impacting page load performance.

## Violations Found

### PNG Format Issues (6 images)

#### 1. History Timeline Section
- **File:** `index.history-timeline.partial.html` (Line 3)
- **Image:** `img/wines.png`
- **Issue:** PNG format instead of optimized webp
- **Author:** TBD

#### 2. History Section
- **File:** `index.history.partial.html` (Line 4)
- **Image:** `img/background-history-partial.png`
- **Issue:** PNG format instead of optimized webp
- **Author:** Ivan Butryn

#### 3-6. FAQ Section Icons (4 images)
- **File:** `index.questions-and-answers.partial.html` (Lines 73, 95, 117, 139)
- **Images:**
  - `img/truck-for-faq-section.png`
  - `img/bottle-for-faq-section.png`
  - `img/leaf-for-faq-section.png`
  - `img/temperature-for-faq-section.png`
- **Issue:** PNG format instead of optimized webp or svg (SVG preferred for icons)
- **Author:** TBD

### JPG Format Issues (8 images)

#### 7-10. Craft Wines Section (4 images)
- **File:** `index.craft-wines.partial.html` (Lines 11, 21, 31, 41)
- **Images:**
  - `img/wines-for-craft-wines-partial/pinot-noir-craft-wines.jpg`
  - `img/wines-for-craft-wines-partial/chardonnay-craft-wines.jpg`
  - `img/wines-for-craft-wines-partial/riesling-craft-wines.jpg`
  - `img/wines-for-craft-wines-partial/sauvignon-blanc-craft-wines.jpg`
- **Issue:** JPG format instead of optimized webp
- **Author:** Ivan Butryn

#### 11-14. Best Deals Carousel (4 images)
- **File:** `index.best-deals.partial.html` (Lines 19, 33, 47, 61)
- **Images:**
  - `img/wines-best-deals/cabernet.jpg`
  - `img/wines-best-deals/merlot.jpg`
  - `img/wines-best-deals/pinot-grigio.jpg`
  - `img/wines-best-deals/chardonnay.jpg`
- **Issue:** JPG format instead of optimized webp
- **Author:** TBD

## AGENTS.md Reference

From AGENTS.md - Performance Guidelines section:

> "Preferred image formats:
>
> ```
> webp
> svg
> ```
>
> Avoid heavy images but in general PNG and JPG image formats are allowed:
>
> ```
> large jpg
> large png
> ```
>
> Images should be optimized."

## Performance Impact

**WebP vs JPG/PNG:**
- WebP typically reduces file size by 25-35% compared to JPEG
- WebP typically reduces file size by 25-35% compared to PNG
- Smaller file sizes = faster page load = better user experience
- Better for mobile users with limited bandwidth

**SVG for Icons:**
- Scalable without quality loss
- Typically smaller than raster formats
- Can be styled with CSS
- Better accessibility support

## Conversion Guidelines

### Converting to WebP

**Using ImageMagick:**
```bash
convert input.jpg output.webp
convert input.png output.webp
```

**Using ffmpeg:**
```bash
ffmpeg -i input.jpg -c:v libwebp output.webp
ffmpeg -i input.png -c:v libwebp output.webp
```

### Converting Icons to SVG

Export PNG/JPG icons from your design tool as SVG, or use an online converter for simple icons.

## Required Actions

- [ ] Convert all PNG files to webp format:
  - `img/wines.png` → `img/wines.webp`
  - `img/background-history-partial.png` → `img/background-history-partial.webp`
  - `img/truck-for-faq-section.png` → `img/truck-for-faq-section.webp` (or .svg)
  - `img/bottle-for-faq-section.png` → `img/bottle-for-faq-section.webp` (or .svg)
  - `img/leaf-for-faq-section.png` → `img/leaf-for-faq-section.webp` (or .svg)
  - `img/temperature-for-faq-section.png` → `img/temperature-for-faq-section.webp` (or .svg)

- [ ] Convert all JPG files to webp format:
  - All `img/wines-for-craft-wines-partial/*.jpg` → `.webp`
  - All `img/wines-best-deals/*.jpg` → `.webp`

- [ ] Update HTML file references to point to new webp/svg files

- [ ] Add browser fallback support (optional):
  ```html
  <picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
  </picture>
  ```

## Files to Update

- `/workspace/index.history-timeline.partial.html`
- `/workspace/index.history.partial.html`
- `/workspace/index.questions-and-answers.partial.html`
- `/workspace/index.craft-wines.partial.html`
- `/workspace/index.best-deals.partial.html`

---

**Assigned to:** Ivan Butryn  
**Priority:** LOW  
**Created:** 2026-03-15
