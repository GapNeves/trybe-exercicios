import React from 'react';
import Image from './Image';
import './buttonClick.css';

const URL = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";

class App extends React.Component {
  constructor() {
   super()
   this.handleClick = this.handleClick.bind(this)
   this.state = {
    numeroDeCliuqes: 0,
   }
  }
  handleClick () {
    this.setState((estadoAnterior, _props) =>({
      numeroDeCliuqes: estadoAnterior.numeroDeCliuqes + 1,
    }))
  };

  handleHi () {
    console.log('Ola');
  };
  handleWorld () {
    console.log('Mundo');
  };
  handleDot () {
    console.log('!!!');
  };
  render() {
    const {
      numeroDeCliuqes,
    } = this.state
    return (
      <div>
      <button
        onClick={this.handleHi}
      >
        Ola
      </button>
      <button
        onClick={this.handleWorld}
      >
        Mundo
      </button>
      <button
        onClick={this.handleDot}
      >
        !!!
      </button>
      <main>
        <Image source={ URL } alternativeText="Cute cat staring" />
      </main>
      <div
        className="buttonClick"      
      >
        <button
          onClick={this.handleClick}
          >
          { numeroDeCliuqes }
        </button>
      </div>
    </div>
  );
}
}

export default App;
