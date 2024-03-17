import { useState } from 'react';
import './TrafficLightApp.css'

function TrafficLightApp() {
  const lightColors = ['red', 'green', 'yellow'];
  const [indexColor, setIndexColor] = useState(0);

  const nextLight = () => {
    // 0
    // (0 + 1) % 2 = 1
    setIndexColor((indexColor + 1) % lightColors.length); 
  }

  return (
    <div>
      <h1>Traffic Light</h1>
      <button onClick={nextLight}>Next Light</button>
      <span> Current color: {lightColors[indexColor].toUpperCase()}</span>
      <div>
        <button className={`light ${lightColors[indexColor] === 'red' ? 'light-red' : ''}`}></button>
        <button className={`light ${lightColors[indexColor] === 'green' ? 'light-green' : ''}`}></button>
        <button className={`light ${lightColors[indexColor] === 'yellow' ? 'light-yellow' : ''}`}></button>
      </div>
    </div>
  )
}

export default TrafficLightApp;