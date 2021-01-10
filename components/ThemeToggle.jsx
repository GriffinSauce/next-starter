import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const [isMounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!isMounted) return null;

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <select
      className="font-semibold border border-gray-100 rounded"
      value={theme}
      onChange={handleChange}
    >
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
    </select>
  );
};

export default ThemeToggle;
