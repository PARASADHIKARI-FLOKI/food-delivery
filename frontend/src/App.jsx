import React from 'react'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Verify from './pages/Verify'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className='overflow-hidden bg-light text-[#404040]'>
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </main>
  )
}

export default App
