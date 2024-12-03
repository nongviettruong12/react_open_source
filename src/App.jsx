import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './pages/client/DashBoard'
function App() {

  return (
    <>
     <Routes>
      <Route path='' Component={DashBoard}/>
     </Routes>
    </>
  )
}

export default App
