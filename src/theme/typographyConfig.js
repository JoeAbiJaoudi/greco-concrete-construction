// src/theme/typographyConfig.js

// Typography configuration
const TYPOGRAPHY = {
    default: {
      fontFamily: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
    elegant: {
      fontFamily: {
        heading: "'Playfair Display', serif",
        body: "'Lato', sans-serif",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
    wellness: {
      fontFamily: {
        heading: "'Cormorant Garamond', serif",
        body: "'Montserrat', sans-serif",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.2',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.2em',
      },
    }
  };
  
  // Set the current typography theme here
  const CURRENT_TYPOGRAPHY = 'wellness';
  
  // Generate CSS variables
  function generateCssVariables(typography) {
    let variables = {};
    
    // Font families
    Object.entries(typography.fontFamily).forEach(([key, value]) => {
      variables[`--font-${key}`] = value;
    });
    
    // Font weights
    Object.entries(typography.fontWeight).forEach(([key, value]) => {
      variables[`--font-weight-${key}`] = value;
    });
    
    // Font sizes
    Object.entries(typography.fontSize).forEach(([key, value]) => {
      variables[`--font-size-${key}`] = value;
    });
    
    // Line heights
    Object.entries(typography.lineHeight).forEach(([key, value]) => {
      variables[`--line-height-${key}`] = value;
    });
    
    // Letter spacing
    Object.entries(typography.letterSpacing).forEach(([key, value]) => {
      variables[`--letter-spacing-${key}`] = value;
    });
    
    return variables;
  }
  
  // Generate Tailwind typography configuration
  function generateTailwindTypography(typography) {
    return {
      fontFamily: {
        heading: `var(--font-heading)`,
        body: `var(--font-body)`,
      },
      fontWeight: {
        light: `var(--font-weight-light)`,
        regular: `var(--font-weight-regular)`,
        medium: `var(--font-weight-medium)`,
        semibold: `var(--font-weight-semibold)`,
        bold: `var(--font-weight-bold)`,
      },
      letterSpacing: {
        tighter: `var(--letter-spacing-tighter)`,
        tight: `var(--letter-spacing-tight)`,
        normal: `var(--letter-spacing-normal)`,
        wide: `var(--letter-spacing-wide)`,
        wider: `var(--letter-spacing-wider)`,
        widest: `var(--letter-spacing-widest)`,
      },
    };
  }
  
  // Export the active typography
  const activeTypography = TYPOGRAPHY[CURRENT_TYPOGRAPHY];
  
  module.exports = {
    activeTypography,
    cssVariables: generateCssVariables(activeTypography),
    tailwindTypography: generateTailwindTypography(activeTypography),
    allTypography: TYPOGRAPHY,
    currentTypographyName: CURRENT_TYPOGRAPHY
  };