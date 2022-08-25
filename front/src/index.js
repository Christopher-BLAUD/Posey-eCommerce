import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import ProductControl from './components/ProductControl'
import { ProductProvider } from './utils/context'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/products" element={<ProductControl/>}/>
        </Route>
      </Routes>
      <GlobalStyle />
    </ProductProvider>
  </Router>
)
