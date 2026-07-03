

import './App.css'
import {Routes, Route} from "react-router"
import Home from "./Components/Home"
import About from "./Components/About"
import Header from "./Components/Header"
import CreatePost from "./Components/CreatePost"
import EdiPost from './Components/EditPost'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/about" element = {<About/>} />
      <Route path="/post/create" element ={<CreatePost/>} />
      <Route path= "/post/:id/edit" element ={<EdiPost/>} />
    </Routes>
    </>
  )
}

export default App
