// src/utils/setupTypography.js
"use client";

import { useEffect } from 'react';
import { cssVariables as typographyVariables } from '@/theme/typographyConfig';
import { cssVariables as themeVariables } from '@/theme/themeConfig';

export default function useTypographySetup() {
  useEffect(() => {
    // Set typography CSS variables
    Object.entries(typographyVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Also set theme CSS variables
    Object.entries(themeVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);
}