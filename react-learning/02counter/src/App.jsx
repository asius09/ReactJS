import { useState } from "react";
import React from "react";

function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    if (counter === 20) return;
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Value is Zero");
    }
  };
  return (
    <>
      <h1>Chai aur Code</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={addValue}>Add Value to {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value to {counter}</button>
    </>
  );
}

export default App;
