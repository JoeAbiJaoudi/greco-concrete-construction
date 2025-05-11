// scripts/generateTheme.js
const fs = require('fs');
const path = require('path');
const { cssVariables, currentThemeName } = require('../src/theme/themeConfig');

// Path to the CSS file that contains the CSS variables
const cssFilePath = path.join(__dirname, '../src/app/globals.css');

// Read the CSS file
fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // Generate CSS variable declarations
  const cssVarDeclarations = Object.entries(cssVariables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');

  // Replace the content between the :root { } with our new CSS variables
  const updatedCss = data.replace(
    /:root\s*\{[^}]*\}/s,
    `:root {\n${cssVarDeclarations}\n  \n  /* Set default background and foreground based on theme colors */\n  --background: var(--color-white);\n  --foreground: var(--color-black);\n}`
  );

  // Write the updated CSS back to the file
  fs.writeFile(cssFilePath, updatedCss, 'utf8', (err) => {
    if (err) {
      console.error('Error writing CSS file:', err);
      return;
    }
    console.log(`✓ Theme '${currentThemeName}' variables injected into globals.css`);
  });
});