import React, { useState } from 'react';
import './styles.css';

function App() {
  // Define a state variable to store the user input
  const [num1, setNum1] = useState(``);
  const [num2, setNum2] = useState(``);
  const [result, setResult] = useState(``);


  // Event handler function to update the state when the input changes
  const handleNum1 = (event) => {
    setNum1(parseInt(event.target.value));
  };
  const handleNum2 = (event) => {
    setNum2(parseInt(event.target.value));
  };
  const add = () => {
    setResult(num1 + num2);
  };

  return (
    <div className='container'>
      <div className='box'>
      <h1>Simple Calculator</h1>
      
      <br></br>
      
      <input
        type="text"
        placeholder="Enter the first number:"
        value={num1}
        onChange={handleNum1}
        
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter the second number:"
        value={num2}
        onChange={handleNum2}
        
        
      />
      <br />
      <br></br>
      <button onClick={add}>+</button>
      <br />
      <h3>The Addition of {num1} and {num2} is {result}</h3>
      
      
      </div>
    </div>
  );
}

export default App;
