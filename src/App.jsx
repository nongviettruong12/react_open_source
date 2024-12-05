import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/client/DashBoard'
import ProductDetail from './pages/client/ProductDetail'
function App() {

  return (
    <>
     <Routes>
      <Route path='' Component={DashBoard}/>
      <Route path='product/:id' Component={ProductDetail}/>
     </Routes>
    </>
  )
}

export default App
