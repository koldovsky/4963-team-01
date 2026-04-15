#!/bin/bash

echo "=== VIOLATION ANALYSIS ===" > violations_analysis.txt

echo "" >> violations_analysis.txt
echo "1. SCSS/NESTED CSS (should be vanilla CSS)" >> violations_analysis.txt
for file in css/components.css css/global.footer.partial.css css/index.newsletter.partial.css; do
  author=$(git log -1 --format="%an <%ae>" -- "$file" 2>/dev/null)
  echo "   - $file: $author" >> violations_analysis.txt
done

echo "" >> violations_analysis.txt
echo "2. HARDCODED COLORS (should use CSS variables)" >> violations_analysis.txt
echo "   - css/global.shopping-cart.partial.css: $(git log -1 --format='%an <%ae>' -- css/global.shopping-cart.partial.css 2>/dev/null)" >> violations_analysis.txt
echo "   - css/index.about.partial.css: $(git log -1 --format='%an <%ae>' -- css/index.about.partial.css 2>/dev/null)" >> violations_analysis.txt
echo "   - css/index.newsletter.partial.css: $(git log -1 --format='%an <%ae>' -- css/index.newsletter.partial.css 2>/dev/null)" >> violations_analysis.txt

echo "" >> violations_analysis.txt
echo "3. MISSING ALT ATTRIBUTES (accessibility violation)" >> violations_analysis.txt
for file in global.header-nav.partial.html global.shopping-cart.partial.html index.age-modal.partial.html index.best-deals.partial.html index.craft-wines.partial.html index.discover-our-wines.partial.html index.faq.partial.html; do
  author=$(git log -1 --format="%an <%ae>" -- "$file" 2>/dev/null)
  echo "   - $file: $author" >> violations_analysis.txt
done

echo "" >> violations_analysis.txt
echo "4. EVENT LISTENERS NOT USING DELEGATION" >> violations_analysis.txt
for file in js/global.cart-popup.js js/global.footer.js js/global.shopping-cart.js js/index.best-deals.js js/index.craft-wines.js js/index.faq.js; do
  if [ -f "$file" ]; then
    author=$(git log -1 --format="%an <%ae>" -- "$file" 2>/dev/null)
    echo "   - $file: $author" >> violations_analysis.txt
  fi
done

cat violations_analysis.txt
