import { Routes, Route } from 'react-router-dom'

import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'
import ProductsPage from './Pages/Products/ProductsPage'
import ProductInfo from './Pages/ProductInfo/ProductInfo'

function App() {

  return (
   <Routes>
      <Route index  element = {<HomePage />}/>
      <Route path='about' element = {<AboutPage />} />
      <Route path='products' element = {<ProductsPage />}/>
      <Route path='product-info' element = {<ProductInfo />} />
   </Routes>
  )
}

export default App
