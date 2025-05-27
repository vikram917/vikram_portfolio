// Theme switcher component
// components/theme/theme-switcher.tsx

'use client';

import { useTheme } from './theme-provider';
import { useState, useEffect } from 'react';
import { ThemeMode } from '@/lib/theme/theme-config';

export default function ThemeSwitcher() {
  const { mode, setMode, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10"></div>; // Placeholder with same dimensions
  }

  // Theme mode options
  const modeOptions: ThemeMode[] = ['light', 'dark'];

  // Get current icon based on active mode
  const getIcon = () => {
    if (mode === 'light') return SunIcon;
    if (mode === 'dark') return MoonIcon;
    return SunIcon;
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const currentIndex = modeOptions.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modeOptions.length;
    setMode(modeOptions[nextIndex]);
  };

  const Icon = getIcon();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
      title={`Current theme: ${mode}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

// Icons
function SunIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
}

function MoonIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}
