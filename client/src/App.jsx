import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Checkout from './checkout';
import Cart from './Cart';
import ThanksPage from './Thankyou';
function App() {


  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Cart />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/login' element={<Login />} />
 
    <Route path='/Checkout' element={<Checkout />} />
    <Route path='/Thankyou' element={<ThanksPage />} />
  </Routes>
  </BrowserRouter>

  )
}

export default App;
