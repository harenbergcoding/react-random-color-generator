import './App.css';

import { useState } from 'react';

import randomColor from 'randomcolor';

function App() {

  const [color, setColor] = useState('#FFFFFF'); // useState for randomColor
  const [colorName, setColorName] = useState(''); // useState for color inputs
  const [lumName, setlumName] = useState(''); // useState for color inputs
  // const [width, setWidth] = useState('150'); // useState for color inputs
  // const [height, setHeight] = useState('150'); // useState for color inputs

  return <div>

    <h1>Random Color Generator</h1>
    <div className ='colorBox' style = {{
    width: 350,
    height: 350,
    margin: '0 auto',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    backgroundColor: color,
    borderRadius: '50%',
    
  }}
  >
   Generated color: {color}
  </div>

  <br/>
  <br/>

  <button onClick ={ () => {
    setColor(randomColor()) // change state to new color
  } }
  >Generate</button>

  <br/>
  <br/>

{/* Controlled component */}
<div>Input Color</div>
  <input
    // Use state variable 
    value = {colorName} //value = empty

    // define changehandler function

    onChange = { (event) => {
      setColorName(event.currentTarget.value); // set colorName to user input
    
    // update the state variable 

    const colorChosen = randomColor({hue: event.currentTarget.value}); // randomColor equals color = user input

     if (colorChosen){
      setColor(colorChosen)
     }}
    } 
  />

<br/>
<br/>

  {/* Controlled component */}
<div>Input Luminosity</div>
  <input
    // Use state variable 
    value = {lumName} //value = empty

    // define changehandler function

    onChange = { (event) => {
      setlumName(event.currentTarget.value); // set lumName to user input
    
    // update the state variable 

    const lumChosen = randomColor({luminosity: event.currentTarget.value}); // randomColor equals color = user input

     if (lumChosen){
      setColor(lumChosen)
     }}
    } 

  />

<br/>
<br/>

  </div>
  
}

export default App;
