'use client';

import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const systemPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme || (systemPreference ? 'dark' : 'light');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-blue-500 text-gray-100 border-2 border-blue-700 rounded-2xl w-48"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
