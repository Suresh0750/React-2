
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import ErorPage from './pages/eror'

const App = () => {
  return (
    <div>

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Home:userName' element={<Home/>}/><Route/>
        <Route path='/contact' element={<Contact/>}/><Route/>
        <Route path='/About' element={<About/>}/><Route/>
        <Route path='*' element = {<ErorPage/>}/> <Route/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
