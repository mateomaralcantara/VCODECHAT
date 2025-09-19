// VCoder Theme System
// Complete theming solution with dark, light, and high-contrast modes

import { colorTokensBase } from './tokens.js';

// VCoder Dark Theme
export const vcoderDarkTheme = {
  name: 'VCoder Dark',
  type: 'dark',
  colors: {
    // Background hierarchy
    background: {
      primary: '#0d1117',      // Main editor background
      secondary: '#161b22',    // Sidebar, panels
      tertiary: '#21262d',     // Elevated elements
      overlay: '#30363d',      // Modals, dropdowns
      glass: 'rgba(13, 17, 23, 0.8)'
    },

    // Foreground hierarchy
    foreground: {
      primary: '#f0f6fc',      // Main text
      secondary: '#8b949e',    // Secondary text
      tertiary: '#6e7681',     // Muted text
      inverse: '#0d1117'       // Text on light backgrounds
    },

    // Accent colors - Purple/Violet scheme
    accent: {
      primary: '#8b5cf6',      // Primary accent (violet-500)
      secondary: '#a78bfa',    // Secondary accent (violet-400)
      tertiary: '#c4b5fd',     // Tertiary accent (violet-300)
      muted: '#3730a3'         // Muted accent (violet-800)
    },

    // Interactive states
    interactive: {
      hover: 'rgba(139, 92, 246, 0.1)',
      active: 'rgba(139, 92, 246, 0.2)',
      focus: 'rgba(139, 92, 246, 0.3)',
      disabled: '#484f58',
      border: '#30363d',
      borderHover: '#8b5cf6'
    },

    // Semantic colors
    semantic: {
      error: '#f85149',
      warning: '#d29922',
      success: '#3fb950',
      info: '#58a6ff',
      errorBg: 'rgba(248, 81, 73, 0.1)',
      warningBg: 'rgba(210, 153, 34, 0.1)',
      successBg: 'rgba(63, 185, 80, 0.1)',
      infoBg: 'rgba(88, 166, 255, 0.1)'
    },

    // Syntax highlighting
    syntax: {
      keyword: '#ff7b72',      // Keywords (if, function, etc.)
      string: '#a5d6ff',       // Strings
      number: '#79c0ff',       // Numbers
      comment: '#8b949e',      // Comments
      function: '#d2a8ff',     // Function names
      variable: '#ffa657',     // Variables
      type: '#7ee787',         // Types
      property: '#79c0ff',     // Object properties
      operator: '#ff7b72',     // Operators
      punctuation: '#e6edf3'   // Punctuation
    },

    // UI Components
    ui: {
      // Activity Bar
      activityBar: {
        background: '#161b22',
        foreground: '#8b949e',
        activeForeground: '#f0f6fc',
        activeBackground: 'rgba(139, 92, 246, 0.2)',
        border: '#21262d'
      },

      // Sidebar
      sidebar: {
        background: '#161b22',
        foreground: '#8b949e',
        border: '#21262d'
      },

      // Editor
      editor: {
        background: '#0d1117',
        foreground: '#f0f6fc',
        lineHighlight: 'rgba(110, 118, 129, 0.1)',
        selection: 'rgba(88, 166, 255, 0.3)',
        cursor: '#f0f6fc'
      },

      // Tabs
      tabs: {
        activeBackground: '#0d1117',
        activeForeground: '#f0f6fc',
        inactiveBackground: '#161b22',
        inactiveForeground: '#8b949e',
        border: '#21262d',
        hoverBackground: 'rgba(110, 118, 129, 0.1)'
      },

      // Status Bar
      statusBar: {
        background: '#161b22',
        foreground: '#8b949e',
        border: '#21262d'
      },

      // Terminal
      terminal: {
        background: '#0d1117',
        foreground: '#f0f6fc',
        selection: 'rgba(88, 166, 255, 0.3)'
      }
    }
  }
};

// VCoder Light Theme
export const vcoderLightTheme = {
  name: 'VCoder Light',
  type: 'light',
  colors: {
    // Background hierarchy
    background: {
      primary: '#ffffff',      // Main editor background
      secondary: '#f6f8fa',    // Sidebar, panels
      tertiary: '#f1f3f4',     // Elevated elements
      overlay: '#ffffff',      // Modals, dropdowns
      glass: 'rgba(255, 255, 255, 0.8)'
    },

    // Foreground hierarchy
    foreground: {
      primary: '#1f2328',      // Main text
      secondary: '#656d76',    // Secondary text
      tertiary: '#8c959f',     // Muted text
      inverse: '#ffffff'       // Text on dark backgrounds
    },

    // Accent colors - Blue scheme
    accent: {
      primary: '#0969da',      // Primary accent (blue-600)
      secondary: '#0550ae',    // Secondary accent (blue-700)
      tertiary: '#0366d6',     // Tertiary accent (blue-500)
      muted: '#dbeafe'         // Muted accent (blue-100)
    },

    // Interactive states
    interactive: {
      hover: 'rgba(9, 105, 218, 0.1)',
      active: 'rgba(9, 105, 218, 0.2)',
      focus: 'rgba(9, 105, 218, 0.3)',
      disabled: '#8c959f',
      border: '#d1d9e0',
      borderHover: '#0969da'
    },

    // Semantic colors
    semantic: {
      error: '#d1242f',
      warning: '#bf8700',
      success: '#1a7f37',
      info: '#0969da',
      errorBg: 'rgba(209, 36, 47, 0.1)',
      warningBg: 'rgba(191, 135, 0, 0.1)',
      successBg: 'rgba(26, 127, 55, 0.1)',
      infoBg: 'rgba(9, 105, 218, 0.1)'
    },

    // Syntax highlighting
    syntax: {
      keyword: '#cf222e',      // Keywords
      string: '#0a3069',       // Strings
      number: '#0550ae',       // Numbers
      comment: '#8c959f',      // Comments
      function: '#8250df',     // Function names
      variable: '#e36209',     // Variables
      type: '#1a7f37',         // Types
      property: '#0550ae',     // Object properties
      operator: '#cf222e',     // Operators
      punctuation: '#1f2328'   // Punctuation
    },

    // UI Components
    ui: {
      // Activity Bar
      activityBar: {
        background: '#f6f8fa',
        foreground: '#656d76',
        activeForeground: '#1f2328',
        activeBackground: 'rgba(9, 105, 218, 0.2)',
        border: '#d1d9e0'
      },

      // Sidebar
      sidebar: {
        background: '#f6f8fa',
        foreground: '#656d76',
        border: '#d1d9e0'
      },

      // Editor
      editor: {
        background: '#ffffff',
        foreground: '#1f2328',
        lineHighlight: 'rgba(140, 149, 159, 0.1)',
        selection: 'rgba(9, 105, 218, 0.3)',
        cursor: '#1f2328'
      },

      // Tabs
      tabs: {
        activeBackground: '#ffffff',
        activeForeground: '#1f2328',
        inactiveBackground: '#f6f8fa',
        inactiveForeground: '#656d76',
        border: '#d1d9e0',
        hoverBackground: 'rgba(140, 149, 159, 0.1)'
      },

      // Status Bar
      statusBar: {
        background: '#f6f8fa',
        foreground: '#656d76',
        border: '#d1d9e0'
      },

      // Terminal
      terminal: {
        background: '#ffffff',
        foreground: '#1f2328',
        selection: 'rgba(9, 105, 218, 0.3)'
      }
    }
  }
};

// VCoder High Contrast Theme
export const vcoderHighContrastTheme = {
  name: 'VCoder High Contrast',
  type: 'highContrast',
  colors: {
    // Background hierarchy
    background: {
      primary: '#000000',      // Main editor background
      secondary: '#000000',    // Sidebar, panels
      tertiary: '#1a1a1a',     // Elevated elements
      overlay: '#000000',      // Modals, dropdowns
      glass: 'rgba(0, 0, 0, 0.9)'
    },

    // Foreground hierarchy
    foreground: {
      primary: '#ffffff',      // Main text
      secondary: '#ffffff',    // Secondary text
      tertiary: '#ffffff',     // Muted text
      inverse: '#000000'       // Text on light backgrounds
    },

    // Accent colors - High contrast yellow/cyan
    accent: {
      primary: '#ffff00',      // Primary accent (bright yellow)
      secondary: '#00ffff',    // Secondary accent (cyan)
      tertiary: '#ff00ff',     // Tertiary accent (magenta)
      muted: '#808080'         // Muted accent (gray)
    },

    // Interactive states
    interactive: {
      hover: 'rgba(255, 255, 0, 0.3)',
      active: 'rgba(255, 255, 0, 0.5)',
      focus: 'rgba(255, 255, 0, 0.7)',
      disabled: '#808080',
      border: '#ffffff',
      borderHover: '#ffff00'
    },

    // Semantic colors
    semantic: {
      error: '#ff0000',
      warning: '#ffff00',
      success: '#00ff00',
      info: '#00ffff',
      errorBg: 'rgba(255, 0, 0, 0.2)',
      warningBg: 'rgba(255, 255, 0, 0.2)',
      successBg: 'rgba(0, 255, 0, 0.2)',
      infoBg: 'rgba(0, 255, 255, 0.2)'
    },

    // Syntax highlighting
    syntax: {
      keyword: '#00ffff',      // Keywords
      string: '#00ff00',       // Strings
      number: '#ffff00',       // Numbers
      comment: '#808080',      // Comments
      function: '#ff00ff',     // Function names
      variable: '#ffffff',     // Variables
      type: '#00ffff',         // Types
      property: '#ffff00',     // Object properties
      operator: '#ff00ff',     // Operators
      punctuation: '#ffffff'   // Punctuation
    },

    // UI Components
    ui: {
      // Activity Bar
      activityBar: {
        background: '#000000',
        foreground: '#ffffff',
        activeForeground: '#ffff00',
        activeBackground: 'rgba(255, 255, 0, 0.3)',
        border: '#ffffff'
      },

      // Sidebar
      sidebar: {
        background: '#000000',
        foreground: '#ffffff',
        border: '#ffffff'
      },

      // Editor
      editor: {
        background: '#000000',
        foreground: '#ffffff',
        lineHighlight: 'rgba(255, 255, 255, 0.1)',
        selection: 'rgba(255, 255, 0, 0.5)',
        cursor: '#ffff00'
      },

      // Tabs
      tabs: {
        activeBackground: '#000000',
        activeForeground: '#ffff00',
        inactiveBackground: '#000000',
        inactiveForeground: '#ffffff',
        border: '#ffffff',
        hoverBackground: 'rgba(255, 255, 255, 0.1)'
      },

      // Status Bar
      statusBar: {
        background: '#000000',
        foreground: '#ffffff',
        border: '#ffffff'
      },

      // Terminal
      terminal: {
        background: '#000000',
        foreground: '#ffffff',
        selection: 'rgba(255, 255, 0, 0.5)'
      }
    }
  }
};

// Available themes
export const themes = {
  'vcoder-dark': vcoderDarkTheme,
  'vcoder-light': vcoderLightTheme,
  'vcoder-high-contrast': vcoderHighContrastTheme
};

// Default theme
export const defaultTheme = 'vcoder-dark';