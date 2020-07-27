import './App.css';
import React from 'react';

import Interval from './components/Interval'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorterio from './components/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercicio react-redux simples</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorterio></Sorterio>
      </div>
    </div>
  );
}

export default App;