// VCoder Theme Provider
// React Context provider for theme management

import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, defaultTheme } from './themes.js';
import { designTokens, generateCSSVariables } from './tokens.js';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or use default
    return localStorage.getItem('vcoder-theme') || defaultTheme;
  });

  const [preferences, setPreferences] = useState(() => {
    // Load preferences from localStorage
    const savedPrefs = localStorage.getItem('vcoder-theme-preferences');
    return savedPrefs ? JSON.parse(savedPrefs) : {
      animations: true,
      glassEffects: true,
      roundedCorners: true,
      customScrollbars: true
    };
  });

  const theme = themes[currentTheme];

  // Apply CSS custom properties to document root
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply design tokens
    const tokenVars = generateCSSVariables(designTokens);
    Object.entries(tokenVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply theme colors
    const themeVars = generateCSSVariables({ colors: theme.colors });
    Object.entries(themeVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Apply theme class to body
    document.body.className = `vcoder-theme-${theme.type}`;

    // Apply preferences
    document.body.classList.toggle('vcoder-no-animations', !preferences.animations);
    document.body.classList.toggle('vcoder-no-glass', !preferences.glassEffects);
    document.body.classList.toggle('vcoder-no-rounded', !preferences.roundedCorners);
    document.body.classList.toggle('vcoder-no-custom-scrollbars', !preferences.customScrollbars);

  }, [currentTheme, theme, preferences]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('vcoder-theme', currentTheme);
  }, [currentTheme]);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('vcoder-theme-preferences', JSON.stringify(preferences));
  }, [preferences]);

  const switchTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  const updatePreferences = (newPrefs) => {
    setPreferences(prev => ({ ...prev, ...newPrefs }));
  };

  const value = {
    theme,
    currentTheme,
    availableThemes: Object.keys(themes),
    switchTheme,
    preferences,
    updatePreferences,
    tokens: designTokens
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;