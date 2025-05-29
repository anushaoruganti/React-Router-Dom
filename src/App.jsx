import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Skills from './Components/Skills/Skills'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Skills' element={<Skills/>}></Route>
      </Routes>
    </div>

    
  )
}

export default App