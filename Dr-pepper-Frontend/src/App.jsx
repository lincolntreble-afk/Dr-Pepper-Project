import { Routes, Route } from 'react-router-dom'


import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'
import ProductsPage from './Pages/Products/ProductsPage'
import ProductInfo from './Pages/ProductInfo/ProductInfo'
import CheckoutPage from './Pages/Checkout/CheckoutPage'

function App() {



  return (
   <Routes>
      <Route index  element = {<HomePage />}/>
      <Route path='about' element = {<AboutPage />} />
      <Route path='products' element = {<ProductsPage />}/>
      <Route path='product-info' element = {<ProductInfo />} />
      <Route path='checkout' element = {<CheckoutPage />} />
   </Routes>
  )
}

export default App
