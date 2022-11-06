import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button onClick={() => setButtonColor(newButtonColor)} style={{ backgroundColor: disabled ? 'gray' : buttonColor }} disabled={disabled}>Change to {newButtonColor}</button>
      <input type="checkbox" id="disable-button-checkbox" onChange={(e) => setDisabled(e.target.checked)} />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
