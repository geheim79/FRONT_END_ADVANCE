import "./App.css";

import { useState } from "react";

function App() {

  const [stateOn, stateOff] = useState("Вкл");
  function ToggleButton() {
    
     stateOn === "Вкл" ?   
     stateOff ("Выкл") 
     : stateOff ("Вкл")
  }

  return (
    <>
      <button onClick={ToggleButton}>{stateOn}</button>
      
    </>
  );
}

export default App;
