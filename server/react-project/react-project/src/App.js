import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Subject from './pages/Subject';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/subjects/:subname' element={<Subject />} />
      </Routes>
    </Router>
  )
}

export default App;
