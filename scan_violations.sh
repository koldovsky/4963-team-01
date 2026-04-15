#!/bin/bash

echo "=== SCANNING FOR SCSS/NESTED CSS (Not vanilla) ==="
grep -r "^\s*&:" css/ --include="*.css" 2>/dev/null | wc -l

echo ""
echo "=== SCANNING FOR HARDCODED COLORS ==="
grep -r "#[0-9a-fA-F]\{3,6\}\|rgb(" css/ --include="*.css" | grep -v "var(--\|://" | grep -v ":root" | wc -l

echo ""
echo "=== CHECKING FOR IMAGES WITHOUT ALT (Accessibility) ==="
grep -r "<img" *.html *.partial.html 2>/dev/null | grep -v "alt=" | wc -l

echo ""
echo "=== CHECKING CSS FORMATTING - SPACES BEFORE BRACES ==="
grep -r "{\s*$\|}\s*$" css/*.css 2>/dev/null | grep -v "^" | wc -l

echo ""
echo "=== CHECKING FOR GLOBAL VARIABLES IN JS ==="
grep -r "^[a-zA-Z_][a-zA-Z0-9_]*\s*=" js/*.js 2>/dev/null | grep -v "const\|let\|var\|function" | wc -l

echo ""
echo "=== CHECKING FOR EVENT LISTENERS (Not using delegation) ==="
grep -r "\.addEventListener" js/*.js 2>/dev/null | grep -v "event.target.matches" | wc -l

echo ""
echo "=== CHECKING FOR FRAMEWORK USAGE (Forbidden) ==="
grep -r "React\|Vue\|Angular\|jQuery\|Tailwind" . --include="*.js" --include="*.html" --include="*.css" 2>/dev/null | wc -l

