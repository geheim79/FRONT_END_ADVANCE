import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  function handleClickUp() {
    if (count > 9 ) {
      // setCount(0);
      // return
      setMessage("Счётчик не может быть больше 10!");
    } else {
      setCount(count + 1);
      setMessage ("")
    }
  }

  function handleClickDown() {
    // 
    if (count < 1) {
      setMessage("Счётчик не может быть меньше 0!");
      setCount(count -0 );
      // return
      
    }else {
      setCount (count -1)
      setMessage("")
      
      // 
      // setMessage("Счётчик не может быть меньше 0!");
  }
}

  return (
    <>
      <div>
        <p>{message}</p>
        <p>Счётчик: {count}</p>
        <button onClick={handleClickUp}>Увеличить</button>

        <button onClick={handleClickDown}>Уменьшить</button>
      </div>
    </>
  );
}

export default App;
