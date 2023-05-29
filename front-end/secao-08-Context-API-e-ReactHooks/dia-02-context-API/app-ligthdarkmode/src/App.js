import React from 'react';
import ThemeProvider from './context/ThemeProvider';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';

function App() {
  return (
    <ThemeProvider>
        <Header />
        <Image />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
