import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'ligth' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={ themeColor }>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
