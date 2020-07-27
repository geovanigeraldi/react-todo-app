import './App.css';
import React, { useState } from 'react';

import Interval from './components/Interval'
import Soma from './components/Soma'
import Media from './components/Media'
import Sorterio from './components/Sorteio'


function App() {
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercicio react-redux simpes</h1>
      <div className="linha">
        <Interval min={min} max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        >
        </Interval>
      </div>
      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorterio min={min} max={max}></Sorterio>
      </div>
    </div>
  );
}

export default App;
