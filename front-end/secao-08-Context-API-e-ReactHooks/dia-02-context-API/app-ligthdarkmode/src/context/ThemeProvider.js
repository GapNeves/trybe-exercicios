import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'ligth' : 'dark');
  }

  return(
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={ themeColor }>
        { children }
      </div>
    </ThemeContext.Provider>
  )
}