// --- IMPORTAÇÕES ADICIONADAS ---
import { useState } from 'react'
import Home from './views/Home'
import Pagina from './views/Pagina'
import PR from './views/PR' // Certifique-se de importar PR
import RS from './views/RS' // Adicionar importação do componente RS
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <div>
      {}
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Paginas' element={<Pagina />} />
          
          {}
          <Route path='/PR' element={<PR />} /> 
          <Route path='/RS.jsx' element={<RS />} /> 
          {}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App