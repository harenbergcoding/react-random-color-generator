import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

export default function rdnColor() {
  const [color, setColor] = useState(randomColor());

  function generateRandomColor (event) {
    setColor = randomColor();
  }

  return <div>

  <h1>Random Color Generator</h1>
  <div style = {{
    width: 300,
    height: 300,
    margin: '0 auto',
    border: '1 px solid green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
  }}
  >
    ---
  </div>
  <button onchange = {generateRandomColor}>Generate</button>

  </div>
}

export default App;
