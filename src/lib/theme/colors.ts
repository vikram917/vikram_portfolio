// Color palette definitions with light and dark variants
// lib/theme/colors.ts

// Base color palette
export const palette = {
    // Primary brand colors
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
  
    // Secondary/accent color
    secondary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
  
    // Grayscale
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
  
    // Semantic colors
    success: {
      50: '#ecfdf5',
      500: '#10b981',
      900: '#064e3b',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      900: '#7f1d1d',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
  };
  
  // Theme-specific color mappings
  export const colors = {
    // Light mode colors
    light: {
      background: {
        primary: palette.gray[50],
        secondary: '#ffffff',
        tertiary: palette.gray[100],
      },
      text: {
        primary: palette.gray[900],
        secondary: palette.gray[700],
        tertiary: palette.gray[500],
        accent: palette.primary[700],
      },
      border: {
        light: palette.gray[200],
        medium: palette.gray[300],
        heavy: palette.gray[400],
      },
      button: {
        primary: {
          background: palette.primary[600],
          hover: palette.primary[700],
          text: '#ffffff',
        },
        secondary: {
          background: palette.gray[200],
          hover: palette.gray[300],
          text: palette.gray[900],
        },
        accent: {
          background: palette.secondary[600],
          hover: palette.secondary[700],
          text: '#ffffff',
        },
      },
      status: {
        success: palette.success[500],
        warning: palette.warning[500],
        error: palette.error[500],
        info: palette.info[500],
      },
      card: {
        background: '#ffffff',
        shadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: palette.gray[200],
      },
      form: {
        inputBg: '#ffffff',
        inputBorder: palette.gray[300],
        focus: palette.primary[500],
      },
    },
  
    // Dark mode colors
    dark: {
      background: {
        primary: palette.gray[900],
        secondary: palette.gray[800],
        tertiary: palette.gray[700],
      },
      text: {
        primary: palette.gray[50],
        secondary: palette.gray[300],
        tertiary: palette.gray[400],
        accent: palette.primary[300],
      },
      border: {
        light: palette.gray[700],
        medium: palette.gray[600],
        heavy: palette.gray[500],
      },
      button: {
        primary: {
          background: palette.primary[500],
          hover: palette.primary[400],
          text: palette.gray[900],
        },
        secondary: {
          background: palette.gray[700],
          hover: palette.gray[600],
          text: palette.gray[100],
        },
        accent: {
          background: palette.secondary[500],
          hover: palette.secondary[400],
          text: '#ffffff',
        },
      },
      status: {
        success: palette.success[500],
        warning: palette.warning[500],
        error: palette.error[500],
        info: palette.info[500],
      },
      card: {
        background: palette.gray[800],
        shadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        border: palette.gray[700],
      },
      form: {
        inputBg: palette.gray[800],
        inputBorder: palette.gray[600],
        focus: palette.primary[400],
      },
    },
  };