import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [isValid, setIsValid] = useState(false);
   const clickHandler = () =>{
      setIsValid(true);
   };
  return (
    <div id="main">
      // Do not alter the main div
    {!isValid && <button type="button" onClick = {clickHandler} id="click">Click Me</button>}
    {isValid && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
