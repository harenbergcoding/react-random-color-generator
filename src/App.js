import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

function App() {

  const [color, setColor] = useState('#FFFFFF');
 
  return <div>

    <h1>Random Color Generator</h1>
    <div style = {{
    width: 350,
    height: 350,
    margin: '0 auto',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    backgroundColor: color,
    borderRadius: '50%',
    
  }}
  >
   Generated color: {color}
  </div>
  <br></br>
  <button onClick ={ () => {
    setColor(randomColor()) 
  } }
  >Generate</button>

  </div>
}

export default App;
