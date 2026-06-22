
import { useState } from 'react';
import './App.css'
// Импортировние(полключение) компоненты Button
// из файла Button.jsx
import Button from './Button'
import Person from './Person'

const person = {
  name: "Murad", secondName :"Savochkin"
}

const students = [

{
  name: "Alex", secondName :"Savochkin"
},
{
  name: "Nurali", secondName :"Savochkin"
},
{
  name: "Murad", secondName :"Savochkin"
},

];

///////////////////////////////////////////////////////
// let count = 0 

// компонента для счетчика
function App() {
const [count, setCount] = useState(0);
const onClick =() => {
  setCount(count +1)
  // alert ("Why are you click")
  // count++
  console.log('count', count)
}


return (
  <>
  <h3>Count:{count}</h3>
  <button onClick={onClick}>Click</button></>
)

///////////////////////////////////////////

//   return (
//     <>
//      <h3>Hello World ! </h3>
//       <Button >111111</Button>
//       <Button/>
//       <Person name={person.name} secondName={person.secondName}/>
//       <Person {...person}/>

//       <h3>Students</h3>

//       {students.map(person => <Person {...person}/>)}
//     </> // в реакте теги всегда должны закрываться
//   )
}

export default App
