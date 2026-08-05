import { useEffect } from "react";

const Greeting = (props) => {
  useEffect(() => {
    console.log(`Имя изменено на: ${props.name}`);
  }, [props.name]);
//  props.name - пропс - это обьект в котором может быть еще одно свойство
//  и если другое свойство пропса , то эффект увидит изменение и запустит рендер еще раз , хотя имя не изменилось , а по условию надо следить только за name , поэтому указать props.name - следим ТОЛЬКО за свойством name обьекта пропс
  // TODO: выведи в консоль "Имя изменено на: {новое имя}" только при изменении name
  //   console.log("Имя изменено на: {props.name}")

  return <h1>Привет, {props.name}!</h1>;
};

export default Greeting;
