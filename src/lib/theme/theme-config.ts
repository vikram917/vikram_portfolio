// Configuration for typography, colors, spacing, and theme variants
// lib/theme/theme-config.ts

import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export type ThemeMode = 'light' | 'dark' ;

interface ThemeConfig {
  colors: typeof colors;
  typography: typeof typography;
  spacing: typeof spacing;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  boxShadow: {
    sm: string;
    md: string;
    lg: string;
  };
  transition: {
    default: string;
    slow: string;
    fast: string;
  };
}

export const themeConfig: ThemeConfig = {
  colors,
  typography,
  spacing,
  borderRadius: {
    sm: '0.125rem',   // 2px
    md: '0.25rem',    // 4px
    lg: '0.5rem',     // 8px
    xl: '1rem',       // 16px
    full: '9999px',   // Fully rounded
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transition: {
    default: 'all 0.2s ease',
    slow: 'all 0.4s ease',
    fast: 'all 0.1s ease',
  },
};

// Theme mode constants
export const THEME_MODE_STORAGE_KEY = 'portfolio-theme-mode';
export const DEFAULT_THEME_MODE: ThemeMode = 'light';

export default themeConfig;