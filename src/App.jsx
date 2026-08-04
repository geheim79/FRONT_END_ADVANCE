// Цель: Создать компонент, который при размонтировании устанавливает флаг isMounted = false, и использовать его, чтобы избежать обновления состояния в несуществующем компоненте.

import { useEffect, useState } from "react";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [isMounted, setIsMounted] = useState(true);


  // TODO: через 2 секунды после монтирования установить isOnline = true
  // Но если компонент размонтирован — не делать setIsOnline

  useEffect(() => {
    console.log("Компонент cмонтирован");
    //  оборачиваем таймером в 2 сек условие
    const timer = setTimeout(() => {
      if (isMounted === true) {
        setIsOnline(true);
      }
    }, 2000);

    // размонтирование компонента
    return () => {
      console.log("Компонент размонтирован");
      // флаг состояния размонтированного компонента
      setIsMounted(false);
      clearTimeout(timer);
    };
  }, []);
  // console.log("isOnline", isOnline);
  // console.log("isMounted", isMounted);
  //  отрисовка статуса - если isOnline статус true то вывести "Онлайн" и наоборот
  return (
    <>
      <p>Статус: {isOnline ? "Онлайн" : "Оффлайн"}</p>
      
    </>
  );
}

export default App;
