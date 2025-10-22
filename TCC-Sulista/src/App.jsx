import { useState } from 'react'
import Home from './views/Home'
import Pagina from './views/Pagina'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Paginas' element={<Pagina />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
