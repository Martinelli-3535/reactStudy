import MakeList from './MakeList';
import React from 'react';
import DateExtension from './utils/DateFormat'
import { Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Weather from './pages/Weather';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MakeList />}>
        <Route path="todolist" element={<TodoList />} />
        <Route path="weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}

export default App;
