import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './Pages/CartPage/CartPage'
import DashBoard from './Pages/DashBoard/DashBoard'
import LandingPage from './Pages/LandingPage/LandingPage'
import AuthRoute from './Routes/AuthRoute'
import CartRoute from './Routes/CartRoute'
import ProtectedRoute from './Routes/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<AuthRoute><LandingPage/></AuthRoute>}/>
    <Route path='dashboard' element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
    <Route path='/cart' element={<CartPage/>} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App