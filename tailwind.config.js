/** @type {import('tailwindcss').Config} */
const { tailwindColors } = require('./src/theme/themeConfig');
const { tailwindTypography } = require('./src/theme/typographyConfig');

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: tailwindTypography.fontFamily,
      fontWeight: tailwindTypography.fontWeight,
      letterSpacing: tailwindTypography.letterSpacing,
    },
  },
  plugins: [],
};