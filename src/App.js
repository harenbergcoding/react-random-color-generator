import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#FFFFFF'); // useState for randomColor
  const [colorName, setColorName] = useState(''); // useState for color inputs
  const [lumName, setLumName] = useState(''); // useState for luminosity inputs

  // const [height, setHeight] = useState('150'); // useState for color inputs

  return (
    <div id="app">
      <h1>Random Color Generator</h1>
      <div
        className="colorBox"
        style={{
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
          marginBottom: 50,
        }}
      >
        Generated color: {color}
      </div>
      <button
        style={{
          marginBottom: 20,
          borderRadius: 4,
          width: 170,
          height: 25,
          backgroundColor: 'lightseagreen',
          color: 'white',
          fontWeight: 'bold',
        }}
        onClick={() => {
          // updates the state with new color
          setColor(randomColor());
        }}
      >
        Generate
      </button>

      {/* Controlled component */}
      <div>
        <label>
          Input Color <br />
          <input
            style={{ marginBottom: 20, borderRadius: 4 }}
            // initial value is empty
            value={colorName}
            // define changehandler function
            onChange={(event) => {
              // set colorName to user input
              setColorName(event.currentTarget.value);

              const colorChosen = randomColor({
                hue: event.currentTarget.value,
                format: 'rgb',
              }); // randomColor equals color = user input
              if (colorChosen) {
                setColor(colorChosen);
              } else {
                randomColor('#FFFFFF'); // does not work
              }
            }}
          />
          <br />
        </label>
        {/* Controlled component */}
        <label>
          Input Luminosity <br />
          <input
            style={{ marginBottom: 20, borderRadius: 4 }}
            // Use state variable
            value={lumName} // cvalue = empty
            // define changehandler function

            onChange={(event) => {
              setLumName(event.currentTarget.value); // set lumName to user input

              // update the state variable

              const lumChosen = randomColor({
                luminosity: event.currentTarget.value,
                hue: event.currentTarget.value,
              }); // randomColor equals color = user input

              if (lumChosen) {
                setColor(lumChosen);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}
