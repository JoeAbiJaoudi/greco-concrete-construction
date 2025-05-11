// src/theme/themeConfig.js

// Theme color palettes
const THEMES = {
    default: {
      name: 'Default',
      colors: {
        primary: '#1F2937',
        secondary: '#4B5563',
        accent: '#0EA5E9',
        background: '#F9FAFB',
        white: '#ffffff',
        black: '#171717',
      }
    },
    sage: {
      name: 'Sage',
      colors: {
        primary: '#4A665A',
        secondary: '#728C7B',
        accent: '#86A68B',
        background: '#F1F4F2',
        white: '#ffffff',
        black: '#2E3D35',
      }
    },
    // Add more themes as needed
    ocean: {
      name: 'Ocean',
      colors: {
        primary: '#1E3A8A',
        secondary: '#1D4ED8',
        accent: '#3B82F6',
        background: '#EFF6FF',
        white: '#ffffff',
        black: '#1E293B',
      }
    },
    sunset: {
      name: 'Sunset',
      colors: {
        primary: '#7C2D12',
        secondary: '#B45309',
        accent: '#F97316',
        background: '#FFEDD5',
        white: '#ffffff',
        black: '#431407',
      }
    }
  };
  
  // Set the current theme here - this is the only place you need to change
  const CURRENT_THEME = 'sage';
  
  // Generate CSS variables
  function generateCssVariables(theme) {
    let variables = {};
    Object.entries(theme.colors).forEach(([key, value]) => {
      variables[`--color-${key}`] = value;
    });
    return variables;
  }
  
  // Generate extended Tailwind color palette for the theme
  function generateTailwindColors(theme) {
    const colors = {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      background: 'var(--color-background)',
    };
  
    // Add a color scale based on the primary color
    const colorName = CURRENT_THEME;
    if (colorName === 'sage') {
      colors[colorName] = {
        100: '#F1F4F2',
        200: '#E8EDEA',
        300: '#D1DDD4',
        400: '#BACDC0',
        500: '#86A68B',
        600: '#728C7B',
        700: '#4A665A',
        800: '#2E3D35',
        900: '#1A241E',
      };
    } else if (colorName === 'ocean') {
      colors[colorName] = {
        100: '#EFF6FF',
        200: '#DBEAFE',
        300: '#BFDBFE',
        400: '#93C5FD',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
      };
    } else if (colorName === 'sunset') {
      colors[colorName] = {
        100: '#FFEDD5',
        200: '#FED7AA',
        300: '#FDBA74',
        400: '#FB923C',
        500: '#F97316',
        600: '#EA580C',
        700: '#C2410C',
        800: '#9A3412',
        900: '#7C2D12',
      };
    }
    
    return colors;
  }
  
  // Export the active theme
  const activeTheme = THEMES[CURRENT_THEME];
  
  module.exports = {
    activeTheme,
    cssVariables: generateCssVariables(activeTheme),
    tailwindColors: generateTailwindColors(activeTheme),
    allThemes: THEMES,
    currentThemeName: CURRENT_THEME
  };