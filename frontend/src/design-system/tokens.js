// VCoder Design Tokens
// Visual design system foundation

export const designTokens = {
  // Typography Scale
  typography: {
    fontFamilies: {
      ui: ['Inter Variable', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      mono: ['JetBrains Mono Variable', 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Menlo', 'monospace'],
      system: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem' // 30px
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em'
    }
  },

  // Spacing Scale (8pt grid system)
  spacing: {
    '0': '0',
    '1': '0.125rem',  // 2px
    '2': '0.25rem',   // 4px
    '3': '0.375rem',  // 6px
    '4': '0.5rem',    // 8px
    '5': '0.625rem',  // 10px
    '6': '0.75rem',   // 12px
    '8': '1rem',      // 16px
    '10': '1.25rem',  // 20px
    '12': '1.5rem',   // 24px
    '16': '2rem',     // 32px
    '20': '2.5rem',   // 40px
    '24': '3rem',     // 48px
    '32': '4rem',     // 64px
    '40': '5rem',     // 80px
    '48': '6rem',     // 96px
    '56': '7rem',     // 112px
    '64': '8rem'      // 128px
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px'
  },

  // Opacity Scale
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1'
  },

  // Shadows
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
  },

  // Animation Timings
  animation: {
    durations: {
      fast: '120ms',
      normal: '160ms',
      slow: '240ms',
      slower: '320ms'
    },
    easings: {
      easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  },

  // Z-Index Scale
  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    modal: '1000',
    popover: '1010',
    tooltip: '1020',
    notification: '1030'
  }
};

// Color Tokens Base (will be extended by themes)
export const colorTokensBase = {
  // Neutral grays (used across all themes)
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a'
  },

  // Status colors (consistent across themes)
  status: {
    error: '#ef4444',
    warning: '#f59e0b',
    success: '#10b981',
    info: '#3b82f6'
  }
};

// Export function to generate CSS custom properties
export const generateCSSVariables = (tokens) => {
  const cssVars = {};
  
  const flatten = (obj, prefix = '') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flatten(value, newKey);
      } else {
        const cssVar = Array.isArray(value) ? value.join(', ') : value;
        cssVars[`--vcoder-${newKey}`] = cssVar;
      }
    });
  };
  
  flatten(tokens);
  return cssVars;
};