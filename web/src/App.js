import MakeList from "./MakeList"
import { Route, Routes } from 'react-router-dom';
import TodoList from "./TodoList";
import Weather from "./Weather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MakeList />} >
        <Route path="todolist" element={<TodoList />} />
        <Route path="weather" element={<Weather />} />
      </Route>
    </Routes>
  );
}

export default App;