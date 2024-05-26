import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // let counter = 5;
  let [counter,setCounter] = useState(0)  //useState is a hook used to change the state of an element at multiple places in the UI. useState returns an array.

const addValue = () =>{
  counter++;
  setCounter(counter)
  console.log("clicked",counter); //value is getting incremented on console but not on the UI if a hook is not been used as react will handle UI updation.so for that we'll need to use hooks.
}

const removeValue = () =>{
  counter--;
  setCounter(counter)
  console.log("clicked",counter);
}


  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue} disabled={counter >= 20}>Add Value</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={removeValue} disabled={counter <= 0}>Remove value</button>
      <footer>
        <b>The value is currently {counter} </b>
      </footer>
      <p><i>NOTE : The minimum and maximum value of the counter can be 0 and 20 respectively !!</i></p>
    </>
  );
}

export default App;
