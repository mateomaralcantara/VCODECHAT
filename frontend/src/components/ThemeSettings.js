// VCoder Theme Settings Component
// UI for theme switching and preferences

import React, { useState } from 'react';
import { useTheme } from '../design-system/ThemeProvider.js';
import { Text, Heading } from '../design-system/Typography.js';

export const ThemeSettings = ({ onClose }) => {
  const { theme, currentTheme, availableThemes, switchTheme, preferences, updatePreferences } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeDisplayNames = {
    'vcoder-dark': 'VCoder Dark',
    'vcoder-light': 'VCoder Light',
    'vcoder-high-contrast': 'VCoder High Contrast'
  };

  const themeDescriptions = {
    'vcoder-dark': 'Deep neutral background with violet accents. Perfect for extended coding sessions.',
    'vcoder-light': 'Clean light theme with blue accents. Optimized for daytime productivity.',
    'vcoder-high-contrast': 'Maximum contrast for accessibility. Ideal for users with visual impairments.'
  };

  const handleThemeChange = (themeId) => {
    switchTheme(themeId);
  };

  const handlePreferenceChange = (key, value) => {
    updatePreferences({ [key]: value });
  };

  if (!isOpen) {
    return (
      <div className="theme-settings-trigger">
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-sm"
          title="Theme Settings"
        >
          🎨 Theme
        </button>
      </div>
    );
  }

  return (
    <div className="theme-settings-overlay fixed inset-0 z-modal bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="theme-settings-modal bg-background-secondary border border-interactive-border rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="theme-settings-header p-6 border-b border-interactive-border flex items-center justify-between">
          <div>
            <Heading className="text-foreground-primary">Theme Settings</Heading>
            <Text variant="small" color="secondary" className="mt-1">
              Customize the visual appearance of VCoder
            </Text>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-sm"
            title="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="theme-settings-content p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
          
          {/* Theme Selection */}
          <div className="theme-selection mb-8">
            <Heading variant="subheading" className="mb-4 text-foreground-primary">
              Color Theme
            </Heading>
            
            <div className="theme-options grid gap-4">
              {availableThemes.map(themeId => {
                const isActive = currentTheme === themeId;
                return (
                  <div
                    key={themeId}
                    className={`theme-option p-4 border rounded-lg cursor-pointer transition-all duration-fast ${
                      isActive 
                        ? 'border-accent-primary bg-accent-primary bg-opacity-10' 
                        : 'border-interactive-border hover:border-interactive-border-hover hover:bg-interactive-hover'
                    }`}
                    onClick={() => handleThemeChange(themeId)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`theme-preview w-6 h-6 rounded-full border-2 ${
                            themeId === 'vcoder-dark' ? 'bg-purple-600 border-purple-400' :
                            themeId === 'vcoder-light' ? 'bg-blue-600 border-blue-400' :
                            'bg-yellow-500 border-white'
                          }`} />
                          <Text weight="medium" className="text-foreground-primary">
                            {themeDisplayNames[themeId]}
                          </Text>
                        </div>
                        <Text variant="small" color="secondary">
                          {themeDescriptions[themeId]}
                        </Text>
                      </div>
                      {isActive && (
                        <div className="text-accent-primary text-sm font-medium">
                          ✓ Active
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Preferences */}
          <div className="visual-preferences">
            <Heading variant="subheading" className="mb-4 text-foreground-primary">
              Visual Preferences
            </Heading>
            
            <div className="preferences-grid space-y-4">
              
              {/* Animations */}
              <div className="preference-item flex items-center justify-between p-3 border border-interactive-border rounded-md">
                <div>
                  <Text weight="medium" className="text-foreground-primary">
                    Animations
                  </Text>
                  <Text variant="small" color="secondary">
                    Enable smooth transitions and micro-interactions
                  </Text>
                </div>
                <label className="switch relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.animations}
                    onChange={(e) => handlePreferenceChange('animations', e.target.checked)}
                    className="sr-only"
                  />
                  <span className={`slider absolute inset-0 rounded-full transition-colors duration-fast cursor-pointer ${
                    preferences.animations 
                      ? 'bg-accent-primary' 
                      : 'bg-interactive-border'
                  }`}>
                    <span className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-fast ${
                      preferences.animations ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </span>
                </label>
              </div>

              {/* Glass Effects */}
              <div className="preference-item flex items-center justify-between p-3 border border-interactive-border rounded-md">
                <div>
                  <Text weight="medium" className="text-foreground-primary">
                    Glass Effects
                  </Text>
                  <Text variant="small" color="secondary">
                    Enable blur and transparency effects (may impact performance)
                  </Text>
                </div>
                <label className="switch relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.glassEffects}
                    onChange={(e) => handlePreferenceChange('glassEffects', e.target.checked)}
                    className="sr-only"
                  />
                  <span className={`slider absolute inset-0 rounded-full transition-colors duration-fast cursor-pointer ${
                    preferences.glassEffects 
                      ? 'bg-accent-primary' 
                      : 'bg-interactive-border'
                  }`}>
                    <span className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-fast ${
                      preferences.glassEffects ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </span>
                </label>
              </div>

              {/* Rounded Corners */}
              <div className="preference-item flex items-center justify-between p-3 border border-interactive-border rounded-md">
                <div>
                  <Text weight="medium" className="text-foreground-primary">
                    Rounded Corners
                  </Text>
                  <Text variant="small" color="secondary">
                    Use rounded corners for a softer, modern appearance
                  </Text>
                </div>
                <label className="switch relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.roundedCorners}
                    onChange={(e) => handlePreferenceChange('roundedCorners', e.target.checked)}
                    className="sr-only"
                  />
                  <span className={`slider absolute inset-0 rounded-full transition-colors duration-fast cursor-pointer ${
                    preferences.roundedCorners 
                      ? 'bg-accent-primary' 
                      : 'bg-interactive-border'
                  }`}>
                    <span className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-fast ${
                      preferences.roundedCorners ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </span>
                </label>
              </div>

              {/* Custom Scrollbars */}
              <div className="preference-item flex items-center justify-between p-3 border border-interactive-border rounded-md">
                <div>
                  <Text weight="medium" className="text-foreground-primary">
                    Custom Scrollbars
                  </Text>
                  <Text variant="small" color="secondary">
                    Use themed scrollbars that match the interface
                  </Text>
                </div>
                <label className="switch relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={preferences.customScrollbars}
                    onChange={(e) => handlePreferenceChange('customScrollbars', e.target.checked)}
                    className="sr-only"
                  />
                  <span className={`slider absolute inset-0 rounded-full transition-colors duration-fast cursor-pointer ${
                    preferences.customScrollbars 
                      ? 'bg-accent-primary' 
                      : 'bg-interactive-border'
                  }`}>
                    <span className={`dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-fast ${
                      preferences.customScrollbars ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </span>
                </label>
              </div>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="theme-settings-footer p-6 border-t border-interactive-border bg-background-tertiary">
          <div className="flex items-center justify-between">
            <Text variant="small" color="secondary">
              Current theme: <span className="text-accent-primary font-medium">{themeDisplayNames[currentTheme]}</span>
            </Text>
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="btn"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact theme switcher for use in status bar or activity bar
export const CompactThemeSwitcher = () => {
  const { currentTheme, switchTheme } = useTheme();
  
  const themeIcons = {
    'vcoder-dark': '🌙',
    'vcoder-light': '☀️',
    'vcoder-high-contrast': '🔆'
  };

  const nextTheme = {
    'vcoder-dark': 'vcoder-light',
    'vcoder-light': 'vcoder-high-contrast',
    'vcoder-high-contrast': 'vcoder-dark'
  };

  return (
    <button
      onClick={() => switchTheme(nextTheme[currentTheme])}
      className="compact-theme-switcher p-2 rounded-md hover:bg-interactive-hover transition-colors duration-fast focus-ring"
      title={`Switch to ${nextTheme[currentTheme].replace('vcoder-', '').replace('-', ' ')}`}
    >
      <span className="text-lg">
        {themeIcons[currentTheme]}
      </span>
    </button>
  );
};