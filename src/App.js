import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import NotFound from './Pages/NotFound'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={ <Home/> }/>
       <Route path="/login" element={ <Login/> }/>
      <Route path='/signup' element={ <Signup/> } />
      <Route path='*' element={ <NotFound/> } />
      </Routes>
      <ToastContainer
      positio='top-center'
      />
    </BrowserRouter>
  )
}

export default App