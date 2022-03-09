import React, { useState } from 'react';
import './App.css';
import {Counter} from './Components/Counter'
//import {Counter1} from './Components/Counter2'


function App() {
  const[ counter, setCounter] = useState(0);
  const handleIncrement = (value) =>{
     setCounter(counter + value);
  }
  const handleDecrement = (value) =>{
     setCounter(counter - value);
  }
  return (
    <table>
      <tr>
        <th> <h1>{counter}</h1></th>
      </tr>
      <tr>
        <Counter value={3} count={counter} increment={handleIncrement}
        decrement={handleDecrement}/>
        <Counter  value={1} count={counter} decrement={handleDecrement} 
        increment={handleIncrement}/>
      </tr>
      <tr>
        <Counter value={5} count={counter} increment={handleIncrement}
        decrement={handleDecrement}/>
        <Counter  value={8} count={counter} decrement={handleDecrement} 
        increment={handleIncrement}/>
      </tr>
    
    </table>
  );
}

export default App;
