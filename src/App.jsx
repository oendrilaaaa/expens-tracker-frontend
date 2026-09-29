import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import AddTransaction from './pages/AddTransaction'
import Transactions from './pages/Transactions'
function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes> */}
      {/* <AddTransaction/> */}
      <Transactions/>
    </>
  )
}

export default App
