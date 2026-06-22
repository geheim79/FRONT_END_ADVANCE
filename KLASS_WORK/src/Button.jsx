// компонента из стрелочной функции
const Button = (props)=> {
    return <button>{props.children ?? "Click Me"}</button>;
}


function Greeting(props) { 
  return <h1>Привет, {props.name}!</h1>; 

} 
// Использование:
  <Greeting name="Алиса" /> 




// экспорт компоненты 
export default Button;
 