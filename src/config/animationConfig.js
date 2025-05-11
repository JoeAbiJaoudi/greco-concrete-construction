// src/config/animationConfig.js

/**
 * Global configuration for site-wide animations
 * 
 * This file allows you to enable/disable animations site-wide
 * and customize how animations behave
 */

const animationConfig = {
    // Master switch to enable/disable all animations site-wide
    enabled: true,
    
    // Fade-in animations
    fadeIn: {
      enabled: true,  // Enable/disable specifically fade-in animations
      baseDelay: 0,   // Base delay in ms before animations start
      baseDuration: 1000, // Base duration in ms for animations
      staggerDelay: 200, // Delay between sequential animations (in ms)
    },
    
    // Scroll animations
    scrollAnimations: {
      enabled: true,  // Enable/disable scroll-triggered animations
      threshold: 0.1, // How much of element must be visible to trigger (0-1)
    },
    
    // Page transition animations
    pageTransitions: {
      enabled: false, // Future feature - page transition animations
    }
  };
  
  // CSS class generator - creates classes based on config
  export const generateAnimationClasses = () => {
    if (!animationConfig.enabled || !animationConfig.fadeIn.enabled) {
      // Return placeholder empty classes if animations are disabled
      return {
        fadeIn0: "",
        fadeIn200: "",
        fadeIn400: "",
        fadeIn600: "",
        fadeIn800: ""
      };
    }
    
    return {
      fadeIn0: "fade-in-0",
      fadeIn200: "fade-in-200",
      fadeIn400: "fade-in-400",
      fadeIn600: "fade-in-600",
      fadeIn800: "fade-in-800",
    };
  };
  
  export default animationConfig;