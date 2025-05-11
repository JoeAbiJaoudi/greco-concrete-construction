// scripts/updateFlipCardCss.js
const fs = require('fs');
const path = require('path');

// Path to the CSS file
const cssFilePath = path.join(__dirname, '../src/app/globals.css');

// New flip card CSS
const newFlipCardCSS = `/* Enhanced Flip Card Styles */
.flip-card {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, 
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 0;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  transform: rotateY(180deg);
}

/* Animation for fade in effect */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in forwards;
}`;

// Read the CSS file
fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // Replace the old flip card CSS with the new one
  const oldFlipCardCSS = /\/\* Flip Card Styles \*\/[\s\S]*?\.flip-card-back \{[\s\S]*?\}/;
  let updatedCss = data.replace(oldFlipCardCSS, newFlipCardCSS);

  // If the old CSS wasn't found, append the new CSS to the end
  if (updatedCss === data) {
    updatedCss = data + '\n\n' + newFlipCardCSS;
  }

  // Write the updated CSS back to the file
  fs.writeFile(cssFilePath, updatedCss, 'utf8', (err) => {
    if (err) {
      console.error('Error writing CSS file:', err);
      return;
    }
    console.log('✓ Flip card CSS updated successfully');
  });
});