import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import AddTransaction from './pages/AddTransaction'
import Transactions from './pages/Transactions'
import EnterOtp from './pages/EnterOtp'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path ="/otp" element={<EnterOtp/>}></Route>
      </Routes>
      {/* <AddTransaction/> */}
      {/* <Transactions/> */}
      {/* <EnterOtp/> */}
    </>
  )
}

export default App
