// scripts/validateTheme.js
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// List of hardcoded color values to look for
const hardcodedColors = [
  '#1F2937', // Original primary
  '#4B5563', // Original secondary
  '#0EA5E9', // Original accent
  '#F9FAFB', // Original background
  'text-gray-', // Tailwind gray classes
  'bg-teal-', // Tailwind teal classes
  'hover:bg-teal-', // Tailwind teal hover classes
];

// Get all .js, .jsx files recursively
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.flat().filter(file => 
    file.endsWith('.js') || 
    file.endsWith('.jsx') || 
    file.endsWith('.ts') || 
    file.endsWith('.tsx')
  );
}

// Main function
async function findHardcodedColors() {
  try {
    console.log('Scanning components for hardcoded colors...');
    
    // Get all component files
    const componentsDir = path.join(__dirname, '../src/components');
    const pagesDir = path.join(__dirname, '../src/app');
    
    const componentFiles = await getFiles(componentsDir);
    const pageFiles = await getFiles(pagesDir);
    const allFiles = [...componentFiles, ...pageFiles];
    
    let foundHardcodedColors = false;
    
    // Check each file for hardcoded colors
    for (const file of allFiles) {
      const content = await readFile(file, 'utf8');
      
      for (const color of hardcodedColors) {
        if (content.includes(color)) {
          if (!foundHardcodedColors) {
            console.log('\nPotential hardcoded colors found:');
            foundHardcodedColors = true;
          }
          
          console.log(`\n${path.relative(path.join(__dirname, '..'), file)}:`);
          console.log(`  Contains hardcoded color: ${color}`);
          
          // Show context for each occurrence
          const lines = content.split('\n');
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(color)) {
              console.log(`  Line ${i + 1}: ${lines[i].trim()}`);
            }
          }
        }
      }
    }
    
    if (!foundHardcodedColors) {
      console.log('\n✓ No hardcoded colors found in components!');
    } else {
      console.log('\nThese should be replaced with theme variables or Tailwind theme classes.');
      console.log('Examples:');
      console.log('- Replace hardcoded HEX with CSS var: #1F2937 → var(--color-primary)');
      console.log('- Replace hardcoded Tailwind class: text-gray-200 → text-sage-200');
    }
    
  } catch (err) {
    console.error('Error scanning components:', err);
  }
}

// Run the function
findHardcodedColors();