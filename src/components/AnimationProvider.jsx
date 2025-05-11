"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import animationConfig from '@/config/animationConfig';

// Create a context for animation settings
const AnimationContext = createContext({
  enabled: true,
  classes: {
    fadeIn0: "fade-in-0",
    fadeIn200: "fade-in-200",
    fadeIn400: "fade-in-400",
    fadeIn600: "fade-in-600",
    fadeIn800: "fade-in-800",
  }
});

// Hook to use animation context
export const useAnimation = () => useContext(AnimationContext);

// Animation Provider Component
export const AnimationProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(animationConfig.enabled);
  
  // Generate animation classes based on config
  const classes = enabled 
    ? {
        fadeIn0: "fade-in-0",
        fadeIn200: "fade-in-200",
        fadeIn400: "fade-in-400",
        fadeIn600: "fade-in-600",
        fadeIn800: "fade-in-800",
      }
    : {
        fadeIn0: "",
        fadeIn200: "",
        fadeIn400: "",
        fadeIn600: "",
        fadeIn800: "",
      };
  
  // Apply animations-disabled class to body if animations are off
  useEffect(() => {
    if (!enabled) {
      document.body.classList.add('animations-disabled');
    } else {
      document.body.classList.remove('animations-disabled');
    }
    
    // Clean up on unmount
    return () => {
      document.body.classList.remove('animations-disabled');
    };
  }, [enabled]);
  
  // Value to be provided by context
  const value = {
    enabled,
    setEnabled,
    classes
  };
  
  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};