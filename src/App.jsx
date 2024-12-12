import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/client/DashBoard'
import ProductDetail from './pages/client/ProductDetail'
import ProductList from './pages/client/Product'
function App() {

  return (
    <>
     <Routes>
      <Route path='' Component={DashBoard}/>
      <Route path='product/:id' Component={ProductDetail}/>
      <Route path='/product' Component={ProductList}/>
     </Routes>
    </>
  )
}

export default App
