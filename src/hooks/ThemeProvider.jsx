import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'white' : 'dark');
  };

  return (
    <div className={`theme-${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;
