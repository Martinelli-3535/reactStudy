import { Route, Routes } from 'react-router-dom';
import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path='/articles' element={<Articles />} >
        <Route path=':id' element={<Article />} />
      </Route>
    </Routes>
  )
}

export default App;