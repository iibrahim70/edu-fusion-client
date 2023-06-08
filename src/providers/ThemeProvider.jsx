// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial theme state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const getThemeColors = () => {
    if (theme === 'dark') {
      return {
        background: '#000000',
        text: '#ffffff',
        accent: '#ff00ff',
      };
    } else {
      return {
        background: '#ffffff',
        text: '#000000',
        accent: '#00ffff',
      };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeColors }}>
      <div style={{ background: getThemeColors().background, color: getThemeColors().text }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
