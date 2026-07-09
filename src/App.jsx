import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  if (count > 10 ) {
    
    setCount ("Счётчик не может быть больше 10!" )
  } else if (count < 0 ){
     setCount ("Счётчик не может быть меньше 0!" )
  }

  return (
    <>
      <div>
        <p>Счётчик: {count}</p>
        <button onClick={() => setCount(count + 1)}>Увеличить</button>

        <button onClick={() => setCount(count - 1)}>Уменьшить</button>
      </div>
    </>
  );
}

export default App;
