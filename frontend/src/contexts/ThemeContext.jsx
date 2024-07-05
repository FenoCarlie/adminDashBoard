// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const themes = ["light", "dark", "red", "blue", "green"];

    // Remove all theme classes
    themes.forEach((t) => root.classList.remove(t));
    // Add the current theme class
    root.classList.add(theme);
  }, [theme]); // Re-run this effect whenever 'theme' changes

  // Function to change the theme
  const changeTheme = (newTheme) => {
    if (["light", "dark", "red", "blue", "green"].includes(newTheme)) {
      setTheme(newTheme);
    } else {
      console.warn(`Unknown theme: ${newTheme}`);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
