import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navigation from './components/Navigation'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'

export default function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </>
  )
}
