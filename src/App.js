import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

function App() {
  const rdnColor = randomColor();
  const [color, setColor] = useState('hi');
 
  return <div>

    <h1>Random Color Generator</h1>
    <div style = {{
    width: 300,
    height: 300,
    margin: '0 auto',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 60,
  }}
  >
    {color}
  </div>
  <br></br>
  <button onClick ={ () => {
    setColor(rdnColor)
    } }>Generate</button>

  </div>
}

export default App;
