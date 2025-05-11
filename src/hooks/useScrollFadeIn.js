// src/hooks/useScrollFadeIn.js
"use client";
import { useEffect, useRef } from 'react';

/**
 * Custom hook that fades in an element when it enters the viewport or on initial load
 * @param {Object} options - The options for the fade effect
 * @param {number} options.delay - The delay before the animation starts (in ms)
 * @param {number} options.threshold - The portion of the element that must be visible (0-1)
 * @param {string} options.direction - The direction of the animation ('up', 'down', 'left', 'right')
 * @param {number} options.duration - The duration of the animation (in ms)
 * @param {boolean} options.animateOnLoad - Whether to animate the element immediately on load if it's in viewport
 * @returns {Object} - The ref to be assigned to the element
 */
export default function useScrollFadeIn({
  delay = 0,
  threshold = 0.1,
  direction = 'up',
  duration = 1000,
  animateOnLoad = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Set initial styles
    element.style.opacity = '0';
    element.style.transition = `all ${duration}ms ease-in-out ${delay}ms`;
    
    // Set transform based on direction
    switch (direction) {
      case 'up':
        element.style.transform = 'translateY(30px)';
        break;
      case 'down':
        element.style.transform = 'translateY(-30px)';
        break;
      case 'left':
        element.style.transform = 'translateX(30px)';
        break;
      case 'right':
        element.style.transform = 'translateX(-30px)';
        break;
      default:
        element.style.transform = 'translateY(30px)';
    }
    
    // Function to animate the element
    const animateElement = () => {
      element.style.opacity = '1';
      element.style.transform = 'translate3d(0, 0, 0)';
    };
    
    // Create Intersection Observer to handle scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When element is visible, fade it in
            animateElement();
            
            // Stop observing after animation
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    
    // Start observing for scroll-based animations
    observer.observe(element);
    
    // If animateOnLoad is true, check if element is already in viewport on initial load
    if (animateOnLoad) {
      const rect = element.getBoundingClientRect();
      const isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      
      if (isInViewport) {
        // Small timeout to allow for page to fully render first
        setTimeout(animateElement, 50);
      }
    }
    
    // Clean up
    return () => observer.disconnect();
  }, [delay, threshold, direction, duration, animateOnLoad]);
  
  return { ref };
}