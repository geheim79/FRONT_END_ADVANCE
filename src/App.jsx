

import './App.css'
import {Routes, Route} from "react-router"
import Home from "./Components/Home"
import About from "./Components/About"
import Header from "./Components/Header"

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/about" element = {<About/>} />
    </Routes>
    </>
  )
}

export default App
