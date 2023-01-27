import './App.css';
import React, {useState} from 'react'

function App() {

  return (
    <div className="App">
        <div id="top-section-div">
            <p id="title">Metric/Imperial Unit Conversion</p>
            <input id="input-el" type="text"></input><br />
            <button id="convert-btn">Convert</button>
        </div>
        <div id="bottom-section-div">
            <div id="length-div">
                <h6 id="length-h6">Length (Meter/Feet)</h6>
                <p id="length-p"></p>
            </div>
            <div id="volume-div">
                <h6 id="volume-h6">Volume (Liters/Gallons)</h6>
                <p id="volume-p"></p>
            </div>
            <div id="mass-div">
                <h6 id="mass-h6">Mass (Kilograms/Pounds)</h6>
                <p id="mass-p"></p>
            </div>
        </div>
    </div>
  );
}

export default App;
