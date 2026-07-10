import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(0);

 function handleClickUp() {
  
  if (count > 10 ){
    setCount (count = 0)
  }
  console.log(useState)
  
 }

 function handleClickDown () {
  
 }

  return (
    <>
      <div>
        <p>Счётчик: {count}</p>
        <button onClick={handleClickUp}>Увеличить</button>

        <button onClick={handleClickDown}>Уменьшить</button>
      </div>
    </>
  );
}

export default App;
