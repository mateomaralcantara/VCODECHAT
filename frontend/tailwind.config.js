/** @type {import('tailwindcss').Config} */

// VCoder Design System integration with Tailwind CSS
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Typography
      fontFamily: {
        'ui': ['var(--vcoder-typography-fontFamilies-ui)'],
        'mono': ['var(--vcoder-typography-fontFamilies-mono)'],
        'system': ['var(--vcoder-typography-fontFamilies-system)']
      },
      fontSize: {
        'xs': ['var(--vcoder-typography-fontSizes-xs)', { lineHeight: 'var(--vcoder-typography-lineHeights-normal)' }],
        'sm': ['var(--vcoder-typography-fontSizes-sm)', { lineHeight: 'var(--vcoder-typography-lineHeights-normal)' }],
        'base': ['var(--vcoder-typography-fontSizes-base)', { lineHeight: 'var(--vcoder-typography-lineHeights-normal)' }],
        'lg': ['var(--vcoder-typography-fontSizes-lg)', { lineHeight: 'var(--vcoder-typography-lineHeights-normal)' }],
        'xl': ['var(--vcoder-typography-fontSizes-xl)', { lineHeight: 'var(--vcoder-typography-lineHeights-tight)' }],
        '2xl': ['var(--vcoder-typography-fontSizes-2xl)', { lineHeight: 'var(--vcoder-typography-lineHeights-tight)' }],
        '3xl': ['var(--vcoder-typography-fontSizes-3xl)', { lineHeight: 'var(--vcoder-typography-lineHeights-tight)' }]
      },
      fontWeight: {
        'normal': 'var(--vcoder-typography-fontWeights-normal)',
        'medium': 'var(--vcoder-typography-fontWeights-medium)',
        'semibold': 'var(--vcoder-typography-fontWeights-semibold)',
        'bold': 'var(--vcoder-typography-fontWeights-bold)'
      },
      letterSpacing: {
        'tight': 'var(--vcoder-typography-letterSpacing-tight)',
        'normal': 'var(--vcoder-typography-letterSpacing-normal)',
        'wide': 'var(--vcoder-typography-letterSpacing-wide)'
      },

      // Spacing (8pt grid system)
      spacing: {
        '1': 'var(--vcoder-spacing-1)',
        '2': 'var(--vcoder-spacing-2)',
        '3': 'var(--vcoder-spacing-3)',
        '4': 'var(--vcoder-spacing-4)',
        '5': 'var(--vcoder-spacing-5)',
        '6': 'var(--vcoder-spacing-6)',
        '8': 'var(--vcoder-spacing-8)',
        '10': 'var(--vcoder-spacing-10)',
        '12': 'var(--vcoder-spacing-12)',
        '16': 'var(--vcoder-spacing-16)',
        '20': 'var(--vcoder-spacing-20)',
        '24': 'var(--vcoder-spacing-24)',
        '32': 'var(--vcoder-spacing-32)',
        '40': 'var(--vcoder-spacing-40)',
        '48': 'var(--vcoder-spacing-48)',
        '56': 'var(--vcoder-spacing-56)',
        '64': 'var(--vcoder-spacing-64)'
      },

      // Border radius
      borderRadius: {
        'none': 'var(--vcoder-radius-none)',
        'sm': 'var(--vcoder-radius-sm)',
        'DEFAULT': 'var(--vcoder-radius-base)',
        'md': 'var(--vcoder-radius-md)',
        'lg': 'var(--vcoder-radius-lg)',
        'xl': 'var(--vcoder-radius-xl)',
        '2xl': 'var(--vcoder-radius-2xl)',
        'full': 'var(--vcoder-radius-full)'
      },

      // Colors - using CSS custom properties for theme switching
      colors: {
        // Background colors
        'background-primary': 'var(--vcoder-colors-background-primary)',
        'background-secondary': 'var(--vcoder-colors-background-secondary)',
        'background-tertiary': 'var(--vcoder-colors-background-tertiary)',
        'background-overlay': 'var(--vcoder-colors-background-overlay)',
        'background-glass': 'var(--vcoder-colors-background-glass)',

        // Foreground colors
        'foreground-primary': 'var(--vcoder-colors-foreground-primary)',
        'foreground-secondary': 'var(--vcoder-colors-foreground-secondary)',
        'foreground-tertiary': 'var(--vcoder-colors-foreground-tertiary)',
        'foreground-inverse': 'var(--vcoder-colors-foreground-inverse)',

        // Accent colors
        'accent-primary': 'var(--vcoder-colors-accent-primary)',
        'accent-secondary': 'var(--vcoder-colors-accent-secondary)',
        'accent-tertiary': 'var(--vcoder-colors-accent-tertiary)',
        'accent-muted': 'var(--vcoder-colors-accent-muted)',

        // Interactive states
        'interactive-hover': 'var(--vcoder-colors-interactive-hover)',
        'interactive-active': 'var(--vcoder-colors-interactive-active)',
        'interactive-focus': 'var(--vcoder-colors-interactive-focus)',
        'interactive-disabled': 'var(--vcoder-colors-interactive-disabled)',
        'interactive-border': 'var(--vcoder-colors-interactive-border)',
        'interactive-border-hover': 'var(--vcoder-colors-interactive-borderHover)',

        // Semantic colors
        'semantic-error': 'var(--vcoder-colors-semantic-error)',
        'semantic-warning': 'var(--vcoder-colors-semantic-warning)',
        'semantic-success': 'var(--vcoder-colors-semantic-success)',
        'semantic-info': 'var(--vcoder-colors-semantic-info)',
        'semantic-error-bg': 'var(--vcoder-colors-semantic-errorBg)',
        'semantic-warning-bg': 'var(--vcoder-colors-semantic-warningBg)',
        'semantic-success-bg': 'var(--vcoder-colors-semantic-successBg)',
        'semantic-info-bg': 'var(--vcoder-colors-semantic-infoBg)',

        // UI Component colors
        'ui-activity-bar-bg': 'var(--vcoder-colors-ui-activityBar-background)',
        'ui-activity-bar-fg': 'var(--vcoder-colors-ui-activityBar-foreground)',
        'ui-activity-bar-active-fg': 'var(--vcoder-colors-ui-activityBar-activeForeground)',
        'ui-activity-bar-active-bg': 'var(--vcoder-colors-ui-activityBar-activeBackground)',
        'ui-activity-bar-border': 'var(--vcoder-colors-ui-activityBar-border)',

        'ui-sidebar-bg': 'var(--vcoder-colors-ui-sidebar-background)',
        'ui-sidebar-fg': 'var(--vcoder-colors-ui-sidebar-foreground)',
        'ui-sidebar-border': 'var(--vcoder-colors-ui-sidebar-border)',

        'ui-editor-bg': 'var(--vcoder-colors-ui-editor-background)',
        'ui-editor-fg': 'var(--vcoder-colors-ui-editor-foreground)',
        'ui-editor-line-highlight': 'var(--vcoder-colors-ui-editor-lineHighlight)',
        'ui-editor-selection': 'var(--vcoder-colors-ui-editor-selection)',
        'ui-editor-cursor': 'var(--vcoder-colors-ui-editor-cursor)',

        'ui-tabs-active-bg': 'var(--vcoder-colors-ui-tabs-activeBackground)',
        'ui-tabs-active-fg': 'var(--vcoder-colors-ui-tabs-activeForeground)',
        'ui-tabs-inactive-bg': 'var(--vcoder-colors-ui-tabs-inactiveBackground)',
        'ui-tabs-inactive-fg': 'var(--vcoder-colors-ui-tabs-inactiveForeground)',
        'ui-tabs-border': 'var(--vcoder-colors-ui-tabs-border)',
        'ui-tabs-hover-bg': 'var(--vcoder-colors-ui-tabs-hoverBackground)',

        'ui-status-bar-bg': 'var(--vcoder-colors-ui-statusBar-background)',
        'ui-status-bar-fg': 'var(--vcoder-colors-ui-statusBar-foreground)',
        'ui-status-bar-border': 'var(--vcoder-colors-ui-statusBar-border)',

        'ui-terminal-bg': 'var(--vcoder-colors-ui-terminal-background)',
        'ui-terminal-fg': 'var(--vcoder-colors-ui-terminal-foreground)',
        'ui-terminal-selection': 'var(--vcoder-colors-ui-terminal-selection)'
      },

      // Box shadows
      boxShadow: {
        'none': 'var(--vcoder-shadows-none)',
        'sm': 'var(--vcoder-shadows-sm)',
        'DEFAULT': 'var(--vcoder-shadows-base)',
        'md': 'var(--vcoder-shadows-md)',
        'lg': 'var(--vcoder-shadows-lg)',
        'xl': 'var(--vcoder-shadows-xl)',
        'inner': 'var(--vcoder-shadows-inner)',
        'outline': 'var(--vcoder-shadows-outline)'
      },

      // Animation timings
      transitionDuration: {
        'fast': 'var(--vcoder-animation-durations-fast)',
        'normal': 'var(--vcoder-animation-durations-normal)',
        'slow': 'var(--vcoder-animation-durations-slow)',
        'slower': 'var(--vcoder-animation-durations-slower)'
      },
      transitionTimingFunction: {
        'ease-out': 'var(--vcoder-animation-easings-easeOut)',
        'ease-in': 'var(--vcoder-animation-easings-easeIn)',
        'ease-in-out': 'var(--vcoder-animation-easings-easeInOut)',
        'spring': 'var(--vcoder-animation-easings-spring)'
      },

      // Z-index scale
      zIndex: {
        'auto': 'var(--vcoder-zIndex-auto)',
        '0': 'var(--vcoder-zIndex-0)',
        '10': 'var(--vcoder-zIndex-10)',
        '20': 'var(--vcoder-zIndex-20)',
        '30': 'var(--vcoder-zIndex-30)',
        '40': 'var(--vcoder-zIndex-40)',
        '50': 'var(--vcoder-zIndex-50)',
        'modal': 'var(--vcoder-zIndex-modal)',
        'popover': 'var(--vcoder-zIndex-popover)',
        'tooltip': 'var(--vcoder-zIndex-tooltip)',
        'notification': 'var(--vcoder-zIndex-notification)'
      },

      // Custom utilities
      opacity: {
        '5': 'var(--vcoder-opacity-5)',
        '10': 'var(--vcoder-opacity-10)',
        '20': 'var(--vcoder-opacity-20)',
        '25': 'var(--vcoder-opacity-25)',
        '30': 'var(--vcoder-opacity-30)',
        '40': 'var(--vcoder-opacity-40)',
        '50': 'var(--vcoder-opacity-50)',
        '60': 'var(--vcoder-opacity-60)',
        '70': 'var(--vcoder-opacity-70)',
        '75': 'var(--vcoder-opacity-75)',
        '80': 'var(--vcoder-opacity-80)',
        '90': 'var(--vcoder-opacity-90)',
        '95': 'var(--vcoder-opacity-95)'
      }
    },
  },
  plugins: [
    // Custom plugin for VCoder utilities
    function({ addUtilities, addComponents, theme }) {
      // Focus ring utilities
      addUtilities({
        '.focus-ring': {
          '&:focus': {
            outlineOffset: '2px',
            outline: '2px solid var(--vcoder-colors-interactive-focus)',
            borderRadius: theme('borderRadius.md')
          }
        },
        '.focus-ring-accent': {
          '&:focus': {
            outlineOffset: '2px',
            outline: '2px solid var(--vcoder-colors-accent-primary)',
            borderRadius: theme('borderRadius.md')
          }
        }
      });

      // Glass effect utilities
      addUtilities({
        '.glass-effect': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'var(--vcoder-colors-background-glass)',
          border: '1px solid var(--vcoder-colors-interactive-border)'
        },
        '.no-glass .glass-effect': {
          backdropFilter: 'none',
          backgroundColor: 'var(--vcoder-colors-background-secondary)'
        }
      });

      // Scrollbar utilities
      addUtilities({
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--vcoder-colors-interactive-border)',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'var(--vcoder-colors-interactive-border-hover)'
            }
          }
        },
        '.no-custom-scrollbars .custom-scrollbar': {
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none'
        }
      });

      // Animation utilities
      addUtilities({
        '.animate-in': {
          animationFillMode: 'forwards'
        },
        '.animate-out': {
          animationFillMode: 'forwards'
        },
        '.no-animations *': {
          animationDuration: '0ms !important',
          transitionDuration: '0ms !important'
        }
      });
    }
  ],
}