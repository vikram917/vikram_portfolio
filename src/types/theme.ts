// types/theme.ts

/**
 * Theme type definitions
 */

export type ThemeMode = 'light' | 'dark';

export type ThemeColor = {
  light: string;
  dark: string;
};

export type ThemeColors = {
  primary: ThemeColor;
  secondary: ThemeColor;
  accent: ThemeColor;
  background: ThemeColor;
  foreground: ThemeColor;
  muted: ThemeColor;
  card: ThemeColor;
  cardForeground: ThemeColor;
  border: ThemeColor;
  input: ThemeColor;
  ring: ThemeColor;
  success: ThemeColor;
  warning: ThemeColor;
  error: ThemeColor;
  info: ThemeColor;
};

export type ThemeFontSizes = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
};

export type ThemeFontWeights = {
  thin: number;
  extralight: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
};

export type ThemeSpacing = {
  px: string;
  0: string;
  0.5: string;
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
};

export type ThemeBreakpoints = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

export type ThemeRadii = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
};

export type ThemeShadows = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
};

export type ThemeTransitions = {
  duration: {
    fast: string;
    normal: string;
    slow: string;
    slower: string;
  };
  timing: {
    ease: string;
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
};

export type Theme = {
  mode: ThemeMode;
  colors: ThemeColors;
  fontSizes: ThemeFontSizes;
  fontWeights: ThemeFontWeights;
  spacing: ThemeSpacing;
  breakpoints: ThemeBreakpoints;
  radii: ThemeRadii;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
};

export type ThemeContextType = {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};