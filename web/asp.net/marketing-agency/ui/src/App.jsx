import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import EditProduct from './pages/EditProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/products/edit/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App