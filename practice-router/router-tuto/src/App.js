import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/About';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  )
}

export default App;