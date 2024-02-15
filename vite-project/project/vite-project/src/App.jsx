import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Footers from './components/Footer'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import Login from './components/login'
import SignUp from './components/SignUp'
import { items } from './components/Data'



const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route className='SignUpcs' path="/login" element={<Login/>} />
      <Route  path="/signup" element={<SignUp/>} />
    </Routes>
    <Footers/>
    </Router>  
    </>
  )
}

export default App