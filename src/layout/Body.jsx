import React, {} from 'react'
import CV from '../pages/cv'
import Domov from '../pages/domov'
import MojePrace from '../pages/mojePrace'
import { Route, Routes } from "react-router"
import "./css/main.css"



const Body = () => {


  return (
    <div id="body">
      <Routes>
          <Route path="/" element={<Domov/>}/>
          <Route path="Domov" element={<Domov />} />
          <Route path="CV" element={<CV/>}/>
          <Route path="Moje práce" element={<MojePrace/>}/>
      </Routes>
    </div>
  )
}

export default Body