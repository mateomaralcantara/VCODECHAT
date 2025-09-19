// VCoder Typography System
// Reusable typography components with design tokens

import React from 'react';
import { useTheme } from './ThemeProvider.js';

// Base Text component with all typography variants
export const Text = ({ 
  as: Component = 'span',
  variant = 'body',
  weight = 'normal',
  color = 'primary',
  className = '',
  children,
  ...props 
}) => {
  const { tokens } = useTheme();

  const variantClasses = {
    display: 'text-3xl leading-tight font-semibold',
    title: 'text-2xl leading-tight font-semibold',
    heading: 'text-xl leading-tight font-medium',
    subheading: 'text-lg leading-normal font-medium',
    body: 'text-base leading-normal',
    small: 'text-sm leading-normal',
    caption: 'text-xs leading-normal',
    code: 'text-sm font-mono leading-normal',
    mono: 'font-mono leading-normal'
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colorClasses = {
    primary: 'text-foreground-primary',
    secondary: 'text-foreground-secondary',
    tertiary: 'text-foreground-tertiary',
    inverse: 'text-foreground-inverse',
    accent: 'text-accent-primary',
    error: 'text-semantic-error',
    warning: 'text-semantic-warning',
    success: 'text-semantic-success',
    info: 'text-semantic-info'
  };

  const classes = [
    variantClasses[variant],
    weightClasses[weight],
    colorClasses[color],
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Specific typography components for common use cases
export const Display = (props) => <Text as="h1" variant="display" {...props} />;
export const Title = (props) => <Text as="h2" variant="title" {...props} />;
export const Heading = (props) => <Text as="h3" variant="heading" {...props} />;
export const Subheading = (props) => <Text as="h4" variant="subheading" {...props} />;
export const Body = (props) => <Text variant="body" {...props} />;
export const Small = (props) => <Text variant="small" {...props} />;
export const Caption = (props) => <Text variant="caption" {...props} />;
export const Code = (props) => <Text as="code" variant="code" {...props} />;
export const Mono = (props) => <Text variant="mono" {...props} />;

// Link component with proper styling
export const Link = ({ 
  href,
  external = false,
  className = '',
  children,
  ...props 
}) => {
  const baseClasses = 'text-accent-primary hover:text-accent-secondary focus:text-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50 transition-colors duration-fast';
  
  const classes = [baseClasses, className].filter(Boolean).join(' ');

  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};