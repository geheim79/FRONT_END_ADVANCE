// Задача 2: Логирование обновлений пропсов
// Цель: Компонент принимает name, и нужно выводить в консоль сообщение при изменении
// этого пропса.

import { useEffect, useState } from "react";
import Greeting from "./Greeting";

function App() {
  //  console.log({name})
  return (
    <>
      <Greeting name="Alex" />
     
    </>
  );
}

export default App;



