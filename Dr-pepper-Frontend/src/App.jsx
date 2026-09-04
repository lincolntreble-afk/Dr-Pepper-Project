import { Routes, Route } from 'react-router'

import AboutPage from './Pages/About/AboutPage'
import HomePage from './Pages/Home/HomePage'
import ProductsPage from './Pages/Products/ProductsPage'

function App() {

  return (
   <Routes>
      <Route index  element = {<HomePage />}/>
      <Route path='about' element = {<AboutPage />} />
      <Route path='products' element = {<ProductsPage />}/>
   </Routes>
  )
}

export default App
