import { Routes, Route } from 'react-router-dom'

import { useState } from 'react'

import { addToCart, removeFromCart } from './data/cart'


import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'
import ProductsPage from './Pages/Products/ProductsPage'
import ProductInfo from './Pages/ProductInfo/ProductInfo'
import CheckoutPage from './Pages/Checkout/CheckoutPage'

function App() {

  const [cart, setCart] = useState({})


  const handleAddItem = (id) => {
      setCart((prevCart) => addToCart(prevCart, id))
  }

  const handleRemoveItem = (id) => {
    setCart((prevCart) => removeFromCart(prevCart, id))
  }


  return (
   <Routes>
      <Route index  element = {<HomePage cart = {cart} />}/>
      <Route path='about' element = {<AboutPage cart = {cart} />} />
      <Route path='products' element = {<ProductsPage cart = {cart} />}/>
      <Route path='product-info' element = {<ProductInfo cart = {cart} handleAddItem = {handleAddItem} />} />
      <Route path='checkout' element = {<CheckoutPage cart = {cart} />} />
   </Routes>
  )
}

export default App
