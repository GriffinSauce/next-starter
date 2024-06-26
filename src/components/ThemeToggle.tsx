'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const [isMounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []); // theme is never defined on build/server

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  if (!isMounted) return null;
  return (
    <select
      className="rounded border border-gray-100 font-semibold"
      value={resolvedTheme}
      data-testid="theme-select"
      aria-label="App theme"
      onChange={handleChange}
    >
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
    </select>
  );
};

export default ThemeToggle;
