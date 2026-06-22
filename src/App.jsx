import{useEffect, useState, useMemo} from 'react'


import './App.css'
import { useLayoutEffect } from 'react'

function App() {
  const[count, setCount] = useState(0)

  const message = useMemo(() => {
    console.log('useMemo');
    if (count >5){
    return  'больше 5' 
    }
  },[])

  useEffect(() =>{
    console.log('useEffect')
  },[])

  useEffect(() =>{
    console.log('useEffect update count' , count)
  },[count])

  useLayoutEffect(() =>{
    console.log('useLayoutEffect')
  },[])
  
  console.log('render')
  return (
    <>
    <h3>Count : {count}</h3>
    <button onClick={() => setCount(count +1)}>Click</button>
    {message && <span>{message}</span>}
    </>
  )
}

export default App
