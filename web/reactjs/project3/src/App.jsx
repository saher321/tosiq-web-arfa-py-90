import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
