# Code Issue #4: Formatting Inconsistencies - Tabs vs Spaces in CSS

**Severity:** Low  
**Category:** Code Formatting  
**Status:** Needs Investigation  
**Assigned to:** but-d (Dmytro Novykov)

## Location
- **Files:** Multiple CSS files
- **Affected:** `css/index.discover-our-wines.partial.css`, `css/index.faq.partial.css`, `css/index.special-wines.partial.css`
- **Commit:** `b7d6b97` (undid padding in best-deals)

## Description
Several CSS files have mixed indentation (tabs and spaces) and inconsistent formatting. While the recent commit `29fd1eb` ("used prettier") addressed some issues, the codebase still contains files with inconsistent indentation patterns.

## Current Issue
In diff for commit `b7d6b97`, the following files show tab-to-space conversion:
- `css/index.discover-our-wines.partial.css` - Entire file reformatted (tabs → 2 spaces)
- `css/index.faq.partial.css` - Entire file reformatted (tabs → 2 spaces)  
- `css/index.special-wines.partial.css` - Entire file reformatted (tabs → 2 spaces)

### Example from discover-our-wines.partial.css
Before (using tabs):
```css
.discover {
	position: relative;
	left: 50%;
	right: 50%;
}
```

After (using spaces):
```css
.discover {
  position: relative;
  left: 50%;
  right: 50%;
}
```

## Why This Matters
- **AGENTS.md Compliance:** Section "Code Formatting" specifies: "Code should follow **Prettier formatting**" with "2 space indentation."
- **Consistency:** Mixed indentation (tabs/spaces) causes issues across the codebase.
- **Prettier Standards:** Prettier enforces consistent 2-space indentation.
- **Version Control:** Tab/space inconsistencies create noisy diffs in git history.

## Recommended Fix
### Option 1: Run Prettier on All CSS Files
```bash
npx prettier --write "css/**/*.css"
```

### Option 2: Configure Editor
Ensure your editor is configured to:
- Use 2 spaces for indentation (not tabs)
- Save files with consistent formatting

### Option 3: Add Prettier Configuration
Create `.prettierrc` or `prettier.config.js`:
```json
{
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "es5",
  "semi": true,
  "printWidth": 80
}
```

## Verification Steps
1. Run Prettier: `npx prettier --write "css/**/*.css"`
2. Run Prettier on HTML files: `npx prettier --write "*.html"`
3. Run Prettier on JS files: `npx prettier --write "js/**/*.js"`
4. Commit the changes with message: "Apply consistent Prettier formatting across all files"
5. Verify no files show as modified if formatting is correct

## Related Issues
- ISSUE_01: Double space in class attribute (similar formatting issue)
- See CODE_REVIEW_REPORT.md for context

## Status
This is a bulk formatting issue that should be addressed by running Prettier on the entire project to ensure consistency. Recent commits show this is being worked on (`99f53db` added prettier).

## Follow-up
After applying Prettier, consider:
1. Adding a pre-commit hook to prevent unformatted code
2. Adding Prettier check to CI/CD pipeline
3. Documenting the formatting requirements in CONTRIBUTING.md
