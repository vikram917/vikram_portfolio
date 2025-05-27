// // Theme provider component for light/dark mode
// // components/theme/theme-provider.tsx

// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { ThemeMode, DEFAULT_THEME_MODE, THEME_MODE_STORAGE_KEY } from '@/lib/theme/theme-config';

// type ThemeProviderProps = {
//   children: React.ReactNode;
//   defaultMode?: ThemeMode;
// };

// type ThemeContextType = {
//   mode: ThemeMode;
//   setMode: (mode: ThemeMode) => void;
//   isDark: boolean;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export function ThemeProvider({ 
//   children, 
//   defaultMode = DEFAULT_THEME_MODE 
// }: ThemeProviderProps) {
//   const [mode, setMode] = useState<ThemeMode>(defaultMode);
//   const [isDark, setIsDark] = useState<boolean>(false);

//   // Initialize theme from localStorage and system preference
//   useEffect(() => {
//     const savedMode = localStorage.getItem(THEME_MODE_STORAGE_KEY) as ThemeMode | null;
//     if (savedMode) {
//       setMode(savedMode);
//     }
//   }, []);

//   // Update theme mode in localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
//   }, [mode]);

//   // Apply theme to document
//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove('light', 'dark');

//     if (mode === 'system') {
//       const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//       root.classList.add(systemTheme);
//       setIsDark(systemTheme === 'dark');
//     } else {
//       root.classList.add(mode);
//       setIsDark(mode === 'dark');
//     }
//   }, [mode]);

//   // Listen to system theme changes when in system mode
//   useEffect(() => {
//     if (mode !== 'system') return;

//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
//     const handleChange = () => {
//       const root = window.document.documentElement;
//       const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      
//       root.classList.remove('light', 'dark');
//       root.classList.add(systemTheme);
//       setIsDark(systemTheme === 'dark');
//     };

//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, [mode]);

//   const value = {
//     mode,
//     setMode,
//     isDark,
//   };

//   return (
//     <ThemeContext.Provider value={value}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// }

// Theme provider component for light/dark mode
// components/theme/theme-provider.tsx

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode, DEFAULT_THEME_MODE, THEME_MODE_STORAGE_KEY } from '@/lib/theme/theme-config';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
};

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  defaultMode = DEFAULT_THEME_MODE 
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const savedMode = localStorage.getItem(THEME_MODE_STORAGE_KEY) as ThemeMode | null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Update theme mode in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
  }, [mode]);

  // Apply theme to document using color-scheme for Tailwind v4
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (mode === 'system') {
      // Remove manual color scheme and let system preference take over
      root.style.removeProperty('color-scheme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setIsDark(systemTheme === 'dark');
    } else {
      // Set explicit color scheme
      root.style.colorScheme = mode;
      setIsDark(mode === 'dark');
    }
  }, [mode]);

  // Listen to system theme changes when in system mode
  useEffect(() => {
    if (mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      setIsDark(systemTheme === 'dark');
    };

    // Initial check
    handleChange();

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const value = {
    mode,
    setMode,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}