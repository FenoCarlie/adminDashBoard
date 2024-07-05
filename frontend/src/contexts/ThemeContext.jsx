// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to manage and provide the theme
export const ThemeProvider = ({ children }) => {
  // Initialize the theme from sessionStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return sessionStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const themes = ["light", "dark", "red", "blue", "green"];

    // Remove all theme classes
    themes.forEach((t) => root.classList.remove(t));
    // Add the current theme class
    root.classList.add(theme);

    // Store the theme in sessionStorage
    sessionStorage.setItem("theme", theme);
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
