import React from 'react';
import './App.css';
import Button from './components/Button';
import Gallery from './components/Gallery';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Show me a CAT!!</h1>
        <Gallery />
        <Button />
      </div>
    );
  }
}

export default App;
