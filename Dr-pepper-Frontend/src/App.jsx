import { Routes, Route } from 'react-router-dom'

import { useState, useEffect} from 'react'

import { addToCart, removeFromCart, updateQuantity, deleteFromCart } from './data/cart'


import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'
import ProductsPage from './Pages/Products/ProductsPage'
import ProductInfo from './Pages/ProductInfo/ProductInfo'
import CheckoutPage from './Pages/Checkout/CheckoutPage'

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('shopping_cart');
    return saved ? JSON.parse(saved) : {}
  })


  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }, [cart])


  const handleAddItem = (id, amount) => {
      setCart((prevCart) => addToCart(prevCart, id, amount))
  }

  const handleRemoveItem = (id, amount) => {
    setCart((prevCart) => removeFromCart(prevCart, id, amount))
  }

  const handleUpdateQuantity = (id, newQty) => {
    setCart((prevCart) => updateQuantity(prevCart, id, newQty));
  }

  const handleDeleteItem = (id) => {
    setCart((prevCart) => deleteFromCart(prevCart, id))
  }

  
  return (
   <Routes>
      <Route index  element = {<HomePage cart = {cart} />}/>
      <Route path='about' element = {<AboutPage cart = {cart} />} />
      <Route path='products' element = {<ProductsPage cart = {cart} />}/>
      <Route path='product-info' element = {<ProductInfo cart = {cart} handleAddItem = {handleAddItem} />} />
      <Route path='checkout' element = {<CheckoutPage cart = {cart} handleUpdateQuantity = {handleUpdateQuantity} handleDeleteItem = {handleDeleteItem} />} />
   </Routes>
  )
}

export default App
