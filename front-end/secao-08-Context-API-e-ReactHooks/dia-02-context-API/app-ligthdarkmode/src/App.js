import React, { useState } from 'react';
import ThemeProvider from './context/ThemeProvider';

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
    <ThemeProvider>
      <div className={ themeColor }>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
