import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#FFFFFF'); // useState for randomColor, initial color is white
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
        Generated Color: {color}
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

              // sets randomcolor to user input
              const colorChosen = randomColor({
                hue: event.currentTarget.value,
              });

              if (colorName) {
                setColor(colorChosen);
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
            value={lumName}
            onChange={(event) => {
              setLumName(event.currentTarget.value);

              // sets luminosity to user input
              const lumChosen = randomColor({
                luminosity: event.currentTarget.value,
              });

              if (lumName) {
                setColor(lumChosen);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}
